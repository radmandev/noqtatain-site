import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, 'dist');
const dataPath = path.resolve(__dirname, 'data', 'portal.json');

const app = express();
const port = process.env.PORT || 4173;

app.use(express.json({ limit: '2mb' }));
app.use(express.static(distPath, {
  extensions: ['html']
}));

const ensureDataFile = async () => {
  await fs.mkdir(path.dirname(dataPath), { recursive: true });
  try {
    await fs.access(dataPath);
  } catch {
    await fs.writeFile(dataPath, JSON.stringify({ pages: [], blogPosts: [] }, null, 2));
  }
};

const readData = async () => {
  await ensureDataFile();
  const raw = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(raw);
};

const writeData = async (data) => {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
};

const BITRIX_DEAL_ID = 81515;

const diagnosticLabels = {
  crm: {
    title: 'نظام إدارة العملاء (CRM)',
    no: 'لا يوجد نظام موحّد',
    partial: 'جزئياً / يدوي',
    yes: 'نعم، لديهم نظام',
  },
  retarget: {
    title: 'إعادة استهداف المزايدين السابقين',
    no: 'لا تُستثمر حالياً',
    planned: 'مخطّط لها لاحقاً',
    yes: 'نعم، يقومون بها',
  },
  whatsapp: {
    title: 'أتمتة واتساب',
    manual: 'يدوي بالكامل',
    some: 'بعض الأتمتة',
    full: 'مؤتمت بالكامل',
  },
  analytics: {
    title: 'أدوات القياس والتتبّع',
    no: 'غير مرتبطة',
    unsure: 'غير متأكّد',
    yes: 'نعم، مرتبطة',
  },
  ownedchannel: {
    title: 'منصّة مزادات مملوكة',
    yes: 'نعم، أولوية لهم',
    maybe: 'يفكّرون فيها',
    no: 'يكتفون بالحالي',
  },
};

const buildDiagnosticComment = (answers = {}, notes = '') => {
  const lines = ['[B]نتائج التشخيص الرقمي — نموذج وامر العقارية[/B]', ''];

  for (const key of Object.keys(diagnosticLabels)) {
    const map = diagnosticLabels[key];
    const val = answers[key];
    const answer = val && map[val] ? map[val] : '— لم يُجب —';
    lines.push(`[B]${map.title}:[/B] ${answer}`);
  }

  if (notes && notes.trim()) {
    lines.push('', '[B]ملاحظات العميل:[/B]', notes.trim());
  }

  const answered = Object.keys(diagnosticLabels).filter((key) => answers[key]).length;
  const total = Object.keys(diagnosticLabels).length;
  lines.push('', `[I]أُجيب على ${answered} من ${total} — ${new Date().toLocaleString('ar-SA')}[/I]`);

  return lines.join('\n');
};

const postDiagnosticToBitrix = async (commentText) => {
  const webhook = process.env.BITRIX_WEBHOOK;
  if (!webhook) {
    throw new Error('BITRIX_WEBHOOK is not configured');
  }

  const url = `${webhook.replace(/\/+$/, '')}/crm.timeline.comment.add`;
  const bitrixResponse = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        ENTITY_ID: BITRIX_DEAL_ID,
        ENTITY_TYPE: 'deal',
        COMMENT: commentText,
      },
    }),
  });
  const data = await bitrixResponse.json().catch(() => ({}));

  if (!bitrixResponse.ok || data.error) {
    throw new Error(data.error_description || data.error || `HTTP ${bitrixResponse.status}`);
  }

  return data;
};



app.post('/api/diagnostic', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');

  try {
    const { answers, notes } = req.body || {};
    if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
      res.status(400).json({ ok: false, error: 'answers is required' });
      return;
    }

    const comment = buildDiagnosticComment(answers, notes);
    const result = await postDiagnosticToBitrix(comment);
    res.status(200).json({ ok: true, commentId: result.result });
  } catch (err) {
    console.error('Bitrix diagnostic sync failed:', err.message);
    res.status(502).json({ ok: false, error: 'Unable to sync diagnostic answers' });
  }
});

app.get('/api/portal/pages', async (_req, res) => {
  const data = await readData();
  res.json(data.pages || []);
});

app.post('/api/portal/pages', async (req, res) => {
  const data = await readData();
  const item = {
    id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    created_at: new Date().toISOString(),
    ...req.body,
  };
  data.pages = [item, ...(data.pages || [])];
  await writeData(data);
  res.status(201).json(item);
});

app.put('/api/portal/pages/:id', async (req, res) => {
  const data = await readData();
  const index = (data.pages || []).findIndex((item) => item.id === req.params.id);
  if (index === -1) {
    res.status(404).json({ message: 'Not found' });
    return;
  }
  data.pages[index] = {
    ...data.pages[index],
    ...req.body,
    updated_at: new Date().toISOString(),
  };
  await writeData(data);
  res.json(data.pages[index]);
});

app.delete('/api/portal/pages/:id', async (req, res) => {
  const data = await readData();
  data.pages = (data.pages || []).filter((item) => item.id !== req.params.id);
  await writeData(data);
  res.status(204).end();
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`SPA server running on port ${port}`);
});
