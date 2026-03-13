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
      title: 'Investment Consulting & M&A Advisory',
      subtitle: 'Institutional advisory across Asia-Pacific. We advise institutional investors, corporations, and family offices on capital deployment, business transformation, and market opportunity.',
      cta: 'Our Services',
      description: 'Institutional investment consulting and M&A advisory across Asia-Pacific.',
    },

    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Six core advisory disciplines. We serve institutional clients through disciplined analysis and deep market knowledge.',
      overview: 'View All Services',
      
      'mna': {
        title: 'M&A Advisory',
        short: 'Cross-border mergers, acquisitions, and restructuring',
        description: 'We advise on mergers, acquisitions, and corporate restructuring. Our work spans deal sourcing, valuation, structure design, negotiation support, and post-merger integration across the Asia-Pacific region.',
      },
      'business-improvement': {
        title: 'Business Improvement',
        short: 'Operational performance and value creation',
        description: 'We work with management teams to improve operational performance, optimize processes, and strengthen competitive positioning. Our approach combines systematic analysis with practical implementation support.',
      },
      'rollup-strategy': {
        title: 'Roll-Up Strategy',
        short: 'Market consolidation and platform building',
        description: 'We advise on consolidation strategies in fragmented markets. Our work includes platform identification, acquisition sequencing, integration planning, and long-term value creation through scale and operational leverage.',
      },
      'direct-investment': {
        title: 'Direct Investment',
        short: 'Growth investment identification and execution',
        description: 'We identify and execute direct investment opportunities in growth companies and emerging sectors. We provide deal sourcing, rigorous due diligence, investment structuring, and active portfolio support.',
      },
      'business-management': {
        title: 'Business Management',
        short: 'Strategic planning and organizational excellence',
        description: 'We advise on business strategy, organizational structure, and governance. We work with leadership to align strategic direction, build management capability, and establish strong operational foundations.',
      },
      'research-reports': {
        title: 'Research & Analysis',
        short: 'Market intelligence and industry analysis',
        description: 'We produce independent market research, industry analysis, and strategic intelligence. Our work draws on primary research, quantitative analysis, and deep market experience across Asia-Pacific sectors.',
      },
    },

    // About
    about: {
      title: 'About Yenturi Investment Consulting',
      mission: 'Who We Are',
      missionText: 'Yenturi is an investment consulting firm serving institutional investors, listed corporations, and family offices across Asia-Pacific. We advise on capital deployment, business transformation, and market strategy. Our practice draws on decades of experience in institutional advisory, cross-border transactions, and emerging market investment.',
      vision: 'How We Work',
      visionText: 'We work by introduction and referral. Our clients are institutional investors and corporations we know well. We advise through direct engagement, combine market knowledge with rigorous analysis, and remain actively involved in execution.',
      values: 'Our Principles',
      excellence: 'Rigor: Disciplined analysis and clear thinking on complex problems',
      integrity: 'Integrity: Direct counsel and transparent communication with clients',
      expertise: 'Experience: Deep knowledge of Asia-Pacific markets and transaction experience',
      innovation: 'Independence: Impartial advice that puts client interests first',
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
      title: '投资咨询与并购顾问',
      subtitle: '亚太地区机构咨询服务。我们为机构投资者、上市公司及家族办公室提供资本配置、业务转型及市场机遇方面的顾问服务。',
      cta: '我们的服务',
      description: '亚太地区投资咨询和并购顾问服务。',
    },

    // Services
    services: {
      title: '我们的服务',
      subtitle: '六大核心咨询领域。我们通过深入分析和市场知识为机构客户提供服务。',
      overview: '查看全部服务',
      
      'mna': {
        title: '并购顾问',
        short: '跨境并购与重组',
        description: '我们提供并购、收购和企业重组方面的顾问服务。工作涵盖交易寻源、估值、结构设计、谈判支持及并购后整合。',
      },
      'business-improvement': {
        title: '业务改进',
        short: '运营绩效与价值创造',
        description: '我们与管理团队合作，改进运营绩效、优化流程，加强竞争地位。我们的方法结合系统分析与实际执行支持。',
      },
      'rollup-strategy': {
        title: '整合战略',
        short: '市场整合与平台构建',
        description: '我们提供分散市场整合战略方面的顾问服务。工作包括平台识别、收购序列规划、整合设计及通过规模和运营杠杆创造长期价值。',
      },
      'direct-investment': {
        title: '直接投资',
        short: '增长投资识别与执行',
        description: '我们识别并执行成长型公司和新兴领域的直接投资机会。我们提供交易寻源、严格的尽职调查、投资结构设计及积极的投资组合管理。',
      },
      'business-management': {
        title: '业务管理',
        short: '战略规划与组织卓越',
        description: '我们提供业务战略、组织结构及治理方面的顾问服务。我们与领导团队合作，对齐战略方向，建设管理能力，建立强有力的运营基础。',
      },
      'research-reports': {
        title: '研究与分析',
        short: '市场情报与行业分析',
        description: '我们进行独立的市场研究、行业分析和战略情报工作。我们的工作基于一手调研、定量分析及亚太地区各行业的深厚市场经验。',
      },
    },

    // About
    about: {
      title: '关于Yenturi投资顾问',
      mission: '我们是谁',
      missionText: 'Yenturi是一家投资咨询公司，为亚太地区的机构投资者、上市公司和家族办公室提供服务。我们就资本配置、业务转型和市场战略提供顾问服务。我们的实践基于数十年的机构咨询、跨境交易和新兴市场投资经验。',
      vision: '我们如何工作',
      visionText: '我们通过介绍和推荐进行业务合作。我们的客户是我们深入了解的机构投资者和企业。我们通过直接合作、将市场知识与严谨分析相结合，并在执行过程中保持积极参与。',
      values: '我们的原则',
      excellence: '严谨：对复杂问题进行严律的分析和清晰的思考',
      integrity: '诚信：向客户提供直率的建议和透明的沟通',
      expertise: '经验：对亚太市场的深入了解和交易执行经验',
      innovation: '独立：以客户利益为先的公正建议',
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
