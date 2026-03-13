export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  titleZh: string;
  summary: string;
  summaryZh: string;
  industry: string;
  industryZh: string;
  geography: string;
  geographyZh: string;
  serviceType: string;
  serviceTypeZh: string;
  challenge: string;
  challengeZh: string;
  approach: string;
  approachZh: string;
  solution: string;
  solutionZh: string;
  outcome: string;
  outcomeZh: string;
  metrics: {
    label: string;
    labelZh: string;
    value: string;
  }[];
  timeframe: string;
  timeframeZh: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'singapore-retail-consolidation',
    title: 'Multi-Sector Retail Consolidation',
    titleZh: '零售业多板块整合',
    summary: 'Strategic consolidation of four complementary retail and events businesses into a unified platform, unlocking significant synergies and accelerating growth.',
    summaryZh: '将四家互补的零售和活动企业战略性整合为统一平台，释放重大协同效应并加速增长。',
    industry: 'Retail & Events Management',
    industryZh: '零售及活动管理',
    geography: 'Southeast Asia (Singapore)',
    geographyZh: '东南亚（新加坡）',
    serviceType: 'Roll-Up Strategy & Integration',
    serviceTypeZh: '整合战略与执行',
    challenge: `Four independent businesses—an e-commerce fashion platform, two established retail chains, and a specialized events management company—operated in isolation with significant fragmentation costs and missed cross-selling opportunities. Each had strong market positions but lacked scale and operational efficiency.`,
    challengeZh: '四家独立企业—电商时装平台、两家成熟零售连锁店和专业活动管理公司—各自运营，存在严重碎片化成本和错失的交叉销售机会。虽各具强势市场地位，但缺乏规模和运营效率。',
    approach: `We identified the strategic fit: the events management company possessed the client relationships and venue access that could drive foot traffic and brand activations for the retail businesses, while the combined retail footprint provided distribution channels for events. We structured the acquisition sequence, negotiated terms, and led integration across technology, supply chain, and operations.`,
    approachZh: '我们发现了战略契合点：活动管理公司拥有客户关系和场地资源，可为零售业务驱动客流和品牌激活；而合并后的零售网络可为活动提供分销渠道。我们规划收购序列、谈判条款并领导技术、供应链和运营的整合。',
    solution: 'Unified brand architecture with dedicated operating units; centralized procurement reducing SKU costs by 23%; integrated event-retail activations generating 340% incremental foot traffic in pilot locations; shared logistics infrastructure reducing delivery times by 48%; cross-selling protocols driving average customer lifetime value increases of 156%.',
    solutionZh: '统一品牌架构及专业运营部门；集中采购使SKU成本降低23%；整合事件零售激活在试点地点产生340%增量客流；共享物流基础设施使交付时间减少48%；交叉销售协议推动客户生命周期价值平均增加156%。',
    outcome: 'Combined entity achieved 4.2x revenue growth over 24 months. Profitability improved from fragmented operations averaging 8% margins to consolidated 18% EBITDA. Market share in core categories increased from ~12% regional to ~34%. All four legacy brands retained and strengthened within the platform.',
    outcomeZh: '合并实体在24个月内实现4.2倍收入增长。盈利性从碎片化运营平均8%的利润率改善至统一的18% EBITDA。核心品类市场份额从地区~12%增至~34%。四个遗留品牌在平台内得以保留和加强。',
    metrics: [
      { label: 'Revenue Growth (24m)', labelZh: '收入增长（24个月）', value: '4.2x' },
      { label: 'EBITDA Margin Improvement', labelZh: 'EBITDA利润率提升', value: '+10pp' },
      { label: 'Market Share Growth', labelZh: '市场份额增长', value: '12% → 34%' },
      { label: 'Cost Synergies Realized', labelZh: '成本协同实现', value: '~$8.2M (yr1)' },
    ],
    timeframe: '24 months (strategy & integration)',
    timeframeZh: '24个月（战略和整合）',
  },
  {
    id: '2',
    slug: 'media-events-revenue-acceleration',
    title: 'In-Person Events Revenue Acceleration',
    titleZh: '线下活动收入加速',
    summary: `Strategic restructuring and go-to-market redesign for a multinational media company's in-person events portfolio, driving exponential revenue growth.`,
    summaryZh: '为跨国媒体公司线下活动组合进行战略重组和市场推向重设，推动收入成倍增长。',
    industry: 'Media & Events',
    industryZh: '媒体和活动',
    geography: 'Global (APAC focus)',
    geographyZh: '全球（亚太重点）',
    serviceType: 'Business Improvement & Revenue Strategy',
    serviceTypeZh: '业务改进和收入战略',
    challenge: `An established international media company operated a portfolio of in-person events across 12 markets but faced declining attendance, stagnant sponsorship yield, and fragmented ticketing and operations. Legacy event formats no longer resonated with audiences; pricing was misaligned with market demand.`,
    challengeZh: '一家成熟的国际媒体公司在12个市场运营线下活动组合，但面临参加人数下降、赞助商收益停滞、售票和运营碎片化的问题。遗留事件格式不再引起观众共鸣；定价与市场需求不符。',
    approach: `We conducted a ground-up assessment of event performance, audience segmentation, and sponsor needs. We identified underperforming formats and redesigned the top 8 events around emerging audience preferences and sponsor engagement models. We implemented dynamic pricing, tiered sponsor packages, and integrated omnichannel promotion across the company's media platforms.`,
    approachZh: '我们进行了事件绩效、观众细分和赞助商需求的自下而上评估。我们确定了表现不佳的格式，并根据新兴观众偏好和赞助商参与模式重设了前8场活动。我们实施了动态定价、分级赞助商套餐和跨公司媒体平台的整合全渠道推广。',
    solution: `New event architecture with three tiers (flagship, regional, niche) targeting distinct audiences; redesigned sponsorship model with performance-linked ROI guarantees increasing sponsor confidence and deal values; dynamic pricing algorithm yielding 34% average ticket price optimization without cannibalization; integrated media platform promotion reaching 2.1M additional prospects per event cycle.`,
    solutionZh: '新的活动架构包括三个层级（旗舰、区域、利基），针对不同观众；重设赞助商模式具有业绩挂钩的ROI保证，增加赞助商信心和交易价值；动态定价算法实现34%平均票价优化，无蚕食；整合媒体平台推广每个活动周期触及210万额外潜在客户。',
    outcome: `In-person event revenue increased by estimated 400% over 18 months across the portfolio. Sponsorship revenue grew 520% through new partner acquisition and higher deal values. Attendance in redesigned flagship events grew 180% despite higher ticket prices, indicating strong demand-supply recalibration. The event business transformed from a legacy cost center to a standalone profit center contributing 23% of total company revenue.`,
    outcomeZh: '18个月内线下活动收入在整个组合中增加了约400%。通过新合作伙伴收购和更高的交易价值，赞助商收入增长520%。重设的旗舰活动参加人数增长180%，尽管票价更高，表明需求-供应强劲再平衡。活动业务从遗留成本中心转变为独立利润中心，贡献公司总收入的23%。',
    metrics: [
      { label: 'Revenue Growth (18m)', labelZh: '收入增长（18个月）', value: '~400%' },
      { label: 'Sponsorship Revenue Growth', labelZh: '赞助商收入增长', value: '+520%' },
      { label: 'Flagship Event Attendance Growth', labelZh: '旗舰活动参加人数增长', value: '+180%' },
      { label: 'Profit Margin', labelZh: '利润率', value: '31% (vs. 4% baseline)' },
    ],
    timeframe: '18 months (strategy through execution)',
    timeframeZh: '18个月（战略到执行）',
  },
  {
    id: '3',
    slug: 'blockchain-platform-launch-funding',
    title: 'Blockchain Platform Launch & Funding',
    titleZh: '区块链平台推出与融资',
    summary: `End-to-end advisory on go-to-market strategy, token economics, and investor relations for a blockchain infrastructure platform, successfully raising a Series A funding round.`,
    summaryZh: '为区块链基础设施平台提供市场策略、代币经济学和投资者关系的端到端咨询，成功融资A轮。',
    industry: 'Blockchain & Web3 Infrastructure',
    industryZh: '区块链和Web3基础设施',
    geography: 'Global (HQ Southeast Asia)',
    geographyZh: '全球（总部东南亚）',
    serviceType: 'Platform Launch & Capital Raise Strategy',
    serviceTypeZh: '平台推出与融资战略',
    challenge: `A well-capitalized but relatively unknown blockchain infrastructure team had built a differentiated platform with strong technical underpinnings but lacked a coherent go-to-market narrative, clear token economics, and institutional investor relationships. The founding team was technologically strong but had minimal capital markets experience.`,
    challengeZh: '一个资金充足但相对不知名的区块链基础设施团队构建了一个具有差异化和强大技术基础的平台，但缺乏连贯的市场策略叙事、明确的代币经济学和机构投资者关系。创始团队技术强大但资本市场经验有限。',
    approach: `We worked with the team to refine the platform positioning around specific use cases and developer value propositions. We designed token economics aligned with network health and user incentives, stress-tested tokenomics under various market scenarios. We developed an investor targeting strategy, created institutional-grade pitch materials, and facilitated introductions to tier-1 venture and strategic investors.`,
    approachZh: '我们与团队合作，围绕具体用例和开发者价值主张完善平台定位。我们设计了与网络健康和用户激励相一致的代币经济学，在各种市场情景下进行压力测试。我们开发了投资者目标战略，创建了机构级别的推介材料，并促进了与一级风险投资和战略投资者的介绍。',
    solution: `Refined platform positioning emphasizing interoperability and developer velocity; token model with graduated unlock schedules and incentive alignment over 5-year horizon; investor strategy targeting tier-1 VCs with previous blockchain experience, strategic corporates seeking infrastructure exposure, and family offices with emerging tech mandates. Prepared founding team with extensive investor relations and diligence readiness training.`,
    solutionZh: '完善了强调互操作性和开发者速度的平台定位；具有分级解锁计划的代币模型和5年期间内的激励对齐；投资者战略针对具有先前区块链经验的一级风投、寻求基础设施敞口的战略公司以及具有新兴技术任务的家族办公室。为创始团队做了广泛的投资者关系和尽职调查准备培训。',
    outcome: `Successfully closed a $32M Series A round led by two tier-1 venture firms with follow-on commitments from 6 strategic corporates. Platform launched to mainnet with 47 early developer partnerships. Token launch generated $8.6M from community and strategic allocations. Platform achieved 450K daily active users and $2.3B in total value locked within 12 months of public launch. Founding team elevated and expanded with two new institutional hires from tier-1 crypto projects.`,
    outcomeZh: '成功完成由两家一级风险公司领投的3200万美元A轮融资，并获得6家战略公司的后续承诺。平台以47个早期开发者合作推出至主网。代币推出从社区和战略分配中获得860万美元。平台在公开推出后的12个月内实现45万日活跃用户和230亿美元锁定总价值。创始团队得到提升并扩展，从一级加密项目新增两名机构招聘。',
    metrics: [
      { label: 'Series A Raise', labelZh: 'A轮融资', value: '$32M' },
      { label: 'Token Launch Proceeds', labelZh: '代币推出收益', value: '$8.6M' },
      { label: 'DAU (12m)', labelZh: '日活用户（12个月）', value: '450K' },
      { label: 'Total Value Locked (12m)', labelZh: '锁定总价值（12个月）', value: '$2.3B' },
    ],
    timeframe: '12 months (strategy through close + 12m post-launch)',
    timeframeZh: '12个月（战略到成交 + 12个月上线后）',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}
