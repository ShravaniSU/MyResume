import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About, Skills } from './components/sections/AboutSkills';
import { Projects } from './components/sections/Projects';
import { Experience, EducationCertifications } from './components/sections/ExperienceEdu';
import { Contact, Footer } from './components/layout/ContactFooter';
import { BlogsPage } from './components/sections/BlogsPage';
import { BlogDetail } from './components/sections/BlogDetail';

function ScrollToTop() {

  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div 
      className="min-h-screen selection:bg-accent-lavender/30 selection:text-accent-lavender transition-colors duration-300 relative"
      style={theme === 'dark' ? {
        background: 'linear-gradient(135deg, #0A111F 0%, #123038 50%, #162A35 100%)'
      } : {
        background: `
          radial-gradient(circle at top left, rgba(93,248,216,0.18), transparent 35%),
          radial-gradient(circle at top right, rgba(59,117,151,0.15), transparent 40%),
          linear-gradient(180deg, #F8FCFD 0%, #F4FAFB 35%, #EEF7F9 100%)
        `
      }}
    >
      {theme === 'dark' && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#123038] opacity-60 blur-[160px] animate-blob" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#162A35] opacity-40 blur-[140px] animate-blob animation-delay-2000" />
          <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full bg-[#5DF8D8] opacity-[0.03] blur-[180px] animate-blob animation-delay-4000" />
        </div>
      )}
      <div className="relative z-10">
        <ScrollToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <div className="section-divider-bar" />
              <Skills />
              <div className="section-divider-bar" />
              <Projects />
              <div className="section-divider-bar" />
              <Experience />
              <div className="section-divider-bar" />
              <EducationCertifications />
              <div className="section-divider-bar" />
              <Contact />
            </main>
          } />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;

