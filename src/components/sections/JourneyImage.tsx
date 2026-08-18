import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Image as ImageIcon } from 'lucide-react';

interface JourneyImageProps {
  src: string;
  alt: string;
  location?: string;
  caption?: string;
  aspectRatio?: string;
  className?: string;
}

export const JourneyImage = ({
  src,
  alt,
  location,
  caption,
  aspectRatio = 'aspect-[4/3]',
  className = '',
}: JourneyImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group rounded-3xl overflow-hidden glass-card border border-[var(--border-color)] shadow-xl ${aspectRatio} ${className}`}
    >
      {!imageError ? (
        <>
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-[var(--bg-card)] animate-pulse flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-[var(--accent-lavender)] opacity-40 animate-bounce" />
            </div>
          )}
        </>
      ) : (
        /* Styled elegant placeholder when photo file is not yet dropped into public directory */
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-band)] to-[var(--bg-primary)] p-6 flex flex-col justify-between select-none">
          {/* Top bar with location badge */}
          <div className="flex items-center justify-between z-10">
            {location && (
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-lavender)]/15 text-[var(--accent-lavender)] border border-[var(--accent-lavender)]/30 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5" />
                <span>{location}</span>
              </span>
            )}
            <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--text-secondary)] opacity-60">
              Personal Photo
            </span>
          </div>

          {/* Center graphic & notice */}
          <div className="flex flex-col items-center justify-center text-center py-4 my-auto z-10">
            <div className="w-14 h-14 rounded-2xl bg-[var(--accent-lavender)]/10 border border-[var(--accent-lavender)]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              <ImageIcon className="w-7 h-7 text-[var(--accent-lavender)]" />
            </div>
            <p className="text-sm font-semibold text-[var(--text-primary)] max-w-[220px]">
              {alt}
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-1 opacity-70">
              Add photo to <code className="text-[10px] bg-black/20 px-1 py-0.5 rounded font-mono text-[var(--accent-lavender)]">{src}</code>
            </p>
          </div>

          {/* Bottom caption */}
          {caption && (
            <div className="z-10 text-left pt-2 border-t border-[var(--border-color)]">
              <p className="text-xs font-medium text-[var(--text-secondary)]">
                {caption}
              </p>
            </div>
          )}

          {/* Decorative background grid pattern */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#5DF8D8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        </div>
      )}

      {/* Overlay gradient & Location tag on actual loaded image */}
      {!imageError && isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-between p-6 pointer-events-none">
          <div className="flex justify-end">
            {location && (
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-white/90 backdrop-blur-md border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-lavender)]" />
                <span>{location}</span>
              </span>
            )}
          </div>
          {caption && (
            <div>
              <p className="text-sm font-medium text-white/90 drop-shadow">
                {caption}
              </p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};
