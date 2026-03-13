import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';
import { articles } from '@/lib/insights';
import type { Metadata } from 'next';
import VenturiDivider from '@/components/VenturiDivider';

interface InsightsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: InsightsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const isZh = locale === 'zh';
  return {
    title: `${isZh ? '洞察' : 'Insights'} | Yenturi`,
    description: isZh
      ? '关于亚太地区政策、经济和市场动向的专业分析和观点。'
      : 'Professional analysis and perspectives on Asia-Pacific policy, economics, and market developments.',
    openGraph: {
      title: `${isZh ? '洞察' : 'Insights'} | Yenturi`,
      type: 'website',
      url: `https://yenturi.com/${locale}/insights`,
    },
  };
}

export default async function InsightsPage({ params }: InsightsPageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const isZhLocale = locale === 'zh';

  // Group articles by region
  const articlesByRegion = {
    china: articles.filter(a => a.region === 'china'),
    'southeast-asia': articles.filter(a => a.region === 'southeast-asia'),
    australia: articles.filter(a => a.region === 'australia'),
  };

  const regions = [
    { key: 'china', labelEn: 'China', labelZh: '中国' },
    { key: 'southeast-asia', labelEn: 'Southeast Asia', labelZh: '东南亚' },
    { key: 'australia', labelEn: 'Australia', labelZh: '澳大利亚' },
  ];

  return (
    <div id="main-content">
      {/* PAGE HERO */}
      <section className="page-hero relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
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
              : 'In-depth analysis of policy developments, economic trends, and strategic opportunities across China, Australia, and Southeast Asia.'}
          </p>
        </div>
      </section>

      {/* ARTICLES GRID BY REGION */}
      {regions.map((region) => {
        const regionArticles = articlesByRegion[region.key as keyof typeof articlesByRegion];
        if (regionArticles.length === 0) return null;

        return (
          <div key={region.key}>
            <VenturiDivider variant={region.key === 'china' ? 'dark-to-light' : 'light-to-light'} id={`divider-${region.key}`} />

            <section className={`section-xl ${region.key === 'china' ? 'bg-cream-100' : region.key === 'southeast-asia' ? 'bg-cream-100' : 'bg-cream-100'}`}>
              <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="text-center mb-12">
                  <h2 className="font-serif font-bold text-navy-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.015em' }}>
                    {isZhLocale ? region.labelZh : region.labelEn}
                  </h2>
                  <span className="rule-gold-center" aria-hidden="true"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regionArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/${locale}/insights/${article.slug}`}
                      className="group block h-full"
                    >
                      <article className="card-premium p-8 flex flex-col h-full">
                        {/* Meta */}
                        <div className="mb-4">
                          <p className="text-xs uppercase tracking-widest font-semibold text-gold-600 mb-2">
                            {isZhLocale ? article.regionLabelZh : article.regionLabelEn}
                          </p>
                          <p className="text-xs text-slate-400">
                            {new Date(article.publishedDate).toLocaleDateString(isZhLocale ? 'zh-CN' : 'en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })} • {article.readTime} {isZhLocale ? '分钟阅读' : 'min read'}
                          </p>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-250 text-lg leading-tight flex-1">
                          {isZhLocale ? article.titleZh : article.titleEn}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {isZhLocale ? article.descriptionZh : article.descriptionEn}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-0 group-hover:translate-x-1">
                          <span>{isZhLocale ? '阅读文章' : 'Read Article'}</span>
                          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
