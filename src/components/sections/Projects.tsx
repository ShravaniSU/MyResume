import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui';
import { projects } from '../../data';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
  // Filter out the featured project so it doesn't duplicate in the grid
  const regularProjects = projects.filter(project => !project.isFeatured);

  return (
    <section id="projects" className="section-padding section-divider">
      <div className="container mx-auto">
        <SectionHeading 
          title="More Engineering Projects" 
          subtitle="A collection of specialized DevOps utilities, shell tools, automation systems, and applications."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, idx) => (
            <GlassCard 
              key={project.repoName} 
              delay={idx * 0.05}
              className="group hover:scale-[1.02] hover:border-accent-lavender/30 transition-all duration-500 flex flex-col h-full border-border-color"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-accent-lavender/10 rounded-xl text-accent-lavender group-hover:bg-accent-lavender group-hover:text-text-primary transition-colors duration-500">
                  <Code2 size={24} />
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.link || `https://github.com/ShravaniSU/${project.repoName}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                      aria-label="External Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-lavender transition-colors duration-300">
                {project.name}
              </h3>
              
              <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed transition-colors duration-300">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    className="text-[10px] uppercase tracking-wider font-bold text-[var(--accent-medium)]/90 bg-[var(--accent-medium)]/10 px-2.5 py-1 rounded border border-[var(--accent-medium)]/20 transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/ShravaniSU" 
            target="_blank"
            rel="noreferrer"
            className="btn-outline inline-flex items-center cursor-pointer"
          >
            <FaGithub className="mr-2" size={20} />
            Explore More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};
