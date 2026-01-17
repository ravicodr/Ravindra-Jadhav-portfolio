'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, Phone, Linkedin, Github } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully! 🚀');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(data.error || 'Failed to send message');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    {
      icon: Phone,
      label: '+91-9980924267',
      href: 'tel:+919980924267',
      color: 'from-cosmic-purple to-galaxy-blue',
    },
    {
      icon: Mail,
      label: 'Email Me',
      href: 'mailto:ravindrajadhav@example.com',
      color: 'from-galaxy-blue to-nebula-pink',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/ravindra-jadhav',
      color: 'from-nebula-pink to-moon-glow',
    },
    {
      icon: Github,
      label: 'GitHub - ravicodr',
      href: 'https://github.com/ravicodr',
      color: 'from-moon-glow to-cosmic-purple',
    },
  ];

  return (
    <section id="contact" className="py-20 px-[5%]">
      <Toaster position="top-center" />
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-cosmic-purple via-nebula-pink to-moon-glow bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-text-dim text-lg">
            Open to remote & onsite opportunities • Based in Mumbai / Navi Mumbai, India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white placeholder-text-dim"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white placeholder-text-dim"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white placeholder-text-dim"
                  placeholder="Job Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-effect rounded-lg border border-white/10 focus:border-cosmic-purple focus:outline-none focus:ring-2 focus:ring-cosmic-purple/50 transition-all text-white placeholder-text-dim resize-none"
                  placeholder="Let&apos;s discuss your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-lg font-semibold text-white shadow-lg shadow-cosmic-purple/50 hover:shadow-cosmic-purple/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <h3 className="font-orbitron text-2xl font-bold mb-6">Get in Touch</h3>

              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:glow-border transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-space-black flex items-center justify-center">
                      <link.icon className="w-6 h-6 text-cosmic-purple" />
                    </div>
                  </div>
                  <span className="text-text-white group-hover:text-cosmic-purple transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="font-orbitron text-xl font-bold mb-4">Education</h3>
              <div className="space-y-3 text-text-dim">
                <p>
                  <strong className="text-star-white">B.E. in Electronics & Telecommunication</strong>
                  <br />
                  Dr. D.Y. Patil College of Engineering, Pune
                  <br />
                  <span className="text-sm">2011 - 2015</span>
                </p>
                <p>
                  <strong className="text-star-white">Relevel Certified Full Stack Developer</strong>
                  <br />
                  <span className="text-sm">May 2023</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
