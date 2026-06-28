import React from 'react';
import { Brain, Code, Grid3X3 } from 'lucide-react';

const GenreFilter = ({ activeGenre, onGenreChange, projectCounts }) => {
  const genres = [
    { key: 'All', label: 'All', icon: <Grid3X3 className="w-3.5 h-3.5" /> },
    { key: 'AI', label: 'AI / ML', icon: <Brain className="w-3.5 h-3.5" /> },
    { key: 'Dev', label: 'Full Stack', icon: <Code className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2.5">
      {genres.map((genre) => {
        const isActive = activeGenre === genre.key;
        return (
          <button
            key={genre.key}
            onClick={() => onGenreChange(genre.key)}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              background: isActive ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${isActive ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.08)'}`,
              color: isActive ? '#60a5fa' : '#6b7280',
              boxShadow: isActive ? '0 0 16px rgba(59,130,246,0.15)' : 'none',
            }}
          >
            {genre.icon}
            <span>{genre.label}</span>
            <span
              className="px-1.5 py-0.5 text-[10px] font-bold rounded-full"
              style={{
                background: isActive ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.06)',
                color: isActive ? '#93c5fd' : '#4b5563',
              }}
            >
              {projectCounts[genre.key]}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default GenreFilter;
