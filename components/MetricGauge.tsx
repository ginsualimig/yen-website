'use client';

/**
 * MetricGauge — SVG arc gauge for stats/metrics
 * Navy arc background, gold fill animates on scroll-into-view
 * Uses CSS Scroll-Driven Animations with @keyframes stroke-dashoffset
 */

interface MetricGaugeProps {
  value: string;       // Display value (e.g. "20+")
  label: string;       // Label below
  /** 0–1 fill fraction for the arc */
  fill?: number;
  size?: number;       // SVG size in px
  className?: string;
  index?: number;      // For stagger delay
}

export default function MetricGauge({
  value,
  label,
  fill = 0.75,
  size = 120,
  className = '',
  index = 0,
}: MetricGaugeProps) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.38;

  // Arc spans 220 degrees (from 160° to 380°/20°)
  const startAngle = 160;
  const sweepAngle = 220;

  function polarToXY(angleDeg: number, radius: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    };
  }

  const start = polarToXY(startAngle, r);
  const endBg  = polarToXY(startAngle + sweepAngle, r);

  const arcPath = (fromDeg: number, toDeg: number, radius: number) => {
    const s = polarToXY(fromDeg, radius);
    const e = polarToXY(toDeg,   radius);
    const large = toDeg - fromDeg > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${radius} ${radius} 0 ${large} 1 ${e.x} ${e.y}`;
  };

  // Full arc circumference for dash calculations
  const arcLen = ((sweepAngle / 360) * 2 * Math.PI * r);
  const filledLen = arcLen * fill;
  const stagger = index * 120; // ms

  return (
    <div className={`metric-gauge-wrap flex flex-col items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="metric-gauge-svg"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <radialGradient id={`gauge-glow-${index}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
          <filter id={`gauge-blur-${index}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Background arc — navy */}
        <path
          d={arcPath(startAngle, startAngle + sweepAngle, r)}
          stroke="#0A0E27"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Gold fill arc — animates via CSS */}
        <path
          d={arcPath(startAngle, startAngle + sweepAngle, r)}
          stroke="#f59e0b"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${arcLen}`}
          strokeDashoffset={`${arcLen}`}
          className="gauge-fill-arc"
          style={{
            // CSS custom property used by animation
            '--gauge-filled': `${arcLen - filledLen}`,
            '--gauge-delay': `${stagger}ms`,
          } as React.CSSProperties}
        />

        {/* Glowing endpoint — appears after fill */}
        {(() => {
          const endPoint = polarToXY(startAngle + sweepAngle * fill, r);
          return (
            <>
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="5"
                fill="#f59e0b"
                className="gauge-endpoint"
                style={{ '--gauge-delay': `${stagger}ms` } as React.CSSProperties}
              />
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r="10"
                fill={`url(#gauge-glow-${index})`}
                className="gauge-endpoint"
                style={{ '--gauge-delay': `${stagger}ms` } as React.CSSProperties}
              />
            </>
          );
        })()}
      </svg>

      {/* Value label — centered over arc */}
      <div className="flex flex-col items-center gap-1 -mt-2">
        <span className="font-serif font-bold text-gold-400" style={{ fontSize: '1.75rem', letterSpacing: '-0.02em', lineHeight: 1 }}>
          {value}
        </span>
        <span className="text-slate-400 text-xs tracking-wide font-medium uppercase text-center" style={{ maxWidth: '90px' }}>
          {label}
        </span>
      </div>
    </div>
  );
}
