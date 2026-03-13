import { Locale } from '@/lib/locales';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/caseStudies';
import Link from 'next/link';
import type { Metadata } from 'next';

interface CaseStudyPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  const locales: Locale[] = ['en', 'zh'];
  const params: Array<{ lang: string; slug: string }> = [];
  locales.forEach((locale) => {
    slugs.forEach((slug) => {
      params.push({ lang: locale, slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: 'Not Found' };
  }

  const title = locale === 'en' ? caseStudy.title : caseStudy.titleZh;
  return {
    title: `${title} | Yenturi`,
    description: locale === 'en' ? caseStudy.summary : caseStudy.summaryZh,
    openGraph: {
      title: `${title} | Yenturi`,
      description: locale === 'en' ? caseStudy.summary : caseStudy.summaryZh,
      type: 'website',
      url: `https://yenturi.com/${locale}/case-studies/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const isZh = locale === 'zh';
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold text-navy-900">Case Study Not Found</h1>
        <Link href={`/${locale}/about`} className="btn-primary mt-8">
          Back to About
        </Link>
      </div>
    );
  }

  return (
    <div id="main-content" className="bg-cream-100">
      {/* Hero */}
      <section className="bg-navy-900 text-cream-100 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <Link
            href={`/${locale}/about`}
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 mb-8 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {isZh ? '返回' : 'Back'}
          </Link>

          <div className="mb-8">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">
              {isZh ? caseStudy.industryZh : caseStudy.industry}
            </span>
            <h1 className="font-serif font-bold text-4xl md:text-5xl mb-6 leading-tight">
              {isZh ? caseStudy.titleZh : caseStudy.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              {isZh ? caseStudy.summaryZh : caseStudy.summary}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-slate-700">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                {isZh ? '地理位置' : 'Geography'}
              </p>
              <p className="text-sm font-semibold text-cream-100">
                {isZh ? caseStudy.geographyZh : caseStudy.geography}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                {isZh ? '服务类型' : 'Service'}
              </p>
              <p className="text-sm font-semibold text-cream-100">
                {isZh ? caseStudy.serviceTypeZh : caseStudy.serviceType}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                {isZh ? '周期' : 'Timeframe'}
              </p>
              <p className="text-sm font-semibold text-cream-100">
                {isZh ? caseStudy.timeframeZh : caseStudy.timeframe}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-16">
            <h2 className="font-serif font-bold text-3xl text-navy-900 mb-6">
              {isZh ? 'The Challenge' : 'The Challenge'}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {isZh ? caseStudy.challengeZh : caseStudy.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <h2 className="font-serif font-bold text-3xl text-navy-900 mb-6">
            {isZh ? '我们的方法' : 'Our Approach'}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {isZh ? caseStudy.approachZh : caseStudy.approach}
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <h2 className="font-serif font-bold text-3xl text-navy-900 mb-6">
            {isZh ? '解决方案' : 'Solution'}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {isZh ? caseStudy.solutionZh : caseStudy.solution}
          </p>
        </div>
      </section>

      {/* Outcome + Metrics */}
      <section className="py-16 md:py-24 bg-navy-900 text-cream-100">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <h2 className="font-serif font-bold text-3xl mb-8">
            {isZh ? '成果' : 'Outcome'}
          </h2>
          <p className="text-lg leading-relaxed mb-12">
            {isZh ? caseStudy.outcomeZh : caseStudy.outcome}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="border-l-2 border-gold-400 pl-6">
                <p className="text-sm uppercase tracking-widest text-slate-400 mb-2">
                  {isZh ? metric.labelZh : metric.label}
                </p>
                <p className="text-3xl font-bold text-gold-400">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-slate-600 text-lg mb-8">
            {isZh
              ? '想讨论您的需求或了解更多？'
              : 'Interested in discussing your needs or learning more?'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={`/${locale}/about`} className="btn-primary">
              {isZh ? '返回关于我们' : 'Back to About'}
            </Link>
            <Link href={`/${locale}/services`} className="btn-outline-dark">
              {isZh ? '探索我们的服务' : 'Explore Services'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
