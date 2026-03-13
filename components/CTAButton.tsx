'use client';

import React from 'react';

/**
 * CTAButton — Primary CTA with Venturi Breath effect
 * SVG: two converging arcs + gold center pressure point
 * Rest: 15% opacity, Hover: 100% opacity + inward animation
 */

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline-light' | 'outline-dark';
  className?: string;
  // For Link vs button distinction
  asLink?: boolean;
  target?: string;
  rel?: string;
}

const CTAButton = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, CTAButtonProps>(
  (
    {
      children,
      href,
      onClick,
      variant = 'primary',
      className = '',
      asLink = false,
      target,
      rel,
    },
    ref
  ) => {
    // Determine base button style
    let baseClass = 'cta-button-breath inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm tracking-wide rounded transition-all duration-250 ease-premium relative';

    if (variant === 'primary') {
      baseClass += ' bg-gold-500 text-navy-900';
    } else if (variant === 'outline-light') {
      baseClass += ' border border-cream-300 border-opacity-40 text-cream-100 font-medium';
    } else if (variant === 'outline-dark') {
      baseClass += ' border border-navy-900 text-navy-900 font-medium';
    }

    baseClass += ` ${className}`;

    if (asLink && href) {
      return (
        <a href={href} className={baseClass} target={target} rel={rel} ref={ref as React.Ref<HTMLAnchorElement>}>
          <SVGBreathEffect />
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    return (
      <button onClick={onClick} className={baseClass} ref={ref as React.Ref<HTMLButtonElement>}>
        <SVGBreathEffect />
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

CTAButton.displayName = 'CTAButton';

/**
 * SVGBreathEffect — Converging arcs within button bounds
 * Scales dynamically with button width via preserveAspectRatio
 */
function SVGBreathEffect() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{ pointerEvents: 'none' }}
    >
      <defs>
        <radialGradient id="cta-breath-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Upper converging arc */}
      <path
        d="M 4 8 Q 20 4 36 8"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
        className="cta-breath-arc"
        style={{
          filter: 'drop-shadow(0 0 2px rgba(245, 158, 11, 0.3))',
        }}
      />

      {/* Lower converging arc */}
      <path
        d="M 4 32 Q 20 36 36 32"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
        className="cta-breath-arc"
        style={{
          filter: 'drop-shadow(0 0 2px rgba(245, 158, 11, 0.3))',
        }}
      />

      {/* Center pressure point — gold */}
      <circle
        cx="20"
        cy="20"
        r="2"
        fill="#f59e0b"
        opacity="0.6"
        className="cta-breath-center"
      />

      {/* Subtle glow around center */}
      <circle
        cx="20"
        cy="20"
        r="4"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="0.6"
        opacity="0.3"
        className="cta-breath-glow"
      />
    </svg>
  );
}

export default CTAButton;
export { CTAButton };
