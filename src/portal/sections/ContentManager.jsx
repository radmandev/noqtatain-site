import React, { useMemo, useState } from 'react';
import { addItem } from '@/portal/storage';
import { Wand2 } from 'lucide-react';

const slugify = (s) => s.toString().toLowerCase().trim()
  .replace(/\s+/g,'-')
  .replace(/[^\w\-]+/g,'')
  .replace(/\-\-+/g,'-');

export default function ContentManager(){
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [keywords, setKeywords] = useState('');
  const [body, setBody] = useState('');

  const preview = useMemo(()=>({
    slug: slugify(title),
    titleLength: title.length,
    descLength: desc.length,
    keywordCount: keywords.split(',').filter(Boolean).length,
    words: body.trim().split(/\s+/).filter(Boolean).length,
  }),[title,desc,keywords,body]);

  const save = () => {
    addItem('contents', { title, description: desc, keywords, body, slug: preview.slug });
    setTitle(''); setDesc(''); setKeywords(''); setBody('');
    alert('تم حفظ المحتوى محليًا');
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">إدارة المحتوى</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="العنوان" />
          <input value={desc} onChange={e=>setDesc(e.target.value)} className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="الوصف (Meta Description)" />
          <input value={keywords} onChange={e=>setKeywords(e.target.value)} className="w-full h-11 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="الكلمات المفتاحية (افصل بينها بفواصل)" />
          <textarea value={body} onChange={e=>setBody(e.target.value)} className="w-full min-h-[180px] p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900" placeholder="نص المحتوى" />
          <button onClick={save} className="h-11 px-4 rounded-lg bg-violet-600 text-white flex items-center gap-2"><Wand2 className="w-4 h-4"/> حفظ</button>
        </div>
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4">
          <div className="font-semibold mb-2">معاون السيو</div>
          <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-300">
            <li>طول العنوان: <b>{preview.titleLength}</b> (المثالي 50–60)</li>
            <li>طول الوصف: <b>{preview.descLength}</b> (المثالي 140–160)</li>
            <li>الكلمات المفتاحية: <b>{preview.keywordCount}</b></li>
            <li>عدد كلمات المحتوى: <b>{preview.words}</b></li>
            <li>الرابط (Slug): <span className="text-violet-500">/{preview.slug}</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
