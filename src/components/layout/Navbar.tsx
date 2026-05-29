import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ThemeToggle } from '../ui';
import type { Theme } from '../../hooks/useTheme';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // IntersectionObserver scroll-spy
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            setActiveSection(`#${id}`);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass border-none rounded-none shadow-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-text-primary hover:text-[var(--accent-secondary)] hover:scale-105 transition-transform"
        >
          SU.
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative py-1 text-sm font-medium transition-colors duration-300 ${
                  isActive 
                    ? 'text-text-primary font-bold' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full"
                    style={{ backgroundColor: 'var(--accent-medium)' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
          
          <div className="flex items-center space-x-4 border-l border-border-color pl-6 ml-2">
            <a 
              href="https://github.com/ShravaniSU" 
              target="_blank" 
              rel="noreferrer" 
              className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/shravaniurankar" 
              target="_blank" 
              rel="noreferrer" 
              className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Mobile Action Area */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button 
            className="text-text-primary focus:outline-none cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass rounded-none border-t border-border-color overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-medium transition-colors pl-2 py-1 ${
                      isActive 
                        ? 'text-text-primary font-bold border-l-4 pl-3' 
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                    style={isActive ? { borderColor: 'var(--accent-medium)' } : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="flex space-x-6 pt-4 border-t border-border-color items-center">
                <a 
                  href="https://github.com/ShravaniSU" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/shravaniurankar" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="mailto:shravanisurankar@gmail.com" 
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
