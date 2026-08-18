import { motion } from 'framer-motion';
import { JourneyImage } from './JourneyImage';

interface JourneySectionProps {
  chapterLabel: string;
  heading: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  imageLocation?: string;
  imageCaption?: string;
  imagePosition?: 'left' | 'right';
  accentBadge?: string;
  id?: string;
}

export const JourneySection = ({
  chapterLabel,
  heading,
  paragraphs,
  imageSrc,
  imageAlt,
  imageLocation,
  imageCaption,
  imagePosition = 'left',
  accentBadge,
  id,
}: JourneySectionProps) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <section id={id} className="py-12 md:py-16 lg:py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Image Column */}
          <div
            className={`lg:col-span-6 w-full max-w-[560px] mx-auto ${
              isImageLeft ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <JourneyImage
              src={imageSrc}
              alt={imageAlt}
              location={imageLocation}
              caption={imageCaption}
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* Text Content Column */}
          <div
            className={`lg:col-span-6 w-full max-w-[560px] mx-auto ${
              isImageLeft ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              {/* Chapter Label & Badge */}
              <div className="flex items-center space-x-2.5">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-lavender)] font-bold px-3 py-0.5 rounded-full bg-[var(--accent-lavender)]/10 border border-[var(--accent-lavender)]/20">
                  {chapterLabel}
                </span>
                {accentBadge && (
                  <span className="text-xs font-medium text-[var(--text-secondary)]">
                    • {accentBadge}
                  </span>
                )}
              </div>

              {/* Heading */}
              <h2 className="text-2xl md:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                {heading}
              </h2>

              {/* Accent Line */}
              <div className="h-1 w-14 bg-gradient-to-r from-[var(--accent-lavender)] to-teal-400 rounded-full accent-line" />

              {/* Paragraphs */}
              <div className="space-y-3 pt-1 text-[var(--text-secondary)] text-base leading-relaxed font-medium">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
