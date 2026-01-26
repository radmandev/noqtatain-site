import React from 'react';
import { Sparkles, Target, Layers, Rocket, CalendarRange, Workflow } from 'lucide-react';

const highlightStats = [
  {
    label: 'جهوزية الظهور الرقمي',
    value: '65%',
    detail: 'قنوات التواصل موجودة لكن بدون خط سردي موحد أو محتوى متجدد.'
  },
  {
    label: 'الوعي بالعلامة',
    value: 'متوسط',
    detail: 'تعرفاً عالياً داخل المجتمع المحلي، وحضوراً ضعيفاً خارج المنطقة.'
  },
  {
    label: 'سرعة الاستجابة التجارية',
    value: '48 ساعة',
    detail: 'فجوة واضحة بين جمع الطلبات وتحويلها إلى فرص بيع فعلية.'
  }
];

const marketingPillars = [
  {
    title: 'هندسة الهوية والسرد',
    summary: 'تحويل رواية "هيكل العربة" إلى قصة تقدم حلول نقل ذكية ومدعومة بالثقة.',
    bullets: [
      'ابتكار نظام بصري جديد يدمج اللون النحاسي مع الأزرق البترولي لإبراز الدقة التقنية.',
      'إنتاج دليل سردي قصصي يتتبع رحلة العميل من الحاجة اللوجستية إلى الطمأنينة التشغيلية.',
      'تصميم لوحة رسائل مرنة يمكن إعادة استخدامها في العروض والاجتماعات.'
    ]
  },
  {
    title: 'تنشيط القنوات الرقمية',
    summary: 'تحويل القنوات الحالية إلى مسارات بيع فعلية قابلة للقياس.',
    bullets: [
      'إعادة بناء موقع مصغر يركز على القطاعات عالية الربحية (سلاسل الإمداد، المصانع).',
      'حملات لينكدإن موجهة لأصحاب القرار مع دراسات حالة مصغرة ومؤشرات أداء.',
      'بناء لوحة تحكم فورية لالتقاط الطلبات وتقسيمها إلى مراحل استعداد.'
    ]
  },
  {
    title: 'تنشيط الشراكات',
    summary: 'مضاعفة نقاط الاتصال من خلال مؤثرين متخصصين وفعاليات قطاعية.',
    bullets: [
      'رعاية محتوى في مجلات متخصصة بالنقل والصناعة خلال ربعين متتاليين.',
      'التواجد كشريك تشغيلي في فعالية لوجستية خفيفة مع عرض مباشر للحلول.',
      'ابتكار حوافز مشتركة مع شركات استيراد تمنح نقاطاً مقابل الحجز المبكر.'
    ]
  }
];

const packageInclusions = [
  'إدارة مشروع مخصصة مع قيادة استراتيجية واجتماعات أسبوعية.',
  'إنتاج محتوى متكامل (نص، عناصر مرئية، عروض تفاعلية) بـ٣ لغات حسب الحاجة.',
  'تشغيل الحملات الرقمية الإعلانية والعضوية مع تقارير أداء حية.',
  'بناء لوحة ذكاء تسويقي تربط بين الطلبات والفرص عبر CRM خفيف.',
  'تدريب فريق هيكل العربة على تسليم العروض والتفاوض السريع.'
];

const nextSteps = [
  {
    label: 'الأسبوع 1',
    title: 'ورشة الانطلاق المتخصصة',
    detail: 'تثبيت مؤشرات النجاح وربط فرق المبيعات والعمليات مع فريق نقطتين.'
  },
  {
    label: 'الأسبوع 2',
    title: 'تسليم دليل الهوية والسرد',
    detail: 'اعتماد الرسائل الأساسية وخريطة الجمهور قبل أي نشر خارجي.'
  },
  {
    label: 'الأسبوع 4',
    title: 'إطلاق القنوات والحملات',
    detail: 'تشغيل المحتوى المدعوم والموجه مع أول تقرير أداء تشغيلي.'
  },
  {
    label: 'الأسبوع 8',
    title: 'مراجعة منتصف الدورة',
    detail: 'تحليل الصفقات النشطة وتعديل العروض والحوافز بناءً على البيانات.'
  }
];

function SectionCard({ children, className = '' }) {
  return (
    <div className={`border border-white/10 rounded-3xl bg-white/5 backdrop-blur-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export default function HikalarabaCase24() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#05070F] text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{ background: 'radial-gradient(circle at top, rgba(110,231,183,0.25), transparent 55%)' }} />
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-20" style={{ background: 'linear-gradient(120deg, rgba(37,99,235,0.4), transparent)' }} />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
          <div className="inline-flex items-center gap-2 text-sm text-emerald-200/90 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Sparkles size={16} />
            <span>حالة خاصة · 2024</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            تحليل تسويقي متخصص للعميل
            <span className="text-emerald-300 block mt-2">هيكل العربة</span>
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl mt-6">
            صممنا هذه الصفحة كمرجع داخلي لعرض صورة الوضع الحالي وتوجهات النمو المقترحة، مع باقة تنفيذية قابلة للتفعيل فوراً دون نشر عام.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {highlightStats.map((stat) => (
              <SectionCard key={stat.label}>
                <p className="text-sm text-slate-300">{stat.label}</p>
                <p className="text-3xl font-semibold text-white mt-2">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">{stat.detail}</p>
              </SectionCard>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pb-8 space-y-16">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">01</p>
              <h2 className="text-3xl font-semibold">الوضع الحالي والرؤى</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <SectionCard>
              <h3 className="text-xl font-semibold mb-2">مكانة السوق</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                حضور قوي في سوق النقل المحلي مع تركيز على حلول تعديل الهياكل، لكن الرسالة الحالية تضعف القيمة الابتكارية والالتزام بالموثوقية طويلة الأمد.
              </p>
            </SectionCard>
            <SectionCard>
              <h3 className="text-xl font-semibold mb-2">القنوات الرقمية</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                قنوات التواصل الاجتماعي تعمل بنمط موسمي، والموقع يفتقد لرحلة عميل واضحة أو نماذج طلب تفاعلية، ما يقلل التحويلات المباشرة.
              </p>
            </SectionCard>
            <SectionCard>
              <h3 className="text-xl font-semibold mb-2">سلوك الجمهور</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                صناع قرار يبحثون عن استجابات سريعة وعروض موثقة تقنياً، ويهتمون بضمانات ما بعد التسليم أكثر من السعر الأولي.
              </p>
            </SectionCard>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Layers className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">02</p>
              <h2 className="text-3xl font-semibold">مقترحات التسويق المركزة</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {marketingPillars.map((pillar) => (
              <SectionCard key={pillar.title} className="flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="text-slate-300 text-sm mt-2">{pillar.summary}</p>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-300 list-disc pr-4">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </SectionCard>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">03</p>
              <h2 className="text-3xl font-semibold">الباقة التنفيذية المخصصة</h2>
            </div>
          </div>
          <SectionCard className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-slate-400">المدة</p>
                <p className="text-2xl font-semibold">12 أسبوعاً قابلة للتمديد</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">ميزانية استثمارية مقترحة</p>
                <p className="text-2xl font-semibold">220,000 ريال · قابلة للتجزئة حسب المراحل</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {packageInclusions.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 mt-2" />
                  <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <CalendarRange className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">04</p>
              <h2 className="text-3xl font-semibold">الخطوات القادمة</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {nextSteps.map((step) => (
              <SectionCard key={step.label}>
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">{step.label}</p>
                <h3 className="text-lg font-semibold mt-2">{step.title}</h3>
                <p className="text-sm text-slate-300 mt-3 leading-relaxed">{step.detail}</p>
              </SectionCard>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Workflow className="text-emerald-300" />
            <div>
              <p className="text-sm text-slate-400">05</p>
              <h2 className="text-3xl font-semibold">ما الذي نحتاجه من الفريق؟</h2>
            </div>
          </div>
          <SectionCard className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-400">بيانات فورية</p>
              <p className="text-base text-slate-200 mt-2 leading-relaxed">
                قوائم العملاء الحالية، متوسط زمن التسليم، وأي عروض أسعار متكررة لتحديد هوامش الحركة التسويقية.
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400">واجهات الوصول</p>
              <p className="text-base text-slate-200 mt-2 leading-relaxed">
                صلاحيات الحسابات الاجتماعية والحملات المدفوعة بالإضافة إلى جهة اتصال تقنية للموقع.
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400">دعم تنفيذي</p>
              <p className="text-base text-slate-200 mt-2 leading-relaxed">
                حضور أسبوعي لمدير تطوير الأعمال لاعتماد الرسائل وتأكيد العروض المخصصة قبل إرسالها.
              </p>
            </div>
          </SectionCard>
        </section>
      </div>
    </div>
  );
}
