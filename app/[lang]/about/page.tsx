import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';
import VenturiTimeline from '@/components/VenturiTimeline';
import MetricGauge from '@/components/MetricGauge';

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  return {
    title: `${t('about.title')} | Yenturi`,
    description: t('about.missionText'),
    openGraph: {
      title: `${t('about.title')} | Yenturi`,
      description: t('about.missionText'),
      type: 'website',
      url: `https://yenturi.com/${locale}/about`,
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const isZh = locale === 'zh';

  const values = [
    {
      key: 'excellence',
      label: isZh ? '卓越' : 'Excellence',
      desc: t('about.excellence'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      key: 'integrity',
      label: isZh ? '诚信' : 'Integrity',
      desc: t('about.integrity'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
          <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      key: 'expertise',
      label: isZh ? '专业' : 'Expertise',
      desc: t('about.expertise'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      key: 'innovation',
      label: isZh ? '创新' : 'Innovation',
      desc: t('about.innovation'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '20+', label: isZh ? '年行业经验' : 'Years of Experience' },
    { value: 'APAC', label: isZh ? '区域专业覆盖' : 'Regional Reach' },
    { value: '6', label: isZh ? '核心服务领域' : 'Service Areas' },
    { value: '100%', label: isZh ? '客户保密承诺' : 'Confidentiality' },
  ];

  return (
    <div id="main-content">

      {/* PAGE HERO */}
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
              {isZh ? '关于我们' : 'About Us'}
            </span>
          </div>
          <h1 className="font-serif font-bold text-cream-100 mb-5 text-balance" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            {t('about.title')}
          </h1>
          <p className="text-slate-300 max-w-2xl" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            {t('about.missionText')}
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section-xl bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <div>
              <span className="eyebrow">{isZh ? '我们的故事' : 'Our Story'}</span>
              <h2 className="section-heading text-navy-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                {isZh ? '植根亚太的专业历程' : 'Built on Decades of APAC Experience'}
              </h2>
              <span className="rule-gold" aria-hidden="true"/>
              <div className="space-y-4 mt-4">
                <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                  {isZh
                    ? 'Yenturi是一家专注于亚太地区的机构级顾问公司。我们的团队在整个亚太地区的并购、直接投资、业务整合和企业转型领域积累了数十年的专业经验。'
                    : 'Yenturi is an institutional-grade advisory firm focused on the Asia-Pacific region. Our team has built decades of specialized experience across M&A, direct investment, business consolidation, and corporate transformation throughout APAC.'}
                </p>
                <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                  {isZh
                    ? '我们的业务建立在深厚的人际关系网络之上。我们的客户——机构投资者、上市公司、私募股权基金和家族办公室——通过个人介绍和推荐了解我们。这种以关系为先的模式，确保我们与真正理解并欣赏我们工作方式的合作伙伴共事。'
                    : 'Our business is built on deep relationship networks. Our clients — institutional investors, listed corporations, private equity funds, and family offices — come to us through personal introduction and referral. This relationship-first model ensures we work with partners who genuinely understand and value our approach.'}
                </p>
                <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                  {isZh
                    ? '我们在中国内地、香港和更广泛的亚太地区拥有深厚的本地市场知识，并将其与国际最佳实践相结合，为客户创造持久价值。'
                    : 'We combine deep local market knowledge across Mainland China, Hong Kong, and the broader Asia-Pacific region with international best practices to create enduring value for our clients.'}
                </p>
              </div>
            </div>

            {/* Stats — Metrics Gauges */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <MetricGauge
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  fill={i === 0 ? 0.8 : i === 1 ? 1 : i === 2 ? 0.75 : 1}
                  size={140}
                  index={i}
                  className="flex flex-col items-center"
                />
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-premium p-10">
              <div className="service-icon text-gold-500 mb-6 w-12 h-12 flex items-center justify-center rounded-md" style={{ background: 'linear-gradient(135deg, rgba(201,169,97,0.12) 0%, rgba(201,169,97,0.06) 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-serif font-semibold text-navy-900 mb-4" style={{ fontSize: '1.5rem' }}>
                {t('about.mission')}
              </h2>
              <div className="h-px bg-gold-400 w-8 mb-4 opacity-60" aria-hidden="true"/>
              <p className="text-slate-600 leading-relaxed">{t('about.missionText')}</p>
            </div>

            <div className="card-premium p-10">
              <div className="service-icon text-gold-500 mb-6 w-12 h-12 flex items-center justify-center rounded-md" style={{ background: 'linear-gradient(135deg, rgba(201,169,97,0.12) 0%, rgba(201,169,97,0.06) 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-serif font-semibold text-navy-900 mb-4" style={{ fontSize: '1.5rem' }}>
                {t('about.vision')}
              </h2>
              <div className="h-px bg-gold-400 w-8 mb-4 opacity-60" aria-hidden="true"/>
              <p className="text-slate-600 leading-relaxed">{t('about.visionText')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="relative section-xl overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0B1626 0%, #0F1F38 100%)' }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow">{isZh ? '我们的价值观' : 'Our Values'}</span>
            <h2 className="font-serif font-semibold text-cream-100 mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.015em' }}>
              {t('about.values')}
            </h2>
            <span className="rule-gold-center" aria-hidden="true"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <div
                key={value.key}
                className="group p-8 rounded-lg border transition-all duration-350 ease-premium flex flex-col gap-4"
                style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div className="text-gold-500 font-serif font-bold opacity-30 text-4xl leading-none group-hover:opacity-60 transition-opacity">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-gold-500">{value.icon}</div>
                <h3 className="text-cream-100 font-semibold text-base">{value.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE — Venturi Flow */}
      <section className="section-xl" style={{ background: 'linear-gradient(160deg, #0B1626 0%, #0F1F38 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-14">
            <span className="eyebrow">{isZh ? '我们的方法' : 'Our Approach'}</span>
            <h2 className="font-serif font-semibold text-cream-100 mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.015em' }}>
              {isZh ? '从问题到突破' : 'Challenge to Breakthrough'}
            </h2>
            <span className="rule-gold-center" aria-hidden="true"/>
            <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm" style={{ lineHeight: '1.7' }}>
              {isZh
                ? '我们的方法论像一条Venturi管——汇聚多个学科的专业知识，在战略突破点压缩，然后专注执行，扩展价值。'
                : 'Our methodology works like a Venturi pipe — converging multiple disciplines into strategic focus at the breakthrough point, then diverging focused execution to expand value.'}
            </p>
          </div>

          <VenturiTimeline isZh={isZh} className="mt-8" />
        </div>
      </section>

      {/* APAC FOCUS */}
      <section className="section-xl" style={{ background: '#FAF8F3', borderTop: '1px solid #EDE7D8' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="eyebrow">{isZh ? '亚太专注' : 'APAC Focus'}</span>
              <h2 className="section-heading text-navy-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                {isZh ? '亚太区域领导力' : 'Asia-Pacific Leadership'}
              </h2>
              <span className="rule-gold" aria-hidden="true"/>
              <p className="text-slate-600 leading-relaxed mb-5 mt-4" style={{ lineHeight: '1.8' }}>
                {isZh
                  ? '凭借对亚太地区的深厚专业知识，我们提供专为该地区新兴市场和成熟市场独特机遇与挑战量身定制的战略咨询服务。我们的团队将国际最佳实践与本地市场知识相结合。'
                  : 'With deep expertise in the Asia-Pacific region, we provide strategic advisory services tailored to the unique opportunities and challenges of emerging and developed markets across the region. Our team combines international best practices with local market knowledge.'}
              </p>
              <p className="text-slate-600 leading-relaxed" style={{ lineHeight: '1.8' }}>
                {isZh
                  ? '我们致力于支持机构投资者、企业和企业家在亚太地区实现可持续增长和价值创造。'
                  : 'We are committed to supporting institutional investors, corporations, and entrepreneurs in achieving sustainable growth and value creation across APAC.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { region: isZh ? '中国大陆' : 'Mainland China', note: isZh ? '核心市场' : 'Core Market' },
                { region: isZh ? '香港' : 'Hong Kong',        note: isZh ? '金融枢纽' : 'Financial Hub' },
                { region: isZh ? '东南亚' : 'Southeast Asia',  note: isZh ? '增长市场' : 'Growth Markets' },
                { region: isZh ? '大洋洲' : 'Australasia',     note: isZh ? '战略市场' : 'Strategic Markets' },
              ].map((r, i) => (
                <div key={i} className="card-premium p-6">
                  <p className="font-semibold text-navy-900 text-sm mb-1">{r.region}</p>
                  <p className="text-xs text-gold-600 font-medium tracking-wide">{r.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE — Address only, no contact form, no email/phone CTAs */}
      <section
        className="section-xl"
        style={{ background: 'linear-gradient(160deg, #060D1A 0%, #0B1626 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="eyebrow">{isZh ? '我们的位置' : 'Our Office'}</span>
          <h2 className="font-serif font-semibold text-cream-100 mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.015em' }}>
            {isZh ? '广州办公室' : 'Guangzhou Office'}
          </h2>
          <span className="rule-gold-center" aria-hidden="true"/>

          <div className="mt-8 inline-block text-left bg-white bg-opacity-5 rounded-lg p-8 border" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <p className="text-sm text-gold-500 font-semibold uppercase tracking-widest mb-3">{t('footer.office')}</p>
            <p className="text-slate-300 whitespace-pre-line leading-relaxed text-lg font-medium">
              {t('footer.address')}
            </p>
          </div>

          <p className="mt-8 text-slate-500 text-sm max-w-md mx-auto" style={{ lineHeight: '1.75' }}>
            {isZh
              ? '我们通过个人介绍和推荐与新合作伙伴建立关系。'
              : 'We establish new relationships through personal introduction and referral.'}
          </p>
        </div>
      </section>
    </div>
  );
}
