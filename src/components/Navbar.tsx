import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: 'hero', label: 'Home' },
    { href: 'skills', label: 'Skills' },
    { href: 'languages-tools', label: 'Tools' },
    { href: 'projects', label: 'Projects' },
    { href: 'resume', label: 'Resume' },
    { href: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('hero')}>
              Nithin Sudheer
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {activeSection === item.href && (
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg opacity-20"></span>
                  )}
                  <span className="relative">{item.label}</span>
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/nithin138"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-orange-400 transition-all duration-300 hover:scale-110 rounded-lg hover:bg-orange-500/10"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nithin138/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300 hover:text-orange-400 transition-all duration-300 hover:scale-110 rounded-lg hover:bg-orange-500/10"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-orange-500/10 transition-all duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-300 ${
                  activeSection === item.href
                    ? 'bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-white border border-orange-500/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex space-x-4 px-4 py-3">
              <a
                href="https://github.com/nithin138"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-orange-400 transition-all duration-300 rounded-lg hover:bg-orange-500/10"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nithin138/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-orange-400 transition-all duration-300 rounded-lg hover:bg-orange-500/10"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
