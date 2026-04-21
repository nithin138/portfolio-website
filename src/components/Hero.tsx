import { useEffect, useState, useRef, useMemo } from 'react';
import { Download, ArrowDown, Terminal, Code2, Layers } from 'lucide-react';
import { motion, useInView, animate, useScroll, useTransform } from 'framer-motion';

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

// Animated counter component
function AnimatedCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
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

// Typed line component — types out each code line character by character
function TypedLine({ line, delay }: { line: { indent: number; content: string; color: string }; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
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
    }, delay * 1400);
    return () => clearTimeout(timeout);
  }, [inView, line.content, delay]);

  return (
    <div
      ref={ref}
      className={`${line.color} ${line.indent ? 'pl-6' : ''} min-h-[1.75rem]`}
    >
      {displayed}
      {inView && displayed.length < line.content.length && (
        <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px] animate-pulse" />
      )}
    </div>
  );
}

// Typed headline — handles the gradient span mid-sentence
const HEADLINE_PARTS = [
  { text: 'Building ', gradient: false },
  { text: 'scalable web apps', gradient: true },
  { text: ' that actually perform.', gradient: false },
] as const;

const FULL_TEXT = HEADLINE_PARTS.map(p => p.text).join('');

function TypedHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);
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

  // Split the typed characters back into segments
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
      className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold leading-[1.15] tracking-tight text-text-primary mb-5"
    >
      {segments.map((seg, i) =>
        seg.visible ? (
          <span key={i} className={seg.gradient ? 'text-gradient' : undefined}>
            {seg.visible}
          </span>
        ) : null
      )}
      {!done && (
        <span className="inline-block w-[3px] h-[0.85em] bg-primary align-middle ml-[2px] animate-pulse rounded-sm" />
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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax for dot grid
  const { scrollY } = useScroll();
  const dotGridY = useTransform(scrollY, [0, 600], [0, 80]);

  // Magnetic button hook
  const useMagnetic = () => {
    const ref = useRef<HTMLButtonElement>(null);
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      className="relative min-h-screen flex items-center overflow-hidden bg-bg-main"
    >
      {/* Subtle background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Animated dot grid with parallax */}
        <motion.svg
          style={{ y: dotGridY }}
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#3B82F6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </motion.svg>
        {/* Primary glow — top-left */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
        />
        {/* Secondary glow — bottom-right */}
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
        />
        {/* Subtle linear overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background:
              'linear-gradient(135deg, #2563EB 0%, transparent 50%, #7C3AED 100%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── LEFT: Text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col max-w-xl"
          >
            {/* Intro badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-6 w-fit"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]" />
              <span className="text-sm font-medium text-text-secondary tracking-wide uppercase">
                Full-Stack AI Developer
              </span>
            </motion.div>

            {/* Main headline */}
            <TypedHeadline />

            {/* Supporting description */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
              Experienced in React, Node.js, and modern backend systems — with a focus on
              AI/ML integration, performance, and clean architecture.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button
                ref={magneticProjects.ref}
                onMouseMove={magneticProjects.onMouseMove}
                onMouseLeave={magneticProjects.onMouseLeave}
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center justify-center gap-2 transition-transform duration-200"
                style={{ willChange: 'transform' }}
                aria-label="View Projects"
              >
                <Layers size={18} />
                View Projects
              </button>
              <button
                ref={magneticResume.ref}
                onMouseMove={magneticResume.onMouseMove}
                onMouseLeave={magneticResume.onMouseLeave}
                onClick={() => scrollToSection('resume')}
                className="btn-secondary flex items-center justify-center gap-2 transition-transform duration-200"
                style={{ willChange: 'transform' }}
                aria-label="Download Resume"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>

            {/* Tech strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {techStack.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2 text-sm text-text-muted">
                  {i !== 0 && (
                    <span className="w-1 h-1 rounded-full bg-border-default" aria-hidden="true" />
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Code card visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="flex flex-col gap-4 lg:pl-4"
          >
            {/* Code card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="gradient-border rounded-2xl overflow-hidden shadow-card"
            >
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-bg-card border-b border-border-default">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-text-muted font-mono">developer.ts</span>
              </div>

              {/* Code body */}
              <div className="bg-[#0d1117] px-5 py-5 font-mono text-sm leading-7">
                {codeLines.map((line, i) => (
                  <TypedLine
                    key={i}
                    line={line}
                    delay={0.5 + i * 0.7}
                  />
                ))}
              </div>
            </motion.div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: getExperienceText(), label: 'Experience', counter: false },
                { value: 10, label: 'Projects', counter: true, suffix: '+' },
                { value: 15, label: 'Technologies', counter: true, suffix: '+' },
              ].map(({ value, label, counter, suffix }) => (
                <div
                  key={label}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-text-primary mb-0.5">
                    {counter ? (
                      <AnimatedCounter to={value as number} suffix={suffix} />
                    ) : (
                      value
                    )}
                  </div>
                  <div className="text-xs text-text-muted">{label}</div>
                </div>
              ))}
            </div>

            {/* Quick-info badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Terminal size={13} />, text: 'API-Driven Systems' },
                { icon: <Code2 size={13} />, text: 'Agentic AI' },
                { icon: <Layers size={13} />, text: 'Production Apps' },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                             bg-bg-card border border-border-default text-xs text-text-secondary
                             hover:border-primary hover:text-text-primary transition-colors duration-200"
                >
                  {icon}
                  {text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection('skills')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center
                     gap-1 text-text-muted hover:text-text-secondary transition-colors duration-200"
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
