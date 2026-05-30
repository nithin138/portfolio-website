import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  Sparkles,
  Layers,
  Brain,
  Rocket,
  Cloud,
  BarChart3,
  Users,
  ChevronRight,
} from 'lucide-react';

interface SkillPillar {
  icon: React.ReactNode;
  title: string;
  accent: string;
  tagline: string;
  capabilities: string[];
}

const pillars: SkillPillar[] = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Software Architecture',
    accent: '#3B82F6',
    tagline: 'Designing systems that scale from zero to millions without rewrites.',
    capabilities: [
      'Distributed Systems',
      'Scalable System Design',
      'Microservices',
      'API Architecture',
      'Performance Engineering',
    ],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & Intelligent Systems',
    accent: '#8B5CF6',
    tagline: 'Turning AI research into production-grade intelligent products.',
    capabilities: [
      'Generative AI',
      'LLM Integration',
      'Agentic AI Systems',
      'NLP',
      'AI-Powered Automation',
    ],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Product Engineering',
    accent: '#F59E0B',
    tagline: 'Shipping user-centric products from concept to production at velocity.',
    capabilities: [
      'End-to-End Development',
      'Requirement Analysis',
      'User-Centric Design',
      'Production Delivery',
      'Agile Development',
    ],
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Cloud & Platform Engineering',
    accent: '#06B6D4',
    tagline: 'Building resilient infrastructure that teams can ship on confidently.',
    capabilities: [
      'AWS / Cloud Infrastructure',
      'Docker & Containerization',
      'CI/CD Pipelines',
      'Monitoring & Observability',
      'Reliability Engineering',
    ],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Data & Analytics',
    accent: '#10B981',
    tagline: 'Transforming raw data into decisions that drive business outcomes.',
    capabilities: [
      'Data Modeling',
      'ETL Pipelines',
      'Analytics Platforms',
      'Reporting Systems',
      'Data-Driven Solutions',
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Technical Leadership',
    accent: '#EC4899',
    tagline: 'Aligning engineering execution with business strategy and team growth.',
    capabilities: [
      'Technical Decision Making',
      'Project Ownership',
      'Mentoring',
      'Cross-Functional Collaboration',
      'Stakeholder Communication',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-28 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[10%] right-[15%] w-[600px] h-[600px] rounded-full blur-[130px] opacity-[0.10]"
          style={{ background: '#2563eb' }}
        />
        <div
          className="absolute bottom-[5%] left-[10%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.08]"
          style={{ background: '#1e40af' }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 border border-white/[0.06] bg-white/[0.02]">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs text-blue-400/90 font-medium tracking-wider uppercase">
              Engineering Pillars
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            What I <span className="text-gradient">Engineer</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Systems thinking across architecture, AI, cloud, data, and product —
            delivering impact at every layer of the stack.
          </p>
        </motion.div>

        {/* Pillar Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-sm overflow-hidden cursor-default transition-colors duration-500"
              style={{
                borderColor: hoveredIndex === i ? `${pillar.accent}40` : undefined,
                background: hoveredIndex === i ? `rgba(255,255,255,0.025)` : undefined,
              }}
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${pillar.accent}80, transparent)`,
                }}
              />

              {/* Hover glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `${pillar.accent}15` }}
              />

              <div className="relative p-7 sm:p-8 flex flex-col h-full">
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      background: `${pillar.accent}12`,
                      color: pillar.accent,
                      boxShadow: hoveredIndex === i ? `0 0 20px ${pillar.accent}20` : 'none',
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="flex-1 space-y-2.5 mt-2">
                  {pillar.capabilities.map((cap, capIndex) => (
                    <div
                      key={cap}
                      className="flex items-center gap-3 group/item"
                      style={{
                        transitionDelay: `${capIndex * 30}ms`,
                      }}
                    >
                      <ChevronRight
                        className="w-3.5 h-3.5 flex-shrink-0 transition-all duration-300 group-hover/item:translate-x-0.5"
                        style={{ color: `${pillar.accent}90` }}
                      />
                      <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors duration-300">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent bar */}
                <div className="mt-6 pt-5 border-t border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: pillar.accent }}
                    />
                    <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-500 font-medium tracking-wide uppercase">
                      Core Pillar
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            I don't just write code — I design systems, ship products, and own outcomes end-to-end.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
