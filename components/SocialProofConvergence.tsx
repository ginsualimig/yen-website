'use client';

/**
 * SocialProofConvergence — Client type labels with faint converging force lines
 * Navy converging lines → gold pressure glow at focal center
 * Mobile: centered quote with gold › marks
 */

interface SocialProofProps {
  isZh?: boolean;
  className?: string;
}

export default function SocialProofConvergence({ isZh = false, className = '' }: SocialProofProps) {
  const clients = isZh
    ? ['机构投资者', '上市公司', '私募股权基金', '家族办公室', '跨国企业']
    : ['Institutional Investors', 'Listed Corporations', 'Private Equity Funds', 'Family Offices', 'Multinational Enterprises'];

  const quote = isZh
    ? '通过关系与介绍建立信任'
    : 'Trust built through relationships and referrals';

  return (
    <div className={`social-proof-convergence ${className}`}>

      {/* ── Desktop: SVG convergence + labels ── */}
      <div className="hidden md:block relative" style={{ height: '180px' }}>
        <svg
          viewBox="0 0 900 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="sp-focal-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.6" />
              <stop offset="50%"  stopColor="#f59e0b" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="sp-line-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#0A0E27" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0A0E27" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sp-line-2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%"   stopColor="#0A0E27" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0A0E27" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Converging lines from left clients → center */}
          <line x1="40"  y1="30"  x2="450" y2="90" stroke="url(#sp-line-1)" strokeWidth="0.8" />
          <line x1="40"  y1="90"  x2="450" y2="90" stroke="url(#sp-line-1)" strokeWidth="0.8" />
          <line x1="40"  y1="150" x2="450" y2="90" stroke="url(#sp-line-1)" strokeWidth="0.8" />

          {/* Converging lines from right clients → center */}
          <line x1="860" y1="30"  x2="450" y2="90" stroke="url(#sp-line-2)" strokeWidth="0.8" />
          <line x1="860" y1="90"  x2="450" y2="90" stroke="url(#sp-line-2)" strokeWidth="0.8" />
          <line x1="860" y1="150" x2="450" y2="90" stroke="url(#sp-line-2)" strokeWidth="0.8" />

          {/* Secondary softer lines */}
          <line x1="40"  y1="55"  x2="450" y2="90" stroke="url(#sp-line-1)" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="40"  y1="120" x2="450" y2="90" stroke="url(#sp-line-1)" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="860" y1="55"  x2="450" y2="90" stroke="url(#sp-line-2)" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="860" y1="120" x2="450" y2="90" stroke="url(#sp-line-2)" strokeWidth="0.5" strokeOpacity="0.5" />

          {/* Gold focal glow */}
          <ellipse cx="450" cy="90" rx="55" ry="35" fill="url(#sp-focal-glow)" />
          {/* Gold focal point */}
          <circle cx="450" cy="90" r="4"  fill="#f59e0b" opacity="0.9" />
          <circle cx="450" cy="90" r="9"  fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity="0.45" />
          <circle cx="450" cy="90" r="16" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.22" />
        </svg>

        {/* Floating client labels */}
        <div className="absolute inset-0 flex items-center justify-between px-4" aria-label="Our clients">
          {/* Left column — 3 clients */}
          <div className="flex flex-col gap-3 z-10">
            {clients.slice(0, 3).map((client, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">{client}</span>
              </div>
            ))}
          </div>

          {/* Center focal element */}
          <div className="flex flex-col items-center gap-1 z-10 text-center px-4">
            <span className="text-gold-500 font-serif font-semibold text-sm">Yenturi</span>
            <span className="text-slate-400 text-xs">{isZh ? '我们的客户' : 'Our Clients'}</span>
          </div>

          {/* Right column — 2 clients */}
          <div className="flex flex-col gap-3 z-10">
            {clients.slice(3).map((client, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500 flex-row-reverse">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                <span className="text-sm font-medium whitespace-nowrap">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile: Gold › Quote ‹ marks ── */}
      <div className="md:hidden flex flex-col items-center gap-4 py-4">
        <div className="flex items-center gap-3">
          <span className="text-gold-500 font-serif text-xl" aria-hidden="true">‹</span>
          <p className="text-center text-slate-600 text-sm font-medium italic" style={{ lineHeight: '1.6' }}>
            {quote}
          </p>
          <span className="text-gold-500 font-serif text-xl" aria-hidden="true">›</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2">
          {clients.map((client, i) => (
            <div key={i} className="flex items-center gap-1.5 text-slate-400">
              <div className="w-1 h-1 rounded-full bg-gold-400" aria-hidden="true" />
              <span className="text-xs">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
