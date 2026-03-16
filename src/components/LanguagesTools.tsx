import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Settings } from 'lucide-react';
import {
  SiJavascript, SiPython, SiTypescript, SiHtml5, SiCss, SiMysql,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiMui, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiTensorflow, SiHuggingface, SiLangchain, SiOpenai,
  SiVscodium, SiGit, SiGithub, SiPostman, SiDocker, SiNpm,
  SiNetlify, SiVercel, SiHeroku, SiFirebase,
  SiJest, SiCypress, SiEslint, SiPrettier, SiJira, SiGithubactions,
  SiCircleci, SiKubernetes, SiTerraform, SiScrumalliance,
} from 'react-icons/si';
import { FaJava, FaRProject } from 'react-icons/fa';
import {
  Code2, Database, Globe, Cloud as CloudIcon, Terminal, Zap,
  GitBranch, ShieldCheck, Gauge, Layers, RefreshCw, TestTube2,
  LayoutTemplate, Search, Settings2,
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
    headerIcon: <Code2 className="w-5 h-5" />,
    gradient: 'from-orange-500 to-amber-500',
    items: [
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'Python',     icon: <SiPython />,     color: '#3776AB' },
      { name: 'Java',       icon: <FaJava />,        color: '#ED8B00' },
      { name: 'TypeScript', icon: <SiTypescript />,  color: '#3178C6' },
      { name: 'HTML5',      icon: <SiHtml5 />,       color: '#E34F26' },
      { name: 'CSS3',       icon: <SiCss />,         color: '#1572B6' },
      { name: 'SQL',        icon: <SiMysql />,       color: '#4479A1' },
      { name: 'R',          icon: <FaRProject />,    color: '#276DC3' },
    ],
  },
  {
    title: 'Frontend',
    headerIcon: <Globe className="w-5 h-5" />,
    gradient: 'from-orange-500 to-amber-500',
    items: [
      { name: 'React.js',      icon: <SiReact />,        color: '#61DAFB' },
      { name: 'Next.js',       icon: <SiNextdotjs />,    color: '#000000' },
      { name: 'Tailwind CSS',  icon: <SiTailwindcss />,  color: '#06B6D4' },
      { name: 'Framer Motion', icon: <SiFramer />,       color: '#000000' },
      { name: 'Material-UI',   icon: <SiMui />,          color: '#007FFF' },
      { name: 'Bootstrap',     icon: <SiBootstrap />,    color: '#7952B3' },
    ],
  },
  {
    title: 'Backend & DB',
    headerIcon: <Database className="w-5 h-5" />,
    gradient: 'from-orange-500 to-amber-500',
    items: [
      { name: 'Node.js',    icon: <SiNodedotjs />,  color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />,    color: '#000000' },
      { name: 'MongoDB',    icon: <SiMongodb />,    color: '#47A248' },
      { name: 'MySQL',      icon: <SiMysql />,      color: '#4479A1' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    ],
  },
  {
    title: 'AI / ML',
    headerIcon: <Zap className="w-5 h-5" />,
    gradient: 'from-orange-500 to-amber-500',
    items: [
      { name: 'TensorFlow',   icon: <SiTensorflow />,   color: '#FF6F00' },
      { name: 'Hugging Face', icon: <SiHuggingface />,  color: '#FFD21E' },
      { name: 'LangChain',    icon: <SiLangchain />,    color: '#1C3C3C' },
      { name: 'OpenAI',       icon: <SiOpenai />,       color: '#000000' },
    ],
  },
  {
    title: 'Dev Tools',
    headerIcon: <Terminal className="w-5 h-5" />,
    gradient: 'from-orange-500 to-amber-500',
    items: [
      { name: 'VS Code',  icon: <SiVscodium />,   color: '#007ACC' },
      { name: 'Git',     icon: <SiGit />,         color: '#F05032' },
      { name: 'GitHub',  icon: <SiGithub />,      color: '#000000' },
      { name: 'Postman', icon: <SiPostman />,     color: '#FF6C37' },
      { name: 'Docker',  icon: <SiDocker />,      color: '#2496ED' },
      { name: 'npm',     icon: <SiNpm />,         color: '#CB3837' },
    ],
  },
  {
    title: 'Cloud',
    headerIcon: <CloudIcon className="w-5 h-5" />,
    gradient: 'from-orange-500 to-amber-500',
    items: [
      { name: 'AWS',      icon: <CloudIcon className="w-5 h-5" />, color: '#FF9900' },
      { name: 'Netlify',  icon: <SiNetlify />,  color: '#00C7B7' },
      { name: 'Vercel',   icon: <SiVercel />,   color: '#000000' },
      { name: 'Heroku',   icon: <SiHeroku />,   color: '#430098' },
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
  { name: 'Agile Development',        icon: <SiScrumalliance />,  color: '#009FDA' },
  { name: 'Test-Driven Dev',           icon: <SiJest />,           color: '#C21325' },
  { name: 'Responsive Design',         icon: <LayoutTemplate className="w-5 h-5" />, color: '#06B6D4' },
  { name: 'RESTful API Design',        icon: <Layers className="w-5 h-5" />,         color: '#F97316' },
  { name: 'Version Control (Git)',     icon: <SiGit />,            color: '#F05032' },
  { name: 'Code Review',               icon: <Search className="w-5 h-5" />,         color: '#A78BFA' },
  { name: 'CI/CD Pipelines',           icon: <SiGithubactions />,  color: '#2088FF' },
  { name: 'Database Design',           icon: <Database className="w-5 h-5" />,       color: '#47A248' },
  { name: 'Performance Optimization',  icon: <Gauge className="w-5 h-5" />,          color: '#FBBF24' },
  { name: 'Security Best Practices',   icon: <ShieldCheck className="w-5 h-5" />,    color: '#34D399' },
  { name: 'Microservices',             icon: <SiKubernetes />,     color: '#326CE5' },
  { name: 'Prompt Engineering',        icon: <SiOpenai />,         color: '#ffffff' },
  { name: 'Server Side Rendering',     icon: <RefreshCw className="w-5 h-5" />,      color: '#FB923C' },
  { name: 'Unit & Integration Testing',icon: <TestTube2 className="w-5 h-5" />,      color: '#F472B6' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const LanguagesTools = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="languages-tools" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">Tech Stack</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Languages & Tools</h2>
          </motion.div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((cat) => (
              <motion.div
                key={cat.title}
                variants={itemVariants}
                className="glass-card-frosted rounded-2xl p-6 group"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 text-white rounded-xl bg-gradient-to-r ${cat.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    {cat.headerIcon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{cat.title}</h3>
                </div>

                {/* Icon Grid */}
                <div className="grid grid-cols-4 gap-3">
                  {cat.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group/item flex flex-col items-center gap-1.5 cursor-default"
                      title={tech.name}
                    >
                      <div
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl
                                   transition-all duration-200 group-hover/item:scale-110"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>
                      <span className="text-xs text-gray-700 group-hover/item:text-gray-900 transition-colors duration-200 text-center leading-tight font-semibold">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Development Practices */}
          <motion.div variants={itemVariants} className="glass-card-frosted rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Development Practices</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {practices.map((practice) => (
                <motion.div
                  key={practice.name}
                  variants={itemVariants}
                  className="group/p flex flex-col items-center gap-2 cursor-default"
                  title={practice.name}
                >
                  <div
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl
                               transition-all duration-200 group-hover/p:scale-110"
                    style={{ color: practice.color }}
                  >
                    {practice.icon}
                  </div>
                      <span className="text-xs text-gray-700 group-hover/p:text-gray-900 transition-colors duration-200 text-center leading-tight font-semibold">
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
