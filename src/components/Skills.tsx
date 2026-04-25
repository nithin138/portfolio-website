import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Cloud, Sparkles, Lightbulb, Target, Zap } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  proficiency: number;
  skills: string[];
  accent: string; // tailwind gradient classes for icon bg
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Full-Stack Dev',
    icon: <Code className="w-5 h-5" />,
    proficiency: 90,
    skills: ['MERN Stack', 'REST APIs', 'Database Design', 'Responsive UI', 'SSR'],
    accent: 'from-blue-500 to-blue-700',
  },
  {
    title: 'AI & ML',
    icon: <Brain className="w-5 h-5" />,
    proficiency: 85,
    skills: ['NLP', 'Generative AI', 'RAG Systems', 'Prompt Engineering', 'Model Integration'],
    accent: 'from-violet-500 to-purple-700',
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-5 h-5" />,
    proficiency: 75,
    skills: ['Cloud Architecture', 'Docker', 'CI/CD', 'Microservices', 'IaC'],
    accent: 'from-sky-500 to-cyan-700',
  },
  {
    title: 'Problem Solving',
    icon: <Lightbulb className="w-5 h-5" />,
    proficiency: 92,
    skills: ['Algorithm Design', 'System Architecture', 'Perf Optimization', 'Debugging', 'Code Review'],
    accent: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Project Management',
    icon: <Target className="w-5 h-5" />,
    proficiency: 80,
    skills: ['Agile', 'Scrum', 'Version Control', 'Documentation', 'Collaboration'],
    accent: 'from-emerald-500 to-teal-700',
  },
  {
    title: 'Innovation',
    icon: <Zap className="w-5 h-5" />,
    proficiency: 88,
    skills: ['Rapid Prototyping', 'Tech Research', 'Continuous Learning', 'Best Practices', 'Trends'],
    accent: 'from-pink-500 to-rose-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-section">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-primary-light" />
              <span className="text-sm text-primary-light font-medium tracking-wide">Core Competencies</span>
            </div>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={inView ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight"
            >
              Skills &{' '}
              <span className="text-gradient">Technologies</span>
            </motion.h2>
            <p className="text-text-muted text-base mt-4 max-w-lg mx-auto leading-relaxed">
              Technologies and tools used to build scalable, production-ready applications
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className="skill-category-card group rounded-2xl p-6 flex flex-col gap-5"
              >
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.accent} text-white
                                  shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-primary leading-tight">{cat.title}</h3>
                      <p className="text-xs text-text-muted mt-0.5">{cat.proficiency}% proficiency</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary-light bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    {cat.proficiency}%
                  </span>
                </div>

                {/* Proficiency bar */}
                <div className="w-full h-1.5 bg-border-default rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    style={{ boxShadow: '0 0 8px rgba(37, 99, 235, 0.6)' }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${cat.proficiency}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  />
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      <span className="skill-pill-dot" />
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
