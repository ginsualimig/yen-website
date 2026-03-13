export default function VentureDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-12 flex items-center overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="divider-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0A0E27" stopOpacity="0.3" />
            <stop offset="15%" stopColor="#0A0E27" stopOpacity="0.5" />
            <stop offset="30%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.1" />
            <stop offset="85%" stopColor="#0A0E27" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0A0E27" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Left converging band */}
        <path
          d="M0 15 Q150 15 300 18 Q400 20 500 20 L500 22 Q400 22 300 24 Q150 25 0 25 Z"
          fill="url(#divider-grad)"
          opacity="0.6"
        />

        {/* Center thin throat */}
        <path
          d="M490 15 L510 15 Q550 20 600 20 Q550 20 510 25 L490 25 Z"
          fill="#f59e0b"
          opacity="0.7"
        />

        {/* Right expanding band */}
        <path
          d="M700 20 Q800 20 900 18 Q1050 15 1200 15 L1200 25 Q1050 25 900 24 Q800 22 700 22 Z"
          fill="url(#divider-grad)"
          opacity="0.6"
        />

        {/* Center glow accent */}
        <circle cx="600" cy="20" r="3" fill="#f59e0b" opacity="0.8" />
        <circle cx="600" cy="20" r="6" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.4" />
      </svg>

      <style>{`
        @keyframes dividerPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .divider-animated {
          animation: dividerPulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
