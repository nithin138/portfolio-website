import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Settings } from 'lucide-react';
import {
  SiJavascript, SiPython, SiTypescript, SiHtml5, SiMysql,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiMui, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiTensorflow, SiHuggingface, SiLangchain, SiOpenai,
  SiVscodium, SiGit, SiGithub, SiPostman, SiDocker, SiNpm,
  SiNetlify, SiVercel, SiHeroku, SiFirebase,
  SiJest, SiGithubactions, SiKubernetes, SiScrumalliance,
} from 'react-icons/si';
import { FaJava, FaRProject, FaCss3Alt } from 'react-icons/fa';
import {
  Code2, Database, Globe, Cloud as CloudIcon, Terminal, Zap,
  ShieldCheck, Gauge, Layers, RefreshCw, TestTube2,
  LayoutTemplate, Search, GitBranch,
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Category {
  title: string;
  headerIcon: React.ReactNode;
  gradient: string;
  items: TechItem[];
}

const categories: Category[] = [
  {
    title: 'Languages',
    headerIcon: <Code2 className="w-4 h-4" />,
    gradient: 'from-primary to-secondary',
    items: [
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'Python',     icon: <SiPython />,     color: '#3776AB' },
      { name: 'Java',       icon: <FaJava />,        color: '#ED8B00' },
      { name: 'TypeScript', icon: <SiTypescript />,  color: '#3178C6' },
      { name: 'HTML5',      icon: <SiHtml5 />,       color: '#E34F26' },
      { name: 'CSS3',       icon: <FaCss3Alt />,     color: '#1572B6' },
      { name: 'SQL',        icon: <SiMysql />,       color: '#4479A1' },
      { name: 'R',          icon: <FaRProject />,    color: '#276DC3' },
    ],
  },
  {
    title: 'Frontend',
    headerIcon: <Globe className="w-4 h-4" />,
    gradient: 'from-primary to-secondary',
    items: [
      { name: 'React.js',      icon: <SiReact />,        color: '#61DAFB' },
      { name: 'Next.js',       icon: <SiNextdotjs />,    color: '#E5E7EB' },
      { name: 'Tailwind CSS',  icon: <SiTailwindcss />,  color: '#06B6D4' },
      { name: 'Framer Motion', icon: <SiFramer />,       color: '#E5E7EB' },
      { name: 'Material-UI',   icon: <SiMui />,          color: '#007FFF' },
      { name: 'Bootstrap',     icon: <SiBootstrap />,    color: '#7952B3' },
    ],
  },
  {
    title: 'Backend & DB',
    headerIcon: <Database className="w-4 h-4" />,
    gradient: 'from-primary to-secondary',
    items: [
      { name: 'Node.js',    icon: <SiNodedotjs />,  color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />,    color: '#E5E7EB' },
      { name: 'MongoDB',    icon: <SiMongodb />,    color: '#47A248' },
      { name: 'MySQL',      icon: <SiMysql />,      color: '#4479A1' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    ],
  },
  {
    title: 'AI / ML',
    headerIcon: <Zap className="w-4 h-4" />,
    gradient: 'from-primary to-secondary',
    items: [
      { name: 'TensorFlow',   icon: <SiTensorflow />,   color: '#FF6F00' },
      { name: 'Hugging Face', icon: <SiHuggingface />,  color: '#FFD21E' },
      { name: 'LangChain',    icon: <SiLangchain />,    color: '#9CA3AF' },
      { name: 'OpenAI',       icon: <SiOpenai />,       color: '#E5E7EB' },
    ],
  },
  {
    title: 'Dev Tools',
    headerIcon: <Terminal className="w-4 h-4" />,
    gradient: 'from-primary to-secondary',
    items: [
      { name: 'VS Code',  icon: <SiVscodium />,  color: '#007ACC' },
      { name: 'Git',      icon: <SiGit />,        color: '#F05032' },
      { name: 'GitHub',   icon: <SiGithub />,     color: '#E5E7EB' },
      { name: 'Postman',  icon: <SiPostman />,    color: '#FF6C37' },
      { name: 'Docker',   icon: <SiDocker />,     color: '#2496ED' },
      { name: 'npm',      icon: <SiNpm />,        color: '#CB3837' },
    ],
  },
  {
    title: 'Cloud',
    headerIcon: <CloudIcon className="w-4 h-4" />,
    gradient: 'from-primary to-secondary',
    items: [
      { name: 'AWS',      icon: <CloudIcon className="w-5 h-5" />, color: '#FF9900' },
      { name: 'Netlify',  icon: <SiNetlify />,  color: '#00C7B7' },
      { name: 'Vercel',   icon: <SiVercel />,   color: '#E5E7EB' },
      { name: 'Heroku',   icon: <SiHeroku />,   color: '#A78BFA' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    ],
  },
];

interface Practice {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const practices: Practice[] = [
  { name: 'Agile Development',         icon: <SiScrumalliance />,                    color: '#009FDA' },
  { name: 'Test-Driven Dev',            icon: <SiJest />,                             color: '#C21325' },
  { name: 'Responsive Design',          icon: <LayoutTemplate className="w-5 h-5" />, color: '#06B6D4' },
  { name: 'RESTful API Design',         icon: <Layers className="w-5 h-5" />,         color: '#3B82F6' },
  { name: 'Version Control (Git)',      icon: <SiGit />,                              color: '#F05032' },
  { name: 'Code Review',                icon: <Search className="w-5 h-5" />,         color: '#A78BFA' },
  { name: 'CI/CD Pipelines',            icon: <SiGithubactions />,                    color: '#2088FF' },
  { name: 'Database Design',            icon: <Database className="w-5 h-5" />,       color: '#47A248' },
  { name: 'Performance Optimization',   icon: <Gauge className="w-5 h-5" />,          color: '#F59E0B' },
  { name: 'Security Best Practices',    icon: <ShieldCheck className="w-5 h-5" />,    color: '#10B981' },
  { name: 'Microservices',              icon: <SiKubernetes />,                       color: '#326CE5' },
  { name: 'Prompt Engineering',         icon: <SiOpenai />,                           color: '#E5E7EB' },
  { name: 'Server Side Rendering',      icon: <RefreshCw className="w-5 h-5" />,      color: '#3B82F6' },
  { name: 'Unit & Integration Testing', icon: <TestTube2 className="w-5 h-5" />,      color: '#EF4444' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
};

const LanguagesTools = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="languages-tools" className="py-24 relative overflow-hidden bg-bg-main">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-secondary-light" />
              <span className="text-sm text-secondary-light font-medium tracking-wide">Tech Stack</span>
            </div>
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={inView ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl sm:text-5xl font-bold text-text-primary"
            >
              Languages &{' '}
              <span className=" text-primary relative inline-block">
                Tools
              </span>
            </motion.h2>
            <p className="text-text-muted text-base mt-5 max-w-lg mx-auto leading-relaxed">
              Technologies used across the development stack
            </p>
          </motion.div>

          {/* Category panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className="lt-panel group"
              >
                {/* Panel title */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${cat.gradient} text-white`}>
                    {cat.headerIcon}
                  </div>
                  <h3 className="text-sm font-bold text-text-primary tracking-wide">{cat.title}</h3>
                  <div className="flex-1 h-px bg-border-default ml-1" />
                </div>

                {/* Icon grid */}
                <div className="grid grid-cols-4 gap-x-3 gap-y-4">
                  {cat.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="lt-icon-item group/icon"
                      title={tech.name}
                      whileHover={{ scale: 1.15, y: -4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                    >
                      <div
                        className="lt-icon-box"
                        style={{ '--icon-color': tech.color } as React.CSSProperties}
                      >
                        <span className="text-xl leading-none" style={{ color: tech.color }}>
                          {tech.icon}
                        </span>
                      </div>
                      <span className="text-[10px] text-text-muted group-hover/icon:text-text-secondary transition-colors duration-200 text-center leading-tight mt-1 font-medium line-clamp-2">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Development Practices */}
          <motion.div variants={itemVariants} className="lt-practices-panel">
            <div className="flex items-center gap-3 mb-7">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
                <Settings className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Development Practices</h3>
              <div className="flex-1 h-px bg-border-default ml-1" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
              {practices.map((practice) => (
                <motion.div
                  key={practice.name}
                  variants={itemVariants}
                  className="lt-icon-item group/p"
                  title={practice.name}
                  whileHover={{ scale: 1.15, y: -4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  <div className="lt-icon-box">
                    <span className="text-xl leading-none" style={{ color: practice.color }}>
                      {practice.icon}
                    </span>
                  </div>
                  <span className="text-[10px] text-text-muted group-hover/p:text-text-secondary transition-colors duration-200 text-center leading-tight mt-1 font-medium line-clamp-2">
                    {practice.name}
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
