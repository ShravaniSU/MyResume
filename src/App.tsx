import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About, Skills } from './components/sections/AboutSkills';
import { Projects } from './components/sections/Projects';
import { Experience, EducationCertifications } from './components/sections/ExperienceEdu';
import { Contact, Footer } from './components/layout/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-accent-lavender/30 selection:text-accent-lavender">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
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
