import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui';
import { profileData, skills } from '../../data';
import { Terminal, Cpu, Cloud, Settings, Layers } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="section-padding section-band relative">
      <div className="container mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="My journey from application development to specialized DevOps engineering." 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-text-secondary leading-relaxed transition-colors duration-300"
          >
            <p>
              {profileData.summary}
            </p>
            <p>
              I specialize in bridging the gap between development and operations, ensuring that software is not only built well but also deployed and maintained with maximum efficiency.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h4 className="text-[var(--accent-medium)] text-3xl font-bold transition-colors duration-300">5+</h4>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-[var(--accent-medium)] text-3xl font-bold transition-colors duration-300">8+</h4>
                <p className="text-sm">Public Projects</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="flex flex-col items-center text-center p-8 border border-transparent bg-[var(--bg-card-solid)] text-slate-100 rounded-[1.75rem]" delay={0.1}>
              <Terminal className="text-[var(--accent-strong)] mb-4" size={32} />
              <h4 className="text-[var(--accent-strong)] font-bold mb-2">Automation</h4>
              <p className="text-slate-100 text-xs">Bash & Python scripting for efficient workflows.</p>
            </GlassCard>
            <GlassCard className="flex flex-col items-center text-center p-8 border border-transparent bg-[var(--bg-card-solid)] text-slate-100 rounded-[1.75rem]" delay={0.2}>
              <Cloud className="text-[var(--accent-strong)] mb-4" size={32} />
              <h4 className="text-[var(--accent-strong)] font-bold mb-2">Cloud</h4>
              <p className="text-slate-100 text-xs">AWS & Azure infrastructure management.</p>
            </GlassCard>
            <GlassCard className="flex flex-col items-center text-center p-8 border border-transparent bg-[var(--bg-card-solid)] text-slate-100 rounded-[1.75rem]" delay={0.3}>
              <Layers className="text-[var(--accent-strong)] mb-4" size={32} />
              <h4 className="text-[var(--accent-strong)] font-bold mb-2">CI/CD</h4>
              <p className="text-slate-100 text-xs">Robust pipelines using GitHub Actions.</p>
            </GlassCard>
            <GlassCard className="flex flex-col items-center text-center p-8 border border-transparent bg-[var(--bg-card-solid)] text-slate-100 rounded-[1.75rem]" delay={0.4}>
              <Settings className="text-[var(--accent-strong)] mb-4" size={32} />
              <h4 className="text-[var(--accent-strong)] font-bold mb-2">Monitoring</h4>
              <p className="text-slate-100 text-xs">Netdata & log analysis for system health.</p>
            </GlassCard>
          </div>
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((category, idx) => (
            <GlassCard key={category.title} delay={idx * 0.1} className="h-full border-border-color hover:border-accent-lavender/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-accent-lavender flex items-center transition-colors duration-300">
                <Cpu className="mr-2" size={20} />
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
        </div>
      </div>
    </section>
  );
};
