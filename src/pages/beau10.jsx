import React from 'react';
import {
  Sparkles,
  Store,
  Rocket,
  Wallet,
  Trophy,
  Handshake,
  ShieldCheck,
  CalendarClock,
  CircleDollarSign,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';

const proposalTitle = 'عرض شراكة استثمارية';
const proposalSubtitle = 'لإنشاء وتشغيل المتجر الإلكتروني لمتاجر بيوتن beau10';

const introText =
  'نظرًا للنمو المتسارع لقطاع التجارة الإلكترونية في مجال مستحضرات التجميل داخل المملكة، ومع وجود ثلاثة فروع في الرياض وفرع في صبيا، يمثل إنشاء قناة بيع رقمية خطوة استراتيجية لتعزيز المبيعات وزيادة انتشار العلامة التجارية.';

const principleText =
  'لا يوجد التزام مالي مباشر على الملاك إلا من نتائج فعلية، ويتحقق العائد للطرفين من نجاح المشروع.';

const foundationItems = [
  'إنشاء المتجر الإلكتروني بالكامل.',
  'الإعداد التقني وربط بوابات الدفع.',
  'إدارة الحملات التسويقية.',
  'تمويل الإعلانات في مرحلة الإطلاق.',
  'إدارة المنصات الرقمية المرتبطة بالمشروع.',
];

const recoveryItems = [
  'تكلفة الإعلانات الرقمية (Meta – Google – TikTok – Snapchat وغيرها).',
  'رسوم بوابات الدفع الإلكتروني.',
  'تكاليف الشحن والتوصيل.',
  'تكلفة إنتاج المحتوى الإعلاني (تصوير – تصميم – مونتاج).',
  'تكلفة الأدوات والمنصات التسويقية المستخدمة ضمن الحملات (اشتراكات أنظمة – أدوات تحليل – منصات بريد إلكتروني – أدوات CRM).',
  'تكلفة الوسائل التسويقية الحسية المرتبطة بالحملات (مطبوعات – تغليف دعائي – بروشورات – عينات مجانية – مواد ترويجية).',
  'أي مصروفات تسويقية مباشرة يتم اعتمادها ضمن خطة الحملة.',
];

const sections = [
  {
    order: 'أولاً',
    title: 'المقدمة',
    icon: Store,
    body:
      `${introText} يعتمد هذا المقترح على نموذج شراكة استثمارية يتحمل فيه الشريك التشغيلي المخاطرة التشغيلية والتسويقية، دون التزام مالي مباشر على الملاك إلا من نتائج فعلية.`,
  },
  {
    order: 'ثانياً',
    title: 'مرحلة الاستثمار والتأسيس',
    icon: Rocket,
    body:
      'يتحمل الشريك التشغيلي جميع بنود التأسيس والإطلاق التسويقي، ولا يتحمل الملاك أي تكاليف تأسيس أو تسويق في هذه المرحلة.',
    list: foundationItems,
  },
  {
    order: 'ثالثاً',
    title: 'آلية استرداد التكاليف',
    icon: Wallet,
    body:
      'تُخصم المصروفات التشغيلية والتسويقية التالية من إجمالي المبيعات الرقمية حتى استرداد كامل المصروفات، ويتم توثيقها بتقارير مالية شهرية واضحة.',
    list: recoveryItems,
  },
  {
    order: 'رابعاً',
    title: 'مكافأة التأسيس',
    icon: Trophy,
    body:
      'عند تغطية جميع المصروفات وتحقيق فائض قدره 20,000 ريال، يتم دفع مبلغ 20,000 ريال كمكافأة تأسيس وتشغيل ناجح للمشروع.',
    callout: '20,000 ريال فائض = 20,000 ريال مكافأة تأسيس',
  },
  {
    order: 'خامساً',
    title: 'نسبة الشراكة التشغيلية',
    icon: Handshake,
    body:
      'بعد مرحلة التأسيس، يتم احتساب نسبة الشراكة من إجمالي المبيعات الرقمية للمتجر الإلكتروني فقط، ولا تشمل مبيعات الفروع أو أي قنوات بيع أخرى. النسب المعتمدة: ٣٠٪ في السنة الأولى، ٢٥٪ في السنة الثانية، و٢٠٪ في السنة الثالثة وبعدها.',
    table: [
      ['السنة الأولى', '٣٠٪'],
      ['السنة الثانية', '٢٥٪'],
      ['السنة الثالثة وبعدها', '٢٠٪'],
    ],
  },
  {
    order: 'سادساً',
    title: 'التزامات الطرفين',
    icon: ShieldCheck,
    duties: {
      partner: ['إدارة الحملات وتحسين الأداء.', 'تقديم تقارير شهرية مفصلة.', 'تطوير القناة الرقمية بشكل مستمر.'],
      owners: ['توفير مخزون كافٍ.', 'سرعة تجهيز الطلبات.', 'الالتزام بسياسة تسعير موحدة.', 'دعم العمليات اللوجستية.'],
    },
  },
  {
    order: 'سابعاً',
    title: 'مدة الشراكة',
    icon: CalendarClock,
    body:
      'مدة الاتفاق ثلاث سنوات، مع حق الإدارة الحصرية للمتجر الإلكتروني خلال مدة الشراكة.',
    callout: 'مدة الاتفاق: 3 سنوات (إدارة حصرية للقناة الرقمية)',
  },
  {
    order: 'ثامناً',
    title: 'مبدأ الاتفاق',
    icon: CircleDollarSign,
    body: `تعتمد هذه الشراكة على مبدأ: “${principleText}”`,
  },
];

function ProposalSection({ section }) {
  const Icon = section.icon;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-violet-100 p-2 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
            <Icon size={22} />
          </span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {section.order}
        </span>
      </div>

      {section.body && <p className="leading-8 text-slate-600 dark:text-slate-300">{section.body}</p>}

      {section.list && (
        <ul className="mt-4 space-y-3">
          {section.list.map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="mt-0.5 shrink-0 text-violet-600 dark:text-violet-400" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
          <table className="w-full text-right">
            <tbody>
              {section.table.map(([year, ratio]) => (
                <tr key={year} className="border-b border-slate-200 last:border-b-0 dark:border-slate-700">
                  <td className="bg-slate-50 px-4 py-3 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">{year}</td>
                  <td className="px-4 py-3 text-lg font-extrabold text-violet-700 dark:text-violet-300">{ratio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {section.duties && (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
            <h3 className="mb-3 font-bold text-slate-900 dark:text-white">التزامات الشريك التشغيلي</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-200">
              {section.duties.partner.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowLeft className="mt-0.5 shrink-0 text-violet-500" size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
            <h3 className="mb-3 font-bold text-slate-900 dark:text-white">التزامات الملاك</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-200">
              {section.duties.owners.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ArrowLeft className="mt-0.5 shrink-0 text-violet-500" size={15} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {section.callout && (
        <div className="mt-4 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white dark:bg-violet-700/80">
          {section.callout}
        </div>
      )}
    </section>
  );
}

export default function Beau10() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-violet-50 py-12 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-3xl border border-violet-200 bg-white/90 p-8 shadow-sm backdrop-blur dark:border-violet-700/50 dark:bg-slate-900/90">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            <Sparkles size={16} />
            {proposalTitle}
          </p>

          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-4xl">
            {proposalSubtitle}
          </h1>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-300">{introText}</p>

          <div className="mt-5 rounded-xl border border-violet-200 bg-violet-50 p-4 text-violet-900 dark:border-violet-700/60 dark:bg-violet-900/20 dark:text-violet-200">
            <span className="font-bold">المبدأ الحاكم:</span> {principleText}
          </div>
        </header>

        <div className="grid gap-5">
          {sections.map((section) => (
            <ProposalSection key={section.title} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
