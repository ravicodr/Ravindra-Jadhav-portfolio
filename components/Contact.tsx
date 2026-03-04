'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Phone, Linkedin, Github, MessageSquare, User, FileText, CheckCircle2 } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent! I\'ll get back to you soon.');
        setSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        toast.error(data.error || 'Failed to send message');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    {
      icon: Phone,
      label: '+91 99809 24267',
      sublabel: 'Call or WhatsApp',
      href: 'tel:+919980924267',
      gradient: 'from-cosmic-purple to-galaxy-blue',
    },
    {
      icon: Mail,
      label: 'rjadha757@gmail.com',
      sublabel: 'Email me directly',
      href: 'mailto:rjadha757@gmail.com',
      gradient: 'from-galaxy-blue to-nebula-pink',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      sublabel: 'Connect professionally',
      href: 'https://www.linkedin.com/in/ravindra-jadhav',
      gradient: 'from-nebula-pink to-moon-glow',
    },
    {
      icon: Github,
      label: 'github.com/ravicodr',
      sublabel: 'See my code',
      href: 'https://github.com/ravicodr',
      gradient: 'from-moon-glow to-cosmic-purple',
    },
  ];

  return (
    <section id="contact" className="py-20 px-[5%] relative overflow-hidden">
      <Toaster position="top-center" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cosmic-purple/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-cosmic-purple/30 mb-6"
          >
            <MessageSquare className="w-4 h-4 text-cosmic-purple" />
            <span className="text-sm text-text-dim">Available for new projects</span>
          </motion.div>

          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-cosmic-purple via-nebula-pink to-moon-glow bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-text-dim text-lg max-w-xl mx-auto">
            Have a project in mind? Fill the form and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect rounded-2xl p-8 relative overflow-hidden">
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cosmic-purple via-nebula-pink to-moon-glow" />

              <h3 className="font-orbitron text-xl font-bold mb-6 text-star-white">Send a Message</h3>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="font-orbitron text-lg font-bold text-star-white">Message Sent!</h4>
                  <p className="text-text-dim text-sm max-w-xs">
                    Thanks for reaching out. I&apos;ll review your message and get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-dim mb-2 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" /> Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 transition-all text-white placeholder-text-dim/50 text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dim mb-2 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" /> Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 transition-all text-white placeholder-text-dim/50 text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dim mb-2 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" /> Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 transition-all text-white placeholder-text-dim/50 text-sm"
                      placeholder="Project Inquiry / Job Opportunity"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dim mb-2 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" /> Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/30 transition-all text-white placeholder-text-dim/50 resize-none text-sm"
                      placeholder="Tell me about your project, timeline, and budget..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-xl font-semibold text-white shadow-lg shadow-cosmic-purple/40 hover:shadow-cosmic-purple/70 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Links + Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-nebula-pink via-moon-glow to-cosmic-purple" />
              <h3 className="font-orbitron text-lg font-bold mb-5 text-star-white">Get in Touch</h3>
              <div className="space-y-3">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/3 border border-white/5 hover:border-cosmic-purple/30 hover:bg-cosmic-purple/5 transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.gradient} p-0.5 flex-shrink-0`}>
                      <div className="w-full h-full rounded-lg bg-space-black flex items-center justify-center">
                        <link.icon className="w-4 h-4 text-cosmic-purple" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-white group-hover:text-cosmic-purple transition-colors">
                        {link.label}
                      </div>
                      <div className="text-xs text-text-dim">{link.sublabel}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h3 className="font-orbitron text-lg font-bold mb-4 text-star-white">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-cosmic-purple/40 pl-4">
                  <p className="font-semibold text-star-white text-sm">B.E. Electronics & Telecommunication</p>
                  <p className="text-text-dim text-xs mt-0.5">Dr. D.Y. Patil College of Engineering, Pune</p>
                  <p className="text-cosmic-purple text-xs mt-0.5">2011 – 2015</p>
                </div>
                <div className="border-l-2 border-nebula-pink/40 pl-4">
                  <p className="font-semibold text-star-white text-sm">Relevel Certified Full Stack Developer</p>
                  <p className="text-text-dim text-xs mt-0.5">Full Stack Web Development Certification</p>
                  <p className="text-nebula-pink text-xs mt-0.5">May 2023</p>
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <div className="glass-effect rounded-2xl p-5 border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-sm font-semibold text-green-400">Typically responds within 24 hours</p>
                  <p className="text-xs text-text-dim mt-0.5">Based in Mumbai — IST timezone</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
