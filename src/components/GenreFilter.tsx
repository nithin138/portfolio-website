import React from 'react';
import { Brain, Code, Grid3X3 } from 'lucide-react';
import { ProjectGenre } from '../types/project';

interface GenreFilterProps {
  activeGenre: ProjectGenre;
  onGenreChange: (genre: ProjectGenre) => void;
  projectCounts: Record<ProjectGenre, number>;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ activeGenre, onGenreChange, projectCounts }) => {
  const genres: Array<{ key: ProjectGenre; label: string; icon: React.ReactNode }> = [
    { key: 'All', label: 'All Projects',           icon: <Grid3X3 className="w-4 h-4" /> },
    { key: 'AI',  label: 'Artificial Intelligence', icon: <Brain className="w-4 h-4" /> },
    { key: 'Dev', label: 'Development',             icon: <Code className="w-4 h-4" /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {genres.map((genre) => {
        const isActive = activeGenre === genre.key;
        return (
          <button
            key={genre.key}
            onClick={() => onGenreChange(genre.key)}
            className={`group flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white scale-105 shadow-md'
                : 'glass-card text-gray-600 hover:text-gray-900 hover:scale-105'
            }`}
          >
            <span className={isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-700'}>
              {genre.icon}
            </span>
            <span className="text-sm">{genre.label}</span>
            <span className={`px-2.5 py-0.5 text-xs font-bold rounded-full transition-all duration-300 ${
              isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
            }`}>
              {projectCounts[genre.key]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default GenreFilter;
