import { useEffect, useState } from 'react';
import { Download, MessageCircle } from 'lucide-react';
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
              Nithin Sudheer
            </h1>
            
            <p className="text-2xl sm:text-3xl text-gray-800 mb-4 font-medium">
              Full-Stack AI Developer
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
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
            <div className="grid grid-cols-3 gap-0">
              <div className="p-4 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{getExperienceText()}</div>
                <div className="text-sm text-gray-700">Experience</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-700">Projects</div>
              </div>
              <div className="p-4 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-700">Technologies</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
