import React from 'react';
import { Brain, Database, Code } from 'lucide-react';
import { Project } from '../types/project';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const getGenreConfig = (genre: string) => {
  switch (genre) {
    case 'AI':
      return { icon: <Brain className="w-3.5 h-3.5" />, label: 'AI / ML' };
    case 'DS':
      return { icon: <Database className="w-3.5 h-3.5" />, label: 'Data Science' };
    default:
      return { icon: <Code className="w-3.5 h-3.5" />, label: 'Full Stack' };
  }
};

// Gradient placeholders when no image is available
const placeholderGradients: Record<string, string> = {
  '1': 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0a1628 100%)',
  '2': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  '3': 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #0f172a 100%)',
  '4': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
  '5': 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #0f172a 100%)',
  '6': 'linear-gradient(135deg, #0c1222 0%, #1e3a5f 50%, #172554 100%)',
  '7': 'linear-gradient(135deg, #1a0533 0%, #3b0764 50%, #1e1b4b 100%)',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const config = getGenreConfig(project.genre);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          border: '1px solid rgba(59,130,246,0.3)',
          boxShadow: '0 0 20px rgba(59,130,246,0.05), inset 0 0 20px rgba(59,130,246,0.02)',
        }}
      />

      {/* Project Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Bottom fade into card body */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.95), transparent)' }}
            />
          </>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: placeholderGradients[project.id] || placeholderGradients['1'] }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <span className="text-white/60 scale-125">{config.icon}</span>
              </div>
              <span className="text-white/30 text-xs font-medium tracking-widest uppercase">
                {config.label}
              </span>
            </div>
            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.95), transparent)' }}
            />
          </div>
        )}
      </div>

      {/* Card Body: Genre → Title → Description */}
      <div className="relative z-10 flex flex-col flex-grow px-5 pb-6 pt-4">
        {/* Genre badge */}
        <span
          className="inline-flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-full text-xs font-medium mb-3"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#9ca3af',
          }}
        >
          {config.icon}
          {config.label}
        </span>

        {/* Title */}
        <h3
          className="text-lg font-bold mb-2 leading-snug transition-colors duration-300 group-hover:text-blue-400"
          style={{ color: '#ffffff' }}
        >
          {project.title}
        </h3>

        {/* Short description */}
        <p
          className="text-sm leading-relaxed line-clamp-2"
          style={{ color: '#6b7280' }}
        >
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
