import React from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  MessageSquareText,
  ShieldCheck,
  TimerReset,
  UserCog,
  Users,
  Wrench,
  Workflow,
  CalendarCheck,
  FileText,
  Sparkles,
  BarChart3
} from 'lucide-react';

const painPoints = [
  'فقدان طلبات الموظفين بسبب الاعتماد على الرسائل والمحادثات المتفرقة.',
  'عدم وضوح مسار الموافقات بين الإدارة والمشرفين.',
  'مشاكل الحضور والانصراف وصعوبة تتبع التأخير والعمل الإضافي.',
  'ضغط واتساب وعدم توثيق المحادثات المرتبطة بالعمل.',
  'تأخر الصيانة بسبب ضعف المتابعة وعدم وجود نظام واضح للتصعيد.'
];

const solutionBlocks = [
  {
    icon: Users,
    title: 'إدارة الموظفين (50 موظف)',
    points: ['تعريف صلاحيات دقيقة حسب المنصب.', 'هيكل إداري واضح يحدد المسؤوليات وخطوط الموافقة.']
  },
  {
    icon: MessageSquareText,
    title: 'دمج واتساب رسمي',
    points: ['استقبال الرسائل داخل Bitrix24 بشكل مركزي.', 'توزيع المحادثات على المسؤول المناسب.', 'أرشفة كاملة لكل التفاعلات.']
  },
  {
    icon: CalendarCheck,
    title: 'نظام الحضور والانصراف',
    points: ['تسجيل الحضور عبر الجوال أو جهاز البصمة.', 'تقارير دقيقة للتأخير وساعات العمل.', 'احتساب العمل الإضافي بشكل واضح.']
  },
  {
    icon: Workflow,
    title: 'نماذج إلكترونية مع سير موافقات تلقائي',
    points: [
      'طلب إجازة (جميع الأنواع) + طلب استئذان.',
      'طلب سلفة + طلب استقالة.',
      'طلب صيانة سكن + طلب صيانة أدوات + طلب صيانة فرع.',
      'كل طلب يمر بموافقة تلقائية ويتم أرشفته بالكامل.'
    ]
  }
];

const workflowSteps = [
  'تحليل احتياج المطعم.',
  'إعداد النظام وتجهيز البنية الإدارية.',
  'تصميم النماذج وسير العمل والاعتمادات.',
  'دمج واتساب والحضور والانصراف.',
  'تدريب الإدارة والموظفين على الاستخدام الفعلي.',
  'تقديم دعم فني بعد الإطلاق.'
];

const outcomes = [
  'تقليل الأخطاء الإدارية اليومية.',
  'تسريع الموافقات وسلاسة التنفيذ.',
  'تقارير دقيقة تساعد الإدارة على اتخاذ القرار.',
  'ضبط الحضور والانضباط الوظيفي.',
  'رقابة كاملة على العمليات من منصة واحدة.'
];

const whyUs = [
  'خبرة عملية في تنفيذ أنظمة Bitrix24.',
  'فهم عميق لبيئة وتشغيل المطاعم.',
  'أتمتة احترافية لسير العمل والنماذج.',
  'دعم فني مستمر لضمان الاستقرار والتطوير.'
];

const CTAButton = ({ href, children, secondary = false }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition ${
      secondary
        ? 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
        : 'bg-emerald-600 text-white hover:bg-emerald-500'
    }`}
  >
    {children}
    <ArrowLeft className="h-4 w-4" />
  </a>
);

export default function HamsaBitrix24() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 dark:from-[#030712] dark:to-[#020617] dark:text-white">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-white/10 dark:bg-white/5">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
            <Sparkles className="h-4 w-4" />
            نظام إدارة موظفي مطعم حمسة وتغميسة Bitrix24
          </div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">حوّل إدارة مطعمك إلى نظام رقمي متكامل</h1>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            تنفيذ نظام Bitrix24 لإدارة الموظفين، الطلبات، الحضور، والصيانة من منصة واحدة.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="#contact">اطلب عرض سعر</CTAButton>
            <CTAButton href="#contact" secondary>
              احجز استشارة مجانية
            </CTAButton>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="mb-5 flex items-center gap-3">
            <TimerReset className="h-6 w-6 text-amber-500" />
            <h2 className="text-2xl font-bold">المشكلة التي نحلها</h2>
          </div>
          <ul className="grid gap-3 md:grid-cols-2">
            {painPoints.map((point) => (
              <li key={point} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm dark:border-white/10 dark:bg-white/5">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-3">
            <ClipboardCheck className="h-6 w-6 text-emerald-500" />
            <h2 className="text-2xl font-bold">الحل الذي نقدمه</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {solutionBlocks.map(({ icon: Icon, title, points }) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-5 dark:border-white/10">
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-emerald-500" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {points.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div className="mb-5 flex items-center gap-3">
            <UserCog className="h-6 w-6 text-indigo-500" />
            <h2 className="text-2xl font-bold">آلية العمل</h2>
          </div>
          <ol className="grid gap-3 md:grid-cols-2">
            {workflowSteps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-slate-200 p-4 text-sm dark:border-white/10">
                <span className="mb-2 inline-block rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-100">
                  {index + 1}
                </span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-cyan-500" />
              <h2 className="text-2xl font-bold">النتائج المتوقعة</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-violet-500" />
              <h2 className="text-2xl font-bold">لماذا نحن؟</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-violet-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="contact" className="rounded-3xl border border-emerald-300 bg-emerald-50 p-8 shadow-sm dark:border-emerald-500/40 dark:bg-emerald-500/10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold">ابدأ الآن في تحويل مطعمك إلى نظام إداري احترافي</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-200">
                جاهزون لتنفيذ نظام متكامل يضبط العمليات اليومية ويرفع كفاءة الإدارة داخل المطعم.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="https://wa.me/966543569492?text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B9%D8%B1%D8%B6%20%D9%85%D8%AE%D8%B5%D8%B5%20%D9%84%D9%86%D8%B8%D8%A7%D9%85%20Bitrix24%20%D9%84%D9%85%D8%B7%D8%B9%D9%85%20%D8%AD%D9%85%D8%B3%D8%A9%20%D9%88%D8%AA%D8%BA%D9%85%D9%8A%D8%B3%D8%A9">
                احصل على عرض مخصص
              </CTAButton>
              <CTAButton href="/Contact" secondary>
                تواصل معنا الآن
              </CTAButton>
            </div>
          </div>
          <div className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-300/50 bg-white/60 p-3 dark:border-emerald-500/30 dark:bg-white/10">
              <FileText className="mb-2 h-4 w-4 text-emerald-600" />
              نماذج طلبات مؤتمتة
            </div>
            <div className="rounded-2xl border border-emerald-300/50 bg-white/60 p-3 dark:border-emerald-500/30 dark:bg-white/10">
              <Wrench className="mb-2 h-4 w-4 text-emerald-600" />
              تتبع صيانة السكن والأدوات والفروع
            </div>
            <div className="rounded-2xl border border-emerald-300/50 bg-white/60 p-3 dark:border-emerald-500/30 dark:bg-white/10">
              <MessageSquareText className="mb-2 h-4 w-4 text-emerald-600" />
              توثيق كامل لمحادثات واتساب
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
