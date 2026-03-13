import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface ServicesPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  return {
    title: `${t('services.title')} | Yen Investment Consulting`,
    description: t('services.subtitle'),
    openGraph: {
      title: `${t('services.title')} | Yen Investment Consulting`,
      description: t('services.subtitle'),
      type: 'website',
      url: `https://yen-website.vercel.app/${locale}/services`,
    },
  };
}

const serviceData = [
  {
    id: 'mna',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'business-improvement',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'rollup-strategy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'direct-investment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'business-management',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'research-reports',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7" aria-hidden="true">
        <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const isZh = locale === 'zh';

  const services = serviceData.map((s) => ({
    ...s,
    title:       t(`services.${s.id}.title`),
    description: t(`services.${s.id}.description`),
    short:       t(`services.${s.id}.short`),
  }));

  return (
    <div id="main-content">

      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="page-hero relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div
          className="absolute -top-16 -right-16 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8 bg-gold-500 opacity-60" aria-hidden="true"/>
            <span className="text-gold-500 font-sans text-xs font-semibold uppercase tracking-[0.15em]">
              {isZh ? '专业服务' : 'Professional Services'}
            </span>
          </div>
          <h1 className="font-serif font-bold text-cream-100 mb-5 text-balance" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            {t('services.title')}
          </h1>
          <p className="text-slate-300 max-w-2xl" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <section className="section-xl bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link key={service.id} href={`/${locale}/services/${service.id}`} className="group block">
                <article
                  className="h-full bg-white border border-slate-200 rounded-lg p-8 flex flex-col gap-5 transition-all duration-350 ease-premium cursor-pointer"
                  style={{ boxShadow: '0 1px 4px rgba(11,22,38,0.05)' }}
                  onMouseEnter={undefined}
                >
                  {/* Service number + icon row */}
                  <div className="flex items-start justify-between">
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-md text-gold-500 flex-shrink-0 transition-all duration-350 group-hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, rgba(201,169,97,0.1) 0%, rgba(201,169,97,0.05) 100%)' }}
                    >
                      {service.icon}
                    </div>
                    <span className="font-serif font-bold text-slate-200 group-hover:text-gold-300 transition-colors duration-250" style={{ fontSize: '2rem', lineHeight: 1, letterSpacing: '-0.02em' }}>
                      {String(serviceData.findIndex(s => s.id === service.id) + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-navy-900 mb-2 group-hover:text-gold-600 transition-colors duration-250">
                      {service.title}
                    </h3>
                    <div className="h-px bg-gold-400 w-6 opacity-0 group-hover:opacity-60 group-hover:w-12 transition-all duration-350" aria-hidden="true"/>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Footer link */}
                  <div className="flex items-center gap-2 text-gold-500 text-sm font-medium">
                    <span>{isZh ? '了解详情' : 'View details'}</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-250 group-hover:translate-x-1"
                      viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section
        className="section-xl"
        style={{ background: 'linear-gradient(160deg, #0B1626 0%, #0F1F38 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow">{isZh ? '我们的优势' : 'Why Choose Yen'}</span>
            <h2 className="font-serif font-semibold text-cream-100 mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.015em' }}>
              {isZh ? '专业实力，值得信赖' : 'Institutional Expertise. Trusted Results.'}
            </h2>
            <span className="rule-gold-center" aria-hidden="true"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: isZh ? '深度行业专业知识' : 'Deep Domain Expertise',
                desc: isZh
                  ? '我们的团队具备金融、并购、战略咨询等领域数十年的专业积累。'
                  : 'Our team brings decades of specialized experience across finance, M&A, and strategic consulting.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: isZh ? '亚太本地化洞察' : 'APAC-Native Insights',
                desc: isZh
                  ? '对亚太区商业生态的深刻理解，助力客户把握区域发展机遇。'
                  : 'Nuanced understanding of APAC business ecosystems that helps clients capitalize on regional opportunities.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: isZh ? '以结果为导向' : 'Results-Oriented',
                desc: isZh
                  ? '从策略制定到落地执行，我们与客户并肩作战，确保可衡量的成果。'
                  : 'From strategy through execution, we work alongside clients to deliver measurable, sustainable outcomes.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-lg border flex flex-col gap-4"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div className="text-gold-500">{item.icon}</div>
                <h3 className="text-cream-100 font-semibold">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section-lg bg-cream-100" style={{ borderTop: '1px solid #EDE7D8' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="eyebrow text-gold-600">{isZh ? '开始合作' : 'Start a Conversation'}</span>
          <h2 className="section-heading text-navy-900 mb-4">{t('contact.title')}</h2>
          <span className="rule-gold-center" aria-hidden="true"/>
          <p className="text-slate-600 mt-4 mb-10 max-w-xl mx-auto" style={{ lineHeight: '1.75' }}>
            {t('contact.subtitle')}
          </p>
          <Link href={`/${locale}/contact`} className="btn-primary">
            {isZh ? '联系我们' : 'Get in Touch'}
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
