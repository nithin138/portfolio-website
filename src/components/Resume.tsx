import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Award, Briefcase, Sparkles, Eye } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
  gpa: string;
}

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      duration: 'November 2025 - Present',
      description: 'Developing scalable web applications using MERN stack, implementing AI/ML solutions, and managing cloud infrastructure.',
    },
    {
      title: 'Software Engineer',
      company: 'CodeFacts Solutions Pvt Ltd.',
      duration: 'May 2024 - October 2025',
      description: 'Developed scalable web applications using MERN stack, implemented AI/ML solutions, and managed databases.',
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400 font-medium">Professional Background</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Resume
            </h2>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={handleViewResume}
              className="btn-primary group inline-flex items-center justify-center px-4 py-3"
            >
              <Eye size={20} className="mr-2 group-hover:animate-pulse" />
              View Resume
            </button>

            <button
              onClick={handleDownloadResume}
              className="btn-secondary group inline-flex items-center justify-center px-4 py-3"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="glass-card rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-gradient-static mb-1">{exp.title}</h4>
                    <p className="text-orange-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-sm text-slate-400 mb-3">{exp.duration}</p>
                    <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants}>
              {/* Education */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-slate-500 to-gray-600">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="glass-card rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-gradient-static mb-1">{edu.degree}</h4>
                      <p className="text-orange-400 font-semibold mb-2">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-slate-400">{edu.year}</p>
                        <p className="text-sm text-orange-400 font-semibold">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500">
                    <Award size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="glass-card rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-2">
                        <Award className="text-amber-400 flex-shrink-0" size={16} />
                        <p className="text-slate-300 text-sm font-medium">{cert}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
