import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui';
import { profileData, skills } from '../../data';
import { 
  Terminal, 
  Cpu, 
  Cloud, 
  Layers, 
  Activity, 
  Code2, 
  Database, 
  Bot 
} from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const getSkillCategoryIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('cloud') || t.includes('devops')) return <Cloud className="mr-2 text-accent-lavender" size={20} />;
  if (t.includes('mlops')) return <Cpu className="mr-2 text-accent-lavender" size={20} />;
  if (t.includes('languages') || t.includes('frameworks')) return <Code2 className="mr-2 text-accent-lavender" size={20} />;
  if (t.includes('databases')) return <Database className="mr-2 text-accent-lavender" size={20} />;
  if (t.includes('ai development') || t.includes('tools')) return <Bot className="mr-2 text-accent-lavender" size={20} />;
  if (t.includes('infrastructure')) return <Layers className="mr-2 text-accent-lavender" size={20} />;
  return <Terminal className="mr-2 text-accent-lavender" size={20} />;
};

export const About = () => {
  return (
    <section id="about" className="section-padding section-divider relative">
      <div className="container mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Backend engineering experience, evolving into DevOps and MLOps." 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="space-y-6 text-lg font-medium text-text-secondary leading-relaxed transition-colors duration-300"
          >
            <p>
              {profileData.summary}
            </p>
            <p>
              Passionate about MLOps, cloud-native technologies, CI/CD automation, containerization, and infrastructure management, with hands-on experience building automated machine learning pipelines, model lifecycle workflows, and production monitoring platforms using AWS, Docker, Kubernetes, GitHub Actions, Terraform, MLflow, DVC, and FastAPI.
            </p>
            <p>
              I specialize in bridging the gap between development and operations, ensuring that software is not only built well but also deployed and maintained with maximum efficiency.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="capability-dashboard space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <GlassCard className="flex flex-col items-center text-center p-6 rounded-[1.75rem]">
                <Cpu className="text-[var(--accent-strong)] mb-4" size={32} />
                <h4 className="text-text-primary font-bold mb-2">MLOps</h4>
                <p className="text-text-secondary text-xs">Automated ML pipelines, Model lifecycle workflows</p>
              </GlassCard>
              <GlassCard className="flex flex-col items-center text-center p-6 rounded-[1.75rem]">
                <Layers className="text-[var(--accent-strong)] mb-4" size={32} />
                <h4 className="text-text-primary font-bold mb-2">DevOps</h4>
                <p className="text-text-secondary text-xs">CI/CD, Containers, Deployment automation</p>
              </GlassCard>
              <GlassCard className="flex flex-col items-center text-center p-6 rounded-[1.75rem]">
                <Cloud className="text-[var(--accent-strong)] mb-4" size={32} />
                <h4 className="text-text-primary font-bold mb-2">Cloud</h4>
                <p className="text-text-secondary text-xs">AWS, Infrastructure, Production deployments</p>
              </GlassCard>
              <GlassCard className="flex flex-col items-center text-center p-6 rounded-[1.75rem]">
                <Activity className="text-[var(--accent-strong)] mb-4" size={32} />
                <h4 className="text-text-primary font-bold mb-2">Observability</h4>
                <p className="text-text-secondary text-xs">System monitoring, Metrics, Operational tooling</p>
              </GlassCard>
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding section-band">
      <div className="container mx-auto">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="A comprehensive toolkit of technologies I use to build and scale infrastructure."
          center
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {skills.map((category) => (
            <GlassCard key={category.title} className="h-full border-border-color hover:border-accent-lavender/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-accent-lavender flex items-center transition-colors duration-300">
                {getSkillCategoryIcon(category.title)}
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1.5 bg-bg-card border border-border-color rounded-full text-xs font-medium text-text-secondary hover:text-text-primary hover:border-accent-lavender/50 transition-colors duration-300 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
