import { motion } from 'framer-motion';
import { ExternalLink, Compass } from 'lucide-react';

export const JourneyClosing = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 relative overflow-hidden section-divider">
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Section Heading */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
              The Road Ahead
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-[var(--accent-lavender)] to-teal-400 rounded-full mx-auto accent-line" />
          </div>

          {/* EXACT TEXT REQUIRED BY SPECIFICATION */}
          <p className="text-lg md:text-xl text-[var(--text-primary)] font-medium leading-relaxed max-w-xl mx-auto pt-1">
            “As I move forward, I carry that same hope—to continue building a life that feels meaningful, balanced, and truly my own.”
          </p>

          {/* Subtle Travel Site Reference Card / Callout */}
          <div className="pt-4">
            <div className="inline-block p-5 md:p-6 rounded-2xl glass-card border border-[var(--border-color)] text-left max-w-lg mx-auto space-y-3 shadow-lg">
              <div className="flex items-center space-x-2.5 text-[var(--accent-lavender)]">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  Explore My Travels
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                I also love exploring new places and sharing those experiences. Visit my travel site to explore the places I've visited so far.
              </p>

              {/* Clickable Travel Website Link */}
              <div className="pt-1">
                <a
                  href="https://travel.shravaniurankar.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-[var(--accent-lavender)] hover:text-teal-300 transition-colors group cursor-pointer underline underline-offset-4 decoration-[var(--accent-lavender)]/40 hover:decoration-[var(--accent-lavender)]"
                  aria-label="Visit travel.shravaniurankar.in (opens in a new tab)"
                >
                  <span>travel.shravaniurankar.in</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
