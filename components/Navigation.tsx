'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#projects', label: 'Projects', icon: Code },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full px-[5%] py-6 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-space-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(99,102,241,0.2)]'
          : 'bg-space-black/70 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <motion.div
          className="font-orbitron text-2xl font-extrabold text-star-white glow-text tracking-[2px]"
          whileHover={{ scale: 1.05 }}
        >
          RAVI<span className="text-cosmic-purple">NDRA</span>
        </motion.div>

        <ul className="flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-text-dim font-medium text-base transition-all duration-300 hover:text-star-white tracking-wide flex items-center gap-2"
              >
                <link.icon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cosmic-purple group-hover:w-full transition-all duration-300" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
