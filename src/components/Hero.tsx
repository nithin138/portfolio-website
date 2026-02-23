import React, { useEffect, useState } from 'react';
import { Download, MessageCircle, Code, Brain, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [experience, setExperience] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const startDate = new Date('2024-05-01');
    const currentDate = new Date();
    
    const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                        (currentDate.getMonth() - startDate.getMonth());
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    setExperience({ years, months });
  }, []);

  const getExperienceText = () => {
    if (experience.years === 0) {
      return `${experience.months}+ mo`;
    } else if (experience.months === 0) {
      return `${experience.years}+ yr`;
    } else {
      return `${experience.years}.${experience.months}+ yr`;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/92 to-slate-900/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Nithin Sudheer
            </h1>
            
            <p className="text-2xl sm:text-3xl text-slate-300 mb-4 font-medium">
              Full-Stack AI Developer
            </p>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
              Building intelligent, scalable web applications with MERN stack and AI/ML integration. 
              Specialized in agentic AI systems, NLP, and Generative AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('resume')}
                className="btn-primary group flex items-center justify-center"
              >
                <Download size={20} className="mr-2" />
                View Resume
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary group flex items-center justify-center"
              >
                <MessageCircle size={20} className="mr-2" />
                Let's Connect
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="glass-card-no-shadow p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-1">{getExperienceText()}</div>
                <div className="text-sm text-slate-400">Experience</div>
              </div>
              <div className="glass-card-no-shadow p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-slate-400">Projects</div>
              </div>
              <div className="glass-card-no-shadow p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Profile Image & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-end"
          >
            <div className="relative mb-8">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600" style={{ padding: '1px' }}>
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/pic.jpg"
                    alt="Nithin Sudheer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-md">
              <div className="glass-card-no-shadow p-4 rounded-xl flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-gradient-to-b from-slate-600/95 via-slate-700/92 to-slate-900/95 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <span className="text-xs font-medium text-slate-300">Full-Stack</span>
              </div>
              
              <div className="glass-card-no-shadow p-4 rounded-xl flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-gradient-to-b from-slate-600/95 via-slate-700/92 to-slate-900/95 rounded-lg">
                  <Brain className="text-white" size={24} />
                </div>
                <span className="text-xs font-medium text-slate-300">AI/ML</span>
              </div>
              
              <div className="glass-card-no-shadow p-4 rounded-xl flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-gradient-to-b from-slate-600/95 via-slate-700/92 to-slate-900/95 rounded-lg">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <span className="text-xs font-medium text-slate-300">Cloud</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
