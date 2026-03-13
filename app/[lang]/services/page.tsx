import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface ServicesPageProps {
  params: {
    lang: Locale;
  };
}

export function generateMetadata({ params }: ServicesPageProps): Metadata {
  const locale = params.lang as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return {
    title: `${t('services.title')} | Yen Investment Consulting`,
    description: t('services.subtitle'),
    openGraph: {
      title: `${t('services.title')} | Yen Investment Consulting`,
      description: t('services.subtitle'),
      type: 'website',
      url: `https://yen-consulting.vercel.app/${locale}/services`,
    },
  };
}

export default function ServicesPage({ params }: ServicesPageProps) {
  const locale = params.lang as Locale;
  const t = (key: string) => getTranslation(locale, key);

  const services = [
    {
      id: 'mna',
      title: t('services.mna.title'),
      description: t('services.mna.description'),
      icon: '🤝',
    },
    {
      id: 'business-improvement',
      title: t('services.business-improvement.title'),
      description: t('services.business-improvement.description'),
      icon: '📈',
    },
    {
      id: 'rollup-strategy',
      title: t('services.rollup-strategy.title'),
      description: t('services.rollup-strategy.description'),
      icon: '🎯',
    },
    {
      id: 'direct-investment',
      title: t('services.direct-investment.title'),
      description: t('services.direct-investment.description'),
      icon: '💼',
    },
    {
      id: 'business-management',
      title: t('services.business-management.title'),
      description: t('services.business-management.description'),
      icon: '🏢',
    },
    {
      id: 'research-reports',
      title: t('services.research-reports.title'),
      description: t('services.research-reports.description'),
      icon: '📊',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yen-navy to-yen-navy-light py-16 md:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl text-gray-200">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/${locale}/services/${service.id}`}>
                <div className="h-full bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-yen-gold hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-yen-navy mb-4 group-hover:text-yen-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-yen-gray-dark mb-6 group-hover:text-yen-navy transition-colors">
                    {service.description}
                  </p>
                  <div className="flex items-center text-yen-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-yen-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            {t('contact.subtitle')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block px-8 py-3 bg-yen-gold text-yen-navy rounded-lg font-semibold hover:bg-yen-gold-light transition-colors"
          >
            {t('contact.form.submit')}
          </Link>
        </div>
      </section>
    </>
  );
}
