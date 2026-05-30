import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export { ThemeToggle } from './ThemeToggle';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard = ({ children, className = "", delay }: GlassCardProps) => {
  const isDirectTrigger = delay !== undefined;
  return (
    <motion.div
      variants={{
        hidden: { y: 35, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 50, damping: 20, delay }
        }
      }}
      initial={isDirectTrigger ? "hidden" : undefined}
      whileInView={isDirectTrigger ? "visible" : undefined}
      viewport={isDirectTrigger ? { once: true } : undefined}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`glass-card p-6 hover:border-[#5DF8D8] ${className}`}
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
        initial={{ y: 35, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="text-4xl md:text-5xl mb-4 font-display font-bold text-text-primary"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ y: 35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.15 }}
          className={`text-text-secondary text-lg max-w-2xl ${center ? 'mx-auto text-center' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={`h-1 w-20 mt-4 bg-accent-medium accent-line ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
};
