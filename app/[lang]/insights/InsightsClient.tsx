'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { articles, topicLabels, type Region, type Topic } from '@/lib/insights';

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

  // Filter articles
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const regionMatch = selectedRegions.size === 0 || selectedRegions.has(article.region);
      const topicMatch = selectedTopics.size === 0 || article.topics.some(t => selectedTopics.has(t));
      return regionMatch && topicMatch;
    });
  }, [selectedRegions, selectedTopics]);

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
      {/* FILTER CONTROLS */}
      <div className="mb-12">
        {/* Region Filters — Grouped by Geographic Area */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-900 mb-4">
            {isZhLocale ? '按地区筛选' : 'Filter by Region'}
          </h3>
          
          {/* Group regions by geographic area */}
          {Array.from(new Set(regions.map(r => r.group))).map(group => (
            <div key={group} className="mb-4">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-2">{group}</p>
              <div className="flex flex-wrap gap-2">
                {regions.filter(r => r.group === group).map(region => (
                  <button
                    key={region.key}
                    onClick={() => toggleRegion(region.key)}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-250 ${
                      selectedRegions.has(region.key)
                        ? 'bg-navy-900 text-cream-100'
                        : 'bg-white border border-slate-200 text-navy-900 hover:border-navy-900'
                    }`}
                  >
                    {isZhLocale ? region.labelZh : region.labelEn}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Topic Filters */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-900 mb-4">
            {isZhLocale ? '按主题筛选' : 'Filter by Topic'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {topics.map(topic => (
              <button
                key={topic.key}
                onClick={() => toggleTopic(topic.key)}
                className={`px-4 py-2 rounded text-sm font-medium transition-all duration-250 ${
                  selectedTopics.has(topic.key)
                    ? 'bg-gold-500 text-navy-900'
                    : 'bg-white border border-slate-200 text-navy-900 hover:border-gold-500'
                }`}
              >
                {isZhLocale ? topic.labelZh : topic.labelEn}
              </button>
            ))}
          </div>
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
