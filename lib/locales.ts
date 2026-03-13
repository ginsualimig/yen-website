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
      contact: 'Contact',
      insights: 'Insights',
    },

    // Hero
    hero: {
      title: 'Institutional Advisory',
      subtitle: 'Across Asia-Pacific. We advise institutional investors, corporations, and family offices on capital deployment, business transformation, and market strategy.',
      cta: 'Services',
      description: 'Institutional advisory services across Asia-Pacific.',
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
      title: 'About Yenturi',
      mission: 'Who We Are',
      missionText: 'Yenturi advises institutional investors, listed corporations, and family offices across Asia-Pacific. We focus on capital deployment, business transformation, and market strategy. Our practice draws on decades of experience in institutional advisory, cross-border transactions, and emerging market investment.',
      vision: 'How We Work',
      visionText: 'We work by introduction and referral. Our clients are institutional investors and corporations we know well. We advise through direct engagement, combine market knowledge with rigorous analysis, and remain actively involved in execution.',
      values: 'Our Principles',
      excellence: 'Rigor: Disciplined analysis and clear thinking on complex problems',
      integrity: 'Integrity: Direct counsel and transparent communication with clients',
      expertise: 'Experience: Deep knowledge of Asia-Pacific markets and transaction experience',
      innovation: 'Independence: Impartial advice that puts client interests first',
    },

    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'We work with institutional investors, listed corporations, and family offices across Asia-Pacific. Engagements are established by introduction and referral.',
      officeLabel: 'Guangzhou Office',
      emailLabel: 'Email',
      email: 'hello@yenturi.com',
      companyLabel: 'Registered Company',
      registrationLabel: 'Registration Number',
      formTitle: 'Send a Message',
      formSubtitle: 'We review all correspondence and respond to qualified inquiries.',
      formName: 'Full Name',
      formCompany: 'Organisation',
      formEmail: 'Email Address',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      formNote: 'Your information is treated with strict confidentiality.',
      formSuccess: 'Thank you. We will be in touch shortly.',
    },

    // Footer
    footer: {
      office: 'Guangzhou Office',
      address: 'Yuhai Tianhe City Tower\n208 Tianhe Road, Tianhe District\nGuangzhou, China',
      companyName: 'Yenturi Investment Consulting',
      companyNameCn: '广州岩氏投资咨询有限公司',
      registrationNumber: '91440106MAEN9787X4',
      links: 'Company',
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      sitemap: 'Sitemap',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2026 广州岩氏投资咨询有限公司。版权所有。',
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
      contact: '联系我们',
      insights: '见解',
    },

    // Hero
    hero: {
      title: '机构咨询服务',
      subtitle: '亚太地区。我们为机构投资者、上市公司及家族办公室提供资本配置、业务转型及市场战略方面的顾问服务。',
      cta: '服务',
      description: '亚太地区机构咨询服务。',
    },

    // Services
    services: {
      title: '我们的服务',
      subtitle: '六大核心咨询领域。我们通过深入分析和市场知识为机构客户提供服务。',
      overview: '查看全部服务',
      
      'mna': {
        title: '并购顾问',
        short: '跨境并购与企业重组',
        description: '我们为企业并购、收购及重组提供全程顾问服务，业务覆盖整个亚太地区。服务内容涵盖交易机会挖掘、目标企业估值、交易结构设计、谈判策略支持及并购后整合规划，帮助客户在复杂的跨境交易中把握战略价值。',
      },
      'business-improvement': {
        title: '业务改进',
        short: '运营绩效提升与价值创造',
        description: '我们与管理团队紧密协作，系统改进企业运营绩效、优化核心流程，并强化市场竞争地位。我们的方法论融合严格的现状诊断与切实可行的执行支持，确保改进成果转化为可持续的商业价值。',
      },
      'rollup-strategy': {
        title: '整合战略',
        short: '市场整合与平台构建',
        description: '我们为分散市场中的整合战略提供专业顾问服务。工作内容包括平台企业的识别与评估、收购序列的战略规划、整合方案的设计落地，以及通过规模效应和运营杠杆实现长期价值创造，助力客户在目标市场建立主导地位。',
      },
      'direct-investment': {
        title: '直接投资',
        short: '增长投资机会识别与执行',
        description: '我们专注于识别和执行成长型企业及新兴行业的直接投资机会。服务涵盖专有渠道交易挖掘、严格的尽职调查、投资结构优化设计，以及投后积极的投资组合支持与管理，致力于为客户实现资本的长期复利增值。',
      },
      'business-management': {
        title: '业务管理',
        short: '战略规划与组织卓越',
        description: '我们为客户提供企业战略、组织架构设计及公司治理方面的顾问服务。与领导团队深度合作，帮助企业明确战略方向、提升管理能力、建立高效运营体系，并将战略愿景转化为可执行的业务行动。',
      },
      'research-reports': {
        title: '研究与分析',
        short: '市场情报与行业深度分析',
        description: '我们提供独立的市场研究、行业分析及战略情报服务。研究工作结合一手调研、定量建模与行业专家访谈，深度覆盖亚太地区主要行业，为客户提供前瞻性市场洞察和以证据为基础的战略决策支持。',
      },
    },

    // About
    about: {
      title: '关于Yenturi',
      mission: '我们是谁',
      missionText: 'Yenturi为亚太地区的机构投资者、上市公司和家族办公室提供顾问服务。我们专注于资本配置、业务转型和市场战略。我们的实践基于数十年的机构咨询、跨境交易和新兴市场投资经验。',
      vision: '我们如何工作',
      visionText: '我们通过介绍和推荐进行业务合作。我们的客户是我们深入了解的机构投资者和企业。我们通过直接合作、将市场知识与严谨分析相结合，并在执行过程中保持积极参与。',
      values: '我们的原则',
      excellence: '严谨：对复杂问题进行严律的分析和清晰的思考',
      integrity: '诚信：向客户提供直率的建议和透明的沟通',
      expertise: '经验：对亚太市场的深入了解和交易执行经验',
      innovation: '独立：以客户利益为先的公正建议',
    },

    // Contact
    contact: {
      title: '联系我们',
      subtitle: '我们为亚太地区的机构投资者、上市公司和家族办公室提供顾问服务。业务合作通过介绍和推荐建立。',
      officeLabel: '广州办公室',
      emailLabel: '电子邮件',
      email: 'hello@yenturi.com',
      companyLabel: '注册公司',
      registrationLabel: '统一社会信用代码',
      formTitle: '发送消息',
      formSubtitle: '我们审阅所有来信，并回复符合条件的咨询。',
      formName: '姓名',
      formCompany: '机构',
      formEmail: '电子邮件地址',
      formMessage: '留言',
      formSubmit: '发送消息',
      formNote: '您的信息将受到严格保密。',
      formSuccess: '感谢您的来信，我们将尽快与您联系。',
    },

    // Footer
    footer: {
      office: '广州办公室',
      address: '粤海天河城大厦\n天河区天河路208号\n中国广州',
      companyName: 'Yenturi Investment Consulting',
      companyNameCn: '广州岩氏投资咨询有限公司',
      registrationNumber: '91440106MAEN9787X4',
      links: '公司',
      services: '服务',
      company: '公司',
      legal: '法律',
      sitemap: '网站地图',
      privacy: '隐私政策',
      terms: '服务条款',
      copyright: '© 2026 广州岩氏投资咨询有限公司。版权所有。',
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
