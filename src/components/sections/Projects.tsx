import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui';
import { projects } from '../../data';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
  // All projects, including TaskFlow as the first card in the grid
  const allProjects = projects;

  return (
    <section id="projects" className="section-padding section-divider">
      <div className="container mx-auto">
        <SectionHeading 
          title="Projects Spotlight" 
          subtitle="A collection of specialized DevOps systems, container utilities, automation scripts, and full-stack applications."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, idx) => (
            <GlassCard 
              key={project.repoName} 
              delay={idx * 0.05}
              className="group hover:scale-[1.02] transition-all duration-500 flex flex-col h-full bg-bg-card border border-[rgba(59,117,151,0.12)] hover:border-accent-lavender/30 shadow-md"
            >
              {/* Top: Project Title in bold with folder or code icon */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-accent-lavender/10 rounded-xl text-accent-lavender group-hover:bg-accent-lavender group-hover:text-white transition-colors duration-500 flex-shrink-0">
                  <Code2 size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-text-primary group-hover:text-accent-lavender transition-colors duration-300">
                  {project.name}
                </h3>
              </div>

              {/* Middle: Description (2-3 sentences) */}
              <p className="text-text-secondary text-sm md:text-base font-medium mb-6 flex-grow leading-relaxed transition-colors duration-300">
                {project.description}
              </p>
              
              {/* Tech Tags: Small badges using #547792 text or background fills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    className="text-[10px] uppercase tracking-wider font-bold text-[#547792] bg-[#547792]/10 border border-[#547792]/20 px-2.5 py-1 rounded transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links: GitHub always shown + Visit Site button when liveUrl exists */}
              <div className="mt-auto pt-4 border-t border-[rgba(59,117,151,0.10)] flex items-center gap-3 flex-wrap">
                <a 
                  href={project.link || `https://github.com/ShravaniSU/${project.repoName}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-bold text-accent-lavender hover:text-accent-strong transition-colors cursor-pointer"
                >
                  <FaGithub className="mr-2" size={16} />
                  <span>{project.isFeatured ? "Explore Repository" : "View Code"}</span>
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-lg bg-accent-lavender/10 text-accent-lavender border border-accent-lavender/25 hover:bg-accent-lavender hover:text-white transition-all duration-300 cursor-pointer ml-auto"
                    aria-label="Visit Live Site"
                  >
                    <ExternalLink size={13} />
                    <span>Visit Site</span>
                  </a>
                )}
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
