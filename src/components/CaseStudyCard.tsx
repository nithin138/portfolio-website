import React, { useState, useRef, useCallback } from 'react';
import { ChevronDown, ExternalLink, Github } from 'lucide-react';
import { CaseStudy } from '../types/project';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  isLarge?: boolean;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, index, isLarge = false }) => {
  const [expanded, setExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
        isLarge ? 'col-span-1 lg:col-span-2' : 'col-span-1'
      }`}
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${study.accentColor}06, transparent 40%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${study.accentColor}, transparent)` }}
      />

      <div className="relative z-10 p-5 sm:p-6 lg:p-7">
        {/* Header row: badge + links */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase"
            style={{
              background: `${study.accentColor}12`,
              color: study.accentColor,
              border: `1px solid ${study.accentColor}25`,
            }}
          >
            {study.category}
          </span>
          <div className="flex items-center gap-1.5">
            {study.links.live && (
              <a href={study.links.live} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="View live project">
                <ExternalLink size={14} />
              </a>
            )}
            {study.links.github && (
              <a href={study.links.github} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="View source code">
                <Github size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight leading-tight">
          {study.title}
        </h3>

        {/* Outcome — single line description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2">
          {study.outcome}
        </p>

        {/* Metrics — compact inline row */}
        <div className={`grid gap-2 mb-5 ${isLarge ? 'grid-cols-4' : 'grid-cols-2'}`}>
          {study.metrics.map((metric) => (
            <div key={metric.label} className="text-center py-2.5 px-2 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <div className="text-base font-bold" style={{ color: study.accentColor }}>{metric.value}</div>
              <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wider mt-0.5">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Architecture chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {study.architectureHighlights.slice(0, isLarge ? 5 : 3).map((h) => (
            <span key={h} className="px-2.5 py-1 rounded-md text-[11px] font-medium"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#9ca3af' }}>
              {h}
            </span>
          ))}
          {!isLarge && study.architectureHighlights.length > 3 && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-600">
              +{study.architectureHighlights.length - 3}
            </span>
          )}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-white transition-colors duration-300"
          aria-expanded={expanded}
          aria-controls={`insights-${study.id}`}
        >
          Deep Dive
          <ChevronDown size={12} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              id={`insights-${study.id}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="overflow-hidden"
            >
              <div className="pt-5 space-y-4 border-t border-white/5 mt-4">
                {/* Challenge / Solution */}
                <div className={`grid gap-4 ${isLarge ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Challenge</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Solution</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Engineering Insights */}
                <div className="space-y-3 pt-2">
                  {[
                    { label: 'Architecture', content: study.engineeringInsights.architectureDecisions },
                    { label: 'Scalability', content: study.engineeringInsights.scalability },
                    { label: 'Performance', content: study.engineeringInsights.performance },
                    { label: 'Challenges', content: study.engineeringInsights.challenges },
                    { label: 'Lessons', content: study.engineeringInsights.lessons },
                  ].map((insight) => (
                    <div key={insight.label}>
                      <h4 className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 mb-1">{insight.label}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{insight.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
