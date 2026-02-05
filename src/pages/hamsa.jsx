import React from 'react';
import { ClipboardList, Target, Megaphone, Wallet, MapPin } from 'lucide-react';

const objectives = [
  'بناء وتعزيز الهوية الرقمية للعلامة التجارية.',
  'الوصول إلى شريحة أكبر من الجمهور في مدينة الرياض.',
  'زيادة الطلبات (داخل المطعم + التوصيل).'
];

const socialScope = [
  'وضع استراتيجية محتوى مناسبة للمطاعم.',
  'إعداد خطة نشر شهرية.',
  'إنشاء وتصميم المحتوى (صور + فيديوهات قصيرة Reels / TikTok).',
  'كتابة المحتوى (Captions) بأسلوب جذاب ومتوافق مع الهوية.',
  'إدارة التفاعل (الرد على التعليقات والرسائل).',
  'تحسين الحسابات (Bio – Highlights – Hashtags).'
];

const socialContent = ['16 منشور صور', '8 ستوري', '8 فيديو قصير (Reels / TikTok)'];

const adsScope = [
  'إعداد استراتيجية إعلانية مناسبة لأهداف المطعم.',
  'إنشاء الحملات الإعلانية.',
  'استهداف الجمهور المناسب (حسب الموقع والاهتمامات).',
  'إدارة الميزانية وتحسين الأداء.',
  'تقارير شهرية مبسطة عن النتائج.'
];

const adsGoals = ['زيادة الوعي بالعلامة التجارية.', 'زيادة التفاعل.', 'زيادة الطلبات والوصول للفرعين.'];

const feeItems = ['إدارة حسابات التواصل الاجتماعي', 'إنشاء المحتوى', 'إدارة الحملات الإعلانية'];

function SectionCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200/70 bg-white/80 text-slate-900 shadow-lg backdrop-blur-lg p-6 dark:border-white/10 dark:bg-white/5 dark:text-white ${className}`}
    >
      {children}
    </div>
  );
}

export default function hamsa() {
  return (
    <div dir="rtl" className="hk24-page min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 dark:bg-[#04060D] dark:bg-none dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <header className="space-y-4">
          <p className="text-sm text-emerald-500 font-semibold">عرض فني ومالي</p>
          <h1 className="text-4xl font-semibold">إدارة التسويق الإلكتروني</h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>مطعم حمسة وتغميسة – الرياض (فرعين)</span>
            </div>
            <span className="text-slate-400">•</span>
            <span>مدة العرض: 6 أشهر</span>
          </div>
        </header>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">01</p>
              <h2 className="text-3xl font-semibold">أولًا: العرض الفني</h2>
            </div>
          </div>
          <SectionCard>
            <p className="text-sm text-slate-400 mb-3">أهداف العمل</p>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
              {objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </SectionCard>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <ClipboardList className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">02</p>
              <h2 className="text-3xl font-semibold">نطاق الخدمات</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <SectionCard>
              <div className="flex items-center gap-2 mb-4">
                <Megaphone className="text-emerald-300" />
                <h3 className="text-xl font-semibold">إدارة حسابات التواصل الاجتماعي</h3>
              </div>
              <p className="text-sm text-slate-400">المنصات</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">Instagram، TikTok</p>
              <p className="text-sm text-slate-400 mt-4">يشمل</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {socialScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 mt-4">عدد المحتوى المقترح شهريًا</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {socialContent.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard>
              <div className="flex items-center gap-2 mb-4">
                <Megaphone className="text-emerald-300" />
                <h3 className="text-xl font-semibold">إدارة الحملات الإعلانية المدفوعة</h3>
              </div>
              <p className="text-sm text-slate-400">المنصات</p>
              <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">Instagram Ads، TikTok Ads</p>
              <p className="text-sm text-slate-400 mt-4">يشمل</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {adsScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-slate-400 mt-4">أهداف الحملات</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
                {adsGoals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Wallet className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">03</p>
              <h2 className="text-3xl font-semibold">ثانيًا: العرض المالي</h2>
            </div>
          </div>
          <SectionCard>
            <p className="text-sm text-slate-400">أتعاب إدارة التسويق (شهريًا)</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-700 dark:text-slate-200 list-disc pr-5">
              {feeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <p className="text-sm text-emerald-200 font-semibold">التكلفة الشهرية</p>
              <p className="text-2xl font-bold text-white mt-2">5,000 ريال سعودي</p>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm text-slate-500 dark:text-slate-300 font-semibold">ميزانية الإعلانات المقترحة (منفصلة عن أتعاب الإدارة)</p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white mt-2">من 4,000 إلى 6,000 ريال سعودي شهريًا</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">يتم تحديدها حسب النتائج والرغبة بالتوسع</p>
            </div>
          </SectionCard>
        </section>
      </div>
    </div>
  );
}
