import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard = ({ children, className = "", delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeading = ({ title, subtitle, center = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-lavender to-accent-mint"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className={`h-1 w-20 bg-gradient-to-r from-accent-lavender to-accent-mint mt-4 ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
};
