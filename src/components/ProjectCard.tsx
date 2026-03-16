import React from 'react';
import { ExternalLink, Code, Database, Brain, Sparkles } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

const getGenreConfig = (genre: string) => {
  const base = {
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-500/5 to-amber-500/5',
    borderColor: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-600 border-orange-200',
  };
  switch (genre) {
    case 'AI':  return { ...base, icon: <Brain className="w-5 h-5" /> };
    case 'DS':  return { ...base, icon: <Database className="w-5 h-5" /> };
    default:    return { ...base, icon: <Code className="w-5 h-5" /> };
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const config = getGenreConfig(project.genre);

  return (
    <div className={`group relative glass-card rounded-2xl overflow-hidden border ${config.borderColor} transition-all duration-500 h-full flex flex-col`}>
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center space-x-1 px-3 py-1.5 bg-amber-100 text-amber-700 border border-amber-200 rounded-full text-xs font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Featured</span>
          </div>
        </div>
      )}

      <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${config.gradient} group-hover:scale-110 transition-transform duration-300`}>
            {config.icon}
          </div>
          <div className={`px-3 py-1 text-xs font-semibold rounded-full border ${config.badge}`}>
            {project.genre}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-500 mb-6 leading-relaxed text-sm flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="tag-pill">{tech}</span>
          ))}
        </div>

        {project.demoed && (
          <div className="flex gap-3 mt-auto">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 text-sm bg-gradient-to-r ${config.gradient} text-white rounded-xl hover:opacity-90 transition-all duration-300 w-full group/btn`}
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
