import { useEffect, useState, useRef, useMemo } from 'react';
import { Download, ArrowDown, Terminal, Code2, Layers } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

const techStack = ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Python', 'MongoDB'];

const codeLines = [
  { indent: 0, content: 'const developer = {', color: 'text-blue-400' },
  { indent: 1, content: 'name: "Nithin Sudheer",', color: 'text-green-400' },
  { indent: 1, content: 'role: "Full-Stack AI Dev",', color: 'text-green-400' },
  { indent: 1, content: 'stack: ["MERN", "AI/ML"],', color: 'text-yellow-400' },
  { indent: 1, content: 'focus: "scalable systems",', color: 'text-green-400' },
  { indent: 1, content: 'available: true,', color: 'text-purple-400' },
  { indent: 0, content: '};', color: 'text-blue-400' },
];

function AnimatedCounter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.4, 0, 0.2, 1],
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

function TypedLine({ line, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(line.content.slice(0, i));
        if (i >= line.content.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }, delay * 700);  
    return () => clearTimeout(timeout);
  }, [inView, line.content, delay]);

  return (
    <div ref={ref} className={`${line.color} ${line.indent ? 'pl-6' : ''} min-h-[1.75rem]`}>
      {displayed}
      {inView && displayed.length < line.content.length && (
        <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px] animate-pulse" />
      )}
    </div>
  );
}

const HEADLINE_PARTS = [
  { text: 'Building ', gradient: false },
  { text: 'scalable web apps', gradient: true },
  { text: ' that actually perform.', gradient: false },
];

const FULL_TEXT = HEADLINE_PARTS.map(p => p.text).join('');

function TypedHeadline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setCount(i);
      if (i >= FULL_TEXT.length) clearInterval(id);
    }, 80);
    return () => clearInterval(id);
  }, [inView]);

  const segments = useMemo(() => {
    let cursor = 0;
    return HEADLINE_PARTS.map(part => {
      const start = cursor;
      const end = cursor + part.text.length;
      cursor = end;
      const visible = FULL_TEXT.slice(start, Math.min(end, count));
      return { ...part, visible };
    });
  }, [count]);

  const done = count >= FULL_TEXT.length;

  return (
    <h1
      ref={ref}
      className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold leading-[1.15] tracking-tight mb-5"
      style={{ color: '#ffffff' }}
    >
      {segments.map((seg, i) =>
        seg.visible ? (
          <span key={i} style={seg.gradient ? { color: '#3b82f6' } : undefined}>
            {seg.visible}
          </span>
        ) : null
      )}
      {!done && (
        <span
          className="inline-block w-[3px] h-[0.85em] align-middle ml-[2px] animate-pulse rounded-sm"
          style={{ background: '#3b82f6' }}
        />
      )}
    </h1>
  );
}

const Hero = () => {
  const [experience, setExperience] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const startDate = new Date('2024-05-01');
    const currentDate = new Date();
    const totalMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
    setExperience({ years: Math.floor(totalMonths / 12), months: totalMonths % 12 });
  }, []);

  const getExperienceText = () => {
    if (experience.years === 0) return `${experience.months}+ mo`;
    if (experience.months === 0) return `${experience.years}+ yr`;
    return `${experience.years}.${experience.months}+ yr`;
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const useMagnetic = () => {
    const ref = useRef(null);
    const handleMouseMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };
    const handleMouseLeave = () => {
      if (ref.current) ref.current.style.transform = '';
    };
    return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
  };

  const magneticProjects = useMagnetic();
  const magneticResume = useMagnetic();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 w-fit px-3.5 py-1.5 rounded-full select-none"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span
                className="flex h-2 w-2 rounded-full flex-shrink-0"
                style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade80' }}
              />
              <span className="text-sm font-medium tracking-wide uppercase" style={{ color: '#9ca3af' }}>
                Full-Stack AI Developer
              </span>
            </motion.div>

            <TypedHeadline />

            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: '#9ca3af' }}
            >
              Experienced in React, Node.js, and modern backend systems — with a focus on
              AI/ML integration, performance, and clean architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                ref={magneticProjects.ref}
                onMouseMove={magneticProjects.onMouseMove}
                onMouseLeave={magneticProjects.onMouseLeave}
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{ background: '#2563eb', willChange: 'transform' }}
                aria-label="View Projects"
              >
                <Layers size={16} />
                View Projects →
              </button>
              <button
                ref={magneticResume.ref}
                onMouseMove={magneticResume.onMouseMove}
                onClick={() => scrollToSection('resume')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#e5e7eb',
                  willChange: 'transform',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  magneticResume.onMouseLeave(e);
                }}
                aria-label="Download Resume"
              >
                <Download size={16} />
                Download Resume
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {techStack.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2 text-sm" style={{ color: '#6b7280' }}>
                  {i !== 0 && (
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ background: '#374151' }}
                      aria-hidden="true"
                    />
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col gap-4 lg:pl-4"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 0 0 1px rgba(37,99,235,0.12), 0 24px 64px rgba(0,0,0,0.7)',
              }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ background: '#0d0d0d', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs font-mono" style={{ color: '#4b5563' }}>developer.js</span>
              </div>
              <div className="px-5 py-5 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <TypedLine key={i} line={line} delay={0.5 + i * 0.7} />
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: getExperienceText(), label: 'Experience', counter: false },
                { value: 10, label: 'Projects', counter: true, suffix: '+' },
                { value: 15, label: 'Technologies', counter: true, suffix: '+' },
              ].map(({ value, label, counter, suffix }) => (
                <div
                  key={label}
                  className="rounded-xl p-4 text-center transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(37,99,235,0.4)';
                    e.currentTarget.style.background = 'rgba(37,99,235,0.06)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <div className="text-2xl font-bold mb-0.5" style={{ color: '#ffffff' }}>
                    {counter ? (
                      <AnimatedCounter to={value} suffix={suffix} />
                    ) : (
                      value
                    )}
                  </div>
                  <div className="text-xs" style={{ color: '#4b5563' }}>{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Terminal size={13} />, text: 'API-Driven Systems' },
                { icon: <Code2 size={13} />, text: 'Agentic AI' },
                { icon: <Layers size={13} />, text: 'Production Apps' },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-200 cursor-default"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#6b7280',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
                    e.currentTarget.style.color = '#e5e7eb';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = '#6b7280';
                  }}
                >
                  {icon}
                  {text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => scrollToSection('skills')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors duration-200"
          style={{ color: '#4b5563' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#9ca3af')}
          onMouseLeave={e => (e.currentTarget.style.color = '#4b5563')}
          aria-label="Scroll to next section"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
