import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Database, Brain } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce MERN Platform',
      description: 'Full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI-Powered Movie Recommender',
      description: 'Machine learning system that recommends movies based on user preferences using collaborative filtering and content-based algorithms.',
      tech: ['Python', 'scikit-learn', 'Pandas', 'Flask', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Sales Analytics Dashboard',
      description: 'Interactive dashboard for sales data analysis with real-time charts, KPI tracking, and automated reporting features.',
      tech: ['React', 'D3.js', 'Python', 'PostgreSQL', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-teal-500 to-green-500',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, CRUD operations, file uploads, and email notifications.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer'],
      github: 'https://github.com',
      demo: null,
      icon: <Code className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Weather Prediction Model',
      description: 'Machine learning model for weather prediction using historical data with 87% accuracy rate and real-time API integration.',
      tech: ['Python', 'TensorFlow', 'Pandas', 'FastAPI', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

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
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Project Icon */}
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}>
                    {project.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-2 px-4 py-2 text-sm bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:opacity-90 transition-opacity duration-300`}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;