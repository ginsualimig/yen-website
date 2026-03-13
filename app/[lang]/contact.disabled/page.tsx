import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

interface ContactPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  return {
    title: `${t('contact.title')} | Yenturi`,
    description: t('contact.subtitle'),
    openGraph: {
      title: `${t('contact.title')} | Yenturi`,
      description: t('contact.subtitle'),
      type: 'website',
      url: `https://yenturi.com/${locale}/contact`,
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

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #060D1A 0%, #0B1626 60%, #0F1F38 100%)',
          paddingTop: '6rem',
          paddingBottom: '6rem',
        }}
      >
        {/* Background accent */}
        <div
          className="absolute -top-20 -right-20 w-[540px] h-[540px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,169,97,0.07) 0%, transparent 68%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,110,168,0.06) 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8 opacity-60" style={{ background: '#C9A961' }} aria-hidden="true" />
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: '#C9A961' }}>
              {isZh ? '联系我们' : 'Contact'}
            </span>
          </div>
          <h1
            className="font-serif font-bold text-balance mb-5"
            style={{
              color: '#FAF8F3',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
            }}
          >
            {t('contact.title')}
          </h1>
          <p
            className="max-w-2xl"
            style={{ color: '#ADB5BD', fontSize: '1.125rem', lineHeight: '1.8' }}
          >
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ──────────────────────────────────────── */}
      <section className="py-20 md:py-28" style={{ background: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

            {/* ── LEFT: Contact Info ────────────────────────────── */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Office Address */}
              <div
                className="rounded-lg p-8 border"
                style={{
                  background: 'linear-gradient(160deg, #060D1A 0%, #0B1626 100%)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-5"
                  style={{ background: 'rgba(201,169,97,0.12)' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                    style={{ color: '#C9A961' }}
                    aria-hidden="true"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: '#C9A961' }}
                >
                  {t('contact.officeLabel')}
                </p>
                <address
                  className="not-italic whitespace-pre-line leading-relaxed"
                  style={{ color: '#DEE2E6', fontSize: '1rem', lineHeight: '1.75' }}
                >
                  {t('footer.address')}
                </address>
              </div>

              {/* Email */}
              <div
                className="rounded-lg p-8 border"
                style={{
                  background: 'linear-gradient(160deg, #060D1A 0%, #0B1626 100%)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-5"
                  style={{ background: 'rgba(201,169,97,0.12)' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                    style={{ color: '#C9A961' }}
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: '#C9A961' }}
                >
                  {t('contact.emailLabel')}
                </p>
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="transition-colors duration-250 hover:opacity-75"
                  style={{ color: '#DEE2E6', fontSize: '1rem' }}
                >
                  {t('contact.email')}
                </a>
              </div>

              {/* Company Details */}
              <div
                className="rounded-lg p-8 border"
                style={{
                  background: 'linear-gradient(160deg, #060D1A 0%, #0B1626 100%)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md mb-5"
                  style={{ background: 'rgba(201,169,97,0.12)' }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-5 h-5"
                    style={{ color: '#C9A961' }}
                    aria-hidden="true"
                  >
                    <path
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: '#C9A961' }}
                >
                  {t('contact.companyLabel')}
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#868E96' }}>
                      {isZh ? '公司名称' : 'Company Name'}
                    </p>
                    <p style={{ color: '#DEE2E6', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                      {t('footer.companyNameCn')}
                    </p>
                  </div>
                  <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#868E96' }}>
                      {t('contact.registrationLabel')}
                    </p>
                    <p
                      className="font-mono"
                      style={{ color: '#ADB5BD', fontSize: '0.875rem', letterSpacing: '0.04em' }}
                    >
                      {t('footer.registrationNumber')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Contact Form ───────────────────────────── */}
            <div className="lg:col-span-3">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRODUCTION NOTE ─────────────────────────────────── */}
      <section
        className="py-16"
        style={{
          background: 'linear-gradient(160deg, #060D1A 0%, #0B1626 100%)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <div
            className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-6"
            style={{ background: 'rgba(201,169,97,0.1)', border: '1px solid rgba(201,169,97,0.2)' }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-5 h-5"
              style={{ color: '#C9A961' }}
              aria-hidden="true"
            >
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p
            className="font-serif font-semibold mb-3"
            style={{ color: '#FAF8F3', fontSize: '1.25rem', letterSpacing: '-0.01em' }}
          >
            {isZh ? '我们通过介绍开展业务' : 'We Work by Introduction'}
          </p>
          <p style={{ color: '#868E96', fontSize: '0.9375rem', lineHeight: '1.75' }}>
            {isZh
              ? '我们的新客户关系通常通过现有客户或受信任合作伙伴的个人介绍建立。如您有兴趣合作，欢迎通过上方表单或电子邮件与我们联系。'
              : 'New client relationships at Yenturi are typically established through personal introduction from existing clients or trusted partners. If you are interested in engaging with us, we welcome you to reach out via the form above or by email.'}
          </p>
        </div>
      </section>
    </div>
  );
}
