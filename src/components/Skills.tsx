import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Cloud, Sparkles, Users, Lightbulb, Target, Zap } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Full-Stack Development',
      icon: <Code className="w-6 h-6" />,
      skills: ['MERN Stack Architecture', 'RESTful API Design', 'Database Design', 'Responsive Web Design', 'Server-Side Rendering'],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Natural Language Processing', 'Generative AI Applications', 'RAG Systems', 'Prompt Engineering', 'Model Integration'],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['Cloud Architecture', 'Containerization', 'CI/CD Pipelines', 'Infrastructure as Code', 'Microservices'],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Problem Solving',
      icon: <Lightbulb className="w-6 h-6" />,
      skills: ['Algorithm Design', 'System Architecture', 'Performance Optimization', 'Debugging & Testing', 'Code Review'],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Project Management',
      icon: <Target className="w-6 h-6" />,
      skills: ['Agile Development', 'Scrum Methodology', 'Version Control', 'Documentation', 'Team Collaboration'],
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Innovation & Learning',
      icon: <Zap className="w-6 h-6" />,
      skills: ['Rapid Prototyping', 'Technology Research', 'Continuous Learning', 'Best Practices', 'Industry Trends'],
      gradient: 'from-orange-500 to-amber-500',
    },
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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">Core Competencies</span>
            </div>
            <h2 className="text-4xl font-bold text-white">
              Skills & Expertise
            </h2>
            <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
              Core competencies and methodologies that drive successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
