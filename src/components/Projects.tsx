import React from 'react';
import { useState, useMemo } from 'react';
import { Folder, Search } from 'lucide-react';
import { projects } from '../data/project';
import { ProjectGenre } from '../types/project';
import ProjectCard from './ProjectCard';
import GenreFilter from './GenreFilter';

const Projects = () => {
  const [activeGenre, setActiveGenre] = useState<ProjectGenre>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by genre
    if (activeGenre !== 'All') {
      filtered = filtered.filter(project => project.genre === activeGenre);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort: featured projects first, then by title
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.title.localeCompare(b.title);
    });
  }, [activeGenre, searchTerm]);

  // Calculate project counts for each genre
  const projectCounts = useMemo(() => {
    const counts: Record<ProjectGenre, number> = {
      'All': projects.length,
      'AI': projects.filter(p => p.genre === 'AI').length,
      'DS': projects.filter(p => p.genre === 'DS').length,
      'Dev': projects.filter(p => p.genre === 'Dev').length,
    };
    return counts;
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
              <Folder className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Project Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my diverse collection of projects spanning artificial intelligence, data science, and full-stack development
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
            />
          </div>
        </div>

        {/* Genre Filter */}
        <GenreFilter
          activeGenre={activeGenre}
          onGenreChange={setActiveGenre}
          projectCounts={projectCounts}
        />

        {/* Results Info */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            {filteredProjects.length === 0 ? (
              <span>No projects found matching your criteria</span>
            ) : (
              <span>
                Showing {filteredProjects.length} of {projects.length} projects
                {activeGenre !== 'All' && ` in ${activeGenre}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </span>
            )}
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveGenre('All');
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;