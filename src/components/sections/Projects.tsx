import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui';
import { projects } from '../../data';
import { 
  ExternalLink, 
  Code2, 
  Cpu, 
  Cloud, 
  GitBranch, 
  Terminal, 
  Database, 
  Activity, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const getCategoryIcon = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('mlops')) return <Cpu size={16} />;
  if (cat.includes('observability')) return <Activity size={16} />;
  if (cat.includes('full stack') || cat.includes('devops')) return <Layers size={16} />;
  if (cat.includes('infrastructure') || cat.includes('cloud')) return <Cloud size={16} />;
  if (cat.includes('ci/cd')) return <GitBranch size={16} />;
  if (cat.includes('database')) return <Database size={16} />;
  if (cat.includes('automation') || cat.includes('scripting')) return <Terminal size={16} />;
  return <Code2 size={16} />;
};

export const Projects = () => {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="section-padding section-divider">
      <div className="container mx-auto">
        <SectionHeading 
          title="Projects Spotlight" 
          subtitle="Production-oriented projects across MLOps, DevOps, cloud infrastructure, and backend engineering."
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProjects.map((project) => (
            <GlassCard 
              key={project.id} 
              className="group flex flex-col h-full bg-bg-card border border-border-color shadow-md hover:shadow-[0_0_20px_rgba(93,248,216,0.1)] transition-all duration-300"
            >
              {/* Top Meta: Category + Featured Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-accent-lavender text-xs font-bold tracking-wider uppercase">
                  <span className="p-1.5 bg-accent-lavender/10 rounded-md text-accent-lavender">
                    {getCategoryIcon(project.category)}
                  </span>
                  <span>{project.category}</span>
                </div>
                {project.badge === 'featured' && (
                  <span className="text-[10px] uppercase tracking-widest font-black bg-accent-lavender text-[#0A111F] px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(93,248,216,0.3)]">
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-lavender mb-3 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm font-medium mb-6 flex-grow leading-relaxed transition-colors duration-300">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((t) => (
                  <span 
                    key={t}
                    className="text-[10px] uppercase tracking-wider font-bold text-accent-medium/80 bg-accent-medium/5 border border-accent-medium/10 px-2 py-0.5 rounded transition-all duration-300 group-hover:border-accent-lavender/30 group-hover:text-accent-lavender"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="mt-auto pt-4 border-t border-border-color flex items-center justify-between gap-3 flex-wrap">
                <a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-bold text-accent-lavender hover:text-accent-strong transition-colors cursor-pointer group/link"
                >
                  <FaGithub className="mr-2" size={16} />
                  <span>Explore Repository</span>
                  <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold px-3 py-1 rounded-lg bg-accent-lavender/10 text-accent-lavender border border-accent-lavender/25 hover:bg-accent-lavender hover:text-[#0A111F] transition-all duration-300 cursor-pointer"
                    aria-label="Visit Live Site"
                  >
                    <ExternalLink size={13} />
                    <span>Visit Site</span>
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ y: 35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
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
