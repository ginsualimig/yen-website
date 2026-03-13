import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  return {
    title: `${t('contact.title')} | Yen Investment Consulting`,
    description: t('contact.subtitle'),
    openGraph: {
      title: `${t('contact.title')} | Yen Investment Consulting`,
      description: t('contact.subtitle'),
      type: 'website',
      url: `https://yen-website.vercel.app/${locale}/contact`,
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const isZh = locale === 'zh';

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
              {isZh ? '联系我们' : 'Get in Touch'}
            </span>
          </div>
          <h1 className="font-serif font-bold text-cream-100 mb-5 text-balance" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            {t('contact.title')}
          </h1>
          <p className="text-slate-300 max-w-2xl" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* ── Contact Main ──────────────────────────────────── */}
      <section className="section-xl bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: Office info — 2 columns */}
            <div className="lg:col-span-2 space-y-10">

              {/* Office Card */}
              <div>
                <span className="eyebrow">{isZh ? '办公室' : 'Office'}</span>
                <h2 className="section-heading text-navy-900 mb-4" style={{ fontSize: '1.5rem' }}>
                  {isZh ? '广州办公室' : 'Guangzhou Office'}
                </h2>
                <span className="rule-gold" aria-hidden="true"/>

                <div className="mt-4 card-premium p-6 space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-1 font-semibold">{t('contact.address')}</p>
                      <p className="text-slate-700 whitespace-pre-line leading-relaxed text-sm">
                        {t('footer.address')}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-100" aria-hidden="true"/>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-1 font-semibold">{t('contact.email')}</p>
                      <a
                        href={`mailto:${t('footer.email')}`}
                        className="text-navy-900 hover:text-gold-600 transition-colors text-sm font-medium"
                      >
                        {t('footer.email')}
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-slate-100" aria-hidden="true"/>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide mb-1 font-semibold">{t('contact.phone')}</p>
                      <a
                        href={`tel:${t('footer.phone')}`}
                        className="text-navy-900 hover:text-gold-600 transition-colors text-sm font-medium"
                      >
                        {t('footer.phone')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-semibold text-navy-900 mb-4 text-base">
                  {isZh ? '办公时间' : 'Office Hours'}
                </h3>
                <div
                  className="rounded-lg p-6 space-y-4"
                  style={{ background: 'linear-gradient(135deg, #0B1626 0%, #0F1F38 100%)' }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-cream-200 text-sm font-semibold mb-0.5">
                        {isZh ? '周一至周五' : 'Monday — Friday'}
                      </p>
                      <p className="text-slate-400 text-xs">09:00 – 18:00 GMT+8</p>
                    </div>
                    <span className="text-xs text-gold-500 font-medium bg-gold-500 bg-opacity-10 px-2 py-1 rounded">
                      {isZh ? '营业中' : 'Open'}
                    </span>
                  </div>

                  <div className="h-px bg-white bg-opacity-5" aria-hidden="true"/>

                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-0.5">
                      {isZh ? '周末' : 'Weekends'}
                    </p>
                    <p className="text-slate-500 text-xs">{isZh ? '按预约' : 'By appointment'}</p>
                  </div>

                  <div className="h-px bg-white bg-opacity-5" aria-hidden="true"/>

                  <p className="text-slate-500 text-xs leading-relaxed">
                    {isZh
                      ? '我们将在24个工作小时内回复邮件咨询。'
                      : 'Email enquiries are responded to within 24 business hours.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Maps — 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="section-heading text-navy-900 mb-4" style={{ fontSize: '1.5rem' }}>
                  {isZh ? '位置' : 'Location'}
                </h2>
                <span className="rule-gold" aria-hidden="true"/>
              </div>

              {/* Google Maps placeholder */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-500" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-sm font-semibold text-navy-900">Google Maps</p>
                </div>
                <div
                  className="rounded-lg h-72 flex items-center justify-center border-2 border-dashed"
                  style={{ background: '#F5F1E8', borderColor: 'rgba(201,169,97,0.3)' }}
                >
                  <div className="text-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-gold-400 mx-auto mb-3" aria-label="Map pin">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-navy-900 font-semibold text-sm mb-1">
                      {isZh ? '粤海天河城大厦' : 'Yuhai Tianhe City Tower'}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {isZh ? '互动地图即将嵌入此处' : 'Interactive map will be embedded here'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Baidu Maps placeholder */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-500" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <p className="text-sm font-semibold text-navy-900">百度地图 (Baidu Maps)</p>
                </div>
                <div
                  className="rounded-lg h-72 flex items-center justify-center border-2 border-dashed"
                  style={{ background: '#F5F1E8', borderColor: 'rgba(201,169,97,0.3)' }}
                >
                  <div className="text-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 text-gold-400 mx-auto mb-3" aria-label="Map">
                      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-navy-900 font-semibold text-sm mb-1">百度地图</p>
                    <p className="text-slate-500 text-xs">
                      {isZh ? '中国优化地图，方便本地访问' : 'China-optimized map for local access'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Indicators ──────────────────────────────── */}
      <section
        className="section-lg"
        style={{ background: 'linear-gradient(160deg, #0B1626 0%, #0F1F38 100%)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: isZh ? '全球覆盖' : 'Global Reach',
                desc:  isZh ? '专注服务亚太地区客户' : 'Serving clients across Asia-Pacific',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: isZh ? '专家团队' : 'Expert Team',
                desc:  isZh ? '数十年丰富行业经验' : 'Decades of combined experience',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: isZh ? '快速响应' : 'Quick Response',
                desc:  isZh ? '24工作小时内回复' : '24-hour business response',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-gold-500 flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-cream-100 font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
