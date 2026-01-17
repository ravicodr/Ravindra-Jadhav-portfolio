'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Zap, Trophy } from 'lucide-react';

interface StatsData {
  experience: number;
  dau: number;
  apiRequests: number;
  projectsCompleted: number;
}

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  const [stats, setStats] = useState<StatsData>({
    experience: 4,
    dau: 10,
    apiRequests: 100,
    projectsCompleted: 25,
  });

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then((data) => {
        if (data.stats) {
          setStats(data.stats);
        }
      })
      .catch((error) => console.error('Failed to fetch stats:', error));
  }, []);

  const statsData = [
    {
      icon: Briefcase,
      value: stats.experience,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-cosmic-purple to-galaxy-blue',
    },
    {
      icon: Users,
      value: stats.dau,
      suffix: 'K+',
      label: 'Daily Active Users',
      color: 'from-galaxy-blue to-nebula-pink',
    },
    {
      icon: Zap,
      value: stats.apiRequests,
      suffix: 'K+',
      label: 'API Requests Daily',
      color: 'from-nebula-pink to-moon-glow',
    },
    {
      icon: Trophy,
      value: stats.projectsCompleted,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-moon-glow to-cosmic-purple',
    },
  ];

  return (
    <section className="py-20 px-[5%] relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4">
            Stats <span className="text-cosmic-purple">Constellation</span>
          </h2>
          <p className="text-text-dim text-lg">Numbers that speak louder than words</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-2xl p-8 text-center group hover:glow-border transition-all relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative z-10">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${stat.color} p-1`}>
                  <div className="w-full h-full rounded-full bg-space-black flex items-center justify-center">
                    <stat.icon className={`w-8 h-8 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                  </div>
                </div>

                <h3 className="font-orbitron text-5xl font-bold mb-3 bg-gradient-to-br from-star-white to-text-dim bg-clip-text text-transparent">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </h3>

                <p className="text-text-dim font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
