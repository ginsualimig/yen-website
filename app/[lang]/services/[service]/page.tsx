import Link from 'next/link';
import { Locale, getTranslation, locales } from '@/lib/locales';
import type { Metadata } from 'next';

const serviceIds = [
  'mna',
  'business-improvement',
  'rollup-strategy',
  'direct-investment',
  'business-management',
  'research-reports',
];

interface ServiceDetailPageProps {
  params: Promise<{
    lang: string;
    service: string;
  }>;
}

export function generateStaticParams() {
  const params: Array<{
    lang: string;
    service: string;
  }> = [];
  
  locales.forEach((locale) => {
    serviceIds.forEach((service) => {
      params.push({
        lang: locale,
        service,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { lang, service } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const serviceKey = `services.${service}` as const;
  const title = t(`${serviceKey}.title`);

  return {
    title: `${title} | Yen Investment Consulting`,
    description: t(`${serviceKey}.description`),
    openGraph: {
      title: `${title} | Yen Investment Consulting`,
      description: t(`${serviceKey}.description`),
      type: 'website',
      url: `https://yen-consulting.vercel.app/${locale}/services/${service}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { lang, service } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const serviceKey = `services.${service}` as const;

  const serviceDetails: Record<string, {
    benefits: string[];
    approach: string[];
    expertise: string[];
  }> = {
    mna: {
      benefits: [
        'Strategic deal structuring and valuation',
        'Due diligence coordination',
        'Integration planning',
        'Risk mitigation strategies',
      ],
      approach: [
        'Market analysis and target identification',
        'Transaction support and negotiation',
        'Regulatory and compliance guidance',
        'Post-merger integration',
      ],
      expertise: [
        'Cross-border M&A transactions',
        'Industry-specific consolidation',
        'Distressed acquisitions',
        'Strategic partnerships',
      ],
    },
    'business-improvement': {
      benefits: [
        'Increased operational efficiency',
        'Cost reduction and waste elimination',
        'Enhanced profitability',
        'Improved competitive positioning',
      ],
      approach: [
        'Current state assessment',
        'Best practice benchmarking',
        'Process optimization',
        'Change management support',
      ],
      expertise: [
        'Lean and Six Sigma methodologies',
        'Supply chain optimization',
        'Organizational restructuring',
        'Performance improvement programs',
      ],
    },
    'rollup-strategy': {
      benefits: [
        'Market consolidation and dominance',
        'Enhanced scale and efficiency',
        'Improved bargaining power',
        'Accelerated growth trajectory',
      ],
      approach: [
        'Fragmented market identification',
        'Acquisition strategy development',
        'Synergy identification',
        'Platform company building',
      ],
      expertise: [
        'Consolidation economics',
        'Platform strategy',
        'Add-on acquisitions',
        'Value creation in consolidation',
      ],
    },
    'direct-investment': {
      benefits: [
        'Capital deployment opportunities',
        'Direct ownership stakes',
        'Aligned incentive structures',
        'Long-term value creation',
      ],
      approach: [
        'Investment opportunity sourcing',
        'Valuation and negotiation',
        'Governance framework setup',
        'Exit strategy planning',
      ],
      expertise: [
        'Equity co-investment',
        'Growth capital placement',
        'Private market transactions',
        'Portfolio management',
      ],
    },
    'business-management': {
      benefits: [
        'Strategic clarity and direction',
        'Organizational effectiveness',
        'Leadership development',
        'Sustainable performance improvement',
      ],
      approach: [
        'Strategy development and alignment',
        'Organizational design',
        'Leadership coaching',
        'Performance management systems',
      ],
      expertise: [
        'Strategy formulation',
        'Organizational transformation',
        'Executive coaching',
        'Governance improvement',
      ],
    },
    'research-reports': {
      benefits: [
        'Market intelligence and insights',
        'Competitive analysis',
        'Industry trend visibility',
        'Informed decision-making',
      ],
      approach: [
        'Primary and secondary research',
        'Data analysis and synthesis',
        'Expert interviews',
        'Scenario modeling',
      ],
      expertise: [
        'Market sizing and forecasting',
        'Competitive positioning',
        'Industry trend analysis',
        'Strategic intelligence',
      ],
    },
  };

  const details = serviceDetails[service] || serviceDetails.mna;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yen-navy to-yen-navy-light py-16 md:py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/services`}
            className="inline-block mb-6 text-yen-gold hover:text-yen-gold-light transition-colors"
          >
            ← {t('nav.services')}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t(`${serviceKey}.title`)}
          </h1>
          <p className="text-xl text-gray-200">
            {t(`${serviceKey}.short`)}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yen-navy mb-6">Overview</h2>
          <p className="text-lg text-yen-gray-dark mb-8 leading-relaxed">
            {t(`${serviceKey}.description`)}
          </p>
          <div className="bg-yen-gold bg-opacity-10 border-l-4 border-yen-gold p-6 rounded">
            <p className="text-yen-gray-dark">
              Our expert team brings deep domain expertise, proven methodologies, and successful track records in delivering transformational outcomes for our clients across the Asia-Pacific region.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-yen-gray-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yen-navy mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-lg border-l-4 border-yen-gold">
                <div className="flex-shrink-0 text-2xl font-bold text-yen-gold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-yen-gray-dark text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-yen-navy mb-8">Our Approach</h2>
          <div className="space-y-4">
            {details.approach.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yen-gold text-yen-navy flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <p className="text-yen-gray-dark text-lg pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 md:py-24 bg-yen-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.expertise.map((item, index) => (
              <div key={index} className="bg-yen-navy-light p-6 rounded-lg border-l-4 border-yen-gold">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-yen-gold to-yen-gold-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yen-navy mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-yen-navy mb-8">
            Let us help you leverage {t(`${serviceKey}.title`).toLowerCase()} to drive your success.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-block px-8 py-3 bg-yen-navy text-white rounded-lg font-semibold hover:bg-yen-gray-dark transition-colors"
          >
            {locale === 'en' ? 'Contact Us' : '联系我们'}
          </Link>
        </div>
      </section>
    </>
  );
}
