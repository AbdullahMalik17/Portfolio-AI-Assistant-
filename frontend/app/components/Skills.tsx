'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Cpu, Database, Wrench, Sparkles, 
  CheckCircle2, Info
} from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';
import { SKILLS } from '../lib/portfolio-data';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>(SKILLS[0].categoryKey);

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'agentic': return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'core': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'ai-infra': return <Database className="w-5 h-5 text-pink-400" />;
      case 'devops': return <Wrench className="w-5 h-5 text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const selectedCategoryData = SKILLS.find((c) => c.categoryKey === activeCategory) || SKILLS[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Technical Arsenal & Capabilities Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Engineering <span className="text-shimmer">Capabilities Matrix</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Interactive technical matrix organizing agentic frameworks, high-performance runtimes, vector memory, and governance tools.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* 4-Pillar Category Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SKILLS.map((category) => {
            const isSelected = activeCategory === category.categoryKey;
            const Icon = getCategoryIcon(category.categoryKey);

            return (
              <button
                key={category.categoryKey}
                onClick={() => setActiveCategory(category.categoryKey)}
                className={`p-5 rounded-2xl text-left glass border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-cyan-500/40 bg-slate-900/90 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                    : 'border-white/[0.08] hover:border-white/20 bg-slate-900/40 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center bg-white/[0.02]">
                    {Icon}
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>

                <div>
                  <h3 className={`text-sm font-bold tracking-tight mb-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {category.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Grid with Hover Tooltip Details */}
        <div className="glass rounded-3xl p-6 sm:p-10 border border-white/10 bg-slate-950/80 shadow-2xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center bg-white/[0.02]">
                {getCategoryIcon(selectedCategoryData.categoryKey)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {selectedCategoryData.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {selectedCategoryData.description}
                </p>
              </div>
            </div>

            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full self-start md:self-auto flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Hover technology chips for real production utilization
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selectedCategoryData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group p-5 rounded-2xl glass border border-white/[0.08] hover:border-cyan-500/40 bg-slate-900/50 hover:bg-slate-900/80 transition-all duration-300 relative flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                      {skill.level || 'Production'}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h4>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {skill.usageTooltip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
