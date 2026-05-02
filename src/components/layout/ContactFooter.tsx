import { GlassCard, SectionHeading } from '../ui';
import { profileData } from '../../data';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-lavender/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
          center
        />
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">Let's connect</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${profileData.email}`} className="flex items-center group">
                <div className="p-4 bg-white/5 rounded-2xl text-accent-lavender mr-6 group-hover:bg-accent-lavender group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email me at</p>
                  <p className="text-lg font-bold text-white">{profileData.email}</p>
                </div>
              </a>
              
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="flex items-center group">
                <div className="p-4 bg-white/5 rounded-2xl text-[#0077b5] mr-6 group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Connect on</p>
                  <p className="text-lg font-bold text-white">LinkedIn</p>
                </div>
              </a>
              
              <a href={profileData.github} target="_blank" rel="noreferrer" className="flex items-center group">
                <div className="p-4 bg-white/5 rounded-2xl text-white mr-6 group-hover:bg-white group-hover:text-bg-dark transition-all duration-300">
                  <FaGithub size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Follow on</p>
                  <p className="text-lg font-bold text-white">GitHub</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <GlassCard className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lavender transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lavender transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lavender transition-colors resize-none"
                />
              </div>
              <button className="btn-primary w-full flex items-center justify-center">
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-text-secondary text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Shravani Shirish Urankar. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href={profileData.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-white transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${profileData.email}`} className="text-text-secondary hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
