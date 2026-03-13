'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { topicLabels, type Region, type Topic } from '@/lib/insights';
import { allExpandedArticles } from '@/lib/insightsExpanded';

interface InsightsClientProps {
  locale: 'en' | 'zh';
}

export default function InsightsClient({ locale }: InsightsClientProps) {
  const isZhLocale = locale === 'zh';
  const [selectedRegions, setSelectedRegions] = useState<Set<Region>>(new Set());
  const [selectedTopics, setSelectedTopics] = useState<Set<Topic>>(new Set());

  const regions: { key: Region; labelEn: string; labelZh: string; group?: string }[] = [
    { key: 'china', labelEn: 'China', labelZh: '中国', group: 'East Asia' },
    { key: 'australia', labelEn: 'Australia', labelZh: '澳大利亚', group: 'Oceania' },
    // Southeast Asia
    { key: 'vietnam', labelEn: 'Vietnam', labelZh: '越南', group: 'Southeast Asia' },
    { key: 'thailand', labelEn: 'Thailand', labelZh: '泰国', group: 'Southeast Asia' },
    { key: 'indonesia', labelEn: 'Indonesia', labelZh: '印尼', group: 'Southeast Asia' },
    { key: 'singapore', labelEn: 'Singapore', labelZh: '新加坡', group: 'Southeast Asia' },
    { key: 'philippines', labelEn: 'Philippines', labelZh: '菲律宾', group: 'Southeast Asia' },
  ];

  const topics: { key: Topic; labelEn: string; labelZh: string }[] = [
    { key: 'policy', labelEn: 'Policy', labelZh: '政策' },
    { key: 'trade', labelEn: 'Trade', labelZh: '贸易' },
    { key: 'investment', labelEn: 'Investment', labelZh: '投资' },
    { key: 'technology', labelEn: 'Technology', labelZh: '科技' },
    { key: 'markets', labelEn: 'Markets', labelZh: '市场' },
    { key: 'infrastructure', labelEn: 'Infrastructure', labelZh: '基础设施' },
  ];

  // Use expanded articles (10 total) - skip the old articles array which is now redundant
  const mergedArticles = useMemo(() => {
    // Helper to generate staggered dates (one article per month, going backwards)
    const getArticleDate = (index: number): string => {
      const baseDate = new Date(2026, 2, 14); // March 14, 2026
      baseDate.setMonth(baseDate.getMonth() - index);
      return baseDate.toISOString().split('T')[0]; // Return YYYY-MM-DD format
    };

    // Map expanded articles to the Article interface
    const expandedMapped = allExpandedArticles.map((article: any, index: number) => {
      // Map article IDs to regions and topics based on their titles/IDs
      let region: Region = 'china';
      let topics: Topic[] = ['policy', 'investment'];
      let regionLabelEn = 'China';
      let regionLabelZh = '中国';
      let titleEn = '';
      let titleZh = '';

      const id = article.id.toLowerCase();
      
      if (id.includes('australia')) {
        region = 'australia';
        regionLabelEn = 'Australia';
        regionLabelZh = '澳大利亚';
        topics = id.includes('hydrogen') ? ['infrastructure', 'investment'] : ['investment', 'trade'];
        
        if (id.includes('hydrogen')) {
          titleEn = 'Australia Green Hydrogen Export Strategy';
          titleZh = '澳大利亚绿色氢气出口战略';
        } else if (id.includes('trade')) {
          titleEn = 'Australia-China Trade Relations & Diversification';
          titleZh = '澳中贸易关系与多元化';
        } else {
          titleEn = 'Australia FDI Framework & Critical Minerals';
          titleZh = '澳大利亚外资框架与关键矿物';
        }
      } else if (id.includes('southeast') || id.includes('sea') || id.includes('asean')) {
        region = 'vietnam';
        regionLabelEn = 'Southeast Asia';
        regionLabelZh = '东南亚';
        
        if (id.includes('fintech')) {
          topics = ['technology', 'investment', 'markets'];
          titleEn = 'Southeast Asia Fintech & Digital Economy';
          titleZh = '东南亚金融科技与数字经济';
          region = 'singapore';
        } else if (id.includes('logistics')) {
          topics = ['infrastructure', 'investment', 'markets'];
          titleEn = 'Southeast Asia E-Commerce Logistics & Warehousing';
          titleZh = '东南亚电商物流与仓储';
          region = 'indonesia';
        } else if (id.includes('asean')) {
          topics = ['trade', 'investment', 'markets'];
          titleEn = 'Southeast Asia ASEAN Integration & Trade Opportunities';
          titleZh = '东盟一体化与贸易机遇';
        }
      } else if (id.includes('tech') || id.includes('semiconductor')) {
        topics = ['technology', 'investment', 'policy'];
        titleEn = 'China Tech: Semiconductors & Artificial Intelligence';
        titleZh = '中国科技：半导体与人工智能';
      } else if (id.includes('green')) {
        topics = ['infrastructure', 'investment', 'markets'];
        titleEn = 'China Green Energy Transition: Opportunities & Infrastructure';
        titleZh = '中国绿色能源转型：机遇与基础设施';
      } else if (id.includes('consumption')) {
        topics = ['markets', 'investment'];
        titleEn = 'China Consumption Recovery: Policy & Market Dynamics';
        titleZh = '中国消费复苏：政策与市场动力';
      } else if (id.includes('fdi') || id.includes('foreign-investment')) {
        topics = ['policy', 'investment'];
        titleEn = 'China Foreign Investment Framework 2026';
        titleZh = '中国外资框架2026';
      }

      const contentStr = JSON.stringify(article);
      const wordCount = contentStr.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);

      return {
        id: article.id,
        slug: article.id,
        titleEn: titleEn || article.id.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        titleZh: titleZh || article.id,
        descriptionEn: article.executiveSummary?.substring(0, 200) || 'Research whitepaper',
        descriptionZh: article.executiveSummary?.substring(0, 200) || 'Research whitepaper',
        region,
        regionLabelEn,
        regionLabelZh,
        topics,
        topicLabels,
        publishedDate: getArticleDate(index),
        author: 'Yenturi Research',
        readTime,
        contentEn: '',
        contentZh: ''
      };
    });

    // Only return expanded articles (no duplicates from old articles array)
    return expandedMapped;
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return mergedArticles.filter(article => {
      const regionMatch = selectedRegions.size === 0 || selectedRegions.has(article.region);
      const topicMatch = selectedTopics.size === 0 || article.topics.some(t => selectedTopics.has(t));
      return regionMatch && topicMatch;
    });
  }, [selectedRegions, selectedTopics, mergedArticles]);

  const toggleRegion = (region: Region) => {
    const newRegions = new Set(selectedRegions);
    if (newRegions.has(region)) {
      newRegions.delete(region);
    } else {
      newRegions.add(region);
    }
    setSelectedRegions(newRegions);
  };

  const toggleTopic = (topic: Topic) => {
    const newTopics = new Set(selectedTopics);
    if (newTopics.has(topic)) {
      newTopics.delete(topic);
    } else {
      newTopics.add(topic);
    }
    setSelectedTopics(newTopics);
  };

  return (
    <>
      {/* FILTER CONTROLS — Compact */}
      <div className="mb-8 space-y-3">
        {/* Regions & Topics on one line */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Region Pills */}
          {regions.map(region => (
            <button
              key={region.key}
              onClick={() => toggleRegion(region.key)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-all duration-250 whitespace-nowrap ${
                selectedRegions.has(region.key)
                  ? 'bg-navy-900 text-cream-100'
                  : 'bg-slate-100 border border-slate-300 text-navy-900 hover:border-navy-900'
              }`}
              title={region.group}
            >
              {isZhLocale ? region.labelZh : region.labelEn}
            </button>
          ))}
        </div>

        {/* Topics on second row */}
        <div className="flex flex-wrap items-center gap-2">
          {topics.map(topic => (
            <button
              key={topic.key}
              onClick={() => toggleTopic(topic.key)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-all duration-250 ${
                selectedTopics.has(topic.key)
                  ? 'bg-gold-500 text-navy-900'
                  : 'bg-slate-100 border border-slate-300 text-navy-900 hover:border-gold-500'
              }`}
            >
              {isZhLocale ? topic.labelZh : topic.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* ARTICLES GRID */}
      {filteredArticles.length > 0 ? (
        <div>
          <p className="text-sm text-slate-500 mb-6">
            {isZhLocale ? `显示${filteredArticles.length}篇文章` : `Showing ${filteredArticles.length} article${filteredArticles.length !== 1 ? 's' : ''}`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
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
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {isZhLocale ? article.descriptionZh : article.descriptionEn}
                  </p>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.topics.map(topic => (
                      <span key={topic} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {isZhLocale ? topicLabels[topic].zh : topicLabels[topic].en}
                      </span>
                    ))}
                  </div>

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
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-500">
            {isZhLocale ? '没有找到匹配的文章' : 'No articles match your filters'}
          </p>
        </div>
      )}
    </>
  );
}
