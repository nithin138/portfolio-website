import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Zap, ExternalLink, Github, Brain, Code } from 'lucide-react';
import { projects } from '../data/project';

const getGenreConfig = (genre) => {
  switch (genre) {
    case 'AI':
      return { icon: <Brain className="w-5 h-5" />, accent: '#8B5CF6' };
    case 'DS':
      return { icon: <Code className="w-5 h-5" />, accent: '#06B6D4' };
    default:
      return { icon: <Code className="w-5 h-5" />, accent: '#3B82F6' };
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ProjectCard = ({ project, index, hoveredIndex, setHoveredIndex }) => {
  const config = getGenreConfig(project.genre);
  const isHovered = hoveredIndex === index;
  const displayTags = project.tech ? project.tech.slice(0, 3) : [];

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group relative rounded-2xl overflow-hidden cursor-default backdrop-blur-sm"
      style={{
        background: isHovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${isHovered ? `${config.accent}50` : 'rgba(255,255,255,0.08)'}`,
        boxShadow: isHovered
          ? `0 0 0 1px ${config.accent}20, 0 20px 60px rgba(0,0,0,0.5), 0 8px 24px ${config.accent}12`
          : '0 4px 24px rgba(0,0,0,0.3)',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${config.accent}, transparent)`,
          boxShadow: `0 0 12px ${config.accent}60`,
        }}
      />

      {/* Corner glow */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `${config.accent}18` }}
      />

      <div className="relative p-7 sm:p-8 flex flex-col h-full">
        {/* Icon + Title row */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{
              background: `${config.accent}15`,
              color: config.accent,
              border: `1px solid ${config.accent}30`,
              boxShadow: isHovered
                ? `0 0 20px ${config.accent}30, inset 0 0 12px ${config.accent}10`
                : 'none',
            }}
          >
            {config.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-lg font-semibold tracking-tight leading-snug transition-colors duration-300"
              style={{ color: isHovered ? config.accent : '#ffffff' }}
            >
              {project.title}
            </h3>
            <p className="text-sm mt-1.5 leading-relaxed line-clamp-2" style={{ color: '#6b7280' }}>
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {displayTags.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${config.accent}12`,
                color: config.accent,
                border: `1px solid ${config.accent}25`,
              }}
            >
              {tech}
            </span>
          ))}

          {/* Links pushed to the right */}
          <div className="ml-auto flex items-center gap-3">
            {project.demo && project.demoed && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium transition-colors duration-300"
                style={{ color: isHovered ? config.accent : '#4b5563' }}
              >
                <ExternalLink size={12} />
                Demo
              </a>
            )}
            {project.github && project.github !== 'https://github.com' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium transition-colors duration-300"
                style={{ color: isHovered ? '#9ca3af' : '#4b5563' }}
              >
                <Github size={12} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-50px' });
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 select-none"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 0 20px rgba(37,99,235,0.08)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#60a5fa' }} />
            <span className="text-xs font-medium tracking-wider uppercase" style={{ color: '#60a5fa' }}>
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5" style={{ color: '#ffffff' }}>
            Selected{' '}
            <span style={{ color: '#3b82f6' }}>Projects</span>
          </h2>

          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#9ca3af' }}>
            Full-stack applications and AI systems — shipped, deployed, and solving real problems.
          </p>

          {/* Glowing divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 h-[1px] w-24 origin-center"
            style={{
              background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
              boxShadow: '0 0 12px rgba(59,130,246,0.4)',
            }}
          />
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm flex items-center justify-center gap-2" style={{ color: '#4b5563' }}>
            <Zap size={13} style={{ color: '#3b82f6' }} />
            More projects in active development — building in public.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
