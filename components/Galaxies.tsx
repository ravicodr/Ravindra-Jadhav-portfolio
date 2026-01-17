'use client';

import { motion } from 'framer-motion';

export default function Galaxies() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[80px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgb(99, 102, 241) 0%, transparent 70%)',
          top: '-100px',
          left: '-100px',
        }}
        animate={{
          x: [0, 30, -20, 40, 0],
          y: [0, -30, 20, 40, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgb(59, 130, 246) 0%, transparent 70%)',
          top: '30%',
          right: '-50px',
        }}
        animate={{
          x: [0, -30, 20, -40, 0],
          y: [0, 30, -20, -40, 0],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 10,
        }}
      />

      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full blur-[80px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgb(236, 72, 153) 0%, transparent 70%)',
          bottom: '-100px',
          left: '30%',
        }}
        animate={{
          x: [0, 40, -30, 20, 0],
          y: [0, -40, 30, -20, 0],
          scale: [1, 1.05, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 20,
        }}
      />
    </div>
  );
}
