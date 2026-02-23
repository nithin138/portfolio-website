import React from 'react';
import { Brain, Code, Grid3X3 } from 'lucide-react';
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
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      key: 'AI',
      label: 'Artificial Intelligence',
      icon: <Brain className="w-4 h-4" />,
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      key: 'Dev',
      label: 'Development',
      icon: <Code className="w-4 h-4" />,
      gradient: 'from-orange-500 to-amber-500',
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
            className={`group relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isActive
                ? `bg-gradient-to-r ${genre.gradient} text-white transform scale-105`
                : 'glass-card text-slate-300 hover:text-white hover:scale-105'
            }`}
          >
            <div className={`${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'} transition-colors duration-300`}>
              {genre.icon}
            </div>
            <span className="text-sm">{genre.label}</span>
            <div className={`px-2.5 py-0.5 text-xs font-bold rounded-full ${
              isActive 
                ? 'bg-white/20 text-white' 
                : 'bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50 group-hover:text-slate-200'
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
