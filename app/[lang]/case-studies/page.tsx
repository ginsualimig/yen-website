import Link from 'next/link';
import { Locale } from '@/lib/locales';
import type { Metadata } from 'next';
import { caseStudies } from '@/lib/caseStudies';

interface CaseStudiesIndexProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }];
}

export async function generateMetadata({ params }: CaseStudiesIndexProps): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === 'zh';

  const title = isZh ? '案例研究 | Yenturi' : 'Case Studies | Yenturi';
  const description = isZh
    ? '我们与机构投资者和企业合作，推动战略转型和价值创造的真实案例。'
    : 'Real examples of our work with institutional investors and corporations, driving strategic transformation and value creation.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://yenturi.com/${lang}/case-studies`,
    },
  };
}

export default async function CaseStudiesIndexPage({ params }: CaseStudiesIndexProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const isZh = locale === 'zh';

  return (
    <div id="main-content" className="bg-cream-100">
      {/* Hero */}
      <section className="page-hero relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div
          className="absolute -top-16 -right-16 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8 bg-gold-500 opacity-60" aria-hidden="true" />
            <span className="text-gold-500 font-sans text-xs font-semibold uppercase tracking-[0.15em]">
              {isZh ? '我们的工作' : 'Our Work'}
            </span>
          </div>
          <h1
            className="font-serif font-bold text-cream-100 mb-5 text-balance"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
          >
            {isZh ? '案例研究' : 'Case Studies'}
          </h1>
          <p className="text-slate-300 max-w-2xl" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            {isZh
              ? '我们与机构投资者和企业合作，推动战略转型和价值创造的真实案例。'
              : 'Real examples of our work with institutional investors and corporations, driving strategic transformation and value creation.'}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link key={cs.id} href={`/${locale}/case-studies/${cs.slug}`} className="group block">
                <article className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-6 pt-8 pb-6">
                    <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                      {isZh ? cs.industryZh : cs.industry}
                    </p>
                    <h2 className="font-serif font-bold text-cream-100 text-xl mb-2 leading-tight">
                      {isZh ? cs.titleZh : cs.title}
                    </h2>
                  </div>

                  {/* Body */}
                  <div className="px-6 py-6 flex-1 flex flex-col">
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {isZh ? cs.summaryZh : cs.summary}
                    </p>

                    {/* Metrics Preview */}
                    <div className="border-t border-slate-100 pt-4">
                      {cs.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} className="mb-3 last:mb-0">
                          <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">
                            {isZh ? metric.labelZh : metric.label}
                          </p>
                          <p className="text-lg font-bold text-gold-500">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 group-hover:bg-slate-100 transition-colors">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
                      {isZh ? '阅读案例研究' : 'Read Case Study'}
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-16 text-center">
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-500 text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {isZh ? '返回关于我们' : 'Back to About'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
