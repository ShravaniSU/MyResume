import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui';
import { projects } from '../../data';
import { ShieldCheck, Layers, Network, Terminal, GitBranch, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const FeaturedProject = () => {
  // Find TaskFlow from projects
  const project = projects.find((p) => p.isFeatured) || projects[0];

  // Map features to corresponding icons
  const featureIcons = [
    <ShieldCheck className="text-accent-mint" size={24} />,
    <Layers className="text-accent-lavender" size={24} />,
    <Network className="text-accent-pink" size={24} />,
    <Terminal className="text-accent-beige" size={24} />,
    <GitBranch className="text-accent-mint" size={24} />,
  ];

  return (
    <section id="featured-project" className="section-padding section-divider relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-lavender/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto">
        <SectionHeading 
          title="Featured Project Spotlight" 
          subtitle="An inside look at TaskFlow: DevOps engineering, infrastructure automation, and secure software architecture."
        />

        <GlassCard className="relative overflow-hidden border-accent-mint/20 hover:border-accent-mint/40 transition-colors duration-500 mt-12 p-8 md:p-12">
          {/* Top Decorative Tag */}
          <div className="absolute top-0 right-0 px-6 py-2 rounded-bl-2xl font-bold text-text-primary tracking-widest uppercase" style={{ backgroundColor: 'var(--accent-strong)' }}>
            DevOps Showcase
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Project Overview Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-accent-mint/10 rounded-2xl text-accent-mint">
                  <Code2 size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-text-primary">
                  {project.name}
                </h3>
              </div>

              <p className="text-text-secondary text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    className="text-xs uppercase tracking-wider font-bold text-[var(--accent-medium)] bg-[var(--accent-medium)]/10 border border-[var(--accent-medium)]/20 px-3 py-1.5 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-primary flex items-center space-x-2"
                >
                  <FaGithub size={18} />
                  <span>Explore Repository</span>
                </a>
              </div>
            </div>

            {/* Architectural Features Column */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-xl font-bold text-text-primary border-b border-border-color pb-3 flex items-center">
                System & Infrastructure Architecture
              </h4>

              <div className="space-y-6">
                {project.features?.map((featureStr, idx) => {
                  const [title, desc] = featureStr.split(': ');
                  return (
                    <motion.div 
                      key={title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-4 group"
                    >
                      <div className="flex-shrink-0 mt-1 p-2.5 bg-bg-secondary border border-border-color rounded-xl group-hover:border-accent-mint/30 transition-colors duration-300">
                        {featureIcons[idx] || featureIcons[0]}
                      </div>
                      <div className="space-y-1">
                        <h5 className="font-bold text-text-primary group-hover:text-accent-mint transition-colors duration-300">
                          {title}
                        </h5>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
