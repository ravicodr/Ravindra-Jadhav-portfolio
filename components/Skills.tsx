'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Server, Palette, Wrench, Cloud, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Palette,
      color: 'from-cosmic-purple to-galaxy-blue',
      skills: ['React.js', 'Next.js 14', 'Redux', 'Redux Toolkit', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-galaxy-blue to-nebula-pink',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'bcrypt', 'Role-Based Access Control'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-nebula-pink to-moon-glow',
      skills: ['MongoDB', 'Mongoose', 'MySQL', 'Query Optimization', 'Database Design', 'Aggregation'],
    },
    {
      title: 'AI & Integration',
      icon: Sparkles,
      color: 'from-moon-glow to-cosmic-purple',
      skills: ['OpenAI GPT-3.5', 'OpenAI API', 'AI Integration', 'Natural Language Processing', 'Predictive Analytics', 'Automation'],
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: 'from-cosmic-purple to-nebula-pink',
      skills: ['Git', 'GitHub', 'Docker', 'Postman', 'CI/CD', 'Travis CI', 'Jest', 'Mocha'],
    },
    {
      title: 'Architecture',
      icon: Code2,
      color: 'from-galaxy-blue to-moon-glow',
      skills: ['Microservices', 'MVC Pattern', 'SOLID Principles', 'Clean Architecture', 'Agile/Scrum', 'API Design'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4">
            Tech <span className="text-cosmic-purple">Arsenal</span>
          </h2>
          <p className="text-text-dim text-lg">Tools and technologies I wield</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-8 group hover:glow-border transition-all relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-space-black flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-cosmic-purple" />
                  </div>
                </div>

                <h3 className="font-orbitron text-2xl font-bold mb-4 text-star-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1.5 text-sm rounded-full glass-effect border border-white/10 text-text-white hover:border-cosmic-purple/50 transition-all cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
