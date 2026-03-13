export type Region = 'china' | 'australia' | 'vietnam' | 'thailand' | 'indonesia' | 'singapore' | 'philippines';
export type Topic = 'policy' | 'trade' | 'investment' | 'technology' | 'markets' | 'infrastructure';

export interface Article {
  id: string;
  slug: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  region: Region;
  regionLabelEn: string;
  regionLabelZh: string;
  topics: Topic[];
  topicLabels: Record<Topic, { en: string; zh: string }>;
  publishedDate: string;
  author: string;
  readTime: number;
  contentEn: string;
  contentZh: string;
}

export const topicLabels: Record<Topic, { en: string; zh: string }> = {
  policy: { en: 'Policy', zh: '政策' },
  trade: { en: 'Trade', zh: '贸易' },
  investment: { en: 'Investment', zh: '投资' },
  technology: { en: 'Technology', zh: '科技' },
  markets: { en: 'Markets', zh: '市场' },
  infrastructure: { en: 'Infrastructure', zh: '基础设施' },
};

export const articles: Article[] = [
  {
    id: '1',
    slug: 'china-foreign-investment-framework-2026',
    titleEn: 'China\'s Foreign Investment Framework: Navigating Policy Shifts in 2026',
    titleZh: '中国外资框架政策：2026年的政策调整与投资机遇',
    descriptionEn: 'Analysis of recent regulatory changes affecting foreign direct investment in China, including industry restrictions, sector-specific opportunities, and implications for institutional investors.',
    descriptionZh: '解读中国外资政策的最新变化，包括产业限制、特定行业机遇和机构投资者的影响。',
    region: 'china',
    regionLabelEn: 'China',
    regionLabelZh: '中国',
    topics: ['policy', 'investment'],
    topicLabels,
    publishedDate: '2026-03-10',
    author: 'Yenturi Research',
    readTime: 8,
    contentEn: `China's foreign direct investment regulatory landscape continues to evolve, with significant implications for institutional investors and multinational corporations.

## Key Policy Developments

Recent shifts in China's foreign investment framework reflect a more selective approach to capital inflows. The State Council's updated guidelines now emphasize:

- **Sector-Specific Openness**: Manufacturing, advanced technology, and green energy remain priority sectors, while consumption-oriented industries face increased scrutiny.
- **Regional Incentives**: Pilot zones in Hainan, Shanghai, and southern development cities offer enhanced tax and regulatory benefits for qualifying investors.
- **Data Security Requirements**: Enhanced compliance obligations for companies handling personal data or proprietary information.

## Strategic Implications

For institutional investors, these shifts create both challenges and opportunities:

**Risk Management**: Investment structures must now account for enhanced regulatory oversight, particularly in sectors touching artificial intelligence, semiconductors, and financial services.

**Value Creation**: Companies demonstrating commitment to local R&D, technology transfer, and employment can access preferential treatment and sector-specific subsidies.

**Timeline Optimization**: Investment approval timelines have improved for pre-approved sectors, with some approvals completing within 60-90 days versus 6+ months previously.

## Market Opportunities

The current environment favors strategic investors who:
- Target high-growth sectors aligned with China's 14th Five-Year Plan
- Establish operations in designated economic zones
- Structure investments through recognized intermediaries

Institutional players positioned to capitalize on these trends are seeing accelerated deal flow and improved negotiating positions with local partners.`,
    contentZh: `中国外商直接投资监管环境持续演变，对机构投资者和跨国公司产生重大影响。

## 政策动向分析

国务院最新外资指引反映出对资本流入更为审慎的态度。核心变化包括：

- **产业差异化开放**：制造业、先进技术和绿色能源仍为优先产业，消费导向产业面临更严审查。
- **区域激励机制**：海南、上海及南方发展城市试点区提供税收和监管优惠。
- **数据安全要求**：处理个人数据或专有信息的企业面临合规义务增加。

## 战略意义

对机构投资者而言，这些转变既带来挑战也蕴含机遇：

**风险管理**：投资结构需考虑监管力度加强，特别是在人工智能、芯片和金融服务等敏感行业。

**价值创造**：展现本地研发投入、技术转移和就业承诺的公司可获得优先待遇。

**时间效率**：预批准行业的审批周期已加快，部分申请可在60-90天内完成，相比之前的6个月以上有显著改善。

## 投资机遇

当前环境有利于以下战略投资者：
- 聚焦与中国"十四五"规划相符的高增长产业
- 在指定经济区建立运营
- 通过认可的中介机构组织投资`
  },

  {
    id: '2',
    slug: 'vietnam-manufacturing-fdi-supply-chain-hub',
    titleEn: 'Vietnam as Manufacturing Hub: FDI Influx and Supply Chain Reconfiguration',
    titleZh: '越南制造业枢纽：外资流入与供应链重组',
    descriptionEn: 'Analysis of Vietnam\'s emergence as a manufacturing hub, FDI patterns post-China diversification, and supply chain opportunities for institutional investors.',
    descriptionZh: '分析越南作为制造业枢纽的崛起、后中国多元化时期的外资模式和供应链机遇。',
    region: 'vietnam',
    regionLabelEn: 'Vietnam',
    regionLabelZh: '越南',
    topics: ['trade', 'investment', 'infrastructure'],
    topicLabels,
    publishedDate: '2026-02-28',
    author: 'Yenturi Research',
    readTime: 7,
    contentEn: `ASEAN's economic integration is accelerating, reshaping supply chains and creating significant opportunities for institutional investors.

## Regional Integration Drivers

The ASEAN Economic Community (AEC) framework continues to deepen integration:

- **Tariff Harmonization**: Intra-ASEAN tariff rates now average 1.5%, down from 8-12% a decade ago, making regional consolidation economically viable.
- **Investment Pact Updates**: ASEAN Comprehensive Investment Agreement (ACIA) enhanced provisions encourage cross-border M&A and regional hub structures.
- **Labor Mobility**: Gradual liberalization of skilled labor movement enhancing talent availability across member states.

## Supply Chain Reconfiguration

Companies are accelerating manufacturing footprint adjustments:

**Geographic Shift**: Vietnam, Thailand, and Indonesia attracting $45B+ in annual FDI as companies diversify away from China concentration.

**Vertical Integration**: Regional inputs now competitive with global suppliers, reducing logistics costs by 15-20% versus China-reliant chains.

**Technology Hubs**: Singapore, Bangkok, and Jakarta emerging as regional tech and fintech centers, attracting talent and capital.

## Investment Thesis

Institutional investors should focus on:

1. **Manufacturing & Assembly**: Companies consolidating APAC production across Vietnam, Thailand, and Indonesia
2. **Regional Consolidators**: Local champions poised for cross-border M&A and regional dominance
3. **Infrastructure Enablers**: Logistics, industrial parks, and data centers supporting regional trade

The current environment favors patient capital willing to build regional platforms over 5-7 year horizons.`,
    contentZh: `ASEAN经济一体化进程加速，正在重塑供应链并为机构投资者创造重大机遇。

## 区域整合驱动力

ASEAN经济共同体框架不断深化：

- **关税协调**：ASEAN内部关税平均降至1.5%，较十年前的8-12%大幅下降。
- **投资协议更新**：《ASEAN全面投资协议》加强条款鼓励跨境并购。
- **劳动力流动**：技能型人才跨境流动逐步开放。

## 供应链重组

企业加速调整制造业布局：

**地理转移**：越南、泰国和印尼每年吸引超450亿美元FDI，企业分散对中国依赖。

**纵向一体化**：地区采购成本竞争力提升，相比依赖中国的供应链降低15-20%物流成本。

**科技中心**：新加坡、曼谷、雅加达成为区域科技和金融科技中心。

## 投资机遇

机构投资者应关注：

1. **制造与组装**：在越南、泰国、印尼整合APAC生产的企业
2. **区域整合者**：有跨境并购和区域主导潜力的本地企业
3. **基础设施**：支持区域贸易的物流、工业园和数据中心`
  },

  {
    id: '3',
    slug: 'australia-foreign-investment-regulations-critical-minerals',
    titleEn: 'Australia\'s FDI Framework: Critical Minerals, Tech, and Sector-Specific Restrictions',
    titleZh: '澳大利亚外资管制：关键矿物、技术和行业限制',
    descriptionEn: 'Overview of Australia\'s foreign investment screening process, emerging sector restrictions, and opportunities in strategic industries aligned with geopolitical positioning.',
    descriptionZh: '澳大利亚外资审查程序、新兴行业限制和战略产业投资机遇解析。',
    region: 'australia',
    regionLabelEn: 'Australia',
    regionLabelZh: '澳大利亚',
    topics: ['policy', 'investment', 'technology'],
    topicLabels,
    publishedDate: '2026-03-05',
    author: 'Yenturi Research',
    readTime: 8,
    contentEn: `Australia's foreign investment policy has become increasingly strategic, with new screening measures affecting deal flow and valuations across multiple sectors.

## Foreign Investment Review Board (FIRB) Updates

Recent legislative changes have expanded FIRB's mandate:

- **Lower Thresholds**: National interest screening now applies to A$60M+ (down from A$275M), catching more mid-market deals.
- **Critical Infrastructure Definition**: Expanded to include data centers, agricultural land (>10 hectares), and telecommunications networks.
- **National Security Test**: Enhanced scrutiny for non-sovereign state investors in sensitive sectors.

## Sector-Specific Framework

**Green Light Sectors** (accelerated approval):
- Renewable energy and battery technology
- Agricultural technology and food processing
- Advanced manufacturing and aerospace

**Amber Light Sectors** (standard scrutiny):
- Mining and commodities (case-by-case assessment)
- Real estate and infrastructure
- Financial services above specified thresholds

**Red Light Sectors** (likely restrictions):
- Defense and military technology
- Critical mineral extraction (reserved for allied investors)
- Telecommunications and data infrastructure

## Strategic Minerals Opportunity

Australia's position as a critical minerals supplier creates unique investment opportunities:

**Lithium & Rare Earths**: Processing capacity remains bottleneck, attracting investment in downstream value creation.

**Allied Investor Status**: Investors from Five Eyes nations (US, UK, Canada, NZ) receive preferential treatment and faster approvals.

**Regional Hub Potential**: Companies establishing Australia-based management can access preferential downstream processing rights.

## Deal Structuring Implications

Successful institutional investors are:
- Establishing local management presence (improves allied perception)
- Targeting downstream value-add (processing, manufacturing) rather than raw extraction
- Structuring partnerships with local or allied investors to navigate restrictions
- Building long-term operational commitments (5+ years) to demonstrate national interest alignment`,
    contentZh: `澳大利亚外资政策日趋战略性，新的审查措施影响多个行业的交易流和估值。

## 外资审查委员会(FIRB)更新

最新立法扩大了FIRB的权限：

- **审查门槛下调**：国家利益审查现适用于6000万澳元以上（之前为2.75亿澳元）。
- **关键基础设施定义**：扩展至数据中心、农业用地（>10公顷）和电信网络。
- **国家安全测试**：非主权基金投资敏感行业面临更严格审查。

## 行业差异化框架

**开放行业**（快速审批）：
- 可再生能源和电池技术
- 农业技术和食品加工
- 先进制造和航空航天

**标准审查行业**：
- 采矿和大宗商品
- 房地产和基础设施
- 金融服务

**受限行业**：
- 国防和军事技术
- 关键矿物开采（仅限盟国投资者）
- 电信和数据基础设施

## 战略矿物投资机遇

澳大利亚作为关键矿物供应国的地位创造独特投资机遇：

**锂和稀土**：加工能力仍为瓶颈，吸引下游价值创造投资。

**盟国投资者身份**：来自五眼联盟（美、英、加、新西兰）的投资者获优先待遇。

**区域枢纽潜力**：建立澳大利亚本地管理的公司可获优先下游加工权。

## 交易架构建议

成功的机构投资者：
- 建立本地管理团队（提升盟国认知）
- 聚焦下游价值创造（加工、制造）而非原始开采
- 与本地或盟国投资者合作应对限制
- 承诺长期运营（5年以上）以符合国家利益`
  },

  {
    id: '4',
    slug: 'china-tech-policy-semiconductor-artificial-intelligence',
    titleEn: 'China\'s Tech Sector Policy: Semiconductor Strategy and AI Governance',
    titleZh: '中国科技政策：芯片战略和人工智能治理',
    descriptionEn: 'Deep dive into China\'s regulatory approach to semiconductors, AI, and high-tech manufacturing, and implications for foreign investors.',
    descriptionZh: '分析中国芯片、人工智能和高科技制造的政策导向及外资影响。',
    region: 'china',
    regionLabelEn: 'China',
    regionLabelZh: '中国',
    topics: ['policy', 'technology', 'investment'],
    topicLabels,
    publishedDate: '2026-02-15',
    author: 'Yenturi Research',
    readTime: 9,
    contentEn: `China's approach to semiconductor and artificial intelligence development reflects a broader strategic shift toward technological self-sufficiency and innovation leadership.

## Semiconductor Policy Framework

The government is channeling significant capital into indigenous chip development:

- **National Funds**: SICAR (Semiconductor Industry Chip Design and Investment Fund) expanded to ¥200B+, driving consolidation of design and manufacturing.
- **Manufacturing Incentives**: Preferential land, power, and tax rates for domestic fabricators achieving 28nm+ advanced node production.
- **Equipment & Materials**: Massive R&D subsidies for local EDA, photoresists, and process gases to reduce foreign dependency.

## AI Governance Model

New AI regulations emphasize security, data control, and domestic innovation:

- **Algorithm Approval**: Generative AI systems require pre-release security assessment, with timeline averaging 3-6 weeks.
- **Data Localization**: Training data and model weights for Chinese users must reside on mainland servers.
- **Foreign Participation Limits**: Non-Chinese entities capped at 49% ownership in AI training/foundation model companies.

## Investment Implications

**Opportunities**:
- Foundational infrastructure (data centers, high-performance computing)
- Specialized components and materials meeting domestic standards
- AI applications in regulated sectors (fintech, healthcare, autonomous vehicles)

**Risks**:
- Regulatory changes can impact valuations quickly
- Foreign investor equity caps limit upside participation
- Export controls affect supply chain economics

## Strategic Positioning

Institutional investors with the highest conviction are:
- Partnering with state-backed entities to navigate policy constraints
- Building vertically integrated structures to capture downstream value
- Focusing on 5-10 year horizons given policy evolution pace

The intersection of government support and foreign participation restrictions creates a complex but potentially high-return landscape for sophisticated investors.`,
    contentZh: `中国对芯片和人工智能发展的政策反映了更广泛的技术自给自足战略转变。

## 芯片政策框架

政府向本土芯片开发投入巨额资本：

- **国家基金**：大基金总规模超过2000亿元，推动设计和制造整合。
- **制造激励**：国产晶圆厂实现28纳米以上先进工艺获优惠地价、电价和税收。
- **设备和材料**：对本地EDA、光刻胶和工艺气体的巨额研发补贴。

## 人工智能治理

新AI法规强调安全、数据控制和本土创新：

- **算法审查**：生成式AI系统发布前需安全评估，周期通常为3-6周。
- **数据本地化**：中国用户的训练数据和模型权重必须存放在大陆服务器。
- **外资限制**：非中资实体在AI训练和基础模型公司中股权不超过49%。

## 投资机遇与风险

**机遇**：
- 基础设施（数据中心、高性能计算）
- 满足国内标准的专用元器件和材料
- 受管制行业的AI应用

**风险**：
- 监管变化可快速影响估值
- 外资股权上限限制了收益参与
- 出口管制影响供应链经济性

## 战略定位

最具信心的机构投资者：
- 与国有实体合作应对政策约束
- 建立纵向一体化结构捕捉下游价值
- 聚焦5-10年投资周期`
  },

  {
    id: '5',
    slug: 'singapore-fintech-hub-digital-finance-consolidation',
    titleEn: 'Singapore as Fintech Hub: Digital Finance Consolidation and Regional Leadership',
    titleZh: '新加坡金融科技枢纽：数字金融整合与区域领导力',
    descriptionEn: 'Analysis of Singapore\'s fintech ecosystem, regional consolidation dynamics, and opportunities in digital finance for institutional investors.',
    descriptionZh: '分析新加坡金融科技生态、区域整合动态和数字金融投资机遇。',
    region: 'singapore',
    regionLabelEn: 'Singapore',
    regionLabelZh: '新加坡',
    topics: ['markets', 'investment', 'technology'],
    topicLabels,
    publishedDate: '2026-03-01',
    author: 'Yenturi Research',
    readTime: 7,
    contentEn: `Southeast Asia's fintech sector is undergoing significant consolidation, with regulatory harmonization driving valuations higher and creating M&A opportunities.

## Market Consolidation Drivers

The fintech landscape is rapidly consolidating around regional platforms:

- **Unicorn Valuations**: Leading platforms (Grab, GoTo, Lazada ecosystem) now trading at 4-6x revenue multiples, compared to 10x+ at peak 2021 levels.
- **Cross-Border Licensing**: ASEAN-wide fintech licenses now available, enabling single platform serving multiple countries.
- **Payment Rail Integration**: Regional payment systems (ASEAN RTP) reducing friction for cross-border transactions.

## Regulatory Harmonization

Governments are standardizing fintech rules:

- **Singapore Model Adoption**: Most ASEAN nations adopting Singapore's API-first, sandbox-friendly approach to fintech licensing.
- **KYC Standardization**: Biometric KYC standards harmonized across Indonesia, Philippines, Thailand, and Vietnam.
- **Capital Requirements**: Reserve and capital ratios converging toward Basel III+ standards, raising barriers to entry.

## Investment Opportunities

**Consolidation Targets**:
- Emerging fintech players (Series B-C stage) with strong unit economics facing higher funding costs
- Regional payment/remittance networks consolidating around 2-3 dominant platforms
- Embedded finance opportunities in logistics, e-commerce, and travel

**Valuation Dynamics**:
- Public company comparables (Grab, GoTo) now setting benchmarks lower than pre-IPO expectations
- Series-stage funding drying up, creating buyer advantage for acquirers
- Strategic buyers (banks, telcos, e-commerce giants) actively consolidating

## Deal Structure Insights

Institutional investors should consider:
- Minority stakes in cash-flowing platforms over early-stage dilutive rounds
- Consolidation plays where regional platforms acquire vertical-specific fintech
- Strategic partnerships with state-backed development banks entering fintech

The next 12-24 months will likely see significant consolidation around 3-5 regional champions.`,
    contentZh: `东南亚金融科技行业经历重大整合，监管协调推高估值并创造并购机遇。

## 整合驱动力

金融科技格局围绕区域平台快速整合：

- **独角兽估值**：领先平台估值倍数从2021年峰值的10倍以上降至现在的4-6倍。
- **跨境许可证**：ASEAN范围金融科技许可证推出，单一平台可服务多国。
- **支付系统集成**：区域实时支付系统减少跨境交易摩擦。

## 监管协调

各国标准化金融科技规则：

- **新加坡模式采用**：大多ASEAN国家采纳新加坡API优先、沙盒友好的方式。
- **KYC标准化**：印尼、菲律宾、泰国、越南的生物特征识别KYC标准统一。
- **资本要求**：准备金和资本比例趋同Basel III+标准。

## 投资机遇

**整合目标**：
- B-C轮融资的新兴金融科技公司面临融资成本上升
- 支付和汇款网络围绕2-3个主导平台整合
- 物流、电商和旅游的嵌入式金融

**估值动向**：
- 上市公司可比性（Grab、GoTo）现已设定更低基准
- 早期融资萎缩，为收购方创造优势
- 银行、电信和电商巨头积极整合

## 交易架构建议

机构投资者应考虑：
- 现金流充足平台的少数股权而非早期稀释融资
- 区域平台收购纵向金融科技的整合交易
- 与国有开发银行的战略合作进入金融科技

未来12-24个月可能见证围绕3-5家区域冠军的重大整合`
  },

  {
    id: '6',
    slug: 'australia-china-trade-relations-economic-realignment',
    titleEn: 'Australia-China Trade Relations: Economic Realignment and Diversification',
    titleZh: '澳中贸易关系：经济重组与多元化',
    descriptionEn: 'Examination of Australia\'s economic diversification strategy following trade tensions, and emerging opportunities in allied partnerships and new markets.',
    descriptionZh: '分析澳大利亚应对贸易紧张的经济多元化策略和盟国合作机遇。',
    region: 'australia',
    regionLabelEn: 'Australia',
    regionLabelZh: '澳大利亚',
    topics: ['trade', 'markets', 'investment'],
    topicLabels,
    publishedDate: '2026-02-20',
    author: 'Yenturi Research',
    readTime: 8,
    contentEn: `Australia's economy is undergoing significant realignment following years of trade tension, creating structural investment opportunities in new export markets and allied partnerships.

## Trade Relationship Dynamics

The Australia-China relationship has fundamentally shifted:

- **Trade Normalization**: Recent high-level agreements have stabilized wine and barley exports, but volumes remain ~20-30% below pre-tension levels.
- **Diversification Strategy**: Government actively supporting export diversification to Japan, South Korea, and Southeast Asia.
- **Value-Add Shift**: Mining companies moving downstream into processing, refining, and advanced materials manufacturing to reduce raw commodity dependency.

## New Market Opportunities

**Japan Partnership**:
- Quad-aligned infrastructure investments (Indo-Pacific strategy)
- LNG and hydrogen partnerships accelerating
- Manufacturing partnerships in critical minerals processing

**Southeast Asian Integration**:
- ASEAN trade agreements improving access for Australian agricultural and manufactured goods
- Regional supply chain hubs attracting investment from mining and processing companies
- Services and technology exports growing 15%+ annually

**Domestic Refocusing**:
- Vertical integration of mining → processing → manufacturing
- Infrastructure development (ports, rail) enabling export cost reduction
- Agricultural technology and biotech attracting venture and growth capital

## Investment Thesis

Institutional investors should focus on:

1. **Diversified Commodity Exporters**: Mining and agricultural companies with downstream processing operations reducing single-market dependency
2. **Allied Nation Partnerships**: Australian companies partnering with US, Japanese, or Korean tech/manufacturing partners
3. **Infrastructure Enablers**: Ports, rail, and logistics networks supporting diversified export flows

**Valuation Dynamics**:
- Companies with proven China diversification now commanding 10-15% valuation premiums
- Supply chain resilience a key investor focus, driving capex in new geographies
- Government support (grants, tax incentives) for allied partnerships creating value uplift

## Geopolitical Positioning

The broader context favors Australia's economic repositioning:

- Indo-Pacific strategy (Quad, AUKUS) creating structural tailwinds for allied investment
- US manufacturing reshoring driving demand for raw materials and processing capacity
- Regional positioning as technology and finance hub attractive to growth capital

The next 3-5 years will likely see further acceleration in Australia's pivot away from China concentration toward diversified, allied partnerships.`,
    contentZh: `澳大利亚经历贸易紧张后的经济重大重组，为新出口市场和盟国合作创造结构性投资机遇。

## 贸易关系动向

澳中关系已发生根本转变：

- **贸易正常化**：最近高层协议稳定了葡萄酒和大麦出口，但量仍低于紧张前20-30%。
- **多元化战略**：政府积极支持对日本、韩国和东南亚的出口多元化。
- **价值提升**：采矿公司转向下游加工、炼制和先进材料制造。

## 新市场机遇

**日本伙伴关系**：
- 四方机制对齐的基础设施投资
- 液化天然气和氢能合作加速
- 关键矿物加工制造合作

**东南亚一体化**：
- ASEAN贸易协议改善澳大利亚农业和制造品市场准入
- 区域供应链中心吸引采矿和加工投资
- 服务和技术出口年增15%以上

**国内重点**：
- 采矿→加工→制造纵向一体化
- 基础设施发展（港口、铁路）降低出口成本
- 农业技术和生物技术吸引风投和增长资本

## 投资机遇

机构投资者应关注：

1. **多元化大宗商品出口商**：拥有下游加工运营的采矿和农业公司
2. **盟国合作**：与美、日、韩科技/制造伙伴合作的澳大利亚公司
3. **基础设施**：支持多元出口的港口、铁路和物流网络

**估值动向**：
- 证明中国多元化的公司估值溢价10-15%
- 供应链韧性成投资重点，驱动新地理位置资本支出
- 政府支持（补助、税收优惠）创造价值提升

## 地缘政治定位

更广泛背景支持澳大利亚经济重组：

- 印太战略（四方机制、AUKUS）为盟国投资创造结构性利好
- 美国制造业回流推高原材料和加工能力需求
- 作为科技和金融中心的区域定位吸引增长资本

未来3-5年可能进一步加速澳大利亚从中国集中度向多元化盟国合作的转变`
  },

  {
    id: '7',
    slug: 'china-green-energy-transition-investment-policy',
    titleEn: 'China\'s Green Energy Transition: Renewable Capacity and Investment Opportunities',
    titleZh: '中国绿色能源转型：可再生能源容量与投资机遇',
    descriptionEn: 'Analysis of China\'s aggressive renewable energy expansion, policy incentives for green tech, and market implications for international investors.',
    descriptionZh: '分析中国可再生能源扩张计划、绿色技术政策激励和国际投资机遇。',
    region: 'china',
    regionLabelEn: 'China',
    regionLabelZh: '中国',
    topics: ['policy', 'investment', 'infrastructure'],
    topicLabels,
    publishedDate: '2026-02-10',
    author: 'Yenturi Research',
    readTime: 7,
    contentEn: `China's renewable energy sector continues rapid expansion, driven by government policy and substantial capital allocation.

## Capacity Expansion Targets

The government has committed to significant renewable energy capacity growth:

- **2026-2030 Targets**: 1.2 TW+ cumulative renewable capacity, requiring $350B+ in annual investment
- **Offshore Wind**: Deep-water floating wind farms expanding rapidly, with 50+ GW under development
- **Solar Manufacturing**: Downstream capacity constraints creating opportunities in module and inverter manufacturing

## Policy Support Mechanisms

- **Grid Interconnection**: Accelerated approval timelines for renewable projects with grid access
- **Subsidy Programs**: Direct subsidies for offshore wind, floating solar, and green hydrogen projects
- **Carbon Market**: Linked carbon pricing mechanisms incentivizing corporate renewables adoption

## Investment Opportunities

For institutional investors:
- Project development in wind and solar with off-take agreements
- Downstream manufacturing (inverters, battery storage, grid equipment)
- Private transmission infrastructure supporting renewable integration
- Green hydrogen production and applications

Expected returns of 8-12% annually on long-term power purchase agreements, with government support enhancing credit quality.`,
    contentZh: `中国可再生能源行业持续快速扩张，受政府政策和资本投入驱动。

## 容量扩张目标

政府承诺显著的可再生能源容量增长：

- **2026-2030目标**：累计可再生容量超过1.2太瓦，需要年度投资350亿美元以上
- **海上风电**：深水浮动风电场快速扩展，50多吉瓦在开发中
- **太阳能制造**：下游产能约束为组件和逆变器制造创造机遇

## 政策支持机制

- **电网互联**：可再生项目电网接入的加速审批
- **补贴计划**：海上风电、浮动太阳能和绿色氢气项目的直接补贴
- **碳市场**：关联碳定价机制激励企业采用可再生能源

## 投资机遇

对机构投资者而言：
- 风电和太阳能项目开发及电力购买协议
- 下游制造（逆变器、电池储能、电网设备）
- 支持可再生集成的私人输电基础设施
- 绿色氢气生产和应用

长期电力购买协议年回报率8-12%，政府支持提升信用质量`,
  },

  {
    id: '8',
    slug: 'thailand-infrastructure-transport-hub-investment',
    titleEn: 'Thailand as Regional Hub: Infrastructure Development and Transport Corridor Leadership',
    titleZh: '泰国区域枢纽：基础设施发展与运输走廊领导力',
    descriptionEn: 'Examination of Thailand\'s infrastructure expansion, Eastern Economic Corridor (EEC), and investment opportunities in transport and logistics.',
    descriptionZh: '分析泰国基础设施扩张、东部经济走廊(EEC)和运输物流投资机遇。',
    region: 'thailand',
    regionLabelEn: 'Thailand',
    regionLabelZh: '泰国',
    topics: ['infrastructure', 'investment', 'trade'],
    topicLabels,
    publishedDate: '2026-01-25',
    author: 'Yenturi Research',
    readTime: 8,
    contentEn: `Southeast Asia's infrastructure development agenda is creating significant opportunities for institutional infrastructure investors.

## Major Project Pipeline

Key projects driving region-wide connectivity:

- **Rail Networks**: Pan-ASEAN rail corridors (China-Laos-Thailand, Malaysia-Singapore) totaling 8,000+ km
- **Port Development**: Mega-port expansion in Singapore, Vietnam, and Thailand to accommodate mega-ship traffic
- **Digital Infrastructure**: 5G rollout and fiber optic backbone connecting major economic centers
- **Industrial Parks**: 200+ new economic zones creating manufacturing and logistics hubs

## Funding Mechanisms

- **ADB & AIIB**: Concessional financing for priority projects
- **PPP Structures**: Government guarantee frameworks improving credit quality for private investors
- **Project Finance**: 15-20 year concession contracts providing stable cash flows

## Investment Returns

Infrastructure investors are capturing:
- 6-8% IRRs on toll roads and ports with government revenue guarantees
- 8-10% IRRs on telecommunications infrastructure with long-term service contracts
- Strategic value from regional connectivity enabling trade flow optimization

The infrastructure cycle is entering peak deployment phase, with 2026-2030 representing the highest investment period.`,
    contentZh: `东南亚基础设施发展议程为机构基础设施投资者创造重大机遇。

## 主要项目管道

推动区域互联的关键项目：

- **铁路网络**：泛ASEAN铁路走廊（中老泰、马新）总长8000公里以上
- **港口开发**：新加坡、越南、泰国大型港口扩展以承载大型船舶
- **数字基础设施**：5G推广和连接主要经济中心的光纤骨干网
- **工业园区**：200多个新经济区创造制造和物流中心

## 融资机制

- **亚开行和亚投行**：优惠融资
- **PPP结构**：政府担保框架改善私人投资者信用质量
- **项目融资**：15-20年特许经营合同提供稳定现金流

## 投资回报

基础设施投资者获得：
- 收费公路和港口内部收益率6-8%（政府收入担保）
- 电信基础设施内部收益率8-10%（长期服务合同）
- 区域互联的战略价值优化贸易流`
  },

  {
    id: '9',
    slug: 'australia-renewable-hydrogen-export-opportunity',
    titleEn: 'Australia\'s Hydrogen Export Strategy: Green Hydrogen as a Strategic Export',
    titleZh: '澳大利亚氢能出口战略：绿色氢能作为战略性出口',
    descriptionEn: 'Analysis of Australia\'s emerging hydrogen export industry, production capacity development, and regional demand drivers.',
    descriptionZh: '分析澳大利亚新兴氢能出口产业、生产能力开发和区域需求驱动。',
    region: 'australia',
    regionLabelEn: 'Australia',
    regionLabelZh: '澳大利亚',
    topics: ['investment', 'technology', 'infrastructure'],
    topicLabels,
    publishedDate: '2026-01-30',
    author: 'Yenturi Research',
    readTime: 7,
    contentEn: `Australia is positioning itself as a major green hydrogen exporter, leveraging abundant renewable resources and established export infrastructure.

## Hydrogen Production Roadmap

Government targets for green hydrogen development:

- **Electrolyzer Capacity**: 50+ GW by 2030 (up from current 5 GW), requiring $40B+ investment
- **Renewable Power Supply**: Dedicated wind and solar farms to power electrolyzer facilities
- **Export Infrastructure**: Port facilities, liquefaction technology, and shipping partnerships

## Regional Demand Drivers

- **Japan & South Korea**: Committed to hydrogen imports for industrial heating and power generation
- **Singapore**: Emerging hub for hydrogen trade and refueling
- **India**: Potential offtake through energy partnership programs

## Investment Opportunities

Institutional investors can participate through:
- Electrolyzer manufacturing and project development
- Renewable energy generation dedicated to hydrogen production
- Export infrastructure (port terminals, liquefaction facilities)
- Technology development (efficiency improvements, cost reduction)

First-mover projects targeting 7-10% IRRs, with government subsidies and export contracts improving risk profiles.`,
    contentZh: `澳大利亚正将自己定位为主要绿色氢能出口国，利用丰富的可再生资源和现有出口基础设施。

## 氢气生产路线图

绿色氢气发展的政府目标：

- **电解槽容量**：到2030年达到50多吉瓦（从目前的5吉瓦增长），需要投资400亿美元以上
- **可再生能源供应**：为电解槽设施专用的风电和太阳能农场
- **出口基础设施**：港口设施、液化技术和航运合作

## 区域需求驱动

- **日本和韩国**：承诺进口氢能用于工业加热和发电
- **新加坡**：氢能贸易和加油新兴中心
- **印度**：通过能源伙伴关系计划的潜在采购

## 投资机遇

机构投资者可通过以下方式参与：
- 电解槽制造和项目开发
- 专用于氢气生产的可再生能源发电
- 出口基础设施（港口码头、液化设施）
- 技术开发（效率改进、成本降低）

首批项目目标内部收益率7-10%，政府补贴和出口合同改善风险收益`
  },

  {
    id: '10',
    slug: 'china-consumption-stimulus-retail-market-recovery',
    titleEn: 'China\'s Consumption Recovery: Stimulus Programs and Retail Market Dynamics',
    titleZh: '中国消费恢复：刺激政策与零售市场动向',
    descriptionEn: 'Analysis of China\'s stimulus measures to boost domestic consumption, retail sector recovery, and consumer spending patterns.',
    descriptionZh: '分析中国提振消费的刺激政策、零售行业复苏和消费支出模式。',
    region: 'china',
    regionLabelEn: 'China',
    regionLabelZh: '中国',
    topics: ['policy', 'markets', 'investment'],
    topicLabels,
    publishedDate: '2026-01-15',
    author: 'Yenturi Research',
    readTime: 6,
    contentEn: `China's consumer spending recovery is accelerating through targeted stimulus, creating opportunities in retail and consumer sectors.

## Consumption Stimulus Measures

Recent government initiatives driving consumer spending:

- **Subsidy Programs**: Direct cash transfers and consumption vouchers for lower-income households
- **Tax Incentives**: Reduced VAT on selected consumer goods and services
- **Credit Expansion**: Favorable terms for consumer lending at preferential rates
- **Platform Support**: Incentives for e-commerce and digital payment adoption

## Retail Market Recovery Metrics

- **YoY Growth**: Retail sales growth accelerating to 6-8% annually from 2-3% in prior years
- **Urban vs Rural**: Rural consumption growing faster (9-11%) as policy targets underserved markets
- **Online Channel**: Digital retail now 50%+ of total, with continued growth in livestream commerce

## Investment Opportunities

For institutional investors:
- Consumer staples and discretionary companies with exposure to consumption recovery
- E-commerce and digital payment platforms benefiting from adoption acceleration
- Supply chain infrastructure supporting omnichannel retail
- Consumer finance and fintech companies serving emerging consumers

Valuations compressed vs 2021 levels, creating entry opportunities for long-term investors.`,
    contentZh: `中国消费支出恢复通过定向刺激加速，为零售和消费行业创造机遇。

## 消费刺激措施

近期政府推动消费的举措：

- **补贴计划**：低收入家庭的直接现金转移和消费券
- **税收激励**：选定消费品和服务的增值税降低
- **信贷扩张**：消费贷款的优惠条款
- **平台支持**：电商和数字支付采用的激励

## 零售市场复苏指标

- **同比增长**：零售销售增长从之前的2-3%加速至6-8%
- **城乡对比**：农村消费增速更快（9-11%）
- **线上渠道**：数字零售现占比超50%，直播电商持续增长

## 投资机遇

对机构投资者而言：
- 消费必需品和可选消费企业
- 受益于采用加速的电商和数字支付平台
- 支持全渠道零售的供应链基础设施
- 为新兴消费者服务的消费金融和金融科技`
  },

  {
    id: '11',
    slug: 'indonesia-e-commerce-logistics-market-growth',
    titleEn: 'Indonesia\'s E-Commerce Boom: Logistics Infrastructure and Investment Opportunities',
    titleZh: '印尼电商繁荣：物流基础设施与投资机遇',
    descriptionEn: 'Analysis of Indonesia\'s rapidly growing e-commerce market, logistics infrastructure needs, and institutional investment opportunities in supply chain.',
    descriptionZh: '分析印尼快速增长的电商市场、物流基础设施需求和供应链投资机遇。',
    region: 'indonesia',
    regionLabelEn: 'Indonesia',
    regionLabelZh: '印尼',
    topics: ['infrastructure', 'technology', 'investment'],
    topicLabels,
    publishedDate: '2026-02-05',
    author: 'Yenturi Research',
    readTime: 7,
    contentEn: `Southeast Asia's logistics sector is transforming to support explosive e-commerce growth, creating infrastructure investment opportunities.

## Infrastructure Requirements

E-commerce growth driving logistics investment needs:

- **Warehouse Capacity**: 300+ million sq ft of new warehouse space needed by 2030
- **Last-Mile Networks**: Expanded delivery networks serving urban and rural areas
- **Tech Integration**: Automation, sorting technology, and visibility platforms
- **Cold Chain**: Temperature-controlled infrastructure for fresh goods and pharmaceuticals

## Market Growth Drivers

- **E-Commerce GMV**: Regional e-commerce growing 20%+ annually, reaching $200B+ by 2027
- **Cross-Border Trade**: ASEAN tariff harmonization driving intra-regional commerce
- **Same-Day Delivery**: Competition driving investment in local fulfillment networks

## Investment Returns

Institutional investors capturing:
- 8-10% IRRs on modern warehouse facilities with long-term logistics provider contracts
- 10-12% IRRs on last-mile delivery network operators in high-density cities
- Strategic value from supply chain optimization benefiting e-commerce customers

The sector represents 7-10 year investment horizon with sustained growth drivers.`,
    contentZh: `东南亚物流行业正在转变，以支持爆炸性电商增长，创造基础设施投资机遇。

## 基础设施需求

电商增长驱动物流投资需求：

- **仓库容量**：2030年前需要新增3亿平方英尺仓库
- **末端物流**：扩展的配送网络服务城市和农村
- **技术集成**：自动化、分拣技术和可视性平台
- **冷链**：鲜货和医药品的温度控制基础设施

## 市场增长驱动力

- **电商成交额**：区域电商年增长20%以上，到2027年达2000亿美元以上
- **跨境贸易**：ASEAN关税协调驱动地区内贸易
- **同日配送**：竞争驱动本地履约网络投资

## 投资回报

机构投资者获得：
- 现代仓库设施内部收益率8-10%（与物流供应商长期合同）
- 高密度城市末端配送网络运营商内部收益率10-12%
- 供应链优化的战略价值`
  },
];

// Sort articles by date (newest first)
articles.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
