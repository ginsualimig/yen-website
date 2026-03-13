import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';
import { articles, topicLabels } from '@/lib/insights';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  const isZh = locale === 'zh';
  const title = isZh ? article.titleZh : article.titleEn;
  const description = isZh ? article.descriptionZh : article.descriptionEn;

  return {
    title: `${title} | Yenturi`,
    description: description,
    openGraph: {
      title: `${title} | Yenturi`,
      description: description,
      type: 'article',
      url: `https://yenturi.com/${locale}/insights/${slug}`,
      publishedTime: article.publishedDate,
    },
  };
}

export async function generateStaticParams() {
  return articles.map(article => ({
    slug: article.slug,
    lang: 'en',
  })).concat(
    articles.map(article => ({
      slug: article.slug,
      lang: 'zh',
    }))
  );
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { lang, slug } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const isZh = locale === 'zh';

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Get related articles from the same region
  const relatedArticles = articles
    .filter(a => a.region === article.region && a.id !== article.id)
    .slice(0, 2);

  return (
    <div id="main-content">
      {/* ARTICLE HEADER */}
      <section className="page-hero relative overflow-hidden" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div
          className="absolute -top-16 -right-16 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <Link
              href={`/${locale}/insights`}
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors text-sm font-semibold"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 8H3m5-5l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {isZh ? '返回见解' : 'Back to Insights'}
            </Link>
          </div>

          {/* Region & Topics */}
          <div className="flex items-center gap-3 flex-wrap mb-4">
            <p className="text-xs uppercase tracking-widest font-semibold text-gold-400">
              {isZh ? article.regionLabelZh : article.regionLabelEn}
            </p>
            <span className="text-gold-400" aria-hidden="true">•</span>
            <div className="flex gap-2">
              {article.topics.map(topic => (
                <span key={topic} className="text-xs bg-gold-400 bg-opacity-20 text-gold-300 px-2 py-1 rounded">
                  {isZh ? topicLabels[topic].zh : topicLabels[topic].en}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif font-bold text-cream-100 mb-5 text-balance" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            {isZh ? article.titleZh : article.titleEn}
          </h1>

          {/* Article meta */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-slate-400 text-sm">
            <time dateTime={article.publishedDate}>
              {new Date(article.publishedDate).toLocaleDateString(isZh ? 'zh-CN' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="hidden sm:block text-slate-600">•</span>
            <span>{article.readTime} {isZh ? '分钟阅读' : 'min read'}</span>
            <span className="hidden sm:block text-slate-600">•</span>
            <span>{isZh ? article.author : article.author}</span>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <article className="prose prose-sm md:prose-base max-w-none text-slate-700">
            {/* Render markdown-like content */}
            {(isZh ? article.contentZh : article.contentEn).split('\n\n').map((paragraph, i) => {
              // Handle headings
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={i} className="font-serif font-bold text-navy-900 text-2xl mt-8 mb-4 leading-tight">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }

              // Handle bold lists
              if (paragraph.startsWith('- **')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 mb-6 text-slate-700">
                    {items.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item.replace('- ', '').replace(/\*\*/g, '')}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Handle numbered lists
              if (paragraph.match(/^\d\./)) {
                const items = paragraph.split('\n');
                return (
                  <ol key={i} className="list-decimal list-inside space-y-2 mb-6 text-slate-700">
                    {items.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item.replace(/^\d\. /, '')}
                      </li>
                    ))}
                  </ol>
                );
              }

              // Regular paragraphs
              return (
                <p key={i} className="text-slate-700 leading-relaxed mb-6" style={{ lineHeight: '1.8', fontSize: '1.0625rem' }}>
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* Article footer */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-gold-600 mb-2">
                  {isZh ? '关于作者' : 'About the Author'}
                </p>
                <p className="text-slate-700 font-medium">{article.author}</p>
                <p className="text-sm text-slate-500 mt-1">
                  {isZh
                    ? 'Yenturi研究团队专注于亚太地区市场分析和战略咨询。'
                    : 'The Yenturi research team focuses on Asia-Pacific market analysis and strategic advisory.'}
                </p>
              </div>
              <Link
                href={`/${locale}/insights`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-cream-100 font-semibold rounded transition-all duration-250 hover:bg-navy-800"
              >
                {isZh ? '返回所有文章' : 'Back to All Articles'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className="section-xl bg-slate-50">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-navy-900 mb-4 text-2xl">
                {isZh ? '相关文章' : 'Related Articles'}
              </h2>
              <span className="rule-gold-center" aria-hidden="true"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/${locale}/insights/${relatedArticle.slug}`}
                  className="group block"
                >
                  <article className="card-premium p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <p className="text-xs uppercase tracking-widest font-semibold text-gold-600">
                        {isZh ? relatedArticle.regionLabelZh : relatedArticle.regionLabelEn}
                      </p>
                      <div className="flex gap-1">
                        {relatedArticle.topics.slice(0, 2).map(topic => (
                          <span key={topic} className="text-xs bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                            {isZh ? topicLabels[topic].zh : topicLabels[topic].en}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="font-serif font-semibold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors duration-250 text-lg leading-tight flex-1">
                      {isZh ? relatedArticle.titleZh : relatedArticle.titleEn}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {isZh ? relatedArticle.descriptionZh : relatedArticle.descriptionEn}
                    </p>
                    <div className="flex items-center gap-2 text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-250">
                      <span>{isZh ? '阅读文章' : 'Read Article'}</span>
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
      )}
    </div>
  );
}
