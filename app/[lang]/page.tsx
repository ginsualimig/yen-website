import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface HomePageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const isZh = locale === 'zh';

  return {
    title: `${t('hero.title')} | Yen Investment Consulting`,
    description: t('hero.description'),
    openGraph: {
      title: `${t('hero.title')} | Yen Investment Consulting`,
      description: t('hero.description'),
      type: 'website',
      url: `https://yen-consulting.vercel.app/${locale}`,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);

  const services = [
    {
      id: 'mna',
      title: t('services.mna.title'),
      description: t('services.mna.short'),
    },
    {
      id: 'business-improvement',
      title: t('services.business-improvement.title'),
      description: t('services.business-improvement.short'),
    },
    {
      id: 'rollup-strategy',
      title: t('services.rollup-strategy.title'),
      description: t('services.rollup-strategy.short'),
    },
    {
      id: 'direct-investment',
      title: t('services.direct-investment.title'),
      description: t('services.direct-investment.short'),
    },
    {
      id: 'business-management',
      title: t('services.business-management.title'),
      description: t('services.business-management.short'),
    },
    {
      id: 'research-reports',
      title: t('services.research-reports.title'),
      description: t('services.research-reports.short'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yen-navy to-yen-navy-light py-20 md:py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-block px-8 py-3 bg-yen-gold text-yen-navy rounded-lg font-semibold hover:bg-yen-gold-light transition-colors"
              >
                {t('hero.cta')}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-block px-8 py-3 border-2 border-yen-gold text-yen-gold rounded-lg font-semibold hover:bg-yen-gold hover:text-yen-navy transition-colors"
              >
                {t('services.overview')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-yen-navy mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-yen-gray-dark">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={`/${locale}/services/${service.id}`}>
                <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-yen-gold hover:shadow-lg transition-all duration-300 h-full group">
                  <h3 className="text-xl font-semibold text-yen-navy mb-3 group-hover:text-yen-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-yen-gray-dark group-hover:text-yen-navy transition-colors">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-yen-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-semibold">{t('about.title').split(' ')[0]}</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/services`}
              className="inline-block px-6 py-3 bg-yen-gold text-yen-navy rounded-lg font-semibold hover:bg-yen-gold-light transition-colors"
            >
              {t('services.overview')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-24 bg-yen-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                {t('about.missionText')}
              </p>
              <Link
                href={`/${locale}/about`}
                className="inline-block px-6 py-3 bg-yen-gold text-yen-navy rounded-lg font-semibold hover:bg-yen-gold-light transition-colors"
              >
                {t('nav.about')}
              </Link>
            </div>
            <div className="bg-gradient-to-br from-yen-navy-light to-yen-navy p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-yen-gold font-semibold mb-2">{t('about.excellence')}</h3>
                </div>
                <div>
                  <h3 className="text-yen-gold font-semibold mb-2">{t('about.integrity')}</h3>
                </div>
                <div>
                  <h3 className="text-yen-gold font-semibold mb-2">{t('about.expertise')}</h3>
                </div>
                <div>
                  <h3 className="text-yen-gold font-semibold mb-2">{t('about.innovation')}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-yen-gold to-yen-gold-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yen-navy mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-yen-navy mb-8">
            {t('contact.subtitle')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block px-8 py-3 bg-yen-navy text-white rounded-lg font-semibold hover:bg-yen-gray-dark transition-colors"
          >
            {t('contact.form.submit')}
          </Link>
        </div>
      </section>
    </>
  );
}
