import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "wameer:diagnostic:answers";
const SUBMIT_ENDPOINT = "/api/diagnostic";

const QUESTIONS = [
  {
    id: "crm",
    eyebrow: "إدارة العملاء",
    text: "هل تُجمع بيانات النموذج والواتساب وX حالياً في نظام إدارة عملاء (CRM) موحّد؟",
    note: "لم نلاحظ من الخارج مؤشراً على ربط نموذج «تواصل معنا» بنظام محدّد — ونودّ التأكّد منكم.",
    options: [
      { v: "no", label: "لا يوجد نظام موحّد" },
      { v: "partial", label: "جزئياً / يدوي" },
      { v: "yes", label: "نعم، لدينا نظام" },
    ],
  },
  {
    id: "retarget",
    eyebrow: "إعادة الاستهداف",
    text: "هل تُستثمر بيانات المزايدين والمستثمرين السابقين في حملات إعادة استهداف أو تنبيهات بمزادات مشابهة؟",
    note: "إعادة الاستهداف لا تظهر من الخارج، لذا نطرحها كسؤال لا كحُكم.",
    options: [
      { v: "no", label: "لا تُستثمر حالياً" },
      { v: "planned", label: "مخطّط لها لاحقاً" },
      { v: "yes", label: "نعم، نقوم بها" },
    ],
  },
  {
    id: "whatsapp",
    eyebrow: "أتمتة واتساب",
    text: "هل تتم متابعة المهتمّين عبر واتساب بشكل آلي (ردود فورية، تأهيل، متابعة مجدولة)؟",
    note: "واتساب يظهر كقناة تواصل رئيسية — لكن لا يمكننا معرفة مستوى الأتمتة من الخارج.",
    options: [
      { v: "manual", label: "يدوي بالكامل" },
      { v: "some", label: "بعض الأتمتة" },
      { v: "full", label: "مؤتمت بالكامل" },
    ],
  },
  {
    id: "analytics",
    eyebrow: "القياس والتتبّع",
    text: "هل توجد أدوات قياس وتتبّع (Analytics / Pixel) مرتبطة بالموقع لقياس أداء الحملات؟",
    note: "لم نرصد إشارة ظاهرة لأدوات تتبّع، وهي نقطة قابلة للتحقق السريع من جانبكم.",
    options: [
      { v: "no", label: "غير مرتبطة" },
      { v: "unsure", label: "غير متأكّد" },
      { v: "yes", label: "نعم، مرتبطة" },
    ],
  },
  {
    id: "ownedchannel",
    eyebrow: "القناة الرقمية",
    text: "هل لديكم رغبة في بناء منصّة مزادات رقمية مملوكة لكم بدل الاعتماد الكامل على المنصّات الخارجية؟",
    note: "حالياً تتم المزايدة على منصّات طرف ثالث — نودّ معرفة توجّهكم تجاه قناة مملوكة.",
    options: [
      { v: "yes", label: "نعم، أولوية لنا" },
      { v: "maybe", label: "نفكّر فيها" },
      { v: "no", label: "نكتفي بالحالي" },
    ],
  },
];

const RECO = {
  crm: {
    no: { kind: "gap", priority: true, title: "تركيب نظام إدارة العملاء Bitrix24", body: "توحيد العملاء من الموقع وX وواتساب في مسار مبيعات واحد، مع توزيع تلقائي وتقارير تحويل." },
    partial: { kind: "gap", priority: false, title: "هيكلة وأتمتة الـCRM الحالي", body: "تحويل المتابعة اليدوية إلى مسار منظّم: تأهيل، توزيع، وتنبيهات متابعة آلية." },
    yes: { kind: "strength", title: "نظام إدارة عملاء قائم", body: "ممتاز — نبني فوق ما لديكم: نربط القنوات الناقصة ونحسّن مسار المزايد بدل البدء من الصفر." },
  },
  retarget: {
    no: { kind: "gap", priority: true, title: "تفعيل إعادة استهداف المزايدين", body: "استثمار قاعدة المزايدين السابقين بحملات وتنبيهات بمزادات مشابهة لرفع نسبة العودة." },
    planned: { kind: "neutral", title: "إعادة استهداف قيد التخطيط", body: "نضع لكم خطة تنفيذية: تقسيم الجمهور حسب نوع العقار والمنطقة وربطها بالحملات." },
    yes: { kind: "strength", title: "إعادة استهداف فعّالة", body: "نقطة قوة — نوصّل بياناتها بالـCRM والموقع المملوك لقياس أدقّ وتوسيع الأثر." },
  },
  whatsapp: {
    manual: { kind: "gap", priority: true, title: "أتمتة واتساب", body: "ردود فورية، تأهيل أولي، وتنبيهات تلقائية بالمزادات الجديدة — كلها مرتبطة بملف العميل." },
    some: { kind: "gap", priority: false, title: "استكمال أتمتة واتساب", body: "ربط ما هو مؤتمت جزئياً بمسار المبيعات وجدولة المتابعة قبل وبعد كل مزاد." },
    full: { kind: "strength", title: "واتساب مؤتمت", body: "ممتاز — نركّز على ربط الأرشيف بالـCRM وقياس أثر الرسائل على الحضور والإغلاق." },
  },
  analytics: {
    no: { kind: "gap", priority: false, title: "ربط أدوات القياس والتتبّع", body: "تركيب Analytics وPixel لقياس مصادر العملاء وكفاءة كل حملة قبل توسيع الإنفاق." },
    unsure: { kind: "neutral", title: "تدقيق إعداد القياس", body: "نفحص الإعداد الحالي ونثبّت لوحة قياس موحّدة تربط الزيارات بالعملاء الفعليين." },
    yes: { kind: "strength", title: "قياس مُفعّل", body: "نقطة قوة — نوظّف بياناتكم في تحسين معدّلات التحويل وإعادة الاستهداف." },
  },
  ownedchannel: {
    yes: { kind: "gap", priority: true, title: "منصّة مزادات رقمية مملوكة", body: "موقع متعدّد الصفحات بمعمارية الجوال أولاً: مزادات حيّة، أرشيف بنتائجها، وصفحات هبوط للحملات." },
    maybe: { kind: "neutral", title: "دراسة جدوى قناة مملوكة", body: "نعرض عليكم نموذجاً أوّلياً وعائداً متوقّعاً قبل الالتزام بالتطوير الكامل." },
    no: { kind: "neutral", title: "تحسين الحضور على المنصّات الحالية", body: "نحترم توجّهكم — ونركّز على رفع التحويل عبر القنوات الحالية وصفحات هبوط مرتبطة بها." },
  },
};

function buildPlan(answers) {
  const gaps = [];
  const strengths = [];
  const neutrals = [];

  for (const key of Object.keys(RECO)) {
    const val = answers[key];
    const item = val ? RECO[key]?.[val] : null;
    if (!item) continue;

    const entry = { key, ...item };
    if (item.kind === "gap") gaps.push(entry);
    else if (item.kind === "strength") strengths.push(entry);
    else neutrals.push(entry);
  }

  gaps.sort((a, b) => (b.priority ? 1 : 0) - (a.priority ? 1 : 0));
  return { gaps, strengths, neutrals };
}

const storageAdapter = {
  async get(key) {
    if (window.storage?.get) return window.storage.get(key);
    const value = window.localStorage?.getItem(key);
    return value ? { value } : null;
  },
  async set(key, value) {
    if (window.storage?.set) return window.storage.set(key, value);
    window.localStorage?.setItem(key, value);
    return true;
  },
};

export default function WameerDiagnostic() {
  const [answers, setAnswers] = useState({});
  const [notesText, setNotesText] = useState("");
  const [status, setStatus] = useState("idle");
  const [loaded, setLoaded] = useState(false);
  const [submitState, setSubmitState] = useState("idle");
  const [showPlan, setShowPlan] = useState(false);
  const saveTimer = useRef(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await storageAdapter.get(STORAGE_KEY);
        if (active && res?.value) {
          const parsed = JSON.parse(res.value);
          setAnswers(parsed.answers || {});
          setNotesText(parsed.notes || "");
        }
      } catch {
        // بداية نظيفة عند عدم وجود مفتاح محفوظ.
      } finally {
        if (active) setLoaded(true);
      }
    })();

    return () => {
      active = false;
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, []);

  const persist = (nextAnswers, nextNotes) => {
    setStatus("saving");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      try {
        const payload = JSON.stringify({
          answers: nextAnswers,
          notes: nextNotes,
          updatedAt: new Date().toISOString(),
        });
        const ok = await storageAdapter.set(STORAGE_KEY, payload);
        setStatus(ok ? "saved" : "error");
      } catch {
        setStatus("error");
      }
    }, 500);
  };

  const choose = (qid, value) => {
    const next = { ...answers, [qid]: value };
    setAnswers(next);
    persist(next, notesText);
  };

  const onNotes = (event) => {
    const value = event.target.value;
    setNotesText(value);
    persist(answers, value);
  };

  const submit = async () => {
    setSubmitState("sending");
    try {
      const res = await fetch(SUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, notes: notesText }),
      });
      const data = await res.json().catch(() => ({}));
      setSubmitState(res.ok && data.ok ? "done" : "failed");
    } catch {
      setSubmitState("failed");
    }
    setShowPlan(true);
  };

  const plan = buildPlan(answers);
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / QUESTIONS.length) * 100);
  const statusLabel = {
    idle: "",
    saving: "يُحفظ…",
    saved: "تم الحفظ تلقائياً ✓",
    error: "تعذّر الحفظ — حاول مجدداً",
  }[status];

  return (
    <main className="min-h-screen bg-[#080812] px-4 py-8 sm:py-12">
      <div dir="rtl" style={S.wrap}>
        <style>{KEYFRAMES}</style>
        {showPlan ? (
          <PlanView plan={plan} submitState={submitState} onBack={() => setShowPlan(false)} />
        ) : (
          <>
            <header style={S.header}>
              <span style={S.eyebrow}>نقطتين × وامر العقارية</span>
              <h1 style={S.title}>التشخيص الرقمي</h1>
              <p style={S.lead}>
                النقاط التالية لا يمكن إثباتها من خارج المنشأة، لذا نطرحها كأسئلة لا كأحكام.
                إجاباتكم تُحفظ تلقائياً وتساعدنا على تحديد نطاق العمل بدقّة.
              </p>
            </header>

            <div style={S.progressRow}>
              <div style={S.progressTrack}>
                <div style={{ ...S.progressFill, width: `${progress}%` }} />
              </div>
              <span style={S.progressText}>{answeredCount} / {QUESTIONS.length}</span>
            </div>

            <div style={S.list}>
              {QUESTIONS.map((q, i) => {
                const selected = answers[q.id];
                return (
                  <section key={q.id} style={S.card} aria-labelledby={`q-${q.id}`}>
                    <div style={S.cardHead}>
                      <span style={S.index}>{String(i + 1).padStart(2, "0")}</span>
                      <div style={{ flex: 1 }}>
                        <span style={S.cardEyebrow}>{q.eyebrow}</span>
                        <h2 id={`q-${q.id}`} style={S.question}>{q.text}</h2>
                      </div>
                    </div>
                    <p style={S.qNote}>{q.note}</p>
                    <div style={S.options} role="radiogroup" aria-label={q.text}>
                      {q.options.map((opt) => {
                        const active = selected === opt.v;
                        return (
                          <button key={opt.v} type="button" role="radio" aria-checked={active} onClick={() => choose(q.id, opt.v)} style={{ ...S.option, ...(active ? S.optionActive : {}) }}>
                            <span style={{ ...S.dot, ...(active ? S.dotActive : {}) }} />
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>

            <section style={{ ...S.card, marginTop: 16 }}>
              <span style={S.cardEyebrow}>ملاحظات إضافية</span>
              <h2 style={S.question}>هل هناك سياق أو أنظمة حالية تودّون إخبارنا بها؟</h2>
              <textarea value={notesText} onChange={onNotes} placeholder="اكتب أي تفاصيل عن أدواتكم أو أولوياتكم الحالية…" rows={4} style={S.textarea} />
            </section>

            <footer style={S.footer}>
              <span style={{ ...S.status, opacity: statusLabel ? 1 : 0, color: status === "error" ? "#FF6B6B" : "#C9A227" }}>{statusLabel || "—"}</span>
              <span style={S.footNote}>{loaded ? "تُحفظ إجاباتكم على هذه الصفحة تلقائياً" : "يجري تحميل إجاباتكم السابقة…"}</span>
            </footer>

            <div style={S.submitRow}>
              <button type="button" onClick={submit} disabled={submitState === "sending" || answeredCount === 0} style={{ ...S.submitBtn, ...(submitState === "sending" || answeredCount === 0 ? S.submitBtnDisabled : {}) }}>
                {submitState === "sending" ? "جارٍ الإرسال…" : "إرسال الإجابات وعرض التصوّر المبدئي"}
              </button>
              {answeredCount === 0 && <span style={S.footNote}>أجِب على سؤال واحد على الأقل لعرض التصوّر</span>}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function PlanView({ plan, submitState, onBack }) {
  const { gaps, strengths, neutrals } = plan;
  const priorityCount = gaps.filter((g) => g.priority).length;

  return (
    <div style={{ animation: "wameerFadeUp .5s ease both" }}>
      <header style={S.header}>
        <span style={S.eyebrow}>نقطتين × وامر العقارية</span>
        <h1 style={S.title}>التصوّر المبدئي — مبنيّ على إجاباتكم</h1>
        <p style={S.lead}>
          {gaps.length > 0
            ? `حدّدنا ${gaps.length} مجال${gaps.length > 2 ? "ات" : ""} للعمل${priorityCount ? `، منها ${priorityCount} ذات أولوية` : ""}، مع البناء على ما لديكم من نقاط قوة.`
            : "إجاباتكم تعكس نضجاً رقمياً جيّداً — تركيزنا سيكون على التحسين والقياس لا التأسيس."}
        </p>
        <span style={{ ...S.submitMsg, textAlign: "right", display: "block", marginTop: 6, color: submitState === "done" ? "#5BD68A" : submitState === "failed" ? "#FF6B6B" : "#A9A6BD" }}>
          {submitState === "done" && "وصلت إجاباتكم إلى الفريق ✓"}
          {submitState === "failed" && "إجاباتكم محفوظة محلياً — تعذّرت المزامنة مع الفريق، وسنعاود المحاولة."}
          {submitState === "sending" && "جارٍ الإرسال…"}
        </span>
      </header>

      <PlanGroup title="ما نقترح العمل عليه" items={gaps} variant="gap" />
      <PlanGroup title="نقاط قوة نبني عليها" items={strengths} variant="strength" />
      <PlanGroup title="نقاط للنقاش معكم" items={neutrals} />

      <div style={S.submitRow}>
        <button type="button" style={S.submitBtn} onClick={() => window.open?.("https://wa.me/", "_blank", "noopener,noreferrer")}>حجز جلسة عمل مع فريق نقطتين</button>
        <button type="button" style={S.backBtn} onClick={onBack}>← الرجوع وتعديل الإجابات</button>
      </div>
    </div>
  );
}

function PlanGroup({ title, items, variant }) {
  if (!items.length) return null;

  return (
    <div style={S.planGroup}>
      <h2 style={S.planGroupTitle}>{title}</h2>
      <div style={S.list}>
        {items.map((item) => (
          <div key={item.key} style={{ ...S.planCard, ...(item.priority ? S.planCardPriority : {}), ...(variant === "strength" ? S.planCardStrength : {}) }}>
            <div style={S.planCardHead}>
              <h3 style={S.planCardTitle}>{item.title}</h3>
              {item.priority && <span style={S.priorityBadge}>أولوية</span>}
              {variant === "strength" && <span style={S.strengthBadge}>قائم لديكم</span>}
            </div>
            <p style={S.planCardBody}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const VOID = "#0B0B16";
const CARD = "#14141F";
const VIOLET = "#6D4AFF";
const GOLD = "#C9A227";

const KEYFRAMES = `
  @keyframes wameerFadeUp { from { opacity:0; transform:translateY(8px);} to {opacity:1; transform:translateY(0);} }
  @media (prefers-reduced-motion: reduce){ * { animation: none !important; transition: none !important; } }
`;

const S = {
  wrap: { background: VOID, color: "#E8E6F0", fontFamily: "'IBM Plex Sans Arabic', 'Tajawal', system-ui, sans-serif", padding: "clamp(20px, 5vw, 48px)", borderRadius: 20, maxWidth: 860, margin: "0 auto", border: "1px solid rgba(109,74,255,0.18)", boxShadow: "0 24px 60px rgba(0,0,0,0.45)" },
  header: { marginBottom: 28, animation: "wameerFadeUp .5s ease both" },
  eyebrow: { fontSize: 12, letterSpacing: 1, color: GOLD, fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: 10 },
  title: { fontSize: "clamp(26px, 5vw, 38px)", fontWeight: 800, margin: 0, color: "#fff", lineHeight: 1.15 },
  lead: { fontSize: 15, lineHeight: 1.9, color: "#A9A6BD", marginTop: 14, maxWidth: 640 },
  progressRow: { display: "flex", alignItems: "center", gap: 14, margin: "8px 0 28px" },
  progressTrack: { flex: 1, height: 6, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" },
  progressFill: { height: "100%", background: `linear-gradient(90deg, ${VIOLET}, ${GOLD})`, borderRadius: 99, transition: "width .4s ease" },
  progressText: { fontSize: 13, color: "#A9A6BD", fontWeight: 700, minWidth: 48, textAlign: "left" },
  list: { display: "flex", flexDirection: "column", gap: 16 },
  card: { background: CARD, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "22px 22px 24px", animation: "wameerFadeUp .5s ease both" },
  cardHead: { display: "flex", gap: 14, alignItems: "flex-start" },
  index: { fontSize: 13, fontWeight: 800, color: VIOLET, border: `1px solid ${VIOLET}`, borderRadius: 8, width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'Space Grotesk', monospace" },
  cardEyebrow: { fontSize: 11, letterSpacing: 0.8, color: GOLD, fontWeight: 700, display: "block", marginBottom: 6 },
  question: { fontSize: 17, fontWeight: 700, margin: 0, color: "#fff", lineHeight: 1.6 },
  qNote: { fontSize: 13, color: "#8C89A3", lineHeight: 1.8, margin: "12px 0 16px", paddingInlineStart: 48 },
  options: { display: "flex", flexWrap: "wrap", gap: 10, paddingInlineStart: 48 },
  option: { display: "inline-flex", alignItems: "center", gap: 9, background: "transparent", color: "#D8D6E6", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "10px 16px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all .2s ease" },
  optionActive: { borderColor: VIOLET, background: "rgba(109,74,255,0.14)", color: "#fff", boxShadow: "0 0 0 1px rgba(109,74,255,0.4) inset" },
  dot: { width: 11, height: 11, borderRadius: 99, border: "2px solid rgba(255,255,255,0.3)", transition: "all .2s ease" },
  dotActive: { borderColor: GOLD, background: GOLD, boxShadow: `0 0 8px ${GOLD}` },
  textarea: { width: "100%", boxSizing: "border-box", marginTop: 14, background: "rgba(0,0,0,0.25)", color: "#E8E6F0", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12, padding: "14px 16px", fontSize: 14, fontFamily: "inherit", lineHeight: 1.8, resize: "vertical", outline: "none", transition: "border-color .2s" },
  footer: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.07)", flexWrap: "wrap" },
  status: { fontSize: 13, fontWeight: 700, transition: "opacity .3s" },
  footNote: { fontSize: 12, color: "#6F6C85" },
  submitRow: { marginTop: 20, display: "flex", flexDirection: "column", gap: 12, alignItems: "stretch" },
  submitBtn: { width: "100%", padding: "15px 20px", borderRadius: 12, border: "none", cursor: "pointer", background: `linear-gradient(90deg, ${VIOLET}, #8B6BFF)`, color: "#fff", fontSize: 15, fontWeight: 800, fontFamily: "inherit", transition: "transform .15s ease, opacity .2s ease", boxShadow: "0 10px 30px rgba(109,74,255,0.35)" },
  submitBtnDisabled: { opacity: 0.45, cursor: "not-allowed", boxShadow: "none" },
  submitMsg: { fontSize: 13, fontWeight: 700, textAlign: "center" },
  planGroup: { marginTop: 26 },
  planGroupTitle: { fontSize: 14, fontWeight: 800, color: GOLD, margin: "0 0 14px", letterSpacing: 0.5 },
  planCard: { background: CARD, border: "1px solid rgba(255,255,255,0.06)", borderRadius: 14, padding: "18px 20px", animation: "wameerFadeUp .5s ease both" },
  planCardPriority: { borderColor: "rgba(109,74,255,0.5)", boxShadow: "0 0 0 1px rgba(109,74,255,0.25) inset" },
  planCardStrength: { borderColor: "rgba(91,214,138,0.35)" },
  planCardHead: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 8 },
  planCardTitle: { fontSize: 16, fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.5 },
  planCardBody: { fontSize: 14, lineHeight: 1.9, color: "#A9A6BD", margin: 0 },
  priorityBadge: { fontSize: 11, fontWeight: 800, color: "#fff", background: VIOLET, padding: "3px 10px", borderRadius: 99, flexShrink: 0 },
  strengthBadge: { fontSize: 11, fontWeight: 800, color: "#5BD68A", background: "rgba(91,214,138,0.12)", border: "1px solid rgba(91,214,138,0.35)", padding: "3px 10px", borderRadius: 99, flexShrink: 0 },
  backBtn: { width: "100%", padding: "12px 20px", borderRadius: 12, cursor: "pointer", background: "transparent", color: "#A9A6BD", border: "1px solid rgba(255,255,255,0.14)", fontSize: 14, fontWeight: 600, fontFamily: "inherit", transition: "border-color .2s" },
};
