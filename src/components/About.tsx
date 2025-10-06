import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, BarChart3 } from 'lucide-react';

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
    <section id="about" className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold mb-6  bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            
           <motion.p
  variants={itemVariants}
  className="text-lg text-gray-300 mb-6 leading-relaxed"
>
  I'm a versatile Full-Stack and AI Engineer with 1 year 6 months of experience
  designing and developing intelligent, scalable web applications. My expertise
  lies in the MERN stack, where I build responsive, high-performance systems
  that seamlessly integrate modern AI capabilities.
</motion.p>

<motion.p
  variants={itemVariants}
  className="text-lg text-gray-300 mb-8 leading-relaxed"
>
  Beyond full-stack development, I specialize in Artificial Intelligence and
  Natural Language Processing—building agentic AI systems, voice-based
  assistants, and Generative AI applications. I’m also skilled in data analytics
  and automation using Python, SQL, and advanced ML frameworks. Passionate about
  solving real-world problems through innovation, I thrive at the intersection
  of AI, software engineering, and human-centered design.
</motion.p>


            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <Code className="text-cyan-400" size={24} />
                <span className="text-sm font-medium">Full-Stack Dev</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <Brain className="text-cyan-400" size={24} />
                <span className="text-sm font-medium">AI/ML Explorer</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <BarChart3 className="text-cyan-400" size={24} />
                <span className="text-sm font-medium">Data Analyst</span>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-cyan-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img
                    src="/pic.jpg"
                    alt="Nithin Sudheer"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Code className="text-white" size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-1000">
                <Brain className="text-white" size={24} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;