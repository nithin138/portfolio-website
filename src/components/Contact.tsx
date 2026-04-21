import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const serviceId = 'service_v8fh3os';
      const templateId = 'template_qf15va7';
      const publicKey = 'T1vGIjDo1m0X_QByq';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Nithin Sudheer',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setIsSubmitting(false);
      setError('Failed to send message. Please try again or email directly.');
      setTimeout(() => setError(''), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'nnsudheer138@gmail.com',
      href: 'mailto:nnsudheer138@gmail.com',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nithin138',
      href: 'https://www.linkedin.com/in/nithin138/',
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/nithin138',
      href: 'https://github.com/nithin138',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={inView ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl font-bold text-text-primary mb-4"
            >
              Get In <span className="text-primary">Touch</span>
            </motion.h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info */}
            <motion.div variants={itemVariants} className="flex flex-col gap-8">
              {/* Intro */}
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">Let's work together</h3>
                <p className="text-text-secondary leading-relaxed">
                  I'm open to full-time opportunities, freelance projects, and collaborations.
                  Whether you have a clear brief or just an idea — I'd love to hear about it.
                </p>
              </div>

              {/* What I can help with */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">What I can help with</p>
                <ul className="space-y-3">
                  {[
                    'Full-stack web development',
                    'MERN / React applications',
                    'API design & integration',
                    'Freelance & contract work',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact methods */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Reach me at</p>
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-bg-card border border-border-default rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <span className="text-primary">{method.icon}</span>
                    <div>
                      <div className="text-xs text-text-muted">{method.label}</div>
                      <div className="text-sm text-text-secondary group-hover:text-primary transition-colors">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response time */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm text-text-muted">Typically responds within 1–2 days</p>
              </div>
            </motion.div>

            {/* Right: Contact Form Card */}
            <motion.div variants={itemVariants}>
              <div className="bg-bg-card border border-border-default rounded-2xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-bg-section border border-border-default rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-bg-section border border-border-default rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-bg-section border border-border-default rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>

                  {error && (
                    <div className="flex items-center gap-2 p-3 bg-error/10 border border-error/30 rounded-lg text-error text-sm">
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}

                  {isSubmitted && (
                    <div className="flex items-center gap-2 p-3 bg-success/10 border border-success/30 rounded-lg text-success text-sm">
                      <CheckCircle size={18} />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </div>
                  )}
                </form>

                <p className="text-xs text-text-muted text-center mt-6">
                  No spam. Your message goes directly to my inbox.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
