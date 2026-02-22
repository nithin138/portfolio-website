import React, { useEffect, useState } from 'react';
import { Download, MessageCircle, ChevronDown, Sparkles } from 'lucide-react';
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
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/20 rounded-lg"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-16 h-16 border-2 border-indigo-500/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 w-24 h-24 border-2 border-purple-500/20"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, 90, 180] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute top-60 left-1/2 w-12 h-12 border-2 border-violet-500/20 rounded-lg"
        />
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-blue-400" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient">
              Nithin Sudheer
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 mb-4 font-light">
            Full-Stack AI Developer
          </p>
          <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Crafting intelligent, scalable web applications with cutting-edge AI/ML integration
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-16"
        >
          <button
            onClick={() => scrollToSection('resume')}
            className="btn-primary group flex items-center"
          >
            <Download size={20} className="mr-2 group-hover:animate-bounce" />
            View Resume
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary group flex items-center"
          >
            <MessageCircle size={20} className="mr-2 group-hover:animate-pulse" />
            Let's Connect
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-16"
        >
          <div className="glass-card p-4 sm:p-6 rounded-xl">
            <div className="text-3xl sm:text-4xl font-bold text-gradient-static mb-2">{getExperienceText()}</div>
            <div className="text-xs sm:text-sm text-slate-400">Experience</div>
          </div>
          <div className="glass-card p-4 sm:p-6 rounded-xl">
            <div className="text-3xl sm:text-4xl font-bold text-gradient-static mb-2">15+</div>
            <div className="text-xs sm:text-sm text-slate-400">Projects Built</div>
          </div>
          <div className="glass-card p-4 sm:p-6 rounded-xl">
            <div className="text-3xl sm:text-4xl font-bold text-gradient-static mb-2">10+</div>
            <div className="text-xs sm:text-sm text-slate-400">Technologies</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-blue-400 hover:text-blue-300 transition-colors duration-300 p-2 rounded-full hover:bg-blue-500/10"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
