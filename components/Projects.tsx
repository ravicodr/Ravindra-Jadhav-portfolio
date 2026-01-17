'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Github, Layers, ShoppingCart, Building2, Zap, Users, Lock, Database, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  technologies: string[];
  category: string;
  icon: any;
  gradient: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        if (data.projects && data.projects.length > 0) {
          setProjects(data.projects);
        } else {
          // Use fallback projects if none in database
          setProjects(fallbackProjects);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch projects:', error);
        setProjects(fallbackProjects);
        setLoading(false);
      });
  }, []);

  const fallbackProjects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Enterprise ERP Platform',
      description: 'Full-stack AI-powered ERP system for inventory management, order tracking, and business analytics with intelligent automation and real-time insights.',
      problem: 'Businesses struggle with manual inventory tracking, inefficient order processing, lack of real-time insights, and inability to predict stock requirements, leading to 35% operational inefficiency.',
      solution: 'Built comprehensive ERP with AI-powered features using OpenAI GPT-3.5 for intelligent product descriptions, inventory optimization, demand forecasting, and conversational business queries. Integrated real-time analytics dashboard with automated alerts.',
      impact: [
        '35% operational efficiency improvement',
        '60% reduction in stockout incidents',
        '500+ daily orders processing capacity',
        '50+ concurrent users with role-based access',
        'AI reduces description writing time by 80%',
        'Predictive analytics for inventory optimization',
      ],
      technologies: ['Next.js 14', 'TypeScript', 'MongoDB', 'OpenAI GPT-3.5', 'Tailwind CSS', 'Recharts', 'JWT', 'bcrypt'],
      category: 'enterprise',
      icon: Building2,
      gradient: 'from-cosmic-purple to-galaxy-blue',
      demoUrl: 'https://enterprise-erp-business-management-seven.vercel.app/',
      githubUrl: 'https://github.com/ravicodr/Enterprise-ERP-Business-Management-System',
      featured: true,
    },
    {
      id: 2,
      title: 'Global E-Commerce Marketplace',
      description: 'Multi-currency e-commerce platform supporting international shipping, payment processing, and real-time inventory across 15+ countries.',
      problem: 'Traditional e-commerce struggled with multi-currency support, international shipping complexities, and scaling to handle 10K+ concurrent users.',
      solution: 'Engineered scalable microservices architecture with Stripe/PayPal integration, automated currency conversion, optimized CDN delivery, and Redis caching.',
      impact: [
        'Serving 10,000+ daily active users',
        'Processing $500K+ monthly transactions',
        '100K+ API requests daily with <200ms response',
        '25% reduction in cart abandonment',
        '99.9% payment success rate',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'PayPal', 'Redis', 'AWS S3', 'Material-UI'],
      category: 'ecommerce',
      icon: ShoppingCart,
      gradient: 'from-galaxy-blue to-nebula-pink',
      demoUrl: '',
      githubUrl: '',
      featured: false,
    },
    {
      id: 3,
      title: 'Real-Time CRM Analytics Dashboard',
      description: 'Enterprise CRM with customer lifecycle management, sales pipeline tracking, and predictive analytics for 200+ concurrent users.',
      problem: 'Sales teams lacked unified customer view, manual data entry caused errors, and no actionable insights for pipeline optimization.',
      solution: 'Developed modular CRM with WebSocket real-time updates, automated lead scoring, interactive analytics dashboards, and customizable workflow automation.',
      impact: [
        '200+ concurrent users supported',
        '40% improvement in sales team productivity',
        '85% automated data accuracy',
        '30% faster deal closure rates',
        'Real-time collaboration features',
      ],
      technologies: ['Next.js', 'Express', 'MongoDB', 'WebSocket', 'D3.js', 'Node.js', 'JWT', 'Tailwind CSS'],
      category: 'saas',
      icon: Layers,
      gradient: 'from-nebula-pink to-moon-glow',
      demoUrl: '',
      githubUrl: '',
      featured: false,
    },
    {
      id: 4,
      title: 'AI-Powered Task Management SaaS',
      description: 'Next-gen project management tool with AI task prioritization, team collaboration, time tracking, and intelligent workload distribution.',
      problem: 'Teams struggled with task prioritization, unbalanced workloads, missed deadlines, and lack of visibility into project health.',
      solution: 'Built smart task management platform using Next.js 14 with AI-driven priority recommendations, drag-and-drop boards, real-time notifications, and automated reporting.',
      impact: [
        '60% improvement in task completion rates',
        'AI reduces planning time by 45%',
        'Supporting 1000+ active projects',
        'Smart workload balancing across teams',
        'Integrated with Slack, Jira, GitHub',
      ],
      technologies: ['Next.js 14', 'TypeScript', 'MongoDB', 'OpenAI API', 'Framer Motion', 'Tailwind CSS', 'Next-Auth', 'Prisma'],
      category: 'saas',
      icon: Sparkles,
      gradient: 'from-moon-glow to-cosmic-purple',
      demoUrl: '',
      githubUrl: '',
      featured: false,
    },
    {
      id: 5,
      title: 'AI Email Summarizer Workflow',
      description: 'Intelligent email management system with OpenAI-powered summarization, smart categorization, keyword extraction, and PostgreSQL persistence.',
      problem: 'Email overload leads to missed important messages, time wasted reading lengthy emails, and difficulty organizing communications by priority and category.',
      solution: 'Built full-stack workflow automation using OpenAI GPT-3.5 for intelligent 2-3 sentence summaries, automatic categorization into 7 types (Meeting, Invoice, Support, Newsletter, etc.), keyword extraction, and Neon PostgreSQL database with real-time filtering and CSV export capabilities.',
      impact: [
        'Processes 12+ emails with AI summaries in under 20 seconds',
        'Smart categorization across 7+ email types',
        'Keyword extraction for quick scanning',
        'CSV export for data portability',
        'Re-summarize on demand for context changes',
        'RESTful API with comprehensive endpoints',
      ],
      technologies: ['React 18', 'TypeScript', 'Node.js', 'Express', 'OpenAI GPT-3.5', 'Neon PostgreSQL', 'Drizzle ORM', 'Vite'],
      category: 'saas',
      icon: Sparkles,
      gradient: 'from-cosmic-purple to-galaxy-blue',
      demoUrl: 'https://email-summarizer-workflow--bloodthrone9.replit.app',
      githubUrl: 'https://github.com/ravicodr/email-summarizer-workflow',
      featured: true,
    },
  ];

  if (loading) {
    return (
      <section id="projects" className="py-20 px-[5%]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="animate-pulse">Loading projects...</div>
        </div>
      </section>
    );
  }

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'saas', label: 'SaaS' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-cosmic-purple">Projects</span>
          </h2>
          <p className="text-text-dim text-lg">
            Real-world solutions solving complex business problems
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-cosmic-purple to-nebula-pink text-white shadow-lg shadow-cosmic-purple/50'
                  : 'glass-effect text-text-dim hover:text-white hover:border-cosmic-purple/50'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-effect rounded-2xl p-8 hover:glow-border transition-all h-full relative overflow-hidden">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-moon-glow to-cosmic-purple rounded-full text-xs font-bold">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

                <div className="relative z-10 space-y-6">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} p-0.5 flex-shrink-0`}>
                      <div className="w-full h-full rounded-xl bg-space-black flex items-center justify-center">
                        <project.icon className="w-7 h-7 text-cosmic-purple" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-orbitron text-2xl font-bold text-star-white group-hover:text-cosmic-purple transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text-dim text-sm">{project.description}</p>
                    </div>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-nebula-pink mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Problem Statement
                      </h4>
                      <p className="text-text-white/80 text-sm leading-relaxed">{project.problem}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-galaxy-blue mb-2 flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Solution Delivered
                      </h4>
                      <p className="text-text-white/80 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div>
                    <h4 className="font-semibold text-moon-glow mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Business Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-text-white/80 text-sm">
                          <span className="text-cosmic-purple mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-text-white mb-3 flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs glass-effect rounded-full border border-white/10 text-text-white hover:border-cosmic-purple/50 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {(project.demoUrl || project.githubUrl) && (
                    <div className="flex gap-4 pt-4">
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-cosmic-purple to-nebula-pink rounded-lg font-semibold text-white shadow-lg shadow-cosmic-purple/50 hover:shadow-cosmic-purple/80 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Demo
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-3 glass-effect rounded-lg font-semibold hover:glow-border transition-all flex items-center justify-center gap-2 text-sm ${
                            project.demoUrl ? '' : 'flex-1'
                          }`}
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                      )}
                    </div>
                  )}

                  {/* Coming Soon Badge for projects without links */}
                  {!project.demoUrl && !project.githubUrl && (
                    <div className="pt-4">
                      <div className="px-4 py-3 glass-effect rounded-lg text-center border border-cosmic-purple/30">
                        <span className="text-sm text-text-dim">
                          <span className="text-cosmic-purple font-semibold">Under Development</span> - Coming Soon
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-text-dim mb-6">
            Want to see more? Check out my GitHub for additional projects and open-source contributions.
          </p>
          <motion.a
            href="https://github.com/ravicodr"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass-effect rounded-xl hover:glow-border transition-all font-semibold group"
          >
            <Github className="w-5 h-5 group-hover:text-cosmic-purple transition-colors" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
