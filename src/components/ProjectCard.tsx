import React, { useRef } from 'react';
import { ExternalLink, Github, Brain, Database, Code, Sparkles, ArrowUpRight } from 'lucide-react';
import { Project } from '../types/project';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  reverse?: boolean;
}

// Tilt hook — returns motion values + event handlers
function useTilt(strength = 10) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [strength, -strength]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-strength, strength]), { stiffness: 300, damping: 30 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

const getGenreConfig = (genre: string) => {
  switch (genre) {
    case 'AI':  return { icon: <Brain className="w-4 h-4" />, label: 'AI / ML', color: 'text-secondary-light border-secondary/30 bg-secondary/10' };
    case 'DS':  return { icon: <Database className="w-4 h-4" />, label: 'Data Science', color: 'text-primary-light border-primary/30 bg-primary/10' };
    default:    return { icon: <Code className="w-4 h-4" />, label: 'Full Stack', color: 'text-primary-light border-primary/30 bg-primary/10' };
  }
};

// Gradient placeholders per project id
const placeholderGradients: Record<string, string> = {
  '1': 'from-blue-900 via-blue-800 to-indigo-900',
  '2': 'from-slate-800 via-blue-900 to-slate-900',
  '3': 'from-violet-900 via-purple-800 to-indigo-900',
  '4': 'from-indigo-900 via-slate-800 to-purple-900',
  '5': 'from-emerald-900 via-teal-800 to-cyan-900',
  '6': 'from-slate-900 via-blue-900 to-indigo-800',
  '7': 'from-purple-900 via-violet-800 to-indigo-900',
};

const ImagePlaceholder: React.FC<{ project: Project; className?: string }> = ({ project, className = '' }) => {
  if (project.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    );
  }

  const gradient = placeholderGradients[project.id] ?? 'from-primary/30 via-secondary/20 to-bg-card';
  const config = getGenreConfig(project.genre);
  return (
    <div className={`relative bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden ${className}`}>
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
        <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
          <span className="text-white/80 scale-150">{config.icon}</span>
        </div>
        <p className="text-white/50 text-xs font-medium tracking-widest uppercase">{config.label}</p>
      </div>
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
};

// ─── Featured (horizontal) card ───────────────────────────────────────────────
export const FeaturedProjectCard: React.FC<ProjectCardProps> = ({ project, reverse = false }) => {
  const config = getGenreConfig(project.genre);
  const tilt = useTilt(6);

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 1000 }}
      className="group relative glass-card rounded-2xl overflow-hidden transition-shadow duration-500 hover:shadow-card-hover"
    >
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        {/* Image */}
        <div className="lg:w-[52%] relative overflow-hidden">
          <ImagePlaceholder
            project={project}
            className="w-full h-56 lg:h-full min-h-[240px] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {project.featured && (
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-warning/15 text-warning border border-warning/25 rounded-full text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="lg:w-[48%] flex flex-col justify-between p-7 lg:p-8">
          <div>
            {/* Genre badge */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${config.color} mb-4`}>
              {config.icon}
              {config.label}
            </span>

            <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary-light transition-colors duration-300 leading-tight">
              {project.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span key={tech} className="tag-pill">{tech}</span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.demoed && project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group/btn"
              >
                <ExternalLink size={15} className="group-hover/btn:scale-110 transition-transform" />
                Live Demo
              </a>
            )}
            {project.github && project.github !== 'https://github.com' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-default text-text-secondary text-sm font-semibold rounded-xl hover:border-primary hover:text-text-primary hover:bg-primary/5 transition-all duration-300 group/btn"
              >
                <Github size={15} className="group-hover/btn:scale-110 transition-transform" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Grid card ────────────────────────────────────────────────────────────────
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const config = getGenreConfig(project.genre);
  const tilt = useTilt(8);

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformPerspective: 1000 }}
      className="group relative glass-card rounded-2xl overflow-hidden flex flex-col transition-shadow duration-500 hover:shadow-card-hover h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <ImagePlaceholder
          project={project}
          className="w-full h-44 transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-warning/15 text-warning border border-warning/25 rounded-full text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        )}
        {/* Hover overlay with quick action */}
        {project.demoed && project.demo && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <ArrowUpRight size={15} />
              View Project
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5">
        {/* Genre badge */}
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border ${config.color} mb-3 self-start`}>
          {config.icon}
          {config.label}
        </span>

        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-light transition-colors duration-300 leading-snug">
          {project.title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 4).map((tech) => (
            <span key={tech} className="tag-pill">{tech}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tag-pill text-text-muted">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          {project.demoed && project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:opacity-90 hover:shadow-md hover:shadow-primary/20 transition-all duration-300"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : null}
          {project.github && project.github !== 'https://github.com' ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${project.demoed && project.demo ? '' : 'flex-1'} inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-border-default text-text-secondary text-sm font-semibold rounded-xl hover:border-primary hover:text-text-primary hover:bg-primary/5 transition-all duration-300`}
            >
              <Github size={14} />
              {project.demoed && project.demo ? '' : 'Source Code'}
            </a>
          ) : null}
          {!project.demoed && (!project.github || project.github === 'https://github.com') && (
            <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-border-default/50 text-text-muted text-sm rounded-xl cursor-default">
              Private Project
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
