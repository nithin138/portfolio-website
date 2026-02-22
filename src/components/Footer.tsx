import React from 'react';
import { Github, Linkedin, Mail, Heart, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/nithin138',
      label: 'GitHub',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/nithin138/',
      label: 'LinkedIn',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:nnsudheer138@gmail.com',
      label: 'Email',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient mb-2">Nithin Sudheer</h3>
            <p className="text-slate-400 text-sm">Full-Stack AI Developer | AI/ML Expert | Cloud Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 glass-card rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-glow`}
                aria-label={link.label}
              >
                <div className={`text-slate-300 group-hover:text-white transition-colors duration-300`}>
                  {link.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

          {/* Built with Badge */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>using</span>
            <div className="flex items-center gap-1.5 px-3 py-1.5 glass-card rounded-lg">
              <Code size={16} className="text-cyan-400" />
              <span className="text-cyan-400 font-semibold">React</span>
            </div>
            <span>&</span>
            <div className="flex items-center gap-1.5 px-3 py-1.5 glass-card rounded-lg">
              <Sparkles size={16} className="text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Tailwind</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-500 text-sm">
            <p>&copy; {currentYear} Nithin Sudheer. All rights reserved.</p>
          </div>

          {/* Quote */}
          <div className="text-center max-w-2xl">
            <p className="text-slate-500 italic text-sm">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
