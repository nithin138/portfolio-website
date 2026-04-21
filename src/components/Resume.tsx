import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useInViewObs } from 'react-intersection-observer';
import { Download, Eye, CheckCircle2, FileText, Briefcase, Award, GraduationCap } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  bullets: string[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
}

const Resume: React.FC = () => {
  const [ref, inView] = useInViewObs({ triggerOnce: true, threshold: 0.1 });
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineInView = useInView(timelineRef, { once: true });

  const handleViewResume = () => {
    window.open('/nithin sudheer narayanapuram MERN[resume].pdf', '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/nithin sudheer narayanapuram MERN[resume].docx';
    link.download = 'Nithin_Sudheer_FullStack_AI_Developer.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences: Experience[] = [
    {
      title: 'Full Stack Developer',
      company: 'Vyva IT Solutions',
      duration: 'November 2025 – Present',
      bullets: [
        'Building scalable MERN stack applications with a focus on performance and clean architecture.',
        'Integrating AI/ML features into production web applications.',
        'Managing cloud infrastructure and deployment pipelines on AWS.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'CodeFacts Solutions Pvt Ltd.',
      duration: 'May 2024 – October 2025',
      bullets: [
        'Developed and maintained full-stack web applications using React and Node.js.',
        'Designed RESTful APIs and integrated third-party services at scale.',
        'Handled database design and optimization across MongoDB and SQL systems.',
      ],
    },
  ];

  const education: Education[] = [
    {
      degree: 'Bachelor in Computer Science',
      institution: 'Anurag Engineering College',
      year: 'May 2024',
      gpa: '7.5',
    },
  ];

  const certifications: string[] = [
    'IBM AI Fundamentals',
    'AWS Cloud Practitioner',
    'MongoDB Developer',
    'React Advanced Patterns',
  ];

  const highlights: string[] = [
    'Built and deployed full-stack applications using React, Node.js, and MongoDB',
    'Designed RESTful APIs and integrated third-party services at scale',
    'Implemented AI/ML features into production web applications',
    'Managed cloud infrastructure and CI/CD pipelines on AWS',
    'Delivered clean, maintainable code focused on performance and architecture',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.15, staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="resume" className="py-20 bg-bg-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >

          {/* ── ROW 1: Header + summary + CTA ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          >
            {/* Title + summary */}
            <div className="max-w-xl">
              <motion.h2
                initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
                animate={inView ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="text-4xl font-bold text-text-primary mb-3"
              >
                Resume
              </motion.h2>
              <p className="text-text-secondary text-[0.95rem] leading-relaxed">
                Full-stack developer with hands-on experience building scalable web applications
                using modern frontend and backend technologies. Focused on performance, clean
                architecture, and real-world solutions.
              </p>
            </div>

            {/* CTA group */}
            <div className="flex flex-col sm:items-end gap-2 flex-shrink-0">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-colors duration-200"
              >
                <Download size={16} />
                Download Resume
              </button>
              <button
                onClick={handleViewResume}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border-default hover:border-primary text-text-secondary hover:text-primary font-medium text-sm transition-colors duration-200"
              >
                <Eye size={15} />
                View Online
              </button>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="h-px bg-border-default" />

          {/* ── ROW 2: Experience (left) + Education & Certs (right) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ── Experience ── */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={16} className="text-primary" />
                <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest">
                  Experience
                </h3>
              </div>

              {/* Timeline */}
              <div ref={timelineRef} className="relative pl-5 space-y-8">
                {/* Animated vertical line */}
                <motion.div
                  className="absolute left-0 top-2 w-px bg-gradient-to-b from-primary to-secondary origin-top"
                  initial={{ scaleY: 0 }}
                  animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
                  style={{ bottom: '0.5rem' }}
                />

                {experiences.map((exp, i) => (
                  <div key={i} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-bg-section" />

                    <motion.div
                      className="glass-card rounded-xl p-5"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                        <h4 className="text-text-primary font-semibold text-[0.95rem]">
                          {exp.title}
                        </h4>
                        <span className="text-[11px] text-text-muted whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="text-primary-light text-sm font-medium mb-3">{exp.company}</p>
                      <ul className="space-y-1.5">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-text-muted flex-shrink-0" />
                            <span className="text-text-secondary text-sm leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Education + Certifications ── */}
            <motion.div variants={itemVariants} className="space-y-8">

              {/* Education */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap size={16} className="text-primary" />
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest">
                    Education
                  </h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, i) => (
                    <motion.div
                      key={i}
                      className="glass-card rounded-xl p-5"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                        <h4 className="text-text-primary font-semibold text-[0.95rem]">
                          {edu.degree}
                        </h4>
                        <span className="text-[11px] text-text-muted">{edu.year}</span>
                      </div>
                      <p className="text-primary-light text-sm font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-text-muted text-xs">GPA: {edu.gpa}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <Award size={16} className="text-primary" />
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest">
                    Certifications
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      className="glass-card rounded-xl p-4 flex items-center gap-3"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-text-secondary text-sm font-medium">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

          {/* ── ROW 3: Key Highlights ── */}
          <motion.div variants={itemVariants}>
            <div className="h-px bg-border-default mb-10" />
            <div className="flex items-center gap-2 mb-6">
              <FileText size={16} className="text-primary" />
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest">
                Key Highlights
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-bg-card border border-border-default"
                >
                  <CheckCircle2 size={15} className="text-primary mt-[2px] flex-shrink-0" />
                  <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
