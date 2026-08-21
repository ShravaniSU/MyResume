import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { JourneyImage } from './JourneyImage';

export const ShiroHighlight = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-6 md:p-10 glass-card border border-[var(--border-color)] overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(93, 248, 216, 0.04) 0%, rgba(20, 45, 55, 0.4) 50%, rgba(18, 35, 45, 0.6) 100%)'
          }}
        >
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[var(--accent-lavender)]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Shiro Photo */}
            <div className="lg:col-span-5 w-full max-w-[420px] mx-auto">
              <div className="relative group">
                <JourneyImage
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800"
                  alt="Shiro - Beloved Companion"
                  location="Home Base"
                  aspectRatio="aspect-square"
                  className="shadow-xl rounded-2xl"
                />
                
                {/* Paw/Heart Badge */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-400 to-teal-400 text-slate-900 p-2.5 rounded-full shadow-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-slate-900" />
                </div>
              </div>
            </div>

            {/* Shiro Story Content */}
            <div className="lg:col-span-7 space-y-3 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                <svg className="w-3.5 h-3.5 fill-amber-300" viewBox="0 0 24 24">
                  <path d="M12 11.5c-1.8 0-3.3 1.5-3.3 3.3 0 2.2 2.2 4.2 3.3 5.2 1.1-1 3.3-3 3.3-5.2 0-1.8-1.5-3.3-3.3-3.3zm-5.5-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm11 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8.5-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                <span>SPECIAL CHAPTER</span>
              </div>

              <h2 className="text-2xl md:text-4xl font-display font-bold text-[var(--text-primary)] tracking-tight">
                Shiro
              </h2>

              <div className="h-1 w-14 bg-gradient-to-r from-amber-400 to-[var(--accent-lavender)] rounded-full accent-line" />

              <p className="text-[var(--text-secondary)] text-base leading-relaxed font-medium pt-1">
                Amidst the fast-paced demands of code deployments and system architectures, Shiro brings warmth, joy, and grounding perspective. As a loyal companion, Shiro is a constant reminder to step back from the screens, take a breath, and appreciate the present moment.
              </p>
              
              <p className="text-[var(--text-secondary)] text-base leading-relaxed font-medium">
                Whether resting beside my desk during late-night engineering sessions or welcoming me after a long day, Shiro adds immeasurable happiness, peace, and balance to this journey.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
