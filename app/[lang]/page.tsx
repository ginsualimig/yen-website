import Link from 'next/link';
import { Locale, getTranslation } from '@/lib/locales';
import VentureDivider from '@/components/VentureDivider';
import type { Metadata } from 'next';
import VenturiDivider from '@/components/VenturiDivider';
import SocialProofConvergence from '@/components/SocialProofConvergence';
import MetricGauge from '@/components/MetricGauge';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  return {
    title: `${t('hero.title')} | Yenturi`,
    description: t('hero.description'),
    openGraph: {
      title: `${t('hero.title')} | Yenturi`,
      description: t('hero.description'),
      type: 'website',
      url: `https://yenturi.com/${locale}`,
    },
  };
}

const serviceIcons: Record<string, JSX.Element> = {
  mna: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'business-improvement': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'rollup-strategy': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'direct-investment': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'business-management': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  'research-reports': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const valueIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = (key: string) => getTranslation(locale, key);
  const isZh = locale === 'zh';

  const services = [
    { id: 'mna',                 title: t('services.mna.title'),                description: t('services.mna.short') },
    { id: 'business-improvement',title: t('services.business-improvement.title'),description: t('services.business-improvement.short') },
    { id: 'rollup-strategy',     title: t('services.rollup-strategy.title'),     description: t('services.rollup-strategy.short') },
    { id: 'direct-investment',   title: t('services.direct-investment.title'),   description: t('services.direct-investment.short') },
    { id: 'business-management', title: t('services.business-management.title'), description: t('services.business-management.short') },
    { id: 'research-reports',    title: t('services.research-reports.title'),    description: t('services.research-reports.short') },
  ];

  const values = [
    { key: 'excellence', label: t('about.excellence') },
    { key: 'integrity',  label: t('about.integrity') },
    { key: 'expertise',  label: t('about.expertise') },
    { key: 'innovation', label: t('about.innovation') },
  ];

  return (
    <div id="main-content">

      {/* ═══════════════════════════════════════════
          HERO — Venturi Effect Visual Language
      ═══════════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(155deg, #060D1A 0%, #0B1626 45%, #0F1F38 75%, #0A1830 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }} />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #1E3A6E 0%, transparent 70%)' }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A961" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* ═══ VENTURI TUBE SVG — the core visual metaphor ═══ */}
          <svg viewBox="0 0 900 480" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full hidden lg:block" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="vg-flow-a" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#2A5298" stopOpacity="0" />
                <stop offset="42%"  stopColor="#3B6EA8" stopOpacity="0.30" />
                <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.48" />
                <stop offset="58%"  stopColor="#3B6EA8" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#2A5298" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="vg-flow-b" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#1E3A6E" stopOpacity="0" />
                <stop offset="44%"  stopColor="#2A5298" stopOpacity="0.22" />
                <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.33" />
                <stop offset="56%"  stopColor="#2A5298" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#1E3A6E" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="vg-glow" cx="50%" cy="50%" r="10%">
                <stop offset="0%"   stopColor="#C9A961" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="vg-wall" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#C9A961" stopOpacity="0" />
                <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.26" />
                <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Upper converging flow lines */}
            <path d="M-80 10  Q280 170 450 240 Q620 170 980 10"  stroke="url(#vg-flow-a)" strokeWidth="0.8" opacity="0.55"/>
            <path d="M-80 40  Q290 178 450 240 Q610 178 980 40"  stroke="url(#vg-flow-b)" strokeWidth="0.7" opacity="0.48"/>
            <path d="M-80 70  Q300 186 450 240 Q600 186 980 70"  stroke="url(#vg-flow-a)" strokeWidth="0.6" opacity="0.40"/>
            <path d="M-80 100 Q310 194 450 240 Q590 194 980 100" stroke="url(#vg-flow-b)" strokeWidth="0.5" opacity="0.33"/>
            <path d="M-80 130 Q320 202 450 240 Q580 202 980 130" stroke="url(#vg-flow-a)" strokeWidth="0.5" opacity="0.26"/>
            <path d="M-80 160 Q335 210 450 240 Q565 210 980 160" stroke="url(#vg-flow-b)" strokeWidth="0.4" opacity="0.20"/>

            {/* Lower diverging flow lines (expansion after throat) */}
            <path d="M-80 470 Q280 310 450 240 Q620 310 980 470" stroke="url(#vg-flow-a)" strokeWidth="0.8" opacity="0.55"/>
            <path d="M-80 440 Q290 302 450 240 Q610 302 980 440" stroke="url(#vg-flow-b)" strokeWidth="0.7" opacity="0.48"/>
            <path d="M-80 410 Q300 294 450 240 Q600 294 980 410" stroke="url(#vg-flow-a)" strokeWidth="0.6" opacity="0.40"/>
            <path d="M-80 380 Q310 286 450 240 Q590 286 980 380" stroke="url(#vg-flow-b)" strokeWidth="0.5" opacity="0.33"/>
            <path d="M-80 350 Q320 278 450 240 Q580 278 980 350" stroke="url(#vg-flow-a)" strokeWidth="0.5" opacity="0.26"/>
            <path d="M-80 320 Q335 270 450 240 Q565 270 980 320" stroke="url(#vg-flow-b)" strokeWidth="0.4" opacity="0.20"/>

            {/* Tube boundary walls — gold shimmer */}
            <path d="M-80 -20 Q220 140 450 222 Q680 140 980 -20" stroke="url(#vg-wall)" strokeWidth="1.3" opacity="0.65"/>
            <path d="M-80 500 Q220 340 450 258 Q680 340 980 500" stroke="url(#vg-wall)" strokeWidth="1.3" opacity="0.65"/>

            {/* Throat glow — pressure point highlighting */}
            <ellipse cx="450" cy="240" rx="88" ry="25" fill="url(#vg-glow)" />

            {/* Animated pressure wave pulse (enhanced) */}
            <circle cx="450" cy="240" r="16" fill="none" stroke="#C9A961" strokeWidth="1.3" opacity="0.35" style={{ animation: 'venturiThroatPulse 2.4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite' }}/>
            <circle cx="450" cy="240" r="28" fill="none" stroke="#3B6EA8" strokeWidth="0.9" opacity="0.2" style={{ animation: 'venturiThroatPulse 2.4s cubic-bezier(0.34, 1.56, 0.64, 1) infinite', animationDelay: '0.15s' }}/>

            {/* Animated flowing particles — upper converging paths (enhanced) */}
            <g opacity="0.8">
              <animateMotion path="M -80 10 Q 280 170 450 240 Q 620 170 980 10" dur="3.2s" repeatCount="indefinite">
                <circle r="3" fill="#C9A961"/>
              </animateMotion>
            </g>
            <g opacity="0.75">
              <animateMotion path="M -80 40 Q 290 178 450 240 Q 610 178 980 40" dur="3.5s" repeatCount="indefinite" begin="0.2s">
                <circle r="2.8" fill="#C9A961"/>
              </animateMotion>
            </g>
            <g opacity="0.7">
              <animateMotion path="M -80 70 Q 300 186 450 240 Q 600 186 980 70" dur="3.8s" repeatCount="indefinite" begin="0.4s">
                <circle r="2.6" fill="#C9A961"/>
              </animateMotion>
            </g>
            <g opacity="0.65">
              <animateMotion path="M -80 25 Q 285 174 450 240 Q 615 174 980 25" dur="3.3s" repeatCount="indefinite" begin="0.15s">
                <circle r="2.7" fill="#D4B896"/>
              </animateMotion>
            </g>
            <g opacity="0.7">
              <animateMotion path="M -80 55 Q 295 182 450 240 Q 605 182 980 55" dur="3.6s" repeatCount="indefinite" begin="0.35s">
                <circle r="2.5" fill="#C9A961"/>
              </animateMotion>
            </g>
            <g opacity="0.6">
              <animateMotion path="M -80 85 Q 305 190 450 240 Q 595 190 980 85" dur="3.9s" repeatCount="indefinite" begin="0.55s">
                <circle r="2.4" fill="#D4B896"/>
              </animateMotion>
            </g>

            {/* Animated flowing particles — lower diverging paths (enhanced) */}
            <g opacity="0.8">
              <animateMotion path="M -80 470 Q 280 310 450 240 Q 620 310 980 470" dur="3.2s" repeatCount="indefinite">
                <circle r="3" fill="#C9A961"/>
              </animateMotion>
            </g>
            <g opacity="0.75">
              <animateMotion path="M -80 440 Q 290 302 450 240 Q 610 302 980 440" dur="3.5s" repeatCount="indefinite" begin="0.2s">
                <circle r="2.8" fill="#C9A961"/>
              </animateMotion>
            </g>
            <g opacity="0.7">
              <animateMotion path="M -80 410 Q 300 294 450 240 Q 600 294 980 410" dur="3.8s" repeatCount="indefinite" begin="0.4s">
                <circle r="2.6" fill="#C9A961"/>
              </animateMotion>
            </g>
            <g opacity="0.65">
              <animateMotion path="M -80 455 Q 285 306 450 240 Q 615 306 980 455" dur="3.3s" repeatCount="indefinite" begin="0.15s">
                <circle r="2.7" fill="#D4B896"/>
              </animateMotion>
            </g>
            <g opacity="0.7">
              <animateMotion path="M -80 425 Q 295 298 450 240 Q 605 298 980 425" dur="3.6s" repeatCount="indefinite" begin="0.35s">
                <circle r="2.5" fill="#C9A961"/>
              </animateMotion>
            </g>
            <g opacity="0.6">
              <animateMotion path="M -80 395 Q 305 286 450 240 Q 595 286 980 395" dur="3.9s" repeatCount="indefinite" begin="0.55s">
                <circle r="2.4" fill="#D4B896"/>
              </animateMotion>
            </g>

            {/* Left converging arrows */}
            <g opacity="0.48">
              <polyline points="185,188 218,202 185,216" fill="none" stroke="#C9A961" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="145,173 183,189 145,205" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
              <polyline points="185,272 218,258 185,244" fill="none" stroke="#C9A961" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="145,283 183,269 145,255" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
            </g>

            {/* Right expanding arrows */}
            <g opacity="0.36">
              <polyline points="715,188 682,202 715,216" fill="none" stroke="#C9A961" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="755,173 717,189 755,205" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
              <polyline points="715,272 682,258 715,244" fill="none" stroke="#C9A961" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="755,283 717,269 755,255" fill="none" stroke="#C9A961" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.65"/>
            </g>

            {/* Throat accent — gold dot at convergence point */}
            <circle cx="450" cy="240" r="3.5" fill="#C9A961" opacity="0.72"/>
            <circle cx="450" cy="240" r="8"   fill="none" stroke="#C9A961" strokeWidth="0.9" opacity="0.33"/>
            <circle cx="450" cy="240" r="15"  fill="none" stroke="#C9A961" strokeWidth="0.5" opacity="0.17"/>
          </svg>

          {/* ═══ MOBILE VENTURI EFFECT — side view: wide → narrow → wide ═══ */}
          <div className="absolute inset-0 w-full h-full lg:hidden flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Tube walls (visual reference) */}
            <svg className="absolute w-full h-32 top-1/4" viewBox="0 0 400 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="tube-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C9A961" stopOpacity="0.15"/>
                  <stop offset="25%" stopColor="#C9A961" stopOpacity="0.25"/>
                  <stop offset="50%" stopColor="#C9A961" stopOpacity="0.35"/>
                  <stop offset="75%" stopColor="#C9A961" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="#C9A961" stopOpacity="0.15"/>
                </linearGradient>
              </defs>
              {/* Upper tube wall */}
              <path d="M 0 10 L 100 10 L 150 30 L 200 40 L 150 30 L 100 10 L 400 10" 
                fill="none" stroke="url(#tube-gradient)" strokeWidth="0.5" opacity="0.6"/>
              {/* Lower tube wall */}
              <path d="M 0 90 L 100 90 L 150 70 L 200 60 L 150 70 L 100 90 L 400 90" 
                fill="none" stroke="url(#tube-gradient)" strokeWidth="0.5" opacity="0.6"/>
            </svg>

            {/* Left inlet particles (wide spacing, slow) */}
            <div className="absolute w-2 h-2 rounded-full bg-[#C9A961] opacity-75 shadow-lg" 
              style={{ left: '8%', top: '35%', animation: 'venturiSideFlow 3.5s ease-in-out infinite' }}></div>
            <div className="absolute w-1.5 h-1.5 rounded-full bg-[#D4B896] opacity-70 shadow-lg" 
              style={{ left: '8%', top: '50%', animation: 'venturiSideFlow 3.5s ease-in-out infinite', animationDelay: '0.3s' }}></div>
            <div className="absolute w-2 h-2 rounded-full bg-[#C9A961] opacity-75 shadow-lg" 
              style={{ left: '8%', top: '65%', animation: 'venturiSideFlow 3.5s ease-in-out infinite', animationDelay: '0.6s' }}></div>
            
            {/* Throat particles (tight spacing, bright, fast) */}
            <div className="absolute w-2.5 h-2.5 rounded-full bg-[#C9A961] opacity-95 shadow-lg" 
              style={{ left: '48%', top: '45%', animation: 'venturiSideFlowThroat 2.2s ease-in-out infinite', animationDelay: '0.15s', filter: 'drop-shadow(0 0 6px rgba(201,169,97,0.8))' }}></div>
            <div className="absolute w-2 h-2 rounded-full bg-[#D4B896] opacity-90 shadow-lg" 
              style={{ left: '48%', top: '55%', animation: 'venturiSideFlowThroat 2.2s ease-in-out infinite', animationDelay: '0.45s', filter: 'drop-shadow(0 0 6px rgba(201,169,97,0.8))' }}></div>
            
            {/* Right outlet particles (wide spacing again, slowing down) */}
            <div className="absolute w-2 h-2 rounded-full bg-[#C9A961] opacity-75 shadow-lg" 
              style={{ right: '8%', top: '35%', animation: 'venturiSideFlowExit 3.5s ease-in-out infinite', animationDelay: '0.2s' }}></div>
            <div className="absolute w-1.5 h-1.5 rounded-full bg-[#D4B896] opacity-70 shadow-lg" 
              style={{ right: '8%', top: '50%', animation: 'venturiSideFlowExit 3.5s ease-in-out infinite', animationDelay: '0.5s' }}></div>
            <div className="absolute w-2 h-2 rounded-full bg-[#C9A961] opacity-75 shadow-lg" 
              style={{ right: '8%', top: '65%', animation: 'venturiSideFlowExit 3.5s ease-in-out infinite', animationDelay: '0.8s' }}></div>

            {/* Throat pressure glow */}
            <div className="absolute w-24 h-16 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-20 blur-2xl"
              style={{ animation: 'venturiSideThroatGlow 2.2s ease-in-out infinite' }}>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 md:py-36 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-block h-px w-8 bg-gold-500 opacity-70" aria-hidden="true" />
              <span className="text-gold-500 font-sans text-xs font-semibold uppercase tracking-[0.15em]">
                {isZh ? '亚太投资咨询' : 'Asia-Pacific Investment Consulting'}
              </span>
            </div>

            <h1
              className="font-serif font-bold text-cream-100 mb-7 text-balance"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.25rem)', lineHeight: '1.07', letterSpacing: '-0.025em' }}
            >
              {t('hero.title')}
            </h1>

            <p
              className="text-slate-300 mb-10 max-w-2xl"
              style={{ fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)', lineHeight: '1.75' }}
            >
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/services`} className="btn-primary">
                {t('hero.cta')}
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href={`/${locale}/about`} className="btn-outline-light">
                {t('nav.about')}
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap gap-8 items-center">
              {[
                { num: '20+', label: isZh ? '年行业经验' : 'Years Experience' },
                { num: 'APAC', label: isZh ? '区域专业覆盖' : 'Regional Expertise' },
                { num: '6', label: isZh ? '核心服务领域' : 'Core Service Areas' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-serif font-bold text-gold-400" style={{ fontSize: '1.75rem', letterSpacing: '-0.02em', lineHeight: 1 }}>
                    {stat.num}
                  </span>
                  <span className="text-slate-400 text-xs tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Venturi principle watermark — bottom right */}
        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3" style={{ opacity: 0.36 }} aria-hidden="true">
          <svg viewBox="0 0 120 28" fill="none" width="110" height="24">
            <defs>
              <linearGradient id="vp-arr" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#C9A961" stopOpacity="0.15"/>
                <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#C9A961" stopOpacity="0.15"/>
              </linearGradient>
            </defs>
            <path d="M0 14 Q40 8 60 14 Q80 20 120 14"  stroke="url(#vp-arr)" strokeWidth="1.5" fill="none"/>
            <path d="M0 10 Q40 5  60 10 Q80 15 120 10" stroke="url(#vp-arr)" strokeWidth="0.7" fill="none" opacity="0.5"/>
            <path d="M0 18 Q40 11 60 18 Q80 25 120 18" stroke="url(#vp-arr)" strokeWidth="0.7" fill="none" opacity="0.5"/>
            <polyline points="110,10 120,14 110,18" fill="none" stroke="#C9A961" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-gold-500 font-sans" style={{ fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            {isZh ? '汇聚 · 加速 · 扩展' : 'Converge · Accelerate · Expand'}
          </span>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION DIVIDER 1: Hero → Clients/Social Proof */}
      {/* ═══════════════════════════════════════════ */}
      <VenturiDivider variant="dark-to-light" id="divider-1" />

      {/* VENTURI PRINCIPLE ACCENT BAND */}
      <section
        className="relative py-8 overflow-hidden"
        style={{ background: 'linear-gradient(90deg, #0A1422 0%, #0F1F38 50%, #0A1422 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(201,169,97,0.07) 0%, transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
            {[
              {
                label: isZh ? '汇聚专业' : 'Convergent Expertise',
                sub:   isZh ? '六大专业领域协同运作' : 'Six disciplines, one integrated view',
              },
              {
                label: isZh ? '加速回报' : 'Accelerated Returns',
                sub:   isZh ? '将市场摩擦转化为战略动能' : 'Market friction into strategic momentum',
              },
              {
                label: isZh ? '专注执行' : 'Disciplined Execution',
                sub:   isZh ? '疏导机遇，精准落地' : 'Channeling opportunity to outcome',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-gold-400 font-serif font-semibold" style={{ fontSize: '1rem' }}>
                  {item.label}
                </span>
                <span className="text-slate-500 text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION DIVIDER 3: Principle → Services */}
      {/* ═══════════════════════════════════════════ */}
      <VenturiDivider variant="dark-to-light" id="divider-3" />

      {/* SERVICES — funnel convergence layout */}
      <section className="section-xl bg-cream-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <span className="eyebrow">{isZh ? '我们的专业' : 'Our Expertise'}</span>
            <h2 className="section-heading text-navy-900 mb-4">{t('services.title')}</h2>
            <span className="rule-gold-center" aria-hidden="true" />
            <p className="text-slate-600 max-w-2xl mx-auto mt-4" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
              {t('services.subtitle')}
            </p>
          </div>

          {/* Top row — 3 cards (wide) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-2">
            {services.slice(0, 3).map((service) => (
              <Link key={service.id} href={`/${locale}/services/${service.id}`} className="group block">
                <article className="service-card h-full">
                  <div className="service-icon text-gold-500">
                    {serviceIcons[service.id]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-navy-900 mb-2 group-hover:text-gold-600 transition-colors duration-250">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gold-500 text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-0 group-hover:translate-x-1">
                    <span>{isZh ? '了解更多' : 'Learn more'}</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Convergence visualizer — narrowing effect */}
          <div className="relative h-6 mb-2" aria-hidden="true">
            <svg viewBox="0 0 1000 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="funnel-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#C9A961" stopOpacity="0" />
                  <stop offset="20%"  stopColor="#C9A961" stopOpacity="0.25" />
                  <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.50" />
                  <stop offset="80%"  stopColor="#C9A961" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M50 5 Q300 20 500 20 Q700 20 950 5"    stroke="url(#funnel-grad)" strokeWidth="1.5" />
              <path d="M80 15 Q340 22 500 22 Q660 22 920 15"  stroke="url(#funnel-grad)" strokeWidth="0.8" opacity="0.6"/>
              <circle cx="500" cy="21" r="2.5" fill="#C9A961" opacity="0.6"/>
            </svg>
          </div>

          {/* Bottom row — 3 cards (narrower, forming funnel) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.slice(3, 6).map((service) => (
              <Link key={service.id} href={`/${locale}/services/${service.id}`} className="group block">
                <article className="service-card h-full">
                  <div className="service-icon text-gold-500">
                    {serviceIcons[service.id]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-navy-900 mb-2 group-hover:text-gold-600 transition-colors duration-250">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gold-500 text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-0 group-hover:translate-x-1">
                    <span>{isZh ? '了解更多' : 'Learn more'}</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/services`} className="btn-outline-dark">
              {t('services.overview')}
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION DIVIDER 4: Services → About */}
      {/* ═══════════════════════════════════════════ */}
      <VenturiDivider variant="light-to-dark" id="divider-4" />

      {/* ABOUT STRIP */}
      <section
        className="relative section-xl overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0B1626 0%, #0F1F38 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(circle, #C9A961 0%, transparent 70%)' }} />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="eyebrow">{isZh ? '关于我们' : 'About Us'}</span>
              <h2 className="font-serif font-semibold text-cream-100 mb-6" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', letterSpacing: '-0.015em', lineHeight: '1.2' }}>
                {t('about.title')}
              </h2>
              <span className="rule-gold" aria-hidden="true" />
              <p className="text-slate-300 leading-relaxed mb-6" style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>
                {t('about.missionText')}
              </p>
              <p className="text-slate-400 leading-relaxed mb-8" style={{ fontSize: '0.9375rem', lineHeight: '1.8' }}>
                {isZh
                  ? '我们为亚太地区的机构投资者和企业提供深度策略咨询。我们的工作专注于资本配置、业务转型和市场战略。'
                  : 'We provide strategic advisory for institutional investors and corporations across Asia-Pacific. Our work focuses on capital deployment, business transformation, and market strategy.'}
              </p>
              <Link href={`/${locale}/about`} className="btn-primary">
                {isZh ? '了解我们的故事' : 'Our Story'}
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, i) => (
                <div key={value.key} className="card-navy p-6 group" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <div className="mb-3 text-gold-500 opacity-70 group-hover:opacity-100 transition-opacity">
                    {valueIcons[i]}
                  </div>
                  <p className="text-cream-200 text-sm font-medium leading-snug">
                    {value.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY YENTURI */}
      <section className="section-lg bg-cream-100" style={{ borderTop: '1px solid #EDE7D8' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow text-gold-600">{isZh ? '我们的优势' : 'Why Yenturi'}</span>
            <h2 className="section-heading text-navy-900 mb-4">
              {isZh ? '深厚专业，加速价值' : 'Institutional Expertise. Accelerated Value.'}
            </h2>
            <span className="rule-gold-center" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: isZh ? '深度行业专业知识' : 'Deep Domain Expertise',
                desc: isZh
                  ? '我们的团队在金融、并购和战略咨询领域积累了数十年亚太地区专业经验。'
                  : 'Our team brings decades of specialized experience across finance, M&A, and strategic consulting in the Asia-Pacific region.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: isZh ? '完整性与透明' : 'Integrity & Clarity',
                desc: isZh
                  ? '直接坦诚的建议，透明的沟通。我们优先考虑客户利益。'
                  : 'Direct counsel and transparent communication. We prioritize client interests above all else.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                title: isZh ? '亚太本地化洞察' : 'APAC-Native Insights',
                desc: isZh
                  ? '对亚太商业生态的深刻理解，助力客户把握复杂的跨境机遇。'
                  : 'Nuanced understanding of APAC business ecosystems helps clients navigate complex cross-border opportunities and transactions.',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0110.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="card-premium p-8 flex flex-col gap-4">
                <div className="text-gold-500">{item.icon}</div>
                <h3 className="text-navy-900 font-semibold">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
