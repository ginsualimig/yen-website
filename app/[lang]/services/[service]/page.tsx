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
  params: Promise<{ lang: string; service: string }>;
}

export function generateStaticParams() {
  const params: Array<{ lang: string; service: string }> = [];
  locales.forEach((locale) => {
    serviceIds.forEach((service) => {
      params.push({ lang: locale, service });
    });
  });
  return params;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { lang, service } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const title = t(`services.${service}.title`);
  return {
    title: `${title} | Yenturi`,
    description: t(`services.${service}.description`),
    openGraph: {
      title: `${title} | Yenturi`,
      description: t(`services.${service}.description`),
      type: 'website',
      url: `https://yenturi.com/${locale}/services/${service}`,
    },
  };
}

// Service SVG icons
const serviceIcon: Record<string, JSX.Element> = {
  mna: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'business-improvement': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'rollup-strategy': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'direct-investment': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'business-management': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'research-reports': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const serviceDetails: Record<string, { benefits: string[]; approach: string[]; expertise: string[] }> = {
  mna: {
    benefits: [
      'Strategic deal structuring and valuation',
      'Comprehensive due diligence coordination',
      'Integration planning and execution',
      'Risk identification and mitigation',
    ],
    approach: [
      'Market analysis and target identification',
      'Transaction support and negotiation advisory',
      'Regulatory and compliance guidance',
      'Post-merger integration management',
    ],
    expertise: [
      'Cross-border M&A transactions',
      'Industry-specific consolidation',
      'Distressed asset acquisitions',
      'Strategic partnership structuring',
    ],
  },
  'business-improvement': {
    benefits: [
      'Increased operational efficiency and throughput',
      'Measurable cost reduction and waste elimination',
      'Enhanced profitability and margin expansion',
      'Stronger competitive positioning',
    ],
    approach: [
      'Current state assessment and benchmarking',
      'Best practice identification and gap analysis',
      'Process redesign and optimization',
      'Change management and capability building',
    ],
    expertise: [
      'Lean and Six Sigma methodologies',
      'Supply chain and logistics optimization',
      'Organizational restructuring',
      'Performance improvement programs',
    ],
  },
  'rollup-strategy': {
    benefits: [
      'Market consolidation and dominant positioning',
      'Enhanced scale, efficiency, and cost advantages',
      'Improved bargaining power with suppliers and customers',
      'Accelerated and de-risked growth trajectory',
    ],
    approach: [
      'Fragmented market opportunity identification',
      'Platform company and acquisition strategy',
      'Synergy quantification and capture planning',
      'Value creation roadmap development',
    ],
    expertise: [
      'Consolidation economics and valuation',
      'Platform strategy and build',
      'Add-on acquisition integration',
      'Value creation through consolidation',
    ],
  },
  'direct-investment': {
    benefits: [
      'Access to proprietary capital deployment opportunities',
      'Direct ownership and governance influence',
      'Aligned incentive structures for management',
      'Long-term compounding value creation',
    ],
    approach: [
      'Proprietary investment opportunity sourcing',
      'Rigorous valuation, structuring, and negotiation',
      'Governance framework design and implementation',
      'Active portfolio management and exit planning',
    ],
    expertise: [
      'Equity co-investment and club deals',
      'Growth capital placement',
      'Private market transaction execution',
      'Portfolio performance management',
    ],
  },
  'business-management': {
    benefits: [
      'Strategic clarity, alignment, and direction',
      'Organizational effectiveness and accountability',
      'Leadership capability development',
      'Sustainable performance improvement',
    ],
    approach: [
      'Strategy development and organizational alignment',
      'Organizational design and effectiveness',
      'Leadership assessment and coaching',
      'Performance management system design',
    ],
    expertise: [
      'Corporate strategy formulation',
      'Organizational transformation programs',
      'Executive coaching and development',
      'Board and governance improvement',
    ],
  },
  'research-reports': {
    benefits: [
      'Proprietary market intelligence and insights',
      'Rigorous competitive landscape analysis',
      'Emerging trend visibility ahead of the market',
      'Informed, evidence-based decision-making',
    ],
    approach: [
      'Primary and secondary research synthesis',
      'Quantitative data analysis and modeling',
      'Expert practitioner interviews',
      'Scenario and sensitivity modeling',
    ],
    expertise: [
      'Market sizing and long-range forecasting',
      'Competitive positioning analysis',
      'Industry trend and disruption mapping',
      'Strategic intelligence and war-gaming',
    ],
  },
};

// Check icon
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
  </svg>
);

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { lang, service } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const isZh = locale === 'zh';
  const serviceKey = `services.${service}`;
  const details = serviceDetails[service] || serviceDetails.mna;

  // Translate service detail arrays for Chinese
  const getLocalizedDetails = () => {
    const zhDetails: Record<string, { benefits: string[]; approach: string[]; expertise: string[] }> = {
      mna: {
        benefits: ['战略交易架构与估值', '全面的尽职调查协调', '整合规划与执行', '风险识别与缓解'],
        approach: ['市场分析与目标识别', '交易支持与谈判顾问', '监管与合规指导', '并购后整合管理'],
        expertise: ['跨境并购交易', '行业特定整合', '不良资产收购', '战略合作结构设计'],
      },
      'business-improvement': {
        benefits: ['提升运营效率与产出', '可衡量的成本降低与浪费消除', '盈利能力提升与利润扩大', '强化竞争定位'],
        approach: ['现状评估与基准测试', '最佳实践识别与差距分析', '流程重设计与优化', '变更管理与能力建设'],
        expertise: ['精益与六西格玛方法', '供应链与物流优化', '组织重组', '绩效改进计划'],
      },
      'rollup-strategy': {
        benefits: ['市场整合与主导地位', '规模效应与成本优势', '提升与供应商和客户的议价能力', '加速且降低风险的增长轨迹'],
        approach: ['碎片化市场机会识别', '平台公司与收购战略', '协同效应量化与实现规划', '价值创造路线图制定'],
        expertise: ['整合经济学与估值', '平台战略与构建', '补强性收购整合', '通过整合创造价值'],
      },
      'direct-investment': {
        benefits: ['获取专有资本配置机会', '直接所有权与治理影响', '管理层一致激励结构', '长期复利价值创造'],
        approach: ['专有投资机会来源', '严格的估值、结构化与谈判', '治理框架设计与实施', '积极的投资组合管理与退出规划'],
        expertise: ['股权共同投资与俱乐部交易', '成长资本配置', '私募市场交易执行', '投资组合绩效管理'],
      },
      'business-management': {
        benefits: ['战略清晰度、一致性与方向', '组织效能与问责制', '领导力能力发展', '可持续的绩效提升'],
        approach: ['战略制定与组织对齐', '组织设计与效能', '领导力评估与辅导', '绩效管理系统设计'],
        expertise: ['企业战略制定', '组织转型计划', '高管辅导与发展', '董事会与治理改进'],
      },
      'research-reports': {
        benefits: ['专有市场情报与洞察', '严格的竞争格局分析', '领先市场的新兴趋势可见性', '基于证据的决策支持'],
        approach: ['一手与二手研究综合', '定量数据分析与建模', '行业专家访谈', '情景与敏感性建模'],
        expertise: ['市场规模与长期预测', '竞争定位分析', '行业趋势与颠覆性变化图谱', '战略情报与博弈分析'],
      },
    };
    return isZh ? (zhDetails[service] || details) : details;
  };

  const localizedDetails = getLocalizedDetails();

  const currentIndex = serviceIds.indexOf(service);
  const nextServiceId = serviceIds[(currentIndex + 1) % serviceIds.length];

  return (
    <div id="main-content">

      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="page-hero relative overflow-hidden" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div
          className="absolute -top-16 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href={`/${locale}`} className="hover:text-slate-300 transition-colors">{t('nav.home')}</Link>
            <span aria-hidden="true">›</span>
            <Link href={`/${locale}/services`} className="hover:text-slate-300 transition-colors">{t('nav.services')}</Link>
            <span aria-hidden="true">›</span>
            <span className="text-slate-400">{t(`${serviceKey}.title`)}</span>
          </nav>

          <div className="flex items-start gap-5">
            {/* Service icon */}
            <div
              className="w-16 h-16 flex items-center justify-center rounded-md text-gold-400 flex-shrink-0"
              style={{ background: 'rgba(201,169,97,0.1)', border: '1px solid rgba(201,169,97,0.2)' }}
            >
              {serviceIcon[service] || serviceIcon.mna}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-gold-500 font-sans text-xs font-semibold uppercase tracking-[0.15em]">
                  {isZh ? '服务详情' : 'Service Detail'}
                </span>
              </div>
              <h1 className="font-serif font-bold text-cream-100 mb-4 text-balance" style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
                {t(`${serviceKey}.title`)}
              </h1>
              <p className="text-slate-300" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
                {t(`${serviceKey}.short`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────────── */}
      <section className="section-xl bg-cream-100">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <span className="eyebrow">{isZh ? '服务概述' : 'Overview'}</span>
          <h2 className="section-heading text-navy-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            {isZh ? '关于此服务' : 'About This Service'}
          </h2>
          <span className="rule-gold" aria-hidden="true"/>

          <p className="text-slate-600 leading-relaxed mb-8 mt-2" style={{ fontSize: '1.0625rem', lineHeight: '1.85' }}>
            {t(`${serviceKey}.description`)}
          </p>

          <div className="callout">
            <p className="text-slate-700 leading-relaxed" style={{ lineHeight: '1.8' }}>
              {isZh
                ? '我们的专家团队凭借深厚的专业知识、经过验证的方法论以及在亚太地区成功实施变革性成果的丰富经验，为客户提供卓越服务。'
                : 'Our expert team brings deep domain expertise, proven methodologies, and successful track records in delivering transformational outcomes for clients across the Asia-Pacific region.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── Key Benefits ──────────────────────────────────── */}
      <section className="section-xl" style={{ background: '#FAF8F3', borderTop: '1px solid #EDE7D8' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <span className="eyebrow">{isZh ? '核心价值' : 'Key Benefits'}</span>
          <h2 className="section-heading text-navy-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            {isZh ? '我们能为您带来什么' : 'What You Can Expect'}
          </h2>
          <span className="rule-gold" aria-hidden="true"/>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {localizedDetails.benefits.map((benefit, i) => (
              <div
                key={i}
                className="card-premium p-6 flex gap-4 items-start"
              >
                <CheckIcon/>
                <p className="text-slate-700 leading-relaxed font-medium text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ──────────────────────────────────── */}
      <section className="section-xl bg-cream-100">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <span className="eyebrow">{isZh ? '工作方法' : 'Our Approach'}</span>
          <h2 className="section-heading text-navy-900 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            {isZh ? '我们如何工作' : 'How We Work'}
          </h2>
          <span className="rule-gold" aria-hidden="true"/>

          <div className="mt-8 space-y-5">
            {localizedDetails.approach.map((item, i) => (
              <div key={i} className="flex gap-5 items-start group">
                {/* Step number */}
                <div
                  className="step-number flex-shrink-0 transition-all duration-250 group-hover:bg-gold-500 group-hover:text-navy-900"
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                {/* Content */}
                <div className="pt-2 pb-4" style={{ borderBottom: i < localizedDetails.approach.length - 1 ? '1px solid #EDE7D8' : 'none' }}>
                  <p className="text-slate-700 leading-relaxed font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise ─────────────────────────────────────── */}
      <section
        className="section-xl"
        style={{ background: 'linear-gradient(160deg, #0B1626 0%, #0F1F38 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <span className="eyebrow">{isZh ? '专业领域' : 'Areas of Expertise'}</span>
          <h2 className="font-serif font-semibold text-cream-100 mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.015em' }}>
            {isZh ? '我们的专业能力' : 'Our Specialist Capabilities'}
          </h2>
          <span className="rule-gold" aria-hidden="true"/>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {localizedDetails.expertise.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-lg flex items-start gap-4"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-2"
                  aria-hidden="true"
                />
                <p className="text-slate-300 leading-relaxed text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Next Service ──────────────────────────────────── */}
      <section className="py-10 bg-cream-100" style={{ borderTop: '1px solid #EDE7D8' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href={`/${locale}/services`}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-navy-900 transition-colors font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M13 8H3m4-4L3 8l4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {isZh ? '所有服务' : 'All Services'}
            </Link>

            <Link
              href={`/${locale}/services/${nextServiceId}`}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-navy-900 transition-colors font-medium"
            >
              {isZh ? '下一项服务' : 'Next Service'}
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Closing Statement — no contact CTA ─────────────── */}
      <section
        className="section-lg"
        style={{ background: 'linear-gradient(160deg, #060D1A 0%, #0B1626 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <span className="eyebrow">{isZh ? '我们的方式' : 'Our Approach'}</span>
          <h2 className="font-serif font-semibold text-cream-100 mb-4" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.015em' }}>
            {isZh ? '以关系为本的顾问服务' : 'Relationship-First Advisory'}
          </h2>
          <span className="rule-gold-center" aria-hidden="true"/>
          <p className="text-slate-400 mt-4 mb-8 max-w-xl mx-auto" style={{ lineHeight: '1.75' }}>
            {isZh
              ? `我们通过既有人脉网络中的个人介绍和推荐，与机构客户在${t(`${serviceKey}.title`)}领域开展合作。`
              : `Our team engages with institutional clients on ${t(`${serviceKey}.title`)} through personal introductions within our established network.`}
          </p>
          <Link href={`/${locale}/services`} className="btn-outline-light">
            {isZh ? '探索所有服务' : 'Explore All Services'}
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
