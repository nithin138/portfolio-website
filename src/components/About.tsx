import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, BarChart3, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-emerald-400 font-medium">About Me</span>
              </div>
              <h2 className="text-4xl font-bold text-gradient">
                Crafting Digital Excellence
              </h2>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 mb-6 leading-relaxed"
            >
              I'm a versatile Full-Stack AI Developer with experience designing and developing 
              intelligent, scalable web applications. My expertise lies in the MERN stack, where 
              I build responsive, high-performance systems that seamlessly integrate cutting-edge 
              AI capabilities.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 mb-8 leading-relaxed"
            >
              I specialize in Artificial Intelligence and Natural Language Processing—building
              agentic AI systems, chatbots, and Generative AI applications. My work combines 
              full-stack development with advanced ML frameworks, creating intelligent solutions 
              that leverage Python, modern web technologies, and cloud services. Passionate about 
              solving real-world problems through innovation, I thrive at the intersection of AI, 
              software engineering, and human-centered design.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="group glass-card p-5 rounded-xl flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-emerald-400" size={28} />
                </div>
                <span className="text-sm font-semibold text-slate-200">Full-Stack Dev</span>
              </div>
              
              <div className="group glass-card p-5 rounded-xl flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Brain className="text-cyan-400" size={28} />
                </div>
                <span className="text-sm font-semibold text-slate-200">AI/ML Expert</span>
              </div>
              
              <div className="group glass-card p-5 rounded-xl flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="text-blue-400" size={28} />
                </div>
                <span className="text-sm font-semibold text-slate-200">Cloud & DevOps</span>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Gradient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 p-1 blur-sm"
              />
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-850 flex items-center justify-center overflow-hidden">
                  <img
                    src="/pic.jpg"
                    alt="Nithin Sudheer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center shadow-glow"
              >
                <Code className="text-emerald-400" size={32} />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 glass-card rounded-2xl flex items-center justify-center shadow-glow-cyan"
              >
                <Brain className="text-cyan-400" size={32} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 w-16 h-16 glass-card rounded-xl flex items-center justify-center shadow-glow-blue"
              >
                <BarChart3 className="text-blue-400" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
