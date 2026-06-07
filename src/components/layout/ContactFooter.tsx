import { GlassCard, SectionHeading } from '../ui';
import { profileData } from '../../data';
import { Mail, Send, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

export const Contact = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('message', formData.message);
      
      await fetch('https://formbold.com/s/9XlZn', {
        method: 'POST',
        body: data,
      });
      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <section id="contact" className="section-padding section-band relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-lavender/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
          center
        />
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-extrabold text-text-primary mb-6 transition-colors duration-300">Let's connect</h3>
            <p className="text-text-secondary text-lg font-medium leading-relaxed transition-colors duration-300">
              I'm always open to discussing new projects, infrastructure setups, or opportunities to automate and scale your workflows.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${profileData.email}`} className="flex items-center group cursor-pointer">
                <div className="p-4 bg-bg-card border border-border-color rounded-2xl text-accent-lavender mr-6 group-hover:bg-accent-lavender group-hover:text-[#0A111F] transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-extrabold text-text-secondary transition-colors duration-300">Email me at</p>
                  <p className="text-lg font-extrabold text-text-primary transition-colors duration-300">{profileData.email}</p>
                </div>
              </a>
              
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="flex items-center group cursor-pointer">
                <div className="p-4 bg-bg-card border border-border-color rounded-2xl text-[#0077b5] mr-6 group-hover:bg-[#0077b5] group-hover:text-[#0A111F] transition-all duration-300">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-extrabold text-text-secondary transition-colors duration-300">Connect on</p>
                  <p className="text-lg font-extrabold text-text-primary transition-colors duration-300">LinkedIn</p>
                </div>
              </a>
              
              <a href={profileData.github} target="_blank" rel="noreferrer" className="flex items-center group cursor-pointer">
                <div className="p-4 bg-bg-card border border-border-color rounded-2xl text-text-primary mr-6 group-hover:bg-text-primary group-hover:text-[#0A111F] transition-all duration-300">
                  <FaGithub size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-extrabold text-text-secondary transition-colors duration-300">Follow on</p>
                  <p className="text-lg font-extrabold text-text-primary transition-colors duration-300">GitHub</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <GlassCard className="p-8 border-border-color">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-primary ml-1 transition-colors duration-300">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-[rgba(255,255,255,0.02)] border border-border-color rounded-xl px-4 py-3 text-text-primary font-medium placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-lavender transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-primary ml-1 transition-colors duration-300">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[rgba(255,255,255,0.02)] border border-border-color rounded-xl px-4 py-3 text-text-primary font-medium placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-lavender transition-all duration-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-primary ml-1 transition-colors duration-300">Your Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-[rgba(255,255,255,0.02)] border border-border-color rounded-xl px-4 py-3 text-text-primary font-medium placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-lavender transition-all duration-300 resize-none"
                />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </GlassCard>
        </div>

        {/* Success Popup Modal */}
        {showSuccessPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-bg-card border border-border-color rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl animate-in fade-in zoom-in duration-300">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-extrabold text-text-primary">Success!</h2>
                <button 
                  onClick={closePopup}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300 p-1"
                  aria-label="Close popup"
                >
                  <X size={24} />
                </button>
              </div>
              <p className="text-text-secondary text-lg mb-6">
                Thank you for reaching out! Your message has been sent successfully. I'll get back to you as soon as possible.
              </p>
              <button 
                onClick={closePopup}
                className="btn-primary w-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border-color bg-bg-dark transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-text-secondary text-sm mb-4 md:mb-0 transition-colors duration-300">
          © {new Date().getFullYear()} Shravani Shirish Urankar. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href={profileData.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href={`mailto:${profileData.email}`} className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
