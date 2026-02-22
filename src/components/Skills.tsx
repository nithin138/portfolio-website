import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Cloud, Sparkles } from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Full Stack Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 88 },
        { name: 'REST APIs', level: 88 },
      ],
      gradient: 'from-emerald-500 to-cyan-500',
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'TensorFlow', level: 75 },
        { name: 'NLP', level: 80 },
        { name: 'LangChain', level: 78 },
        { name: 'OpenAI APIs', level: 85 },
        { name: 'Model Training', level: 75 },
        { name: 'Prompt Engineering', level: 88 }
      ],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'Google Cloud', level: 70 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 70 },
        { name: 'GitHub', level: 90 },
        { name: 'CI/CD', level: 75 },
      ],
      gradient: 'from-blue-500 to-purple-500',
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
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Technical Expertise</span>
            </div>
            <h2 className="text-4xl font-bold text-gradient">
              Skills & Proficiency
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} bg-opacity-20`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-200">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-slate-400 font-mono">{skill.level}%</span>
                      </div>
                      
                      <div className="relative w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${category.gradient} shadow-glow`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.2,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
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
