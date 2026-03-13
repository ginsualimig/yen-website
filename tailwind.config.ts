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
        // Institutional navy/dark blue
        'yen-navy': '#0A1428',
        'yen-navy-light': '#1A2844',
        // Gold/brass accents
        'yen-gold': '#D4AF37',
        'yen-gold-light': '#E8C547',
        // Neutral grays
        'yen-gray-dark': '#2C3E50',
        'yen-gray-light': '#ECF0F1',
        'yen-gray-bg': '#F8FAFB',
      },
      fontFamily: {
        // English: clean modern sans-serif
        'sans': ['"Inter"', '"Work Sans"', 'system-ui', 'sans-serif'],
        // Chinese: proper CJK font
        'zh': ['"Noto Sans SC"', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'max(env(safe-area-inset-top), 1rem)',
        'safe-bottom': 'max(env(safe-area-inset-bottom), 1rem)',
      },
      opacity: {
        '15': '0.15',
      },
    },
  },
  plugins: [],
} satisfies Config;
