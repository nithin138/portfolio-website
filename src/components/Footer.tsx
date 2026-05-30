import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navCol1 = [
    { href: 'hero', label: 'Home' },
    { href: 'skills', label: 'Skills' },
    { href: 'languages-tools', label: 'Tools' },
  ];

  const navCol2 = [
    { href: 'projects', label: 'Projects' },
    { href: 'resume', label: 'Resume' },
    { href: 'contact', label: 'Contact' },
  ];

  const contactItems = [
    {
      icon: <Mail size={15} />,
      label: 'Email',
      value: 'nnsudheer138@gmail.com',
      href: 'mailto:nnsudheer138@gmail.com',
    },
    {
      icon: <Github size={15} />,
      label: 'GitHub',
      value: 'github.com/nithin138',
      href: 'https://github.com/nithin138',
    },
    {
      icon: <Linkedin size={15} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nithin138',
      href: 'https://www.linkedin.com/in/nithin138/',
    },
  ];

  const socialLinks = [
    { icon: <Github size={16} />, href: 'https://github.com/nithin138', label: 'GitHub' },
    { icon: <Linkedin size={16} />, href: 'https://www.linkedin.com/in/nithin138/', label: 'LinkedIn' },
    { icon: <Mail size={16} />, href: 'mailto:nnsudheer138@gmail.com', label: 'Email' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.08]" style={{ background: '#2563eb' }} />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* ── Col 1: Identity ── */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-lg font-bold text-text-primary tracking-tight leading-tight">
                Nithin Sudheer
              </p>
              <p className="text-sm text-primary font-medium mt-0.5">
                Full Stack Developer
              </p>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Focused on scalable web applications and clean architecture. Building products that are fast, reliable, and maintainable.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-text-secondary hover:text-primary transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(37,99,235,0.4)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(37,99,235,0.08)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {[...navCol1, ...navCol2].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="group flex items-center gap-1.5 py-1.5 text-sm text-text-secondary hover:text-primary transition-colors duration-200 focus:outline-none text-left"
                >
                  <span className="w-1 h-1 rounded-full bg-border-default group-hover:bg-primary transition-colors duration-200 flex-shrink-0" />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {link.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Col 3: Contact ── */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Get in Touch
            </p>
            <div className="flex flex-col gap-2">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-lg border border-transparent hover:border-border-default hover:bg-bg-card transition-all duration-200"
                >
                  <span className="w-7 h-7 flex items-center justify-center rounded-md bg-bg-card border border-border-default text-text-secondary group-hover:text-primary group-hover:border-primary/50 transition-all duration-200 flex-shrink-0">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-text-muted leading-none mb-0.5">{item.label}</p>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200 truncate">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="ml-auto text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} Nithin Sudheer. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
