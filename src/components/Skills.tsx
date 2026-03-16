import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Cloud, Sparkles, Lightbulb, Target, Zap } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  proficiency: number;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Full-Stack Dev',
    icon: <Code className="w-5 h-5" />,
    proficiency: 90,
    skills: ['MERN Stack', 'REST APIs', 'Database Design', 'Responsive UI', 'SSR'],
  },
  {
    title: 'AI & ML',
    icon: <Brain className="w-5 h-5" />,
    proficiency: 85,
    skills: ['NLP', 'Generative AI', 'RAG Systems', 'Prompt Engineering', 'Model Integration'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-5 h-5" />,
    proficiency: 75,
    skills: ['Cloud Architecture', 'Docker', 'CI/CD', 'Microservices', 'IaC'],
  },
  {
    title: 'Problem Solving',
    icon: <Lightbulb className="w-5 h-5" />,
    proficiency: 92,
    skills: ['Algorithm Design', 'System Architecture', 'Perf Optimization', 'Debugging', 'Code Review'],
  },
  {
    title: 'Project Management',
    icon: <Target className="w-5 h-5" />,
    proficiency: 80,
    skills: ['Agile', 'Scrum', 'Version Control', 'Documentation', 'Collaboration'],
  },
  {
    title: 'Innovation',
    icon: <Zap className="w-5 h-5" />,
    proficiency: 88,
    skills: ['Rapid Prototyping', 'Tech Research', 'Continuous Learning', 'Best Practices', 'Trends'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">Core Competencies</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Skills & Expertise</h2>
            <p className="text-gray-500 text-base mt-3 max-w-xl mx-auto">
              Competencies and methodologies that drive successful project delivery
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 group flex flex-col gap-5"
              >
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white group-hover:scale-110 transition-transform duration-300">
                      {cat.icon}
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{cat.title}</h3>
                  </div>
                  <span className="text-sm font-bold text-orange-500">{cat.proficiency}%</span>
                </div>

                {/* Progress bar */}
                {/* <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${cat.proficiency}%` } : { width: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div> */}

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium text-gray-600
                                 bg-gray-100 border border-gray-200
                                 hover:border-orange-400 hover:text-orange-500
                                 transition-colors duration-200"
                    >
                      {skill}
                    </span>
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
