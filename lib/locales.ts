export type Locale = 'en' | 'zh';

export const locales: Locale[] = ['en', 'zh'];

export const translations = {
  en: {
    // Common
    language: 'Language',
    'language-toggle': '中文',
    
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
    },

    // Hero
    hero: {
      title: 'Accelerating Capital Flow Across Asia-Pacific',
      subtitle: 'Where market friction meets strategic momentum. Yenturi channels opportunity through disciplined execution — convergent expertise, accelerated returns.',
      cta: 'Explore Our Services',
      description: 'Institutional investment consulting and M&A advisory across Asia-Pacific. We accelerate capital flow through convergent expertise.',
    },

    // Services
    services: {
      title: 'Channeling Opportunity',
      subtitle: 'Six convergent disciplines. One accelerated outcome. We narrow complexity into executable strategy across the full investment lifecycle.',
      overview: 'View All Services',
      
      'mna': {
        title: 'M&A Advisory',
        short: 'Accelerating deal flow across borders',
        description: 'Strategic guidance on mergers, acquisitions, and corporate restructuring across the Asia-Pacific region. We bring decades of experience in cross-border transactions, deal structuring, and post-merger integration to deliver measurable outcomes for our clients.',
      },
      'business-improvement': {
        title: 'Business Improvement',
        short: 'Converting friction into operational velocity',
        description: 'Enhance operational performance, streamline processes, and unlock value through systematic improvement programs. Our team combines proven methodologies with deep APAC market knowledge to drive sustainable performance gains.',
      },
      'rollup-strategy': {
        title: 'Roll-Up Strategy',
        short: 'Concentrating fragmented markets into leaders',
        description: 'Strategic consolidation of fragmented markets to create industry leaders and maximize shareholder value. We identify platform opportunities, structure acquisitions, and guide integration to build dominant market positions across Asia-Pacific.',
      },
      'direct-investment': {
        title: 'Direct Investment',
        short: 'Channeling capital to high-velocity opportunities',
        description: 'Identify and execute direct investment opportunities with strong growth potential in emerging and developed markets across Asia-Pacific. We bring proprietary deal flow, rigorous analysis, and hands-on portfolio management to create long-term value.',
      },
      'business-management': {
        title: 'Business Management',
        short: 'Directing momentum through organizational clarity',
        description: 'Transform business management practices and drive organizational excellence through proven frameworks. We work alongside leadership teams to align strategy, strengthen governance, and build the capabilities required to compete and win.',
      },
      'research-reports': {
        title: 'Research & Reports',
        short: 'Intelligence that accelerates decision-making',
        description: 'In-depth market research, industry analysis, and actionable intelligence for strategic decision-making. Our research combines primary field work with rigorous quantitative analysis to deliver insights that inform major investment and business decisions.',
      },
    },

    // About
    about: {
      title: 'About Yenturi Investment Consulting',
      mission: 'Mission',
      missionText: 'We accelerate capital flow and business transformation across the Asia-Pacific region — channeling institutional expertise through disciplined execution to create enduring value for our clients.',
      vision: 'Vision',
      visionText: 'To be the most trusted investment advisory partner for institutions and corporations navigating the complexity and opportunity of the Asia-Pacific markets.',
      values: 'Our Values',
      excellence: 'Excellence: Uncompromising commitment to quality in every engagement',
      integrity: 'Integrity: Transparent, ethical, and relationship-first business practices',
      expertise: 'Expertise: Deep industry knowledge built over decades in APAC markets',
      innovation: 'Innovation: Creative, rigorous solutions to complex advisory challenges',
    },

    // Footer
    footer: {
      office: 'Guangzhou Office',
      address: 'Yuhai Tianhe City Tower\n208 Tianhe Road, Tianhe District\nGuangzhou, China',
      links: 'Company',
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      sitemap: 'Sitemap',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2024 Yenturi Investment Consulting. All rights reserved.',
    },
  },

  zh: {
    // Common
    language: '语言',
    'language-toggle': 'English',
    
    // Navigation
    nav: {
      home: '首页',
      about: '关于我们',
      services: '服务',
    },

    // Hero
    hero: {
      title: '加速亚太资本流动',
      subtitle: '市场摩擦与战略动能的交汇处。Yenturi以专注执行疏导机遇——汇聚专业，加速回报。',
      cta: '探索我们的服务',
      description: '亚太地区专业投资咨询和并购顾问服务，汇聚专业，加速资本流动。',
    },

    // Services
    services: {
      title: '疏导机遇',
      subtitle: '六大汇聚专业。一个加速成果。我们将复杂性收窄为可执行战略，贯穿投资全周期。',
      overview: '查看全部服务',
      
      'mna': {
        title: 'M&A 顾问',
        short: '加速跨境并购流程',
        description: '在亚太地区提供并购、收购和公司重组的战略指导。我们在跨境交易、交易结构设计和并购后整合方面拥有数十年经验，为客户创造可衡量的成果。',
      },
      'business-improvement': {
        title: '业务改进',
        short: '将摩擦转化为运营动能',
        description: '通过系统的改进计划，提升运营绩效，优化流程，释放价值。我们的团队将经过验证的方法论与深厚的亚太市场知识相结合，推动可持续的绩效提升。',
      },
      'rollup-strategy': {
        title: '整合战略',
        short: '将分散市场集中为行业领导者',
        description: '通过战略性整合碎片化市场，打造行业领导者，实现股东价值最大化。我们识别平台机会，构建收购策略，引导整合过程，在亚太地区建立主导市场地位。',
      },
      'direct-investment': {
        title: '直接投资',
        short: '将资本引导至高速增长机会',
        description: '识别和执行亚太地区新兴市场和成熟市场中具有强劲增长潜力的直接投资机会。我们带来专有的交易流、严格的分析和动手的投资组合管理，创造长期价值。',
      },
      'business-management': {
        title: '业务管理',
        short: '以组织清晰度引导增长动能',
        description: '通过成熟的框架，转变业务管理实践，推动组织卓越。我们与领导团队并肩合作，对齐战略、强化治理，构建竞争所需的能力。',
      },
      'research-reports': {
        title: '研究与报告',
        short: '加速决策的市场情报',
        description: '深入的市场研究、行业分析和可行性洞察，支持战略决策。我们的研究将一手调研与严格的定量分析相结合，为重大投资和商业决策提供参考。',
      },
    },

    // About
    about: {
      title: '关于Yenturi投资顾问',
      mission: '使命',
      missionText: '我们加速亚太地区的资本流动与业务转型——通过专注执行疏导机构专业知识，为客户创造持久价值。',
      vision: '愿景',
      visionText: '成为机构投资者和企业在应对亚太市场复杂性与机遇时最值得信赖的投资顾问合作伙伴。',
      values: '我们的价值观',
      excellence: '卓越：对每一项服务质量的不妥协承诺',
      integrity: '诚信：透明、道德、以关系为先的业务实践',
      expertise: '专业知识：在亚太市场积累数十年的深厚行业知识',
      innovation: '创新：针对复杂顾问挑战的创造性、严谨解决方案',
    },

    // Footer
    footer: {
      office: '广州办公室',
      address: '粤海天河城大厦\n天河区天河路208号\n中国广州',
      links: '公司',
      services: '服务',
      company: '公司',
      legal: '法律',
      sitemap: '网站地图',
      privacy: '隐私政策',
      terms: '服务条款',
      copyright: '© 2024 Yenturi投资顾问。版权所有。',
    },
  },
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Fallback to key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}
