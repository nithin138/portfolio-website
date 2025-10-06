import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Award, Briefcase } from 'lucide-react';

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

type ResumeType = 'mern' | 'data';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadResume = (type: ResumeType) => {
    const link = document.createElement('a');

    if (type === 'mern') {
      link.href = 'public/nithin sudheer narayanapuram MERN[resume].docx';
      link.download = 'Nithin_Sudheer_MERN_Developer.docx';
    } else if (type === 'data') {
      link.href = 'public/nithin sudheer narayanapuram DA [resume].docx';
      link.download = 'Nithin_Sudheer_Data_Analyst.docx';
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'CodeFacts Solutions Pvt Ltd.',
      duration: 'May 2024 - Present',
      description: 'Developing scalable web applications using MERN stack, implementing AI/ML solutions, and managing databases.',
    },
 
  ];

  const education: Education[] = [
    {
      degree: 'Bachelor in Computer Science',
      institution: 'Anurag Engineering Colelge',
      year: 'May 2024',
      gpa: '7.5',
    },
  ];

  const certifications: string[] = [
    'IBM Data Analyst',
    'Cisco Data Analytics Essentials',
    'Forage Data Visualitation',
    'IBM AI Fundamentals',

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
    <section id="resume" className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 bg-cyan-500 bg-clip-text text-transparent"
          >
            Resume
          </motion.h2>

          {/* Download Buttons */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button
              onClick={() => handleDownloadResume('mern')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-purple-700 hover:to-blue-700 rounded-full text-gray-800 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download MERN Developer Resume
            </button>

            <button
              onClick={() => handleDownloadResume('data')}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-teal-600 hover:to-green-600 rounded-full text-gray-800 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download Data Analyst Resume
            </button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <Briefcase className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-1">{exp.title}</h4>
                    <p className="text-blue-400 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants}>
              {/* Education */}
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <FileText className="text-cyan-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-cyan-400">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-1">{edu.degree}</h4>
                      <p className="text-blue-400 mb-2">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">{edu.year}</p>
                        <p className="text-sm text-cyan-400 font-medium">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center mb-6">
                  <Award className="text-cyan-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-cyan-400/50 transition-colors duration-300">
                      <div className="flex items-center">
                        <Award className="text-cyan-400 mr-2" size={16} />
                        <p className="text-gray-300 text-sm font-medium">{cert}</p>
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
