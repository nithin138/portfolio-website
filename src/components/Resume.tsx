import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Award, Briefcase } from 'lucide-react';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,'; // In real app, this would be your actual resume PDF
    link.download = 'Nithin_Sudheer_Resume.pdf';
    link.click();
  };

  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: '2023 - Present',
      description: 'Developing scalable web applications using MERN stack, implementing AI/ML solutions, and managing databases.',
    },
    {
      title: 'Junior Developer',
      company: 'StartupXYZ',
      duration: '2022 - 2023',
      description: 'Built responsive web interfaces, integrated APIs, and collaborated on data analysis projects.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor in Computer Science',
      institution: 'University of Technology',
      year: '2022',
      gpa: '3.8/4.0',
    },
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'Google Data Analytics Certificate',
    'Meta React Developer Certificate',
    'MongoDB Developer Certification',
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
    <section id="resume" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Resume
          </motion.h2>

          {/* Download Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <button
              onClick={handleDownloadResume}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <Briefcase className="text-purple-400 mr-3" size={24} />
                <h3 className="text-2xl font-semibold text-white">Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                    <h4 className="text-lg font-semibold text-purple-400 mb-1">{exp.title}</h4>
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
                  <FileText className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                      <h4 className="text-lg font-semibold text-blue-400 mb-1">{edu.degree}</h4>
                      <p className="text-purple-400 mb-2">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">{edu.year}</p>
                        <p className="text-sm text-teal-400 font-medium">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center mb-6">
                  <Award className="text-teal-400 mr-3" size={24} />
                  <h3 className="text-2xl font-semibold text-white">Certifications</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-teal-500/50 transition-colors duration-300">
                      <div className="flex items-center">
                        <Award className="text-teal-400 mr-2" size={16} />
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