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

          {/* ═══ VENTURI TUBE SVG — Premium Apple-level animation ═══ */}
          <svg viewBox="0 0 900 480" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full hidden lg:block venturi-hero-svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Soft flow gradient — cool to warm transition */}
              <linearGradient id="vg-flow-cool" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#2A5298" stopOpacity="0" />
                <stop offset="35%"  stopColor="#3B6EA8" stopOpacity="0.18" />
                <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.32" />
                <stop offset="65%"  stopColor="#3B6EA8" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#2A5298" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="vg-flow-warm" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#1E3A6E" stopOpacity="0" />
                <stop offset="40%"  stopColor="#2A5298" stopOpacity="0.12" />
                <stop offset="50%"  stopColor="#D4B896" stopOpacity="0.22" />
                <stop offset="60%"  stopColor="#2A5298" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#1E3A6E" stopOpacity="0" />
              </linearGradient>
              {/* Throat radial glow — soft, diffused */}
              <radialGradient id="vg-throat-glow" cx="50%" cy="50%" r="18%">
                <stop offset="0%"   stopColor="#C9A961" stopOpacity="0.22" />
                <stop offset="40%"  stopColor="#C9A961" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
              </radialGradient>
              {/* Tube wall gradient — ethereal */}
              <linearGradient id="vg-wall" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#C9A961" stopOpacity="0" />
                <stop offset="30%"  stopColor="#C9A961" stopOpacity="0.12" />
                <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.22" />
                <stop offset="70%"  stopColor="#C9A961" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
              </linearGradient>
              {/* Particle glow filter — soft bokeh */}
              <filter id="vg-particle-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
              </filter>
              <filter id="vg-particle-glow-lg" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
              </filter>
              {/* Depth-of-field blur for background particles */}
              <filter id="vg-bokeh" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5"/>
              </filter>
              {/* Throat heatmap effect */}
              <radialGradient id="vg-heat" cx="50%" cy="50%" r="12%">
                <stop offset="0%"   stopColor="#D4B896" stopOpacity="0.15" />
                <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#2A5298" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ── Flow field lines: subtle, organic, layered ── */}
            {/* Background layer (blurred, depth) */}
            <g className="venturi-flow-bg" opacity="0.35" filter="url(#vg-bokeh)">
              <path d="M-80 20  C200 20 300 200 450 240 C600 200 700 20 980 20"   stroke="url(#vg-flow-warm)" strokeWidth="0.6"/>
              <path d="M-80 60  C210 60 310 205 450 240 C590 205 690 60 980 60"   stroke="url(#vg-flow-warm)" strokeWidth="0.5"/>
              <path d="M-80 460 C200 460 300 280 450 240 C600 280 700 460 980 460" stroke="url(#vg-flow-warm)" strokeWidth="0.6"/>
              <path d="M-80 420 C210 420 310 275 450 240 C590 275 690 420 980 420" stroke="url(#vg-flow-warm)" strokeWidth="0.5"/>
            </g>

            {/* Midground flow lines */}
            <g className="venturi-flow-mid" opacity="0.5">
              <path d="M-80 35  C220 35 320 208 450 240 C580 208 680 35 980 35"   stroke="url(#vg-flow-cool)" strokeWidth="0.7"/>
              <path d="M-80 80  C230 80 325 212 450 240 C575 212 670 80 980 80"   stroke="url(#vg-flow-cool)" strokeWidth="0.6"/>
              <path d="M-80 120 C250 120 335 218 450 240 C565 218 650 120 980 120" stroke="url(#vg-flow-warm)" strokeWidth="0.5"/>
              <path d="M-80 160 C270 160 350 224 450 240 C550 224 630 160 980 160" stroke="url(#vg-flow-cool)" strokeWidth="0.4"/>
              <path d="M-80 445 C220 445 320 272 450 240 C580 272 680 445 980 445" stroke="url(#vg-flow-cool)" strokeWidth="0.7"/>
              <path d="M-80 400 C230 400 325 268 450 240 C575 268 670 400 980 400" stroke="url(#vg-flow-cool)" strokeWidth="0.6"/>
              <path d="M-80 360 C250 360 335 262 450 240 C565 262 650 360 980 360" stroke="url(#vg-flow-warm)" strokeWidth="0.5"/>
              <path d="M-80 320 C270 320 350 256 450 240 C550 256 630 320 980 320" stroke="url(#vg-flow-cool)" strokeWidth="0.4"/>
            </g>

            {/* ── Tube walls — ethereal, breathing ── */}
            <path className="venturi-wall-upper" d="M-80 -10 C180 -10 280 180 450 225 C620 180 720 -10 980 -10" stroke="url(#vg-wall)" strokeWidth="1" fill="none"/>
            <path className="venturi-wall-lower" d="M-80 490 C180 490 280 300 450 255 C620 300 720 490 980 490" stroke="url(#vg-wall)" strokeWidth="1" fill="none"/>

            {/* ── Throat glow — soft, diffused, breathing ── */}
            <ellipse className="venturi-throat-ambient" cx="450" cy="240" rx="120" ry="40" fill="url(#vg-throat-glow)" />
            <ellipse className="venturi-throat-heat" cx="450" cy="240" rx="60" ry="18" fill="url(#vg-heat)" />

            {/* ── Throat rings — minimal, elegant ── */}
            <circle className="venturi-ring-inner" cx="450" cy="240" r="12" fill="none" stroke="#C9A961" strokeWidth="0.6" opacity="0.25"/>
            <circle className="venturi-ring-outer" cx="450" cy="240" r="24" fill="none" stroke="#C9A961" strokeWidth="0.4" opacity="0.12"/>

            {/* ── PARTICLES — Layered depth system ── */}
            
            {/* Background particles (blurred, slower, smaller — depth illusion) */}
            <g filter="url(#vg-bokeh)" opacity="0.4">
              <circle r="2" fill="#8B9DC3">
                <animateMotion path="M-80,30 C220,30 320,210 450,240 C580,210 680,30 980,30" dur="6s" repeatCount="indefinite" begin="0s"/>
                <animate attributeName="opacity" values="0;0.5;0.8;0.5;0" dur="6s" repeatCount="indefinite" begin="0s"/>
              </circle>
              <circle r="1.8" fill="#8B9DC3">
                <animateMotion path="M-80,450 C220,450 320,270 450,240 C580,270 680,450 980,450" dur="6.5s" repeatCount="indefinite" begin="0.8s"/>
                <animate attributeName="opacity" values="0;0.4;0.7;0.4;0" dur="6.5s" repeatCount="indefinite" begin="0.8s"/>
              </circle>
              <circle r="1.5" fill="#7A8FB5">
                <animateMotion path="M-80,70 C230,70 330,215 450,240 C570,215 670,70 980,70" dur="7s" repeatCount="indefinite" begin="1.5s"/>
                <animate attributeName="opacity" values="0;0.4;0.6;0.4;0" dur="7s" repeatCount="indefinite" begin="1.5s"/>
              </circle>
              <circle r="1.5" fill="#7A8FB5">
                <animateMotion path="M-80,410 C230,410 330,265 450,240 C570,265 670,410 980,410" dur="7.2s" repeatCount="indefinite" begin="2s"/>
                <animate attributeName="opacity" values="0;0.4;0.6;0.4;0" dur="7.2s" repeatCount="indefinite" begin="2s"/>
              </circle>
            </g>

            {/* Midground particles (medium glow, medium speed) */}
            <g filter="url(#vg-particle-glow)" opacity="0.65">
              <circle r="2.5" fill="#C9A961">
                <animateMotion path="M-80,50 C225,50 325,212 450,240 C575,212 675,50 980,50" dur="4.8s" repeatCount="indefinite" begin="0.3s"/>
                <animate attributeName="opacity" values="0;0.6;1;0.6;0" dur="4.8s" repeatCount="indefinite" begin="0.3s"/>
                <animate attributeName="r" values="2.5;2.5;3.5;2.5;2.5" dur="4.8s" repeatCount="indefinite" begin="0.3s"/>
              </circle>
              <circle r="2.2" fill="#D4B896">
                <animateMotion path="M-80,430 C225,430 325,268 450,240 C575,268 675,430 980,430" dur="5.2s" repeatCount="indefinite" begin="0.6s"/>
                <animate attributeName="opacity" values="0;0.5;0.9;0.5;0" dur="5.2s" repeatCount="indefinite" begin="0.6s"/>
                <animate attributeName="r" values="2.2;2.2;3.2;2.2;2.2" dur="5.2s" repeatCount="indefinite" begin="0.6s"/>
              </circle>
              <circle r="2.3" fill="#C9A961">
                <animateMotion path="M-80,90 C240,90 335,218 450,240 C565,218 660,90 980,90" dur="5s" repeatCount="indefinite" begin="1.2s"/>
                <animate attributeName="opacity" values="0;0.5;0.9;0.5;0" dur="5s" repeatCount="indefinite" begin="1.2s"/>
                <animate attributeName="r" values="2.3;2.3;3.3;2.3;2.3" dur="5s" repeatCount="indefinite" begin="1.2s"/>
              </circle>
              <circle r="2.3" fill="#D4B896">
                <animateMotion path="M-80,390 C240,390 335,262 450,240 C565,262 660,390 980,390" dur="5.4s" repeatCount="indefinite" begin="1.8s"/>
                <animate attributeName="opacity" values="0;0.5;0.9;0.5;0" dur="5.4s" repeatCount="indefinite" begin="1.8s"/>
                <animate attributeName="r" values="2.3;2.3;3;2.3;2.3" dur="5.4s" repeatCount="indefinite" begin="1.8s"/>
              </circle>
            </g>

            {/* Foreground particles (bright, largest, fastest — hero particles) */}
            <g filter="url(#vg-particle-glow-lg)">
              <circle r="3" fill="#C9A961">
                <animateMotion path="M-80,15 C210,15 310,205 450,240 C590,205 690,15 980,15" dur="4s" repeatCount="indefinite" begin="0s"/>
                <animate attributeName="opacity" values="0;0.7;1;0.7;0" dur="4s" repeatCount="indefinite" begin="0s"/>
                <animate attributeName="r" values="3;3;4.5;3;3" dur="4s" repeatCount="indefinite" begin="0s"/>
              </circle>
              <circle r="3" fill="#C9A961">
                <animateMotion path="M-80,465 C210,465 310,275 450,240 C590,275 690,465 980,465" dur="4.2s" repeatCount="indefinite" begin="0.5s"/>
                <animate attributeName="opacity" values="0;0.7;1;0.7;0" dur="4.2s" repeatCount="indefinite" begin="0.5s"/>
                <animate attributeName="r" values="3;3;4.5;3;3" dur="4.2s" repeatCount="indefinite" begin="0.5s"/>
              </circle>
              <circle r="2.8" fill="#D4B896">
                <animateMotion path="M-80,130 C260,130 340,222 450,240 C560,222 640,130 980,130" dur="4.5s" repeatCount="indefinite" begin="1s"/>
                <animate attributeName="opacity" values="0;0.6;0.95;0.6;0" dur="4.5s" repeatCount="indefinite" begin="1s"/>
                <animate attributeName="r" values="2.8;2.8;4;2.8;2.8" dur="4.5s" repeatCount="indefinite" begin="1s"/>
              </circle>
              <circle r="2.8" fill="#D4B896">
                <animateMotion path="M-80,350 C260,350 340,258 450,240 C560,258 640,350 980,350" dur="4.6s" repeatCount="indefinite" begin="1.5s"/>
                <animate attributeName="opacity" values="0;0.6;0.95;0.6;0" dur="4.6s" repeatCount="indefinite" begin="1.5s"/>
                <animate attributeName="r" values="2.8;2.8;4;2.8;2.8" dur="4.6s" repeatCount="indefinite" begin="1.5s"/>
              </circle>
            </g>

            {/* ── Vapor trails — subtle streak effect at throat ── */}
            <g opacity="0.15">
              <line x1="420" y1="238" x2="480" y2="238" stroke="#C9A961" strokeWidth="0.8" strokeLinecap="round">
                <animate attributeName="opacity" values="0.05;0.2;0.05" dur="3s" repeatCount="indefinite"/>
              </line>
              <line x1="425" y1="242" x2="475" y2="242" stroke="#D4B896" strokeWidth="0.6" strokeLinecap="round">
                <animate attributeName="opacity" values="0.08;0.18;0.08" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
              </line>
              <line x1="430" y1="236" x2="470" y2="236" stroke="#C9A961" strokeWidth="0.5" strokeLinecap="round">
                <animate attributeName="opacity" values="0.05;0.15;0.05" dur="2.8s" repeatCount="indefinite" begin="1s"/>
              </line>
              <line x1="428" y1="244" x2="472" y2="244" stroke="#D4B896" strokeWidth="0.5" strokeLinecap="round">
                <animate attributeName="opacity" values="0.05;0.15;0.05" dur="3.2s" repeatCount="indefinite" begin="1.5s"/>
              </line>
            </g>

            {/* ── Throat focal point — minimal, precious ── */}
            <circle cx="450" cy="240" r="2" fill="#C9A961" opacity="0.6"/>
          </svg>

          {/* ═══ MOBILE VENTURI — premium horizontal flow ═══ */}
          <div className="absolute inset-0 w-full h-full lg:hidden pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Ambient throat glow */}
            <div className="venturi-m-glow absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-32 h-20 rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(201,169,97,0.15) 0%, transparent 70%)' }} />
            
            {/* Flow field lines — SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="vm-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#2A5298" stopOpacity="0"/>
                  <stop offset="40%"  stopColor="#3B6EA8" stopOpacity="0.15"/>
                  <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.25"/>
                  <stop offset="60%"  stopColor="#3B6EA8" stopOpacity="0.15"/>
                  <stop offset="100%" stopColor="#2A5298" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="vm-wall" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#C9A961" stopOpacity="0"/>
                  <stop offset="50%"  stopColor="#C9A961" stopOpacity="0.18"/>
                  <stop offset="100%" stopColor="#C9A961" stopOpacity="0"/>
                </linearGradient>
                <filter id="vm-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
                </filter>
              </defs>
              
              {/* Tube walls */}
              <path d="M0,80 C100,80 150,110 200,118 C250,110 300,80 400,80" stroke="url(#vm-wall)" strokeWidth="0.8" fill="none" opacity="0.5"/>
              <path d="M0,220 C100,220 150,190 200,182 C250,190 300,220 400,220" stroke="url(#vm-wall)" strokeWidth="0.8" fill="none" opacity="0.5"/>
              
              {/* Flow lines */}
              <path d="M0,100 C120,100 160,130 200,140 C240,130 280,100 400,100" stroke="url(#vm-flow)" strokeWidth="0.5" fill="none" opacity="0.4"/>
              <path d="M0,120 C120,120 160,138 200,145 C240,138 280,120 400,120" stroke="url(#vm-flow)" strokeWidth="0.4" fill="none" opacity="0.3"/>
              <path d="M0,200 C120,200 160,170 200,160 C240,170 280,200 400,200" stroke="url(#vm-flow)" strokeWidth="0.5" fill="none" opacity="0.4"/>
              <path d="M0,180 C120,180 160,162 200,155 C240,162 280,180 400,180" stroke="url(#vm-flow)" strokeWidth="0.4" fill="none" opacity="0.3"/>

              {/* Mobile particles — smooth Bezier paths */}
              <g filter="url(#vm-glow)">
                <circle r="2.5" fill="#C9A961">
                  <animateMotion path="M0,95 C120,95 160,128 200,140 C240,128 280,95 400,95" dur="4s" repeatCount="indefinite" begin="0s"/>
                  <animate attributeName="opacity" values="0;0.6;1;0.6;0" dur="4s" repeatCount="indefinite" begin="0s"/>
                  <animate attributeName="r" values="2.5;2.5;3.5;2.5;2.5" dur="4s" repeatCount="indefinite" begin="0s"/>
                </circle>
                <circle r="2.5" fill="#C9A961">
                  <animateMotion path="M0,205 C120,205 160,172 200,160 C240,172 280,205 400,205" dur="4.3s" repeatCount="indefinite" begin="0.5s"/>
                  <animate attributeName="opacity" values="0;0.6;1;0.6;0" dur="4.3s" repeatCount="indefinite" begin="0.5s"/>
                  <animate attributeName="r" values="2.5;2.5;3.5;2.5;2.5" dur="4.3s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                <circle r="2" fill="#D4B896">
                  <animateMotion path="M0,140 C120,140 160,148 200,150 C240,148 280,140 400,140" dur="4.6s" repeatCount="indefinite" begin="1s"/>
                  <animate attributeName="opacity" values="0;0.5;0.9;0.5;0" dur="4.6s" repeatCount="indefinite" begin="1s"/>
                  <animate attributeName="r" values="2;2;3;2;2" dur="4.6s" repeatCount="indefinite" begin="1s"/>
                </circle>
                <circle r="2" fill="#D4B896">
                  <animateMotion path="M0,160 C120,160 160,155 200,150 C240,155 280,160 400,160" dur="4.8s" repeatCount="indefinite" begin="1.5s"/>
                  <animate attributeName="opacity" values="0;0.5;0.9;0.5;0" dur="4.8s" repeatCount="indefinite" begin="1.5s"/>
                  <animate attributeName="r" values="2;2;3;2;2" dur="4.8s" repeatCount="indefinite" begin="1.5s"/>
                </circle>
              </g>
              
              {/* Throat focal point */}
              <circle cx="200" cy="150" r="1.5" fill="#C9A961" opacity="0.5"/>
            </svg>
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

      {/* Venturi Principle Strip — elegant transition from hero to content */}
      <section
        className="relative py-12 md:py-14 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #060D1A 0%, #0B1626 40%, #0F1F38 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 50% 120% at 50% 50%, rgba(201,169,97,0.05) 0%, transparent 70%)' }} />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {[
              {
                label: isZh ? '汇聚专业' : 'Converge',
                sub:   isZh ? '六大专业领域协同运作' : 'Six disciplines, one integrated view',
              },
              {
                label: isZh ? '加速回报' : 'Accelerate',
                sub:   isZh ? '将市场摩擦转化为战略动能' : 'Market friction into strategic momentum',
              },
              {
                label: isZh ? '精准执行' : 'Expand',
                sub:   isZh ? '疏导机遇，精准落地' : 'Channeling opportunity to outcome',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 relative">
                <span className="text-gold-400 font-serif font-semibold text-lg tracking-tight">
                  {item.label}
                </span>
                <span className="text-slate-500 text-xs leading-relaxed max-w-[200px]">{item.sub}</span>
                {i < 2 && (
                  <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Bottom gold line transition */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-gold-line opacity-20" aria-hidden="true" />
      </section>

      {/* SERVICES */}
      <section className="section-xl bg-cream-50" style={{ background: 'linear-gradient(180deg, #FDFCF9 0%, #FAF8F3 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">{isZh ? '我们的专业' : 'Our Expertise'}</span>
            <h2 className="section-heading text-navy-900 mb-4">{t('services.title')}</h2>
            <span className="rule-gold" aria-hidden="true" />
            <p className="text-slate-600 mt-4" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Link key={service.id} href={`/${locale}/services/${service.id}`} className="group block">
                <article className="service-card h-full relative">
                  <div className="flex items-start gap-4">
                    <div className="service-icon text-gold-500 flex-shrink-0">
                      {serviceIcons[service.id]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-navy-900 mb-2 group-hover:text-gold-600 transition-colors duration-250 text-[0.95rem]">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gold-500 text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-0 group-hover:translate-x-1">
                    <span>{isZh ? '了解更多' : 'Learn more'}</span>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href={`/${locale}/services`} className="btn-outline-dark">
              {t('services.overview')}
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

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

      {/* WHY YENTURI — streamlined pillars */}
      <section className="section-lg" style={{ background: 'linear-gradient(180deg, #FAF8F3 0%, #FDFCF9 100%)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow text-gold-600">{isZh ? '我们的优势' : 'Why Yenturi'}</span>
            <h2 className="section-heading text-navy-900 mb-4">
              {isZh ? '深厚专业，加速价值' : 'Institutional Expertise, Accelerated Value'}
            </h2>
            <span className="rule-gold-center" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: isZh ? '深度行业专业知识' : 'Deep Domain Expertise',
                desc: isZh
                  ? '金融、并购和战略咨询领域数十年亚太地区专业经验。'
                  : 'Decades of specialized experience across finance, M&A, and strategic consulting in the Asia-Pacific region.',
              },
              {
                title: isZh ? '完整性与透明' : 'Integrity & Clarity',
                desc: isZh
                  ? '直接坦诚的建议，透明的沟通。我们优先考虑客户利益。'
                  : 'Direct counsel and transparent communication. Client interests above all else.',
              },
              {
                title: isZh ? '亚太本地化洞察' : 'APAC-Native Insights',
                desc: isZh
                  ? '对亚太商业生态的深刻理解，助力把握复杂的跨境机遇。'
                  : 'Nuanced understanding of APAC business ecosystems to navigate complex cross-border opportunities.',
              },
            ].map((item, i) => (
              <div key={i} className="relative p-8 flex flex-col gap-3 border-t-2 border-gold-400/30 bg-white rounded-b-lg hover:border-gold-400 transition-all duration-350">
                <span className="text-gold-500 font-serif text-2xl font-bold opacity-20 absolute top-4 right-6">0{i + 1}</span>
                <h3 className="text-navy-900 font-semibold text-[0.95rem]">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
