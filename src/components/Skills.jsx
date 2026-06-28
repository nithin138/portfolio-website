import { motion, useInView as useFramerInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Sparkles,
  Layers,
  Brain,
  Cloud,
  Zap,
} from 'lucide-react';

const pillars = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Full-Stack Engineering',
    accent: '#3B82F6',
    tagline: 'Building end-to-end systems — from pixel-perfect UIs to scalable APIs and databases.',
    tags: ['React', 'Node.js', 'System Design'],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & Intelligent Systems',
    accent: '#8B5CF6',
    tagline: 'Turning AI research into production-grade intelligent products that solve real problems.',
    tags: ['LLMs', 'Agentic AI', 'NLP'],
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud & DevOps',
    accent: '#06B6D4',
    tagline: 'Shipping fast with resilient infrastructure, CI/CD, and containerized deployments.',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Skills = () => {
  const sectionRef = useRef(null);
  const inView = useFramerInView(sectionRef, { once: true, margin: '-50px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 select-none"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 0 20px rgba(37,99,235,0.08)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#60a5fa' }} />
            <span className="text-xs font-medium tracking-wider uppercase" style={{ color: '#60a5fa' }}>
              Engineering Pillars
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5" style={{ color: '#ffffff' }}>
            What I{' '}
            <span style={{ color: '#3b82f6' }}>Engineer</span>
          </h2>

          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#9ca3af' }}>
            Systems thinking across architecture, AI, cloud, data, and product —
            delivering impact at every layer of the stack.
          </p>

          {/* Glowing divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 h-[1px] w-24 origin-center"
            style={{
              background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
              boxShadow: '0 0 12px rgba(59,130,246,0.4)',
            }}
          />
        </motion.div>

        {/* Pillar Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{
                background: hoveredIndex === i ? 'rgba(255,255,255,0.035)' : '#111111',
                border: `1px solid ${hoveredIndex === i ? `${pillar.accent}50` : 'rgba(255,255,255,0.08)'}`,
                boxShadow: hoveredIndex === i
                  ? `0 0 0 1px ${pillar.accent}20, 0 20px 60px rgba(0,0,0,0.7), 0 8px 24px ${pillar.accent}12`
                  : '0 4px 24px rgba(0,0,0,0.5)',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: hoveredIndex === i ? 'translateY(-6px)' : 'translateY(0)',
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${pillar.accent}, transparent)`,
                  boxShadow: `0 0 12px ${pillar.accent}60`,
                }}
              />

              {/* Corner glow */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `${pillar.accent}18` }}
              />

              <div className="relative p-7 sm:p-8 flex flex-col h-full">
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `${pillar.accent}15`,
                      color: pillar.accent,
                      border: `1px solid ${pillar.accent}30`,
                      boxShadow: hoveredIndex === i
                        ? `0 0 20px ${pillar.accent}30, inset 0 0 12px ${pillar.accent}10`
                        : 'none',
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight" style={{ color: '#ffffff' }}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm mt-1 leading-relaxed" style={{ color: '#6b7280' }}>
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300"
                      style={{
                        background: `${pillar.accent}12`,
                        color: pillar.accent,
                        border: `1px solid ${pillar.accent}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats Row — matching Hero's stat cards */}
       

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 text-center"
        >
          <p className="text-sm flex items-center justify-center gap-2" style={{ color: '#4b5563' }}>
            <Zap size={13} style={{ color: '#3b82f6' }} />
            I don't just write code — I design systems, ship products, and own outcomes end-to-end.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
