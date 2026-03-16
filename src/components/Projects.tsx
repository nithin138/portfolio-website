import React from 'react';
import { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { projects } from '../data/project';
import { ProjectGenre } from '../types/project';
import ProjectCard from './ProjectCard';
import GenreFilter from './GenreFilter';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [activeGenre, setActiveGenre] = useState<ProjectGenre>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (activeGenre !== 'All') filtered = filtered.filter(p => p.genre === activeGenre);
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.title.localeCompare(b.title);
    });
  }, [activeGenre, searchTerm]);

  const projectCounts = useMemo(() => ({
    'All': projects.length,
    'AI':  projects.filter(p => p.genre === 'AI').length,
    'DS':  projects.filter(p => p.genre === 'DS').length,
    'Dev': projects.filter(p => p.genre === 'Dev').length,
  }), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
  };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore my work across AI and Full-Stack Development
          </p>
        </motion.div>

        <GenreFilter activeGenre={activeGenre} onGenreChange={setActiveGenre} projectCounts={projectCounts} />

        <div className="text-center mb-8">
          <p className="text-orange-500 text-sm">
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

        {filteredProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 glass-card rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
            <button onClick={() => { setSearchTerm(''); setActiveGenre('All'); }} className="btn-primary">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
