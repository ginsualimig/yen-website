'use client';

/**
 * VenturiTimeline — Horizontal (desktop) / vertical (mobile) process flow
 * Rendered as a Venturi pipe: Wide Challenge → Narrow Focus → Gold Breakthrough → Wide Outcome
 * Pure SVG + CSS, no JavaScript
 */

interface TimelineStep {
  label: string;
  sublabel: string;
  phase: 'input' | 'converge' | 'throat' | 'diverge' | 'output';
}

interface VenturiTimelineProps {
  isZh?: boolean;
  className?: string;
}

export default function VenturiTimeline({ isZh = false, className = '' }: VenturiTimelineProps) {
  const steps: TimelineStep[] = isZh
    ? [
        { label: '挑战',     sublabel: '理解复杂局面',     phase: 'input' },
        { label: '汇聚专业', sublabel: '多学科整合视角',   phase: 'converge' },
        { label: '突破点',   sublabel: '战略清晰度',       phase: 'throat' },
        { label: '精准执行', sublabel: '专注、精准落地',   phase: 'diverge' },
        { label: '成果',     sublabel: '持久价值创造',     phase: 'output' },
      ]
    : [
        { label: 'Challenge',   sublabel: 'Understanding complexity',    phase: 'input' },
        { label: 'Convergence', sublabel: 'Multi-discipline perspective', phase: 'converge' },
        { label: 'Breakthrough',sublabel: 'Strategic clarity',            phase: 'throat' },
        { label: 'Execution',   sublabel: 'Focused, precise delivery',   phase: 'diverge' },
        { label: 'Outcome',     sublabel: 'Enduring value creation',     phase: 'output' },
      ];

  return (
    <div className={`venturi-timeline ${className}`}>
      {/* ── Desktop SVG Timeline ── */}
      <div className="hidden md:block" aria-hidden="true">
        <svg
          viewBox="0 0 900 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          style={{ height: '160px', overflow: 'visible' }}
        >
          <defs>
            <radialGradient id="tl-throat-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.55" />
              <stop offset="60%"  stopColor="#f59e0b" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="tl-pipe-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#0A0E27" stopOpacity="0.5" />
              <stop offset="40%"  stopColor="#0066cc" stopOpacity="0.35" />
              <stop offset="50%"  stopColor="#f59e0b" stopOpacity="0.7" />
              <stop offset="60%"  stopColor="#0066cc" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0A0E27" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="tl-pipe-fill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#0A0E27" stopOpacity="0.06" />
              <stop offset="40%"  stopColor="#0066cc" stopOpacity="0.08" />
              <stop offset="50%"  stopColor="#f59e0b" stopOpacity="0.12" />
              <stop offset="60%"  stopColor="#0066cc" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#0A0E27" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          {/* Venturi pipe — upper wall */}
          {/* Wide left → narrow center → wide right */}
          <path
            d="M 0 42 Q 180 42 340 72 Q 420 80 450 80 Q 480 80 560 72 Q 720 42 900 42"
            stroke="url(#tl-pipe-grad)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Lower wall */}
          <path
            d="M 0 118 Q 180 118 340 88 Q 420 80 450 80 Q 480 80 560 88 Q 720 118 900 118"
            stroke="url(#tl-pipe-grad)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Pipe fill area */}
          <path
            d="M 0 42 Q 180 42 340 72 Q 420 80 450 80 Q 480 80 560 72 Q 720 42 900 42
               L 900 118 Q 720 118 560 88 Q 480 80 450 80 Q 420 80 340 88 Q 180 118 0 118 Z"
            fill="url(#tl-pipe-fill)"
          />

          {/* Centerline flow */}
          <path
            d="M 0 80 L 900 80"
            stroke="#0066cc"
            strokeWidth="0.8"
            strokeOpacity="0.18"
            strokeDasharray="4 8"
          />

          {/* Throat glow */}
          <ellipse cx="450" cy="80" rx="40" ry="22" fill="url(#tl-throat-glow)" />
          {/* Throat gold dot */}
          <circle cx="450" cy="80" r="4"  fill="#f59e0b" opacity="0.9" />
          <circle cx="450" cy="80" r="9"  fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
          <circle cx="450" cy="80" r="16" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.18" />

          {/* Step markers — x positions: 30, 195, 450, 705, 870 */}
          {[
            { x: 30,  y: 80 },
            { x: 220, y: 80 },
            { x: 450, y: 80 },  // throat
            { x: 680, y: 80 },
            { x: 870, y: 80 },
          ].map((pos, i) => (
            <g key={i}>
              {i === 2 ? (
                // Throat — gold star/diamond marker
                <polygon
                  points={`${pos.x},${pos.y - 7} ${pos.x + 5},${pos.y} ${pos.x},${pos.y + 7} ${pos.x - 5},${pos.y}`}
                  fill="#f59e0b"
                  opacity="0.95"
                />
              ) : (
                <circle cx={pos.x} cy={pos.y} r="5" fill="#0A0E27" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" />
              )}
            </g>
          ))}

          {/* Converging flow arrows — left side */}
          <g opacity="0.4">
            <polyline points="80,55 120,70 80,85"   fill="none" stroke="#0066cc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="80,105 120,90 80,75"  fill="none" stroke="#0066cc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          {/* Diverging arrows — right side */}
          <g opacity="0.3">
            <polyline points="820,55 780,70 820,85"  fill="none" stroke="#0066cc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="820,105 780,90 820,75" fill="none" stroke="#0066cc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
        </svg>

        {/* Labels below SVG — via HTML for clarity */}
        <div className="flex justify-between mt-2 px-0">
          {steps.map((step, i) => {
            const widths = ['w-[7%]', 'w-[20%]', 'w-[10%]', 'w-[20%]', 'w-[8%]'];
            const aligns = ['text-left', 'text-center', 'text-center', 'text-center', 'text-right'];
            return (
              <div key={i} className={`flex flex-col gap-0.5 ${aligns[i]}`} style={{ width: i === 2 ? '10%' : i === 0 || i === 4 ? '8%' : '21%' }}>
                <span
                  className={`font-semibold text-xs ${i === 2 ? 'text-gold-500' : 'text-navy-900'}`}
                  style={{ fontSize: '0.7rem', letterSpacing: '0.04em' }}
                >
                  {step.label}
                </span>
                <span className="text-slate-400" style={{ fontSize: '0.6rem', lineHeight: '1.3' }}>
                  {step.sublabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile Vertical Timeline ── */}
      <div className="md:hidden relative pl-8">
        {/* Vertical Venturi pipe line */}
        <div
          className="absolute left-3 top-0 bottom-0 w-px"
          style={{
            background: 'linear-gradient(180deg, #0A0E27 0%, #0066cc 35%, #f59e0b 50%, #0066cc 65%, #0A0E27 100%)',
            opacity: 0.5,
          }}
          aria-hidden="true"
        />

        {steps.map((step, i) => (
          <div key={i} className="relative pb-8 last:pb-0">
            {/* Node dot */}
            <div
              className="absolute left-[-1.25rem]"
              style={{ top: '2px' }}
              aria-hidden="true"
            >
              {step.phase === 'throat' ? (
                <div
                  className="w-3 h-3 rotate-45"
                  style={{ background: '#f59e0b', boxShadow: '0 0 8px rgba(245,158,11,0.5)' }}
                />
              ) : (
                <div
                  className="w-3 h-3 rounded-full border-2"
                  style={{ background: '#0A0E27', borderColor: 'rgba(245,158,11,0.5)' }}
                />
              )}
            </div>

            {/* Content */}
            <div className={step.phase === 'throat' ? 'pl-2' : ''}>
              <p
                className={`font-semibold text-sm ${step.phase === 'throat' ? 'text-gold-500' : 'text-navy-900'}`}
              >
                {step.phase === 'throat' && (
                  <span className="text-gold-400 mr-1" aria-hidden="true">✦</span>
                )}
                {step.label}
              </p>
              <p className="text-slate-500 text-xs mt-0.5" style={{ lineHeight: '1.5' }}>
                {step.sublabel}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible text alternative */}
      <p className="sr-only">
        {steps.map((s) => `${s.label}: ${s.sublabel}`).join(' → ')}
      </p>
    </div>
  );
}
