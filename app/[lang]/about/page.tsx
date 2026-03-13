import { Locale, getTranslation } from '@/lib/locales';
import type { Metadata } from 'next';

interface AboutPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return {
    title: `${t('about.title')} | Yen Investment Consulting`,
    description: t('about.missionText'),
    openGraph: {
      title: `${t('about.title')} | Yen Investment Consulting`,
      description: t('about.missionText'),
      type: 'website',
      url: `https://yen-consulting.vercel.app/${locale}/about`,
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yen-navy to-yen-navy-light py-16 md:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-200">
            {t('about.missionText')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-yen-gray-bg p-8 rounded-lg border-l-4 border-yen-gold">
              <h2 className="text-2xl md:text-3xl font-bold text-yen-navy mb-4">
                {t('about.mission')}
              </h2>
              <p className="text-yen-gray-dark text-lg">
                {t('about.missionText')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-yen-gray-bg p-8 rounded-lg border-l-4 border-yen-gold">
              <h2 className="text-2xl md:text-3xl font-bold text-yen-navy mb-4">
                {t('about.vision')}
              </h2>
              <p className="text-yen-gray-dark text-lg">
                {t('about.visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-yen-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t('about.values')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'excellence', label: t('about.excellence') },
              { title: 'integrity', label: t('about.integrity') },
              { title: 'expertise', label: t('about.expertise') },
              { title: 'innovation', label: t('about.innovation') },
            ].map((value, index) => (
              <div
                key={value.title}
                className="bg-yen-navy-light p-6 rounded-lg text-center hover:bg-gradient-to-br hover:from-yen-gold hover:to-yen-gold-light hover:text-yen-navy transition-all duration-300 group"
              >
                <div className="text-4xl font-bold text-yen-gold mb-4 group-hover:text-yen-navy">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-lg font-semibold group-hover:text-yen-navy">
                  {value.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APAC Focus */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-yen-navy mb-8 text-center">
            Asia-Pacific Leadership
          </h2>
          <div className="bg-yen-gray-bg p-8 rounded-lg">
            <p className="text-lg text-yen-gray-dark mb-6">
              With deep expertise in the Asia-Pacific region, we provide strategic advisory services tailored to the unique opportunities and challenges of emerging and developed markets across the region. Our team combines international best practices with local market knowledge.
            </p>
            <p className="text-lg text-yen-gray-dark">
              We are committed to supporting institutional investors, corporations, and entrepreneurs in achieving sustainable growth and value creation across APAC.
            </p>
          </div>
        </div>
      </section>

      {/* Office Address */}
      <section className="py-16 md:py-24 bg-yen-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t('contact.address')}
          </h2>
          <p className="text-xl text-gray-200 mb-4">
            {t('footer.office')}
          </p>
          <p className="text-lg text-gray-200 whitespace-pre-line font-semibold">
            {t('footer.address')}
          </p>
          <div className="mt-8 flex flex-col gap-2">
            <p className="text-gray-200">
              <span className="font-semibold text-yen-gold">{t('contact.email')}:</span>{' '}
              {t('footer.email')}
            </p>
            <p className="text-gray-200">
              <span className="font-semibold text-yen-gold">{t('contact.phone')}:</span>{' '}
              {t('footer.phone')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
