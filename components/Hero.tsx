'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;

    setMousePosition({ x: rotateY, y: rotateX });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-[5%] pt-32 pb-16">
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="font-orbitron text-6xl lg:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-cosmic-purple via-nebula-pink to-moon-glow bg-clip-text text-transparent">
              Ravindra Jadhav
            </span>
          </motion.h1>

          <motion.p
            className="text-2xl text-text-dim font-rajdhani font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack MERN Developer
          </motion.p>

          <motion.p
            className="text-lg text-text-white/80 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Results-driven Full Stack MERN Developer with <span className="text-cosmic-purple font-semibold">4+ years</span> of
            experience architecting scalable web applications. Specialized in building high-performance
            SaaS platforms and enterprise solutions with <span className="text-moon-glow font-semibold">AI integration</span> serving{' '}
            <span className="text-nebula-pink font-semibold">10K+ users</span> daily.
            Proven expertise in Next.js, TypeScript, MongoDB, and intelligent automation.
          </motion.p>

          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-lg font-semibold text-white shadow-lg shadow-cosmic-purple/50 hover:shadow-cosmic-purple/80 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-lg font-semibold text-white hover:glow-border transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="flex gap-6 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: Github, href: 'https://github.com/ravicodr' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ravindra-jadhav' },
              { icon: Mail, href: 'mailto:ravindrajadhav@example.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-text-dim hover:text-cosmic-purple hover:glow-border transition-all"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - 3D Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setMousePosition({ x: 0, y: 0 });
            }}
            animate={{
              rotateY: isHovering ? mousePosition.x : 0,
              rotateX: isHovering ? mousePosition.y : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ perspective: 1500 }}
            className="glass-effect rounded-3xl p-8 glow-border transform-gpu relative overflow-hidden"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/20 via-transparent to-nebula-pink/20 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cosmic-purple to-nebula-pink p-1">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Ravindra Jadhav"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-orbitron font-bold text-star-white mb-2">
                  MERN Stack Expert
                </h3>
                <p className="text-text-dim">MongoDB • Express • React • Node.js</p>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Location', value: 'Mumbai, India' },
                  { label: 'Experience', value: '4+ Years' },
                  { label: 'Availability', value: 'Open to Work' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-white/10"
                  >
                    <span className="text-text-dim">{item.label}</span>
                    <span className="text-star-white font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
