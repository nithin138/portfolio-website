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
    <section id="about" className="py-20 bg-gray-800">
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
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              I'm a passionate MERN Stack Developer with 1.4 years of experience building 
              scalable web applications. My journey in technology spans across full-stack 
              development, artificial intelligence, and data analytics.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              I have hands-on experience in building AI/ML models using Python and can work 
              as a Data Analyst using tools like Excel, Python (Pandas, NumPy), and SQL. 
              I'm passionate about learning and exploring end-to-end solutions from frontend 
              to backend, always staying curious about emerging technologies.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <Code className="text-purple-400" size={24} />
                <span className="text-sm font-medium">Full-Stack Dev</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <Brain className="text-blue-400" size={24} />
                <span className="text-sm font-medium">AI/ML Explorer</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <BarChart3 className="text-teal-400" size={24} />
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
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Nithin Sudheer"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Code className="text-white" size={24} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-1000">
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