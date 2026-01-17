'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Experience {
  _id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/experience')
      .then((res) => res.json())
      .then((data) => {
        if (data.experiences) {
          setExperiences(data.experiences);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch experiences:', error);
        // Use fallback data
        setExperiences(fallbackExperiences);
        setLoading(false);
      });
  }, []);

  const fallbackExperiences: Experience[] = [
    {
      _id: '1',
      company: 'Infine Ascents',
      role: 'Software Developer',
      location: 'Mumbai, India',
      startDate: 'Dec 2024',
      endDate: 'Present',
      achievements: [
        'Architected and developed comprehensive ERP system for Reliable Sign Supply, improving operational efficiency by 35%',
        'Engineered robust JWT authentication and role-based authorization securing 50+ system users',
        'Optimized database queries achieving 40% faster response times through efficient MongoDB aggregation',
        'Implemented Docker containerization reducing deployment time by 60%',
        'Delivered custom modules with 98% on-time delivery rate',
      ],
    },
    {
      _id: '2',
      company: 'Site Genius',
      role: 'Software Developer',
      location: 'Mumbai, India',
      startDate: 'Jan 2022',
      endDate: 'Jan 2024',
      achievements: [
        'Developed full-stack global e-commerce platform serving 10K+ daily active users across 15+ countries',
        'Built scalable RESTful APIs handling 100K+ requests daily with sub-200ms response times',
        'Integrated secure payment gateways (Stripe, PayPal) processing $500K+ monthly transactions',
        'Implemented comprehensive CRUD operations reducing cart abandonment by 25%',
        'Engineered dynamic React components improving UI performance by 45%',
        'Implemented authentication flows reducing unauthorized access by 80%',
      ],
    },
    {
      _id: '3',
      company: 'Maptek Software',
      role: 'Software Developer & Technical Mentor',
      location: 'Mumbai, India',
      startDate: 'Feb 2024',
      endDate: 'Mar 2024',
      achievements: [
        'Contributed to CRM application development serving 200+ concurrent users',
        'Mentored 3 junior developers improving team code quality by 40%',
        'Established reusable component library reducing development time by 30%',
        'Implemented automated testing achieving 85% code coverage',
      ],
    },
  ];

  if (loading) {
    return (
      <section id="experience" className="py-20 px-[5%]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="animate-pulse">Loading experiences...</div>
        </div>
      </section>
    );
  }

  const displayExperiences = experiences.length > 0 ? experiences : fallbackExperiences;

  return (
    <section id="experience" className="py-20 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4">
            Career <span className="text-cosmic-purple">Journey</span>
          </h2>
          <p className="text-text-dim text-lg">Milestones across the coding cosmos</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-purple via-nebula-pink to-moon-glow opacity-30" />

          <div className="space-y-12">
            {displayExperiences.map((exp, index) => (
              <motion.div
                key={exp._id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 lg:left-1/2 w-4 h-4 -ml-[7px] lg:-ml-2 mt-6 rounded-full bg-gradient-to-r from-cosmic-purple to-nebula-pink shadow-lg shadow-cosmic-purple/50" />

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-1 glass-effect rounded-2xl p-8 ml-8 lg:ml-0 hover:glow-border transition-all group"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-2">
                    <div>
                      <h3 className="font-orbitron text-2xl font-bold text-star-white group-hover:text-cosmic-purple transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-galaxy-blue font-semibold text-lg">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-text-dim text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {exp.startDate} – {exp.endDate}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + achIndex * 0.1 }}
                        className="flex items-start gap-3 text-text-white/90"
                      >
                        <span className="text-cosmic-purple mt-1">▹</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
