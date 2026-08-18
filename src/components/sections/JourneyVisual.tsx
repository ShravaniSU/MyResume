import { motion } from 'framer-motion';
import { Plane, Compass } from 'lucide-react';

export const JourneyVisual = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-[16/10] mx-auto flex items-center justify-center p-4">
      {/* Soft Ambient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-lavender)]/10 via-teal-500/5 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Glass card container for visual depth */}
      <div className="relative w-full h-full rounded-2xl glass border border-[var(--border-color)] p-6 overflow-hidden flex flex-col justify-between shadow-xl">
        
        {/* Top Header Badge */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center space-x-2 text-xs font-mono text-[var(--accent-lavender)]">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span className="tracking-wider uppercase font-semibold">Life & Exploration</span>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-secondary)] opacity-60">
            Path • 2026 & Beyond
          </span>
        </div>

        {/* SVG Journey Map Graphic */}
        <div className="relative w-full h-32 my-auto">
          <svg
            viewBox="0 0 400 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible"
          >
            <defs>
              {/* Glowing Line Gradient */}
              <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent-lavender)" stopOpacity="0.4" />
                <stop offset="40%" stopColor="#0EA5A4" stopOpacity="0.9" />
                <stop offset="80%" stopColor="var(--accent-lavender)" stopOpacity="1" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
              </linearGradient>

              {/* Glowing filter */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Subtle background grid nodes */}
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="var(--text-secondary)" opacity="0.1" />
            </pattern>
            <rect width="400" height="120" fill="url(#grid)" />

            {/* Minimal Mountain Contour Line Art */}
            <path
              d="M 10 110 L 45 85 L 75 105 L 110 75 L 140 100 L 220 50 L 260 80 L 310 40 L 360 85 L 390 110"
              stroke="var(--text-secondary)"
              strokeOpacity="0.15"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Organic Waypoint Curved Path */}
            <motion.path
              d="M 20 85 Q 70 25 130 70 T 250 40 T 370 65"
              stroke="url(#journeyGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Destination Nodes / Milestones */}
            {/* Node 1: Mumbai */}
            <g transform="translate(20, 85)">
              <circle r="8" fill="var(--bg-primary)" stroke="var(--accent-lavender)" strokeWidth="2" />
              <circle r="3" fill="var(--accent-lavender)" />
              <text x="0" y="20" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="var(--font-mono)" fontWeight="600">Mumbai</text>
            </g>

            {/* Node 2: Bangalore */}
            <g transform="translate(130, 70)">
              <circle r="7" fill="var(--bg-primary)" stroke="#0EA5A4" strokeWidth="2" />
              <circle r="3" fill="#0EA5A4" />
              <text x="0" y="-14" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="var(--font-mono)" fontWeight="600">Bangalore</text>
            </g>

            {/* Node 3: Gurugram */}
            <g transform="translate(250, 40)">
              <circle r="7" fill="var(--bg-primary)" stroke="var(--accent-lavender)" strokeWidth="2" />
              <circle r="3" fill="var(--accent-lavender)" />
              <text x="0" y="-14" textAnchor="middle" fill="var(--text-secondary)" fontSize="9" fontFamily="var(--font-mono)" fontWeight="600">Gurugram</text>
            </g>

            {/* Node 4: Kedarnath / Mountains */}
            <g transform="translate(320, 50)">
              <motion.circle
                r="6"
                fill="var(--accent-lavender)"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <text x="0" y="20" textAnchor="middle" fill="var(--accent-lavender)" fontSize="9" fontFamily="var(--font-mono)" fontWeight="bold">Kedarnath</text>
            </g>

            {/* Final Pulsing Destination Node */}
            <g transform="translate(370, 65)">
              <motion.circle
                r="9"
                fill="none"
                stroke="var(--accent-lavender)"
                strokeWidth="1.5"
                animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <circle r="5" fill="var(--accent-lavender)" />
            </g>

            {/* Floating Sparkles along path */}
            <motion.text
              x="80"
              y="40"
              fill="var(--accent-lavender)"
              fontSize="12"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ✦
            </motion.text>
            
            <motion.text
              x="210"
              y="60"
              fill="#3B82F6"
              fontSize="10"
              animate={{ opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              ✦
            </motion.text>

            {/* Moving Plane / Travel Marker along path */}
            <motion.g
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              style={{
                offsetPath: `path("M 20 85 Q 70 25 130 70 T 250 40 T 370 65")`,
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            >
              <circle r="10" fill="var(--accent-lavender)" fillOpacity="0.2" />
              <g transform="translate(-6, -6)">
                <Plane className="w-3.5 h-3.5 text-[var(--accent-lavender)] transform rotate-45" />
              </g>
            </motion.g>
          </svg>
        </div>

        {/* Bottom Milestone Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)] border-t border-[var(--border-color)]/60 pt-2 z-10">
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lavender)]" />
            <span>Roots & Curiosity</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>Code & Systems</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Spirit & Next Steps</span>
          </span>
        </div>

      </div>
    </div>
  );
};
