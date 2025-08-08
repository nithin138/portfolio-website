import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Terminal,
  Palette,
  Settings,
  Zap
} from 'lucide-react';

const LanguagesTools = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="w-6 h-6" />,
      items: ['JavaScript', 'Python', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Frontend Technologies',
      icon: <Globe className="w-6 h-6" />,
      items: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="w-6 h-6" />,
      items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'REST APIs'],
      color: 'from-teal-500 to-green-500',
    },
    {
      title: 'AI/ML & Data Science',
      icon: <Zap className="w-6 h-6" />,
      items: ['scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'TensorFlow', 'Jupyter'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Development Tools',
      icon: <Terminal className="w-6 h-6" />,
      items: ['VS Code', 'Git', 'GitHub', 'Postman', 'Docker', 'npm/yarn'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Cloud & Deployment',
      icon: <Cloud className="w-6 h-6" />,
      items: ['AWS', 'Netlify', 'Vercel', 'Heroku', 'Firebase', 'MongoDB Atlas'],
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  const practices = [
    'Agile Development',
    'Test-Driven Development',
    'Responsive Design',
    'RESTful API Design',
    'Version Control (Git)',
    'Code Review',
    'CI/CD Pipelines',
    'Database Design',
    'Performance Optimization',
    'Security Best Practices',
    'Web Scraping',
    'Prompt Engineering',
    'Server Side Rendering (SSR)',
    'Unit and integration Testing'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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
    <section id="languages-tools" className="py-20 bg-gray-900">
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
            Languages & Tools
          </motion.h2>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full hover:bg-gray-600 transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Development Practices */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
          >
            <div className="flex items-center justify-center mb-6">
              <Settings className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Development Practices</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {practices.map((practice, index) => (
                <motion.div
                  key={practice}
                  variants={itemVariants}
                  className="flex items-center justify-center p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg border border-purple-500/30 hover:border-purple-400 transition-all duration-300 group"
                >
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
                    {practice}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesTools;