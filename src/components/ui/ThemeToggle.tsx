import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import type { Theme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-bg-card border border-border-color text-text-primary hover:text-accent-mint hover:border-accent-mint/30 shadow-md cursor-pointer transition-colors duration-300 focus:outline-none"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="text-accent-lavender"
      >
        <Moon size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute inset-0 m-auto flex items-center justify-center text-accent-mint"
      >
        <Sun size={20} />
      </motion.div>
    </motion.button>
  );
};
