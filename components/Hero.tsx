'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Briefcase, Zap } from 'lucide-react';

const roles = [
  'Full Stack MERN Developer',
  'Next.js & TypeScript Expert',
  'AI Integration Specialist',
  'SaaS & Enterprise Architect',
];

const floatingBadges = [
  { label: 'React', x: '-left-6', y: 'top-8', delay: 0 },
  { label: 'Next.js', x: '-right-4', y: 'top-16', delay: 0.3 },
  { label: 'MongoDB', x: '-left-8', y: 'bottom-20', delay: 0.6 },
  { label: 'Node.js', x: '-right-6', y: 'bottom-10', delay: 0.9 },
  { label: 'TypeScript', x: 'left-4', y: '-top-4', delay: 1.2 },
  { label: 'OpenAI', x: 'right-2', y: '-top-2', delay: 1.5 },
];

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Shipped' },
  { value: '10K+', label: 'Daily Active Users' },
  { value: '100%', label: 'Client Satisfaction' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setMousePosition({
      x: (centerX - x) / 15,
      y: (y - centerY) / 15,
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-[5%] pt-32 pb-16 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nebula-pink/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-green-500/30 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-green-400 font-semibold">Open to Work — Remote & Onsite</span>
          </motion.div>

          <motion.h1
            className="font-orbitron text-5xl lg:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-cosmic-purple via-nebula-pink to-moon-glow bg-clip-text text-transparent">
              Ravindra Jadhav
            </span>
          </motion.h1>

          {/* Animated rotating role */}
          <motion.div
            className="h-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-2xl text-text-dim font-rajdhani font-semibold flex items-center gap-2"
              >
                <Zap className="w-5 h-5 text-moon-glow flex-shrink-0" />
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="text-lg text-text-white/80 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Results-driven Full Stack developer with{' '}
            <span className="text-cosmic-purple font-semibold">4+ years</span> architecting scalable
            web applications and SaaS platforms. Specialized in{' '}
            <span className="text-moon-glow font-semibold">AI-powered solutions</span> and
            enterprise systems serving{' '}
            <span className="text-nebula-pink font-semibold">10K+ users</span> daily.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-3 text-center border border-white/5 hover:border-cosmic-purple/40 transition-all"
              >
                <div className="font-orbitron text-xl font-bold bg-gradient-to-r from-cosmic-purple to-nebula-pink bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-text-dim mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-xl font-semibold text-white shadow-lg shadow-cosmic-purple/50 hover:shadow-cosmic-purple/80 transition-all flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Hire Me
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-xl font-semibold text-white hover:glow-border hover:border-cosmic-purple/50 transition-all flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              View Projects
            </motion.a>

            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 glass-effect rounded-xl font-semibold text-text-dim hover:text-white hover:border-cosmic-purple/50 transition-all flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-2 text-sm text-text-dim">
              <MapPin className="w-4 h-4 text-nebula-pink" />
              Mumbai / Navi Mumbai, India
            </div>
            <div className="h-4 w-px bg-white/10" />
            {[
              { icon: Github, href: 'https://github.com/ravicodr', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ravindra-jadhav', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:rjadha757@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                title={social.label}
                className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-text-dim hover:text-cosmic-purple hover:glow-border transition-all"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - 3D Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          {/* Floating tech badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={i}
              className={`absolute ${badge.x} ${badge.y} z-20`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + badge.delay, type: 'spring', stiffness: 200 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: badge.delay }}
                className="px-3 py-1.5 glass-effect rounded-full text-xs font-semibold text-cosmic-purple border border-cosmic-purple/30 shadow-lg shadow-cosmic-purple/20 whitespace-nowrap"
              >
                {badge.label}
              </motion.div>
            </motion.div>
          ))}

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
            className="glass-effect rounded-3xl p-8 glow-border transform-gpu relative overflow-hidden w-full max-w-sm"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/20 via-transparent to-nebula-pink/20 pointer-events-none" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent pointer-events-none"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative z-10 space-y-6">
              <div className="text-center">
                {/* Profile ring */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-purple via-nebula-pink to-moon-glow"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="absolute inset-[3px] rounded-full bg-space-black" />
                  <div className="absolute inset-[4px] rounded-full overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Ravindra Jadhav"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-orbitron font-bold text-star-white mb-1">
                  Ravindra Jadhav
                </h3>
                <p className="text-text-dim text-sm">MERN Stack • AI • SaaS</p>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Location', value: 'Mumbai, India', color: 'text-nebula-pink' },
                  { label: 'Experience', value: '4+ Years', color: 'text-moon-glow' },
                  { label: 'Status', value: '● Open to Work', color: 'text-green-400' },
                  { label: 'Specialty', value: 'AI + Full Stack', color: 'text-cosmic-purple' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="flex justify-between items-center py-2.5 border-b border-white/8 last:border-0"
                  >
                    <span className="text-text-dim text-sm">{item.label}</span>
                    <span className={`font-semibold text-sm ${item.color}`}>{item.value}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech stack mini icons */}
              <div className="pt-2">
                <p className="text-xs text-text-dim mb-3 text-center">Core Stack</p>
                <div className="flex justify-center gap-2 flex-wrap">
                  {['M', 'E', 'R', 'N', 'TS', 'AI'].map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.2, y: -2 }}
                      className="w-8 h-8 rounded-lg bg-gradient-to-br from-cosmic-purple/30 to-nebula-pink/20 border border-cosmic-purple/30 flex items-center justify-center text-xs font-bold text-cosmic-purple"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
