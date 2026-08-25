'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Search, Code, ArrowUpRight
} from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import FlagshipBento from './FlagshipBento';
import ProjectModal from './ProjectModal';
import { PROJECTS, PortfolioProject } from '../lib/portfolio-data';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const otherProjects = useMemo(() => {
    return PROJECTS.filter((p) => !p.featured);
  }, []);

  const categories = useMemo(() => {
    const cats = ['All'];
    otherProjects.forEach((p) => {
      if (!cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, [otherProjects]);

  const filteredOtherProjects = useMemo(() => {
    return otherProjects.filter((p) => {
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [otherProjects, activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Flagship Autonomous Systems & Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Engineered <span className="text-shimmer">AI Systems</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Production autonomous agents, edge runtimes, Model Context Protocol servers, and enterprise automation pipelines.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* 1. Flagship Bento Grid 2.0 */}
        <div className="mb-24">
          <FlagshipBento onSelectProject={(p) => setSelectedProject(p)} />
        </div>

        {/* 2. Other Engineering Projects Header & Filter Matrix */}
        <FadeInWhenVisible>
          <div className="pt-12 border-t border-white/[0.08] mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <Code className="w-6 h-6 text-cyan-400" />
                  <span>Other Specialized Systems & Tools</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Full-stack applications, developer tooling, and educational AI platforms.
                </p>
              </div>

              {/* Search & Category Filter Bar */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by technology, name..."
                    className="pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors w-48 sm:w-64 font-sans"
                  />
                </div>

                <div className="flex items-center gap-1 glass p-1 rounded-xl border border-white/[0.08]">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOtherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="group glass rounded-2xl p-6 border border-white/[0.08] hover:border-cyan-500/40 bg-slate-900/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {project.tech.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
