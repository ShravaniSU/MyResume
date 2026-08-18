import { motion } from 'framer-motion';

export const JourneyQuote = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 relative overflow-hidden flex items-center justify-center">
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* Oversized Editorial Quotation Mark Glyph */}
          <div className="flex justify-center select-none leading-none">
            <span className="font-serif text-6xl md:text-8xl text-[var(--accent-lavender)] opacity-25 font-bold -mb-6 md:-mb-8">
              “
            </span>
          </div>

          {/* Large Quote Statement */}
          <blockquote className="text-xl md:text-3xl lg:text-4xl font-display font-semibold text-[var(--text-primary)] leading-tight tracking-tight max-w-2xl mx-auto italic">
            Every place, every person, every challenge — they all shape who I am becoming.
          </blockquote>

          {/* Subtle Decorative Accent Line */}
          <div className="flex items-center justify-center space-x-2.5 pt-2">
            <div className="h-[1px] w-10 bg-[var(--accent-lavender)]/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lavender)]" />
            <div className="h-[1px] w-10 bg-[var(--accent-lavender)]/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
