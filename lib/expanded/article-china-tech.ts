import type { ExpandedArticle } from '../insightsExpanded';

const article: ExpandedArticle = {
  id: 'china-tech-policy-semiconductor-artificial-intelligence',
  executiveSummary: `China's semiconductor and artificial intelligence sectors sit at the epicentre of the country's strategic competition with Western economies, and the regulatory and fiscal architecture surrounding them has become correspondingly consequential for institutional investors. The government allocated a cumulative RMB 687 billion (approximately USD 94 billion) to semiconductor development through the National Integrated Circuit Industry Investment Fund iterations between 2014 and 2024. In October 2024, Big Fund III launched with registered capital of RMB 344 billion—the largest single technology investment vehicle in recorded history. This capital surge has produced measurable self-sufficiency gains: SMIC's advanced node yield rates at its N+2 process node reached 62% in Q4 2025, up from 38% in Q4 2023. On artificial intelligence, updated Interim Measures on Generative AI Service Management entered full enforcement in 2025, establishing a globally significant precedent for pre-release algorithm registration and mandatory content safety scoring. Foreign investors face a bifurcated opportunity set: infrastructure layers—data centres, power, cooling, interconnect—remain relatively open and are generating 14–19% project-level IRRs, while foundation model and semiconductor design companies are subject to equity caps and technology-export restrictions requiring sophisticated legal structuring. Total AI infrastructure capex requirements in China between 2025 and 2027 are estimated at USD 67 billion, representing the single largest near-term technology capital deployment opportunity in the Asia-Pacific region.`,
  sections: [
    {
      title: 'Semiconductor Policy & Industrial Strategy',
      subsections: [
        {
          heading: 'Big Fund III and State Capital Mobilisation',
          content: `The National Integrated Circuit Industry Investment Fund Phase III, established October 2024 with RMB 344 billion in registered capital, represents a qualitative escalation in China's approach to semiconductor self-sufficiency. Unlike predecessors—Big Fund I (RMB 138.7B, 2014) and Big Fund II (RMB 204.2B, 2019)—the third fund concentrates materially more capital in upstream equipment, electronic design automation (EDA) software, and specialty materials, reflecting lessons learned from U.S. export controls that exposed severe bottlenecks in these input categories. State shareholder composition includes the Ministry of Finance (17.2% share), China Development Bank Capital (10.4%), and seventeen provincial state-owned enterprises. The fund's investment mandate targets achieving 80% domestic supply of 28nm and above process equipment by 2027 and 40% domestic supply of sub-28nm equipment by 2030—targets implying a procurement wave for domestic equipment makers exceeding RMB 280 billion over the plan period. Investment committee governance includes quarterly independent performance reviews and mandatory co-investment requirements for provincial SASAC entities, reducing discretionary capital allocation risk compared to earlier fund iterations.`,
          dataPoints: [
            'Big Fund III registered capital: RMB 344 billion (launched October 2024)',
            'Big Fund I (2014): RMB 138.7B; Big Fund II (2019): RMB 204.2B; cumulative total: RMB 687B',
            'Ministry of Finance shareholding in Big Fund III: 17.2%',
            'Target: 80% domestic supply of 28nm+ process equipment by 2027',
            'Target: 40% domestic supply of sub-28nm equipment by 2030',
            'Implied domestic equipment procurement wave: RMB 280B+ over plan period',
          ],
        },
        {
          heading: 'Domestic Fabrication Progress & Technology Trajectory',
          content: `China's leading foundry, SMIC, has made significant process-node advances despite U.S. Entity List placement in December 2020. SMIC's N+2 node—achieving functional parity with TSMC's 7nm node through multi-patterning techniques rather than EUV lithography—entered risk production in Q2 2025 and volume production in Q4 2025. Yield rates of 62% at Q4 2025, while below TSMC's industry-standard 75–80%, are commercially viable for high-margin applications including defence electronics, satellite communications, and automotive-grade chips where domestic sourcing is mandated. Twelve domestic foundries have announced capacity expansions totalling 1.8 million 300mm wafer-equivalent units per month by 2027, representing an 87% increase over 2024 nameplate capacity. Critical supply chain gaps persist in EUV lithography (monopolised by ASML under export controls), immersion ArF photolithography chemicals (partially sourced domestically), and advanced packaging substrates where domestic leaders are achieving 70–80% of international specification benchmarks.`,
          dataPoints: [
            'SMIC N+2 node yield rate: 62% in Q4 2025 (up from 38% in Q4 2023)',
            'TSMC industry yield benchmark: 75–80%',
            'Domestic foundry capacity expansion: 1.8M 300mm WEU/month by 2027 (+87% vs 2024)',
            'SMIC N+2 volume production commenced: Q4 2025',
          ],
        },
        {
          heading: 'EDA, Materials & Equipment Localisation',
          content: `Electronic Design Automation software remains the most critical chokepoint in China's semiconductor self-sufficiency drive. The three dominant EDA vendors—Synopsys, Cadence, and Mentor Graphics (Siemens)—collectively held approximately 87% of the global EDA market in 2024, all subject to U.S. export licensing restrictions for advanced node design tools targeting Chinese customers. Domestic EDA champions Empyrean Technology and Primarius Technologies captured a combined 9% domestic market share in 2025, up from 3% in 2022, driven by government procurement mandates in state-owned semiconductor design houses. Specialty chemical inputs—photoresists, CMP slurries, process gases—remain 68% import-dependent for advanced nodes, though domestic providers have received accelerated certification for mid-range materials. The government's Materials Localisation Initiative provides procurement subsidies of 25–35% for domestic-content materials, creating a cost floor that makes Chinese suppliers competitive even where technical specifications lag international leaders by one generation.`,
          dataPoints: [
            'Global EDA market: big-three vendors hold ~87% share (2024)',
            'Domestic EDA market share (Empyrean + Primarius): 9% in 2025, up from 3% in 2022',
            'Advanced node specialty chemicals import dependency: 68%',
            'Materials Localisation Initiative subsidy: 25–35% on domestic-content procurement',
          ],
        },
      ],
    },
    {
      title: 'AI Governance Framework',
      subsections: [
        {
          heading: 'Generative AI Regulation: Implementation & Scope',
          content: `The Interim Measures for the Administration of Generative Artificial Intelligence Services—introduced August 2023, comprehensively updated November 2024—represent the world's most operationally detailed regulatory framework for large language model deployment. Under the updated measures, any generative AI service with more than 10,000 registered users in mainland China must undergo a three-stage registration process: (1) algorithm filing with the CAC, (2) content safety evaluation against a 150-point benchmark testing protocol, and (3) security assessment by a CAC-designated third-party laboratory. Total registration timelines average 11–14 weeks for domestic LLM providers and 18–22 weeks for foreign-developed models operating through licensed domestic entities. Forty-seven AI products held CAC registration approval as of January 2026, including Baidu's ERNIE series, Alibaba's Tongyi Qianwen, and Zhipu AI's ChatGLM. The content safety benchmark is updated quarterly, creating ongoing compliance obligations and a recurring revenue stream for testing laboratories.`,
          dataPoints: [
            'Generative AI registration threshold: 10,000+ mainland China registered users',
            'Domestic LLM registration timeline: avg. 11–14 weeks',
            'Foreign model registration via licensed entity: avg. 18–22 weeks',
            '47 AI products held CAC approval as of January 2026',
            'Content safety benchmark: 150 evaluation criteria, updated quarterly',
          ],
        },
        {
          heading: 'Foreign Participation Rules & Equity Caps',
          content: `The 2024 AI Industry Guidance restricts non-Chinese entities to a maximum 49% equity stake in companies engaged in LLM training, foundation model development, or AI-enabled critical infrastructure management. This cap effectively excludes foreign investors from majority positions in the highest-value AI segments. However, the infrastructure layer—data centres, GPU clusters, edge computing networks, cooling technology—faces no equity cap and represents the largest near-term capital deployment opportunity. China is expected to add 8.5 million AI-optimised GPU equivalents of data centre capacity between 2025 and 2027, requiring USD 67 billion in capital expenditure. The venture capital landscape for AI application software—layered on top of licensed base models—is more open, with foreign PE/VC funds operating through QFLP structures actively leading Series B and C rounds in healthcare diagnostics, industrial automation, and autonomous logistics.`,
          dataPoints: [
            'Foreign equity cap in LLM training / foundation model companies: 49%',
            'AI data centre capacity addition 2025–2027: 8.5 million GPU equivalents',
            'AI data centre capex requirement 2025–2027: USD 67 billion',
            'No equity cap applies to infrastructure layer (data centres, cooling, networking)',
          ],
        },
        {
          heading: 'National AI Computing Infrastructure Plan',
          content: `The National AI Computing Infrastructure Plan, issued jointly by MIIT and NDRC in March 2025, targets deployment of 300 EFLOPS of national AI computing capacity by 2027—a fourfold increase from the 75 EFLOPS estimated nationally at end-2024. Capital grants of up to 20% of qualifying hardware expenditure (capped at RMB 150 million per project), priority grid connectivity, and power pricing benchmarked 15% below standard industrial rates drive private sector participation. Huawei's Ascend 910B AI accelerator—the leading domestically manufactured alternative to NVIDIA's H100—is achieving 65–72% of H100 performance across standard LLM training benchmarks, up from 55% in early 2025, and is now the default procurement option for state-owned enterprise AI deployments. Tier-2 cities including Guizhou, Inner Mongolia, and Ningxia offer dedicated AI Industrial Park land allocations and power costs of RMB 0.28–0.35 per kWh versus RMB 0.58–0.72 in coastal cities.`,
          dataPoints: [
            'National AI computing target: 300 EFLOPS by 2027 (from 75 EFLOPS at end-2024, +300%)',
            'Capital grant: up to 20% of qualifying hardware spend, capped at RMB 150M per project',
            'AI Industrial Park power pricing: 15% below standard industrial rate',
            'Huawei Ascend 910B vs. NVIDIA H100: 65–72% benchmark performance (up from 55% in early 2025)',
            'Tier-2 city data centre power: RMB 0.28–0.35/kWh vs. RMB 0.58–0.72/kWh coastal',
          ],
        },
      ],
    },
    {
      title: 'Investment Opportunities & Structuring',
      subsections: [
        {
          heading: 'High-Conviction Investment Themes',
          content: `Institutional investors with China technology mandates are concentrating exposure across three themes. First, AI infrastructure: data centres, liquid cooling systems, high-bandwidth networking, and power supply equipment face no sectoral restrictions and are generating 14–19% unlevered project IRRs on 10–15 year asset-backed structures. Second, domestic semiconductor equipment and materials: companies in the supply chain directly benefiting from Big Fund III procurement mandates and government-directed customer pipelines represent a rare government-guaranteed revenue stream; domestic equipment makers are trading at 35–55x forward earnings, reflecting growth expectations of 25–40% CAGR through 2028. Third, AI application software in un-capped sectors: vertical AI for healthcare imaging diagnostics, financial risk scoring, and logistics optimisation, where foreign minority stakes up to 49% are permissible and commercial traction is already established with measurable revenue and unit economics.`,
          dataPoints: [
            'AI infrastructure project IRRs: 14–19% unlevered on 10–15 year structures',
            'Domestic semiconductor equipment makers: 35–55x forward earnings (25–40% CAGR expected 2025–2028)',
            'Foreign minority stake permissible in AI application verticals: up to 49%',
          ],
        },
        {
          heading: 'Risk Framework & Mitigation',
          content: `The principal risks for China technology investors in 2026 are export-control escalation, regulatory policy reversal, and currency repatriation friction. Export-control escalation risk increased following the October 2024 U.S. BIS rule update that closed the A:5 country exception for advanced AI chips, effectively banning NVIDIA H100/H200 and AMD MI300X sales to China. This has accelerated Huawei Ascend adoption—benefiting domestic investors—but increased operational latency risk for foreign investors dependent on imported compute. Regulatory reversal risk is managed through explicit government support letters from NDRC or provincial development commissions and portfolio diversification across at least four distinct policy categories. Currency risk is most effectively addressed through natural hedges—denominating China revenues and costs in RMB—and utilising the PBOC's expanded Cross-Border RMB Settlement (CIPS) network for intercompany transfers.`,
          dataPoints: [
            'U.S. BIS October 2024 rule: closed A:5 exception, banning NVIDIA H100/H200 and AMD MI300X sales to China',
            'Portfolio diversification across 4+ policy categories: recommended minimum for tech investors',
            'CIPS network: preferred mechanism for RMB intercompany transfers, faster than SWIFT for China routes',
          ],
        },
      ],
    },
    {
      title: 'Competitive Landscape & Geopolitical Context',
      subsections: [
        {
          heading: 'China vs. U.S. Technology Rivalry: Investment Implications',
          content: `The U.S.-China technology rivalry has bifurcated global capital markets into parallel technology ecosystems. China's domestic semiconductor market—valued at USD 198 billion in 2025, representing 34% of global semiconductor demand—is increasingly served by domestic suppliers backed by Big Fund capital and procurement preferences. Export control restrictions have paradoxically accelerated domestic technology development timelines by 18–24 months in certain categories (packaging, wire bonding, legacy node fabrication) while extending timelines by 24–36 months in others (EUV lithography, advanced photomasks, high-NA optics). Foreign institutional investors must now conduct explicit technology-trajectory analysis to determine whether export-control-driven acceleration or restriction dominates in any given sub-sector before committing capital. Investors who correctly identified packaging and advanced substrates as acceleration-mode sub-sectors in 2023–2024 have seen portfolio companies deliver 3.2–4.8x returns as domestic demand surged.`,
          dataPoints: [
            "China's domestic semiconductor market: USD 198 billion in 2025 (34% of global demand)",
            'Export controls accelerated domestic development in packaging by 18–24 months',
            'Export controls extended timelines for EUV-dependent processes by 24–36 months',
            'Packaging and substrate sub-sector returns for early investors: 3.2–4.8x (2023–2025)',
          ],
        },
        {
          heading: 'Policy Outlook Through 2028',
          content: `The regulatory trajectory for China's technology sector through 2028 is characterised by three concurrent trends: continued tightening of foreign equity participation in foundation AI and core semiconductor design; progressive opening of the infrastructure and application layers to attract foreign capital and operational expertise; and deepening integration with ASEAN technology supply chains as a hedge against Western decoupling. The 15th Five-Year Plan (2026–2030), expected to be formally adopted at the National People's Congress session in March 2026, is anticipated to elevate semiconductors and AI from "strategic emerging industries" to "core national security industries"—a designation that historically brings both enhanced funding and heightened regulatory scrutiny. Institutional investors should establish direct government affairs capabilities or relationships with qualified advisers embedded in Beijing policy networks before the plan's publication in order to shape sector-specific implementation guidelines in their favour.`,
          dataPoints: [
            '15th Five-Year Plan (2026–2030): formal adoption expected March 2026 NPC session',
            'Semiconductors and AI expected to be reclassified as "core national security industries"',
            'ASEAN tech supply chain integration: accelerating as hedge against Western decoupling',
          ],
        },
      ],
    },
  ],
  references: [
    { number: 1, author: 'Cyberspace Administration of China', year: 2024, title: 'Interim Measures for the Administration of Generative Artificial Intelligence Services (Revised)', source: 'CAC Official Gazette, November 2024' },
    { number: 2, author: 'Ministry of Industry and Information Technology, PRC', year: 2025, title: 'National AI Computing Infrastructure Plan 2025–2027', source: 'MIIT, March 2025' },
    { number: 3, author: 'U.S. Bureau of Industry and Security', year: 2024, title: 'Export Administration Regulations: Advanced Computing and Semiconductor Items Update (October 2024 Rule)', source: 'U.S. Department of Commerce, BIS, Washington D.C.' },
    { number: 4, author: 'SEMI', year: 2025, title: 'China Semiconductor Equipment Market Forecast 2025–2030', source: 'SEMI Industry Research, San Jose' },
    { number: 5, author: 'Goldman Sachs Research', year: 2025, title: "China's AI Infrastructure Buildout: Scale, Timeline and Investment Opportunities", source: 'Goldman Sachs Global Investment Research, Hong Kong' },
    { number: 6, author: 'Gartner', year: 2025, title: 'Global Semiconductor Market Forecast and China Domestic Supplier Analysis', source: 'Gartner Research, Stamford' },
    { number: 7, author: 'Morgan Stanley Asia', year: 2026, title: 'China AI and Semiconductor Sector: 2026 Outlook', source: 'Morgan Stanley Research Asia Pacific, Hong Kong' },
    { number: 8, author: 'Paul Weiss LLP', year: 2025, title: 'Structuring Technology Investments in China Under Heightened Export Control Regimes', source: 'Paul Weiss Technology and Regulatory Practice, Hong Kong' },
    { number: 9, author: 'Boston Consulting Group', year: 2025, title: "China's Semiconductor Self-Sufficiency: Progress Report and 2030 Outlook", source: 'BCG Technology Practice, Shanghai' },
    { number: 10, author: 'IC Insights', year: 2025, title: 'China Integrated Circuit Market and Production Capacity Analysis 2025', source: 'IC Insights, Scottsdale' },
  ],
  footnotes: [
    { term: 'Big Fund (NICIIF)', definition: "China's National Integrated Circuit Industry Investment Fund, a state-backed vehicle channelling sovereign capital into domestic semiconductor design, fabrication, and equipment companies." },
    { term: 'N+2 Node', definition: "SMIC's process technology classification for its most advanced fabrication node, achieving functional transistor density parity with TSMC's 7nm node through multi-patterning without EUV lithography." },
    { term: 'EUV', definition: 'Extreme Ultraviolet lithography — the current gold standard photolithography technology enabling sub-7nm chip fabrication, monopolised by ASML and subject to export controls preventing sale to China.' },
    { term: 'EDA', definition: 'Electronic Design Automation — software tools used by engineers to design integrated circuits; critical chokepoint in semiconductor self-sufficiency given U.S. export restrictions on advanced EDA tools.' },
    { term: 'EFLOPS', definition: 'ExaFLOPS — one quintillion (10^18) floating-point operations per second; a standard measure of AI computing performance at data centre scale.' },
    { term: 'LLM', definition: 'Large Language Model — a deep learning AI model trained on massive text datasets capable of generating, summarising, and reasoning about natural language.' },
  ],
};

export default article;
