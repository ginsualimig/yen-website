import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  return {
    title: `${t('hero.title')} | Yen Investment Consulting`,
    description: t('hero.description'),
    openGraph: {
      title: `${t('hero.title')} | Yen Investment Consulting`,
      description: t('hero.description'),
      type: 'website',
      url: `https://yenturi.com/${locale}`,
    },
  };
}

// SVG icons for services
const serviceIcons: Record<string, JSX.Element> = {
  mna: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'business-improvement': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'rollup-strategy': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'direct-investment': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'business-management': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'research-reports': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const valueIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const isZh = locale === 'zh';

  const services = [
    { id: 'mna',                 title: t('services.mna.title'),                description: t('services.mna.short') },
    { id: 'business-improvement',title: t('services.business-improvement.title'),description: t('services.business-improvement.short') },
    { id: 'rollup-strategy',     title: t('services.rollup-strategy.title'),     description: t('services.rollup-strategy.short') },
    { id: 'direct-investment',   title: t('services.direct-investment.title'),   description: t('services.direct-investment.short') },
    { id: 'business-management', title: t('services.business-management.title'), description: t('services.business-management.short') },
    { id: 'research-reports',    title: t('services.research-reports.title'),    description: t('services.research-reports.short') },
  ];

  const values = [
    { key: 'excellence', label: t('about.excellence') },
    { key: 'integrity',  label: t('about.integrity') },
    { key: 'expertise',  label: t('about.expertise') },
    { key: 'innovation', label: t('about.innovation') },
  ];

  return (
    <div id="main-content">

      {/* ────────────────────────────────────────────────────
          HERO — Full immersive, institutional authority
      ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(155deg, #060D1A 0%, #0B1626 45%, #0F1F38 75%, #0A1830 100%)' }}
      >
        {/* Geometric accent — subtle diagonal lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {/* Large soft orb — top right */}
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}
          />
          {/* Small orb — bottom left */}
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #1E3A6E 0%, transparent 70%)' }}
          />
          {/* Diagonal rule lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A961" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 md:py-36 w-full">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="inline-block h-px w-8 bg-gold-500 opacity-70"
                aria-hidden="true"
              />
              <span className="text-gold-500 font-sans text-xs font-semibold uppercase tracking-[0.15em]">
                {isZh ? '亚太投资咨询' : 'Asia-Pacific Investment Consulting'}
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="font-serif font-bold text-cream-100 mb-7 text-balance"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
                lineHeight: '1.07',
                letterSpacing: '-0.025em',
              }}
            >
              {t('hero.title')}
            </h1>

            {/* Subheading */}
            <p
              className="text-slate-300 mb-10 max-w-2xl"
              style={{ fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', lineHeight: '1.75' }}
            >
              {t('hero.subtitle')}
            </p>

            {/* CTA group */}
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {t('hero.cta')}
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href={`/${locale}/services`} className="btn-outline-light">
                {t('services.overview')}
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap gap-8 items-center">
              {[
                { num: isZh ? '20+' : '20+', label: isZh ? '年行业经验' : 'Years Experience' },
                { num: isZh ? 'APAC' : 'APAC', label: isZh ? '区域专业覆盖' : 'Regional Expertise' },
                { num: isZh ? '6' : '6', label: isZh ? '核心服务领域' : 'Core Service Areas' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-gold-400" style={{ fontSize: '1.75rem', letterSpacing: '-0.02em', lineHeight: 1 }}>
                    {stat.num}
                  </span>
                  <span className="text-slate-400 text-xs tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade to cream */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(253,252,249,0))' }}
          aria-hidden="true"
        />
      </section>

      {/* ────────────────────────────────────────────────────
          SERVICES OVERVIEW — Elegant grid
      ──────────────────────────────────────────────────── */}
      <section className="section-xl bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="eyebrow">{isZh ? '我们的专业' : 'Our Expertise'}</span>
            <h2 className="section-heading text-navy-900 mb-4">{t('services.title')}</h2>
            <span className="rule-gold-center" aria-hidden="true" />
            <p className="text-slate-600 max-w-2xl mx-auto mt-4" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link key={service.id} href={`/${locale}/services/${service.id}`} className="group block">
                <article className="service-card h-full">
                  {/* Icon */}
                  <div className="service-icon text-gold-500">
                    {serviceIcons[service.id]}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-navy-900 mb-2 group-hover:text-gold-600 transition-colors duration-250">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-gold-500 text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-0 group-hover:translate-x-1">
                    <span>{isZh ? '了解更多' : 'Learn more'}</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/services`} className="btn-outline-dark">
              {t('services.overview')}
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          ABOUT STRIP — Dark, authoritative
      ──────────────────────────────────────────────────── */}
      <section
        className="relative section-xl overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0B1626 0%, #0F1F38 100%)' }}
      >
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — text */}
            <div>
              <span className="eyebrow">{isZh ? '关于我们' : 'About Us'}</span>
              <h2 className="font-serif font-semibold text-cream-100 mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.015em', lineHeight: '1.2' }}>
                {t('about.title')}
              </h2>
              <span className="rule-gold" aria-hidden="true" />
              <p className="text-slate-300 leading-relaxed mb-8" style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>
                {t('about.missionText')}
              </p>
              <Link href={`/${locale}/about`} className="btn-primary">
                {t('nav.about')}
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Right — values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, i) => (
                <div
                  key={value.key}
                  className="card-navy p-6 group"
                  style={{ borderColor: 'rgba(255,255,255,0.07)' }}
                >
                  <div className="mb-3 text-gold-500 opacity-70 group-hover:opacity-100 transition-opacity">
                    {valueIcons[i]}
                  </div>
                  <p className="text-cream-200 text-sm font-medium leading-snug">
                    {value.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          CTA BANNER — Refined, not garish
      ──────────────────────────────────────────────────── */}
      <section className="section-lg bg-cream-100" style={{ borderTop: '1px solid #EDE7D8' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="eyebrow text-gold-600">{isZh ? '开始合作' : 'Start a Conversation'}</span>
          <h2 className="section-heading text-navy-900 mb-4">{t('contact.title')}</h2>
          <span className="rule-gold-center" aria-hidden="true" />
          <p className="text-slate-600 mb-10 mt-4 max-w-xl mx-auto" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            {t('contact.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${locale}/contact`} className="btn-primary">
              {isZh ? '联系我们' : 'Contact Us'}
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href={`/${locale}/services`} className="btn-outline-dark">
              {isZh ? '探索服务' : 'Explore Services'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
