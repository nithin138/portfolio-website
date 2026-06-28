import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'projects', 'resume', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-text-primary min-h-screen relative" style={{ background: '#0a0a0a' }}>
      {/* Global ambient glow layer — scattered top to bottom */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Hero area */}
        <div
          className="absolute -top-[5%] right-[5%] w-[700px] h-[700px] rounded-full blur-[160px] opacity-[0.12]"
          style={{ background: '#2563eb' }}
        />
        <div
          className="absolute top-[8%] left-[10%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: '#1d4ed8' }}
        />
        {/* Skills area */}
        <div
          className="absolute top-[22%] left-[60%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.09]"
          style={{ background: '#2563eb' }}
        />
        <div
          className="absolute top-[30%] right-[70%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-[0.05]"
          style={{ background: '#7c3aed' }}
        />
        {/* Projects area */}
        <div
          className="absolute top-[45%] right-[15%] w-[550px] h-[550px] rounded-full blur-[140px] opacity-[0.08]"
          style={{ background: '#1d4ed8' }}
        />
        <div
          className="absolute top-[55%] left-[20%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: '#2563eb' }}
        />
        {/* Resume / Contact area */}
        <div
          className="absolute top-[72%] left-[50%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.07]"
          style={{ background: '#2563eb' }}
        />
        <div
          className="absolute top-[85%] right-[25%] w-[450px] h-[450px] rounded-full blur-[130px] opacity-[0.06]"
          style={{ background: '#1d4ed8' }}
        />
      </div>

      <div className="relative z-10 min-h-screen">
        <Navbar activeSection={activeSection} />
         <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
