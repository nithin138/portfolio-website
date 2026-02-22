import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  Globe, 
  Cloud, 
  Terminal,
  Settings,
  Zap,
  Sparkles
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
      items: ['JavaScript', 'Python', 'Java',, 'R','TypeScript', 'HTML5', 'CSS3', 'SQL'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Frontend Technologies',
      icon: <Globe className="w-6 h-6" />,
      items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion','Material-UI','Bootstrap'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="w-6 h-6" />,
      items: ['Node.js', 'Express.js', 'MySQL', 'MongoDB' ,'Fast APIs','REST APIs', 'PostgreSQL'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'AI/ML & NLP',
      icon: <Zap className="w-6 h-6" />,
      items: ['TensorFlow', 'Hugging Face','LangChain', 'RAG Systems','OpenAI', 'Vector DBs'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Development Tools',
      icon: <Terminal className="w-6 h-6" />,
      items: ['VS Code', 'Git', 'GitHub', 'Postman', 'Docker', 'npm/yarn', 'R Studio'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Cloud & Deployment',
      icon: <Cloud className="w-6 h-6" />,
      items: ['AWS', 'Netlify', 'Vercel', 'Heroku', 'Firebase', 'MongoDB Atlas'],
      gradient: 'from-cyan-500 to-blue-500',
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
    'Microservices',
    'Prompt Engineering',
    'Server Side Rendering (SSR)',
    'Unit and Integration Testing'
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
    <section id="languages-tools" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-medium">Tech Stack</span>
            </div>
            <h2 className="text-4xl font-bold text-gradient">
              Languages & Tools
            </h2>
          </motion.div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="flex items-center mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-3 group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-200">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="skill-badge"
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
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 mr-3">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-200">Development Practices</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {practices.map((practice, index) => (
                <motion.div
                  key={practice}
                  variants={itemVariants}
                  className="flex items-center justify-center p-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 hover:scale-105 transition-all duration-300 group"
                >
                  <span className="text-xs font-medium text-slate-300 group-hover:text-emerald-300 transition-colors duration-300 text-center">
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
