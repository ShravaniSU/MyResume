import { motion } from 'framer-motion';
import { GlassCard, SectionHeading } from '../ui';
import { experiences, education, certificationGroups } from '../../data';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const certVariants = {
  hidden: { y: 35, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 50, damping: 20 }
  }
};

export const Experience = () => {
  return (
    <section id="experience" className="section-padding section-band">
      <div className="container mx-auto">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My career path and the companies I've helped grow."
        />
        
        <div className="relative border-l-2 border-accent-lavender/30 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.role}-${exp.period}`}
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 rounded-full bg-bg-dark border-4 border-accent-lavender z-10 transition-colors duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-extrabold text-text-primary transition-colors duration-300">{exp.role}</h3>
                <div className="flex items-center text-text-primary text-base font-bold mt-2 md:mt-0 transition-colors duration-300">
                  <Calendar size={16} className="mr-2 text-accent-medium" />
                  {exp.period}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-6 text-text-secondary text-base font-semibold transition-colors duration-300">
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-2 text-accent-medium" />
                  {exp.company}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-accent-medium" />
                  {exp.location}
                </div>
              </div>
              
              {exp.description && (
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-text-primary text-base font-medium flex items-start transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-medium mt-2 mr-3 flex-shrink-0" />
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
    <section id="education" className="section-padding section-divider">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Education - Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading title="Education" />
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {education.map((edu) => (
                <GlassCard key={edu.period} className="relative overflow-hidden group border border-border-color">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent-lavender/40 group-hover:bg-accent-lavender transition-all duration-300" />
                  <div className="flex items-start">
                    <div className="p-3 bg-accent-lavender/10 rounded-lg text-accent-lavender mr-4 transition-colors duration-300">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xl mb-1 text-text-primary transition-colors duration-300">{edu.degree}</h4>
                      <p className="text-text-secondary text-base font-medium mb-2 transition-colors duration-300">{edu.institution}</p>
                      <p className="text-accent-medium text-xs font-extrabold uppercase tracking-widest transition-colors duration-300">{edu.period}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </div>
          
          {/* Certifications - Right Column */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading title="Certifications" />
            
            <div className="space-y-8">
              {certificationGroups.map((group) => (
                <div key={group.provider} className="space-y-4 cert-group-card">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent-lavender flex items-center space-x-2 border-b border-border-color pb-2 transition-colors duration-300">
                    <span>{group.provider}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent-lavender/10 text-accent-lavender">
                      {group.certs.length}
                    </span>
                  </h4>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                  >
                    {group.certs.map((cert) => (
                      <motion.a
                        key={cert.name}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={certVariants}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className="p-3.5 rounded-xl bg-bg-card border border-border-color hover:border-accent-mint/30 hover:shadow-md transition-all duration-300 flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center mr-2">
                          <div className="p-2 bg-accent-mint/10 rounded-lg text-accent-mint mr-3 group-hover:scale-110 transition-transform duration-300">
                            <Award size={18} />
                          </div>
                          <span className="text-sm font-bold text-text-primary group-hover:text-text-primary transition-colors duration-300 line-clamp-2">
                            {cert.name}
                          </span>
                        </div>
                        <ExternalLink size={14} className="text-text-primary opacity-0 group-hover:opacity-100 group-hover:text-accent-mint transition-all duration-300 flex-shrink-0" />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
