import React from 'react';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:nithin.sudheer@email.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-600 text-gray-300 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Built with React Badge */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>using</span>
            <div className="flex items-center space-x-1 px-3 py-1 bg-gray-800 rounded-full">
              <Code size={16} className="text-blue-400" />
              <span className="text-blue-400 font-medium">React</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p>&copy; {currentYear} Nithin Sudheer. All rights reserved.</p>
          </div>

          {/* Quote */}
          <div className="text-center">
            <p className="text-gray-500 italic max-w-md">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;