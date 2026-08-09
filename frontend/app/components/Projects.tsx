'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';
import ProjectModal from './ProjectModal';
import Button from './Button';
import ProjectCard3D from './ProjectCard3D';
import { PROJECTS, PortfolioProject } from '../lib/portfolio-data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Agentic AI', 'Web Development', 'Education'];

  const featuredProjects = useMemo(() => {
    return PROJECTS.filter((p) => p.featured);
  }, []);

  const otherProjects = useMemo(() => {
    return PROJECTS.filter((p) => !p.featured);
  }, []);

  const filteredOtherProjects = useMemo(() => {
    return otherProjects.filter((p) => {
      const matchesSearch =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [otherProjects, searchQuery, selectedCategory]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 text-[color:var(--accent)] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              Autonomous Systems & Engineering Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Featured <span className="text-shimmer">Agentic Systems</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
              Production-ready autonomous AI agents, multi-agent frameworks, and edge-native gateways engineered with Go, Python, and Model Context Protocol.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* SECTION 1: FEATURED SYSTEMS (FLAGSHIP 3) */}
        <div className="mb-20 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col"
              >
                <ProjectCard3D
                  className="group glass glow-card rounded-3xl p-8 flex flex-col h-full bg-[color:var(--background-secondary)]/50 backdrop-blur-2xl flagship-pulse hover:border-[color:var(--accent)]/50 transition-all duration-500 justify-between border border-white/10"
                  glareColor="rgba(99, 102, 241, 0.25)"
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-5xl transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                        {project.image}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[color:var(--accent)]/15 border border-[color:var(--accent)]/30 text-[color:var(--accent-tertiary)] text-[10px] font-mono font-extrabold uppercase tracking-wider">
                        FLAGSHIP SYSTEM
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-shimmer transition-all">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Problem & Solution Mini Cards */}
                    {project.problem && (
                      <div className="space-y-3 mb-6">
                        <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                          <span className="text-[10px] font-mono text-[color:var(--accent-secondary)] uppercase font-bold tracking-widest block">
                            Problem
                          </span>
                          <p className="text-[11px] text-gray-400 leading-normal">
                            {project.problem}
                          </p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1">
                          <span className="text-[10px] font-mono text-[color:var(--neon-cyan)] uppercase font-bold tracking-widest block">
                            Solution
                          </span>
                          <p className="text-[11px] text-gray-300 leading-normal">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-[color:var(--accent)]/10 text-[color:var(--accent)] rounded-lg text-[10px] font-mono font-semibold border border-[color:var(--accent)]/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-2.5 pt-2 border-t border-white/5">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                      >
                        Learn More
                      </Button>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm">
                            Live Demo
                          </Button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm">
                            GitHub
                          </Button>
                        </a>
                      )}
                    </div>

                    {/* Extra Badges (MCP Market / Certificate) */}
                    {(project.mcpMarketUrl || project.certificateUrl) && (
                      <div className="pt-3 mt-3 border-t border-white/5 flex flex-col gap-2">
                        {project.mcpMarketUrl && (
                          <a
                            href={project.mcpMarketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-300 text-[11px] font-mono font-semibold hover:bg-purple-500/20 transition-all"
                          >
                            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
                            Listed on MCP Market
                          </a>
                        )}
                        {project.certificateUrl && (
                          <a
                            href={project.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] font-mono font-semibold hover:bg-emerald-500/20 transition-all"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            Verified A2AS / Panaversity Certificate
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </ProjectCard3D>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION 2: OTHER PROJECTS HEADER & FILTERS */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Other Engineering & AI Projects
              </h3>
              <p className="text-sm text-gray-400">
                Additional specialized agents, tools, and developer platforms
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[color:var(--accent)] text-white shadow-md'
                      : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8 relative max-w-md">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology or keyword..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[color:var(--accent)] transition-all font-mono"
            />
          </div>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOtherProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl border border-white/10 hover:border-white/20 bg-white/[0.02] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{project.image || '🤖'}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/5">
                      {project.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="primary" size="sm" onClick={() => setSelectedProject(project)}>
                      Details
                    </Button>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm">
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            mcpMarketUrl={selectedProject.mcpMarketUrl}
            project={{
              title: selectedProject.title,
              description: selectedProject.description,
              longDescription: selectedProject.longDescription,
              image: selectedProject.image || '🤖',
              tags: selectedProject.tech,
              githubUrl: selectedProject.githubUrl,
              liveUrl: selectedProject.liveUrl,
              features: selectedProject.keyCapabilities || [selectedProject.description],
              challenges: selectedProject.challenges || [],
              technologies: selectedProject.tech,
              results: selectedProject.results || [],
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
