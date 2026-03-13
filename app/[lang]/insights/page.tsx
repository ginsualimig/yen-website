import { Locale } from '@/lib/locales';
import type { Metadata } from 'next';
import InsightsClient from './InsightsClient';

interface InsightsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Insights | Yenturi`,
    description: 'Professional analysis and perspectives on Asia-Pacific policy, economics, and market developments.',
    openGraph: {
      title: `Insights | Yenturi`,
      type: 'website',
      url: `https://yenturi.com/insights`,
    },
  };
}

export default async function InsightsPage({ params }: InsightsPageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const isZhLocale = locale === 'zh';

  return (
    <div id="main-content">
      {/* PAGE HERO */}
      <section className="page-hero relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div
          className="absolute -top-16 -right-16 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block h-px w-8 bg-gold-500 opacity-60" aria-hidden="true"/>
            <span className="text-gold-500 font-sans text-xs font-semibold uppercase tracking-[0.15em]">
              {isZhLocale ? '见解观点' : 'Insights'}
            </span>
          </div>
          <h1 className="font-serif font-bold text-cream-100 mb-5 text-balance" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            {isZhLocale ? '亚太地区市场洞察' : 'Asia-Pacific Market Insights'}
          </h1>
          <p className="text-slate-300 max-w-2xl" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            {isZhLocale
              ? '关于中国、澳大利亚和东南亚政策、经济动向和战略机遇的深度分析。'
              : 'In-depth analysis of policy developments, economic trends, and strategic opportunities.'}
          </p>
        </div>
      </section>

      {/* FILTERS & ARTICLES */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <InsightsClient locale={locale} />
        </div>
      </section>
    </div>
  );
}
