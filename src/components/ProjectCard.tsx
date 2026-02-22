import React from 'react';
import { ExternalLink, Code, Database, Brain, Sparkles } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getGenreConfig = (genre: string) => {
    switch (genre) {
      case 'AI':
        return {
          icon: <Brain className="w-5 h-5" />,
          gradient: 'from-purple-500 to-pink-500',
          bgGradient: 'from-purple-500/5 to-pink-500/5',
          borderColor: 'border-purple-500/20',
          badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
        };
      case 'DS':
        return {
          icon: <Database className="w-5 h-5" />,
          gradient: 'from-blue-500 to-cyan-500',
          bgGradient: 'from-blue-500/5 to-cyan-500/5',
          borderColor: 'border-blue-500/20',
          badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        };
      case 'Dev':
        return {
          icon: <Code className="w-5 h-5" />,
          gradient: 'from-emerald-500 to-teal-500',
          bgGradient: 'from-emerald-500/5 to-teal-500/5',
          borderColor: 'border-emerald-500/20',
          badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        };
      default:
        return {
          icon: <Code className="w-5 h-5" />,
          gradient: 'from-slate-500 to-slate-600',
          bgGradient: 'from-slate-500/5 to-slate-600/5',
          borderColor: 'border-slate-500/20',
          badge: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
        };
    }
  };

  const config = getGenreConfig(project.genre);

  return (
    <div className={`group relative glass-card rounded-2xl overflow-hidden border ${config.borderColor} transition-all duration-500 h-full flex flex-col`}>
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center space-x-1 px-3 py-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold backdrop-blur-sm shadow-glow">
            <Sparkles className="w-3 h-3" />
            <span>Featured</span>
          </div>
        </div>
      )}

      {/* Gradient Overlay on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative p-6 flex flex-col flex-grow">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${config.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {config.icon}
          </div>
          <div className={`px-3 py-1 text-xs font-semibold rounded-full border ${config.badge}`}>
            {project.genre}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="tag-pill"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        {project.demoed && (
          <div className="flex gap-3 mt-auto">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 text-sm bg-gradient-to-r ${config.gradient} text-white rounded-xl hover:opacity-90 transition-all duration-300 w-full shadow-lg group/btn`}
            >
              <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
              <span>View Live Demo</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
