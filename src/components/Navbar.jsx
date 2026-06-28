import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { href: 'hero', label: 'Home' },
    { href: 'skills', label: 'Skills' },
    { href: 'languages-tools', label: 'Tools' },
    { href: 'projects', label: 'Projects' },
    { href: 'resume', label: 'Resume' },
    { href: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : 'navbar-top'
      }`}
    >
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex-shrink-0 group focus:outline-none"
          >
            <span className="text-base font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors duration-200">
              N<span className="text-gradient">S</span>
              <span className="text-text-secondary font-normal text-sm ml-1.5 hidden sm:inline">
                Nithin Sudheer
              </span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none ${
                  activeSection === item.href
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-200 ${
                    activeSection === item.href ? 'w-4/5 opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/nithin sudheer narayanapuram MERN[resume].pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium rounded-lg text-white hover:opacity-90 transition-colors duration-200 focus:outline-none"
              style={{ background: '#2563eb' }}
            >
              Download CV
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="navbar-mobile-panel px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeSection === item.href
                  ? 'bg-primary/10 text-text-primary border-l-2 border-primary pl-3.5'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 pb-1">
            <a
              href="/nithin sudheer narayanapuram MERN[resume].pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium rounded-lg text-white hover:opacity-90 transition-colors duration-200"
              style={{ background: '#2563eb' }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
