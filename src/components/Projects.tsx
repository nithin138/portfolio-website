import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/project';
import ProjectCard from './ProjectCard';
import GenreFilter from './GenreFilter';
import { ProjectGenre } from '../types/project';

const Projects: React.FC = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeGenre, setActiveGenre] = useState<ProjectGenre>('All');

  const filteredProjects =
    activeGenre === 'All' ? projects : projects.filter((p) => p.genre === activeGenre);

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden" style={{ background: '#0f0f0f' }}>
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[25%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-[0.09]" style={{ background: '#2563eb' }} />
        <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] rounded-full blur-[120px] opacity-[0.07]" style={{ background: '#1d4ed8' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-gradient-to-r from-blue-500 to-transparent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Selected Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-3">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            Full-stack applications, AI systems, and platforms solving real-world problems.
          </p>
        </motion.div>

        {/* Genre Filter */}
        <div className="mb-10">
          <GenreFilter
            activeGenre={activeGenre}
            onGenreChange={setActiveGenre}
            projectCounts={{
              All: projects.length,
              AI: projects.filter((p) => p.genre === 'AI').length,
              DS: projects.filter((p) => p.genre === 'DS').length,
              Dev: projects.filter((p) => p.genre === 'Dev').length,
            }}
          />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 text-xs text-gray-600">
            <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-gray-700" />
            <span className="font-medium tracking-wide">More projects in development</span>
            <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-gray-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
