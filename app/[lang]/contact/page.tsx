import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface ContactPageProps {
  params: Promise<{
    lang: string;
  }>;
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
      url: `https://yen-consulting.vercel.app/${locale}/contact`,
    },
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yen-navy to-yen-navy-light py-16 md:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl text-gray-200">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Office Address */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-yen-navy mb-6">
                  {t('contact.address')}
                </h2>
                <div className="bg-yen-gray-bg p-8 rounded-lg border-l-4 border-yen-gold">
                  <p className="text-2xl font-semibold text-yen-navy mb-4">
                    {locale === 'en' ? 'Guangzhou Office' : '广州办公室'}
                  </p>
                  <p className="text-lg text-yen-gray-dark whitespace-pre-line mb-6 leading-relaxed">
                    {t('footer.address')}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{t('contact.email')}</p>
                      <a
                        href="mailto:contact@yen-consulting.com"
                        className="text-lg font-semibold text-yen-navy hover:text-yen-gold transition-colors"
                      >
                        {t('footer.email')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-xl font-bold text-yen-navy mb-4">
                  {locale === 'en' ? 'Office Hours' : '办公时间'}
                </h3>
                <div className="bg-yen-navy text-white p-6 rounded-lg space-y-3">
                  <div>
                    <p className="font-semibold">{locale === 'en' ? 'Monday - Friday' : '周一至周五'}</p>
                    <p className="text-gray-300">09:00 AM - 6:00 PM (GMT+8)</p>
                  </div>
                  <div>
                    <p className="font-semibold">{locale === 'en' ? 'Saturday & Sunday' : '周六日'}</p>
                    <p className="text-gray-300">{locale === 'en' ? 'By appointment' : '按预约'}</p>
                  </div>
                  <div className="border-t border-gray-600 pt-3 mt-3">
                    <p className="text-sm text-gray-300">
                      {locale === 'en'
                        ? '📧 We respond to emails within 24 business hours'
                        : '📧 我们将在24个工作小时内回复邮件'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-yen-navy mb-6">
                {locale === 'en' ? 'Location' : '位置'}
              </h2>
              
              {/* Google Maps Placeholder */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-yen-navy mb-3">Google Maps</h3>
                <div className="bg-yen-gray-bg rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-yen-gold border-opacity-30">
                  <div className="text-center">
                    <p className="text-4xl mb-2">📍</p>
                    <p className="text-yen-navy font-semibold">Google Maps Embed</p>
                    <p className="text-sm text-yen-gray-dark mt-2">
                      {locale === 'en'
                        ? 'Interactive map will be embedded here'
                        : '互动地图将嵌入此处'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Baidu Maps Placeholder */}
              <div>
                <h3 className="text-lg font-semibold text-yen-navy mb-3">百度地图 (Baidu Maps)</h3>
                <div className="bg-yen-gray-bg rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-yen-gold border-opacity-30">
                  <div className="text-center">
                    <p className="text-4xl mb-2">🗺️</p>
                    <p className="text-yen-navy font-semibold">百度地图 Embed</p>
                    <p className="text-sm text-yen-gray-dark mt-2">
                      {locale === 'en'
                        ? 'China-optimized map for local access'
                        : '中国优化地图，方便本地访问'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 md:py-24 bg-yen-gray-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                title: locale === 'en' ? 'Global Reach' : '全球覆盖',
                desc: locale === 'en'
                  ? 'Serving clients across Asia-Pacific'
                  : '为亚太地区客户服务'
              },
              {
                icon: '💼',
                title: locale === 'en' ? 'Expert Team' : '专家团队',
                desc: locale === 'en'
                  ? 'Decades of combined experience'
                  : '多年行业经验'
              },
              {
                icon: '📧',
                title: locale === 'en' ? 'Quick Response' : '快速响应',
                desc: locale === 'en'
                  ? '24-hour response time'
                  : '24小时内回复'
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-yen-navy mb-2">{item.title}</h3>
                <p className="text-yen-gray-dark">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
