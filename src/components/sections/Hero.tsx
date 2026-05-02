import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-lavender/30 rounded-full blur-[128px] animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-pink/20 rounded-full blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-start/10 rounded-full blur-[160px] animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 glass border-accent-lavender/20 rounded-full"
        >
          <span className="text-sm font-medium text-accent-lavender">Available for new opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight"
        >
          Shravani <span className="bg-gradient-to-r from-accent-lavender via-accent-pink to-accent-mint bg-clip-text text-transparent">Urankar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl text-text-secondary font-medium mb-12 h-12"
        >
          <TypeAnimation
            sequence={[
              'DevOps Engineer',
              2000,
              'Cloud Enthusiast',
              2000,
              'Linux Specialist',
              2000,
              'Automation Geek',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <a href="#projects" className="btn-primary flex items-center group">
            View Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-text-secondary opacity-50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};
