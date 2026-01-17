'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-[5%] border-t border-white/10 mt-20">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <p className="text-text-dim flex items-center justify-center gap-2">
            © {currentYear} Ravindra Jadhav. Crafted with{' '}
            <Heart className="w-4 h-4 text-nebula-pink fill-nebula-pink animate-pulse" /> under the
            stars.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-text-dim/60">
            <span>Built with</span>
            <span className="text-cosmic-purple font-semibold">Next.js</span>
            <span>•</span>
            <span className="text-galaxy-blue font-semibold">Tailwind CSS</span>
            <span>•</span>
            <span className="text-nebula-pink font-semibold">Framer Motion</span>
            <span>•</span>
            <span className="text-moon-glow font-semibold">MongoDB</span>
          </div>

          <p className="text-xs text-text-dim/40">
            &quot;The cosmos is within us. We are made of star-stuff.&quot; - Carl Sagan
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
