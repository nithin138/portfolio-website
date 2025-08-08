import React from 'react';
import { Brain, Database, Code, Grid3X3 } from 'lucide-react';
import { ProjectGenre } from '../types/project';

interface GenreFilterProps {
  activeGenre: ProjectGenre;
  onGenreChange: (genre: ProjectGenre) => void;
  projectCounts: Record<ProjectGenre, number>;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ activeGenre, onGenreChange, projectCounts }) => {
  const genres: Array<{ key: ProjectGenre; label: string; icon: React.ReactNode; gradient: string }> = [
    {
      key: 'All',
      label: 'All Projects',
      icon: <Grid3X3 className="w-4 h-4" />,
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      key: 'AI',
      label: 'Artificial Intelligence',
      icon: <Brain className="w-4 h-4" />,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      key: 'DS',
      label: 'Data Science',
      icon: <Database className="w-4 h-4" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'Dev',
      label: 'Development',
      icon: <Code className="w-4 h-4" />,
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {genres.map((genre) => {
        const isActive = activeGenre === genre.key;
        const count = projectCounts[genre.key];
        
        return (
          <button
            key={genre.key}
            onClick={() => onGenreChange(genre.key)}
            className={`group relative flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              isActive
                ? `bg-gradient-to-r ${genre.gradient} text-white shadow-lg transform scale-105`
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-gray-600/50'
            }`}
          >
            <div className={`${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'} transition-colors duration-300`}>
              {genre.icon}
            </div>
            <span className="text-sm">{genre.label}</span>
            <div className={`px-2 py-0.5 text-xs rounded-full ${
              isActive 
                ? 'bg-white/20 text-white' 
                : 'bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50 group-hover:text-gray-300'
            } transition-all duration-300`}>
              {count}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default GenreFilter;