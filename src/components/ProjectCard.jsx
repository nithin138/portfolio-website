import React, { useState } from 'react';
import { Brain, Database, Code, ExternalLink, Github } from 'lucide-react';

const getGenreConfig = (genre) => {
  switch (genre) {
    case 'AI':
      return { icon: <Brain className="w-3.5 h-3.5" />, label: 'AI / ML', accent: '#8B5CF6' };
    case 'DS':
      return { icon: <Database className="w-3.5 h-3.5" />, label: 'Data Science', accent: '#06B6D4' };
    default:
      return { icon: <Code className="w-3.5 h-3.5" />, label: 'Full Stack', accent: '#3B82F6' };
  }
};

const placeholderGradients = {
  '1': 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0a1628 100%)',
  '2': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  '3': 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #0f172a 100%)',
  '4': 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
  '5': 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #0f172a 100%)',
  '6': 'linear-gradient(135deg, #0c1222 0%, #1e3a5f 50%, #172554 100%)',
  '7': 'linear-gradient(135deg, #1a0533 0%, #3b0764 50%, #1e1b4b 100%)',
};

const ProjectCard = ({ project }) => {
  const config = getGenreConfig(project.genre);
  const [hovered, setHovered] = useState(false);

  // Show up to 3 tech tags
  const displayTags = project.tech ? project.tech.slice(0, 3) : [];

  return (
    <div
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.035)' : '#111111',
        border: `1px solid ${hovered ? `${config.accent}50` : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered
          ? `0 0 0 1px ${config.accent}20, 0 20px 60px rgba(0,0,0,0.7), 0 8px 24px ${config.accent}12`
          : '0 4px 24px rgba(0,0,0,0.5)',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
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

      {/* Image area */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: 'linear-gradient(to top, #111111, transparent)' }}
            />
          </>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: placeholderGradients[project.id] || placeholderGradients['1'] }}
          >
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
                style={{ background: `${config.accent}15`, border: `1px solid ${config.accent}30` }}
              >
                <span style={{ color: config.accent }}>{config.icon}</span>
              </div>
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#4b5563' }}>
                {config.label}
              </span>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: 'linear-gradient(to top, #111111, transparent)' }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow px-6 pb-6 pt-4">
        {/* Genre badge */}
        <span
          className="inline-flex items-center gap-1.5 w-fit px-3 py-1 rounded-full text-[11px] font-medium mb-3"
          style={{
            background: `${config.accent}12`,
            border: `1px solid ${config.accent}25`,
            color: config.accent,
          }}
        >
          {config.icon}
          {config.label}
        </span>

        {/* Title */}
        <h3
          className="text-lg font-semibold mb-2 leading-snug tracking-tight transition-colors duration-300"
          style={{ color: hovered ? config.accent : '#ffffff' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed line-clamp-2 mb-4"
          style={{ color: '#6b7280' }}
        >
          {project.description}
        </p>

        {/* Tech tags */}
        {displayTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {displayTags.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#9ca3af',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Footer with links */}
        <div
          className="mt-auto pt-4 flex items-center gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {project.demo && project.demoed && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300"
              style={{ color: hovered ? config.accent : '#6b7280' }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} />
              Live Demo
            </a>
          )}
          {project.github && project.github !== 'https://github.com' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-300"
              style={{ color: hovered ? '#9ca3af' : '#4b5563' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={12} />
              Source
            </a>
          )}
          {(!project.demoed || !project.demo) && (!project.github || project.github === 'https://github.com') && (
            <span className="text-xs font-medium" style={{ color: '#4b5563' }}>
              In Development
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
