import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About, Skills } from './components/sections/AboutSkills';
import { FeaturedProject } from './components/sections/FeaturedProject';
import { Projects } from './components/sections/Projects';
import { Experience, EducationCertifications } from './components/sections/ExperienceEdu';
import { Contact, Footer } from './components/layout/ContactFooter';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-accent-lavender/30 selection:text-accent-lavender transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Experience />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
