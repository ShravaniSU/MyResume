import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui';
import { experiences, education, certifications } from '../../data';
import { Briefcase, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My career path and the companies I've helped grow."
        />
        
        <div className="relative border-l-2 border-accent-lavender/20 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 rounded-full bg-bg-dark border-4 border-accent-lavender z-10" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <div className="flex items-center text-accent-mint text-sm font-medium mt-2 md:mt-0">
                  <Calendar size={14} className="mr-2" />
                  {exp.period}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-6 text-text-secondary text-sm">
                <div className="flex items-center">
                  <Briefcase size={14} className="mr-2 text-accent-lavender" />
                  {exp.company}
                </div>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-2 text-accent-lavender" />
                  {exp.location}
                </div>
              </div>
              
              {exp.description && (
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-lavender/40 mt-1.5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const EducationCertifications = () => {
  return (
    <section id="education" className="section-padding bg-bg-alt/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <SectionHeading title="Education" />
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <GlassCard key={edu.period} delay={idx * 0.1} className="relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent-lavender/40 group-hover:bg-accent-lavender transition-colors" />
                  <div className="flex items-start">
                    <div className="p-3 bg-accent-lavender/10 rounded-lg text-accent-lavender mr-4">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                      <p className="text-text-secondary text-sm mb-2">{edu.institution}</p>
                      <p className="text-accent-mint text-xs font-bold uppercase tracking-widest">{edu.period}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <SectionHeading title="Certifications" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent-mint/30 transition-all flex items-center group"
                >
                  <div className="p-2 bg-accent-mint/10 rounded-lg text-accent-mint mr-4 group-hover:scale-110 transition-transform">
                    <Award size={20} />
                  </div>
                  <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors">{cert.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
