import ContactForm from '@/components/ContactForm';
import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface ContactPageProps {
  params: {
    lang: Locale;
  };
}

export function generateMetadata({ params }: ContactPageProps): Metadata {
  const locale = params.lang as Locale;
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

export default function ContactPage({ params }: ContactPageProps) {
  const locale = params.lang as Locale;
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

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-yen-navy mb-8">
                Send us a Message
              </h2>
              <ContactForm locale={locale} />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <div>
                <h3 className="text-xl font-bold text-yen-navy mb-4">
                  {t('contact.address')}
                </h3>
                <div className="bg-yen-gray-bg p-6 rounded-lg border-l-4 border-yen-gold">
                  <p className="text-yen-gray-dark whitespace-pre-line font-semibold mb-4">
                    {t('footer.address')}
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="text-xl font-bold text-yen-navy mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="bg-yen-gray-bg p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">{t('contact.email')}</p>
                    <a
                      href="mailto:contact@yen-consulting.com"
                      className="text-lg font-semibold text-yen-navy hover:text-yen-gold transition-colors"
                    >
                      {t('footer.email')}
                    </a>
                  </div>
                  <div className="bg-yen-gray-bg p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">{t('contact.phone')}</p>
                    <a
                      href="tel:+8620"
                      className="text-lg font-semibold text-yen-navy hover:text-yen-gold transition-colors"
                    >
                      {t('footer.phone')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="text-xl font-bold text-yen-navy mb-4">Location</h3>
                <div className="bg-yen-gray-bg p-6 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-yen-gold border-opacity-30">
                  <div className="text-center">
                    <p className="text-yen-navy font-semibold mb-2">📍 Guangzhou Office</p>
                    <p className="text-sm text-yen-gray-dark">
                      Interactive map coming soon<br />
                      (Google Maps + Baidu Maps)
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-xl font-bold text-yen-navy mb-4">
                  {locale === 'en' ? 'Office Hours' : '办公时间'}
                </h3>
                <div className="bg-yen-navy text-white p-6 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">{locale === 'en' ? 'Monday - Friday' : '周一至周五'}:</span>{' '}
                      09:00 - 18:00
                    </p>
                    <p>
                      <span className="font-semibold">{locale === 'en' ? 'Saturday & Sunday' : '周六日'}:</span>{' '}
                      {locale === 'en' ? 'By appointment' : '按预约'}
                    </p>
                    <p className="text-gray-300 mt-4">
                      {locale === 'en'
                        ? 'We respond to inquiries within 24 business hours.'
                        : '我们将在24个工作小时内回复您的询问。'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-yen-gray-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yen-navy mb-12 text-center">
            {locale === 'en' ? 'Frequently Asked Questions' : '常见问题'}
          </h2>
          <div className="space-y-6">
            {[
              {
                q: locale === 'en' ? 'What is your response time?' : '您的响应时间是多少？',
                a: locale === 'en'
                  ? 'We typically respond to inquiries within 24 business hours.'
                  : '我们通常在24个工作小时内回复。',
              },
              {
                q: locale === 'en' ? 'Do you offer remote consultations?' : '您是否提供远程咨询？',
                a: locale === 'en'
                  ? 'Yes, we offer both in-person and remote consultation services.'
                  : '是的，我们提供线上和线下两种咨询服务。',
              },
              {
                q: locale === 'en' ? 'What markets do you serve?' : '您为哪些市场提供服务？',
                a: locale === 'en'
                  ? 'We specialize in Asia-Pacific markets with particular expertise in China, Southeast Asia, and emerging markets.'
                  : '我们专注于亚太市场，特别是中国、东南亚和新兴市场。',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border-l-4 border-yen-gold">
                <h3 className="text-lg font-semibold text-yen-navy mb-3">{faq.q}</h3>
                <p className="text-yen-gray-dark">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
