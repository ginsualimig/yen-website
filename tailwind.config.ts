import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary deep navy — institutional foundation
        'navy': {
          950: '#060D1A',
          900: '#0B1626',
          800: '#0F1F38',
          700: '#152847',
          600: '#1A3258',
          500: '#1E3A6E',
        },
        // Warm cream/off-white — premium contrast
        'cream': {
          50:  '#FDFCF9',
          100: '#FAF8F3',
          200: '#F5F1E8',
          300: '#EDE7D8',
        },
        // Refined gold — restrained accent
        'gold': {
          300: '#E8D5A3',
          400: '#D4BA7A',
          500: '#C9A961',
          600: '#B8944A',
          700: '#9A7A38',
        },
        // Neutral grays — body text, borders
        'slate': {
          50:  '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#868E96',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        // Legacy aliases for compatibility
        'yen-navy': '#0B1626',
        'yen-navy-light': '#152847',
        'yen-gold': '#C9A961',
        'yen-gold-light': '#D4BA7A',
        'yen-gray-dark': '#495057',
        'yen-gray-light': '#F1F3F5',
        'yen-gray-bg': '#F8F9FA',
      },
      fontFamily: {
        'serif': ['"Lora"', 'Georgia', '"Times New Roman"', 'serif'],
        'sans': ['"Inter"', '"Helvetica Neue"', 'Arial', 'system-ui', 'sans-serif'],
        'zh': ['"Noto Serif SC"', '"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-md':  ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.2',  letterSpacing: '-0.005em' }],
        'body-xl':     ['1.25rem', { lineHeight: '1.75', letterSpacing: '0' }],
        'body-lg':     ['1.125rem',{ lineHeight: '1.75', letterSpacing: '0' }],
        'body-md':     ['1rem',    { lineHeight: '1.7',  letterSpacing: '0.01em' }],
        'body-sm':     ['0.875rem',{ lineHeight: '1.65', letterSpacing: '0.01em' }],
        'label':       ['0.8125rem',{ lineHeight: '1.5', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        'safe-top': 'max(env(safe-area-inset-top), 1rem)',
        'safe-bottom': 'max(env(safe-area-inset-bottom), 1rem)',
      },
      maxWidth: {
        'reading': '68ch',
        'prose-wide': '80ch',
      },
      boxShadow: {
        'premium-sm': '0 1px 3px rgba(11,22,38,0.08), 0 1px 2px rgba(11,22,38,0.06)',
        'premium':    '0 4px 16px rgba(11,22,38,0.08), 0 1px 4px rgba(11,22,38,0.05)',
        'premium-md': '0 8px 28px rgba(11,22,38,0.1), 0 2px 8px rgba(11,22,38,0.06)',
        'premium-lg': '0 16px 48px rgba(11,22,38,0.12), 0 4px 12px rgba(11,22,38,0.07)',
        'premium-xl': '0 24px 64px rgba(11,22,38,0.14), 0 8px 20px rgba(11,22,38,0.08)',
        'gold-glow':  '0 0 0 1px rgba(201,169,97,0.3), 0 4px 20px rgba(201,169,97,0.12)',
        'card-hover': '0 12px 40px rgba(11,22,38,0.13), 0 3px 10px rgba(11,22,38,0.07)',
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '28px',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #060D1A 0%, #0F1F38 50%, #0B1626 100%)',
        'gradient-navy-subtle': 'linear-gradient(180deg, #0B1626 0%, #0F1F38 100%)',
        'gradient-cream': 'linear-gradient(180deg, #FDFCF9 0%, #FAF8F3 100%)',
        'gradient-gold-line': 'linear-gradient(90deg, transparent 0%, #C9A961 50%, transparent 100%)',
        'gradient-section': 'linear-gradient(180deg, #FAF8F3 0%, #F5F1E8 100%)',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'line-grow': 'lineGrow 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
