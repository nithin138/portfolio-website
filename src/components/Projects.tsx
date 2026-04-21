import React from 'react';
import { useState, useMemo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { projects } from '../data/project';
import { ProjectGenre } from '../types/project';
import ProjectCard, { FeaturedProjectCard } from './ProjectCard';
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

  // Split into featured (first 2) and grid (rest)
  const featuredProjects = filteredProjects.slice(0, 2);
  const gridProjects = filteredProjects.slice(2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.15, staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-primary-light" />
            <span className="text-sm text-primary-light font-medium">Portfolio</span>
          </div>

          <h2 className="text-5xl sm:text-6xl font-extrabold text-text-primary mb-4 leading-tight tracking-tight">
            Featured{' '}
            <motion.span
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={inView ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="text-primary inline-block"
            >
              Work
            </motion.span>
          </h2>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of projects demonstrating full-stack development and real-world problem solving
          </p>
        </motion.div>

        {/* ── Filters ── */}
        <GenreFilter activeGenre={activeGenre} onGenreChange={setActiveGenre} projectCounts={projectCounts} />

        {/* ── Count line ── */}
        <div className="text-center mb-10">
          <p className="text-text-muted text-sm">
            {filteredProjects.length === 0 ? (
              'No projects found matching your criteria'
            ) : (
              <>
                Showing <span className="text-primary-light font-medium">{filteredProjects.length}</span> of{' '}
                <span className="text-primary-light font-medium">{projects.length}</span> projects
                {activeGenre !== 'All' && ` in ${activeGenre}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </>
            )}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* ── Featured horizontal cards ── */}
            {featuredProjects.length > 0 && (
              <div className="flex flex-col gap-6 mb-8">
                {featuredProjects.map((project, idx) => (
                  <motion.div key={project.id} variants={itemVariants}>
                    <FeaturedProjectCard project={project} reverse={idx % 2 === 1} />
                  </motion.div>
                ))}
              </div>
            )}

            {/* ── Grid cards ── */}
            {gridProjects.length > 0 && (
              <>
                {featuredProjects.length > 0 && (
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-px bg-border-default/50" />
                    <span className="text-text-muted text-xs font-medium tracking-widest uppercase px-2">More Projects</span>
                    <div className="flex-1 h-px bg-border-default/50" />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {gridProjects.map((project) => (
                    <motion.div key={project.id} variants={itemVariants} className="flex">
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </>
            )}

            {/* Edge case: all projects are featured (≤2 total) — nothing extra to show */}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 glass-card rounded-full flex items-center justify-center">
              <Search className="w-9 h-9 text-text-muted" />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">No projects found</h3>
            <p className="text-text-secondary mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => { setSearchTerm(''); setActiveGenre('All'); }}
              className="btn-primary"
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
