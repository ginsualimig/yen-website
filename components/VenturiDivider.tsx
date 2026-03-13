'use client';

/**
 * VenturiDivider — Section divider with Venturi pipe visual language
 * Wide navy bands left/right → thin gold centerline → expand again
 * Pure CSS animation, GPU-accelerated via transform/opacity
 */

interface VenturiDividerProps {
  /** 'light' = cream bg above/below, 'dark' = navy bg */
  variant?: 'light-to-dark' | 'dark-to-light' | 'light-to-light' | 'dark-to-dark';
  className?: string;
  id?: string;
}

export default function VenturiDivider({
  variant = 'light-to-dark',
  className = '',
  id,
}: VenturiDividerProps) {
  const topBg =
    variant === 'light-to-dark' || variant === 'light-to-light'
      ? '#FAF8F3'
      : '#0B1626';
  const bottomBg =
    variant === 'dark-to-light' || variant === 'light-to-light'
      ? '#FAF8F3'
      : '#0B1626';

  return (
    <div
      id={id}
      className={`venturi-divider-wrap ${className}`}
      aria-hidden="true"
      style={{ lineHeight: 0, fontSize: 0 }}
    >
      <svg
        viewBox="0 0 1440 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="venturi-divider-svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '56px' }}
      >
        <defs>
          {/* Gold pulse gradient */}
          <linearGradient id={`vd-gold-${id ?? 'default'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0" />
            <stop offset="30%"  stopColor="#f59e0b" stopOpacity="0.25" />
            <stop offset="50%"  stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="70%"  stopColor="#f59e0b" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </linearGradient>
          {/* Navy fill */}
          <linearGradient id={`vd-navy-${id ?? 'default'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#0A0E27" stopOpacity="0.18" />
            <stop offset="40%"  stopColor="#0A0E27" stopOpacity="0.08" />
            <stop offset="50%"  stopColor="#0A0E27" stopOpacity="0" />
            <stop offset="60%"  stopColor="#0A0E27" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0A0E27" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        {/* Top background fill */}
        <rect x="0" y="0"  width="1440" height="28" fill={topBg} />
        {/* Bottom background fill */}
        <rect x="0" y="28" width="1440" height="28" fill={bottomBg} />

        {/* Outer band — navy, wide at edges, pinches to center */}
        <path
          d="M0 22 Q360 28 720 28 Q1080 28 1440 22 L1440 34 Q1080 28 720 28 Q360 28 0 34 Z"
          fill={`url(#vd-navy-${id ?? 'default'})`}
        />

        {/* Upper edge line — converging */}
        <path
          d="M0 20 Q360 26.5 720 28 Q1080 26.5 1440 20"
          stroke="#0A0E27"
          strokeWidth="0.8"
          strokeOpacity="0.15"
        />
        {/* Lower edge line — diverging */}
        <path
          d="M0 36 Q360 29.5 720 28 Q1080 29.5 1440 36"
          stroke="#0A0E27"
          strokeWidth="0.8"
          strokeOpacity="0.15"
        />

        {/* Gold centerline — pinched at center */}
        <path
          d="M0 28 Q360 28 680 28 Q700 28 720 28 Q740 28 760 28 Q1080 28 1440 28"
          stroke={`url(#vd-gold-${id ?? 'default'})`}
          strokeWidth="1.5"
          className="venturi-divider-pulse"
        />

        {/* Gold pressure dot at throat */}
        <circle cx="720" cy="28" r="3" fill="#f59e0b" opacity="0.7" className="venturi-divider-dot" />
        <circle cx="720" cy="28" r="6" fill="none" stroke="#f59e0b" strokeWidth="0.8" opacity="0.35" className="venturi-divider-ring" />
      </svg>
    </div>
  );
}
