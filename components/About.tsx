'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Code, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: '4+ Years Experience',
      description: 'Building scalable web applications for product-based companies and startups',
      color: 'from-cosmic-purple to-galaxy-blue',
    },
    {
      icon: Code,
      title: 'Full Stack Expertise',
      description: 'MERN stack specialist with proven track record in enterprise solutions',
      color: 'from-galaxy-blue to-nebula-pink',
    },
    {
      icon: Rocket,
      title: 'Performance Focused',
      description: 'Optimizing applications handling 100K+ API requests with sub-200ms response',
      color: 'from-nebula-pink to-moon-glow',
    },
    {
      icon: Award,
      title: 'Technical Leadership',
      description: 'Mentoring developers and driving measurable business impact',
      color: 'from-moon-glow to-cosmic-purple',
    },
  ];

  return (
    <section id="about" className="py-20 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-cosmic-purple">Me</span>
          </h2>
          <p className="text-text-dim text-lg max-w-3xl mx-auto">
            Passionate Full Stack Developer dedicated to crafting innovative solutions and delivering excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 space-y-4">
              <h3 className="font-orbitron text-2xl font-bold text-cosmic-purple mb-4">
                Professional Summary
              </h3>
              <p className="text-text-white/90 leading-relaxed">
                Results-driven Full Stack MERN Developer with 4+ years of experience architecting and 
                delivering scalable web applications for product-based companies and startups.
              </p>
              <p className="text-text-white/90 leading-relaxed">
                Proven expertise in building high-performance SaaS platforms, enterprise CRM systems, 
                and e-commerce solutions handling 10K+ concurrent users. Strong foundation in clean 
                architecture, RESTful API design, and performance optimization.
              </p>
              <p className="text-text-white/90 leading-relaxed">
                Demonstrated ability to lead technical initiatives, mentor junior developers, and drive 
                measurable business impact through innovative solutions. Currently seeking challenging 
                opportunities to leverage technical expertise in building next-generation web applications.
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-effect rounded-2xl p-6 hover:glow-border transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-xl bg-space-black flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-cosmic-purple" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-orbitron text-lg font-bold text-star-white mb-2 group-hover:text-cosmic-purple transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-dim text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
