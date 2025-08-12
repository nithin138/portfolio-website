import React from 'react';
import { Github, ExternalLink, Code, Database, Brain, Sparkles } from 'lucide-react';
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
          bgGradient: 'from-purple-500/10 to-pink-500/10',
          borderColor: 'border-purple-500/30',
          hoverBorder: 'hover:border-purple-400',
          badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
        };
      case 'DS':
        return {
          icon: <Database className="w-5 h-5" />,
          gradient: 'from-blue-500 to-cyan-500',
          bgGradient: 'from-blue-500/10 to-cyan-500/10',
          borderColor: 'border-blue-500/30',
          hoverBorder: 'hover:border-blue-400',
          badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        };
      case 'Dev':
        return {
          icon: <Code className="w-5 h-5" />,
          gradient: 'from-emerald-500 to-teal-500',
          bgGradient: 'from-emerald-500/10 to-teal-500/10',
          borderColor: 'border-emerald-500/30',
          hoverBorder: 'hover:border-emerald-400',
          badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        };
      default:
        return {
          icon: <Code className="w-5 h-5" />,
          gradient: 'from-gray-500 to-gray-600',
          bgGradient: 'from-gray-500/10 to-gray-600/10',
          borderColor: 'border-gray-500/30',
          hoverBorder: 'hover:border-gray-400',
          badge: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
        };
    }
  };

  const config = getGenreConfig(project.genre);

  return (
    <div className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border ${config.borderColor} ${config.hoverBorder} transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl`}>
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-full text-xs font-medium">
            <Sparkles className="w-3 h-3" />
            <span>Featured</span>
          </div>
        </div>
      )}

      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-r ${config.gradient}`}>
            {config.icon}
          </div>
          <div className={`px-2 py-1 text-xs font-medium rounded-full border ${config.badge}`}>
            {project.genre}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium bg-gray-800/80 text-gray-300 rounded-md border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2.5 text-sm bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-lg transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 flex-1 justify-center"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          
          {project.demo && project?.demoed === true && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2.5 text-sm bg-gradient-to-r ${config.gradient} text-white rounded-lg hover:opacity-90 transition-all duration-300 flex-1 justify-center shadow-lg`}
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;