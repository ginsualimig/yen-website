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
      phone: '+852 1234 5678',
      email: 'contact@yen-consulting.com',
    },

    // Hero
    hero: {
      title: 'Investment Consulting Excellence',
      subtitle: 'Strategic Advisory for Asia-Pacific Growth',
      cta: 'Get Started',
      description: 'Leading financial advisory and investment consulting services',
    },

    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive investment and business consulting solutions',
      overview: 'Services Overview',
      
      'mna': {
        title: 'M&A Advisory',
        short: 'Expert guidance on mergers and acquisitions',
        description: 'Strategic guidance on mergers, acquisitions, and corporate restructuring across the Asia-Pacific region.',
      },
      'business-improvement': {
        title: 'Business Improvement',
        short: 'Operational excellence and efficiency gains',
        description: 'Enhance operational performance, streamline processes, and unlock value through systematic improvement programs.',
      },
      'rollup-strategy': {
        title: 'Roll-Up Strategy',
        short: 'Consolidation and market dominance',
        description: 'Strategic consolidation of fragmented markets to create industry leaders and maximize shareholder value.',
      },
      'direct-investment': {
        title: 'Direct Investment',
        short: 'Direct investment opportunities',
        description: 'Identify and execute direct investment opportunities with strong growth potential in emerging markets.',
      },
      'business-management': {
        title: 'Business Management',
        short: 'Management advisory and optimization',
        description: 'Transform business management practices and drive organizational excellence through proven frameworks.',
      },
      'research-reports': {
        title: 'Research & Reports',
        short: 'Market insights and analysis',
        description: 'In-depth market research, industry analysis, and actionable insights for strategic decision-making.',
      },
    },

    // About
    about: {
      title: 'About Yen Investment Consulting',
      mission: 'Mission',
      missionText: 'To provide world-class investment consulting and advisory services that drive sustainable growth and value creation across the Asia-Pacific region.',
      vision: 'Vision',
      visionText: 'To be the trusted partner for institutional investors and businesses seeking strategic guidance and financial excellence.',
      values: 'Our Values',
      excellence: 'Excellence: Uncompromising commitment to quality',
      integrity: 'Integrity: Transparent and ethical business practices',
      expertise: 'Expertise: Deep industry knowledge and experience',
      innovation: 'Innovation: Creative solutions to complex challenges',
    },

    // Contact
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let us help you achieve your investment and business goals',
      form: {
        name: 'Full Name',
        company: 'Company',
        email: 'Email Address',
        phone: 'Phone Number',
        country: 'Country',
        service: 'Service Interest',
        message: 'Message',
        submit: 'Send Inquiry',
        success: 'Thank you for your inquiry. We will be in touch soon.',
        error: 'An error occurred. Please try again.',
      },
      address: 'Office Address',
      addressText: 'Yuhai Tianhe City Tower, 208 Tianhe Road, Guangzhou, China',
      email: 'Email',
      phone: 'Phone',
    },

    // Footer
    footer: {
      office: 'Guangzhou Office',
      address: 'Yuhai Tianhe City Tower\n208 Tianhe Road, Tianhe District\nGuangzhou, China',
      email: 'contact@yen-consulting.com',
      phone: '+86 20 XXXX XXXX',
      links: 'Quick Links',
      services: 'Services',
      company: 'Company',
      legal: 'Legal',
      sitemap: 'Sitemap',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2024 Yen Investment Consulting. All rights reserved.',
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
      phone: '+852 1234 5678',
      email: 'contact@yen-consulting.com',
    },

    // Hero
    hero: {
      title: '投资顾问卓越服务',
      subtitle: '亚太地区战略增长咨询',
      cta: '立即开始',
      description: '领先的财务顾问和投资咨询服务',
    },

    // Services
    services: {
      title: '我们的服务',
      subtitle: '全面的投资和商业咨询解决方案',
      overview: '服务概览',
      
      'mna': {
        title: 'M&A 顾问',
        short: '并购和收购的专业指导',
        description: '在亚太地区提供并购、收购和公司重组的战略指导。',
      },
      'business-improvement': {
        title: '业务改进',
        short: '运营卓越和效率提升',
        description: '通过系统的改进计划，提升运营绩效，优化流程，释放价值。',
      },
      'rollup-strategy': {
        title: '整合战略',
        short: '市场整合和市场主导',
        description: '通过战略性的市场整合，打造行业领导者，实现股东价值最大化。',
      },
      'direct-investment': {
        title: '直接投资',
        short: '直接投资机会',
        description: '识别和执行具有强劲增长潜力的新兴市场直接投资机会。',
      },
      'business-management': {
        title: '业务管理',
        short: '管理咨询和优化',
        description: '通过成熟的框架，转变业务管理实践，推动组织卓越。',
      },
      'research-reports': {
        title: '研究与报告',
        short: '市场洞察和分析',
        description: '深入的市场研究、行业分析和可行性洞察，支持战略决策。',
      },
    },

    // About
    about: {
      title: '关于俣投资顾问',
      mission: '使命',
      missionText: '为亚太地区的机构投资者和企业提供世界级的投资顾问和咨询服务，推动可持续增长和价值创造。',
      vision: '愿景',
      visionText: '成为寻求战略指导和财务卓越的机构投资者和企业的信任伙伴。',
      values: '我们的价值观',
      excellence: '卓越：对质量的不妥协承诺',
      integrity: '诚信：透明和伦理的业务实践',
      expertise: '专业知识：深厚的行业知识和经验',
      innovation: '创新：对复杂挑战的创意解决方案',
    },

    // Contact
    contact: {
      title: '联系我们',
      subtitle: '让我们帮助您实现投资和商业目标',
      form: {
        name: '全名',
        company: '公司',
        email: '邮箱地址',
        phone: '电话号码',
        country: '国家/地区',
        service: '服务兴趣',
        message: '留言',
        submit: '提交咨询',
        success: '感谢您的咨询。我们将尽快与您联系。',
        error: '发生错误。请重试。',
      },
      address: '办公地址',
      addressText: '粤海天河城大厦，天河路208号，中国广州',
      email: '邮箱',
      phone: '电话',
    },

    // Footer
    footer: {
      office: '广州办公室',
      address: '粤海天河城大厦\n天河区天河路208号\n中国广州',
      email: 'contact@yen-consulting.com',
      phone: '+86 20 XXXX XXXX',
      links: '快速链接',
      services: '服务',
      company: '公司',
      legal: '法律',
      sitemap: '网站地图',
      privacy: '隐私政策',
      terms: '服务条款',
      copyright: '© 2024 俣投资顾问。版权所有。',
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
