import { motion } from 'framer-motion';
import { JourneyVisual } from './JourneyVisual';

export const JourneyHero = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-20 px-6 md:px-12 section-divider">
      {/* Subtle Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[var(--accent-lavender)]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[var(--accent-mint)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Top: Abstract Journey Visual Map */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <JourneyVisual />
          </div>

          {/* Right / Main Text Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left space-y-4">
            {/* Category Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3.5 py-1 glass border-[var(--border-color)] rounded-full"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-lavender)]">
                PERSONAL STORY
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.15 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tight text-[var(--text-primary)]"
            >
              My <span className="text-[var(--accent-secondary)] transition-colors duration-300">Journey</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.3 }}
              className="text-lg md:text-xl text-[var(--text-primary)] font-semibold leading-snug"
            >
              A path shaped by curiosity, resilience, and a desire to build impact.
            </motion.p>

            {/* Description Paragraph */}
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.4 }}
              className="text-base text-[var(--text-secondary)] max-w-xl leading-relaxed font-medium"
            >
              From a small town in Mumbai to the cloud systems I build today — here's the story of how it all came together.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};
