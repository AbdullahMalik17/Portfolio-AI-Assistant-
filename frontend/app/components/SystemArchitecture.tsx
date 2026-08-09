'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  tech: string;
  icon: string;
  color: string;
  borderColor: string;
  bgGlow: string;
  details: string;
}

const nodes: ArchitectureNode[] = [
  {
    id: 'gateway',
    label: 'AI Gateway',
    role: 'Rate limiting, auth & payload validation',
    tech: 'Go / Next.js API Routes',
    icon: '🌐',
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/40',
    bgGlow: 'bg-indigo-500/10',
    details: 'Inbound entry point handling request sanitization, authentication, and routing requests to appropriate agent instances.',
  },
  {
    id: 'router',
    label: 'Agent Router',
    role: 'Dynamic intent classification & fallback',
    tech: 'Go Router / Gemini 1.5 Flash',
    icon: '⚡',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    bgGlow: 'bg-cyan-500/10',
    details: 'Analyses user query intent using fast classification models, selecting specialized agent subroutines and tool subsets.',
  },
  {
    id: 'agents',
    label: 'Specialized Agents',
    role: 'Multi-agent domain execution',
    tech: 'OpenAI Agents SDK / LangChain',
    icon: '🤖',
    color: 'text-pink-400',
    borderColor: 'border-pink-500/40',
    bgGlow: 'bg-pink-500/10',
    details: 'Domain-specific agents (Research Agent, Coding Agent, Automation FTE) executing task loops independently.',
  },
  {
    id: 'mcp',
    label: 'MCP / Tools',
    role: 'Standardized function execution',
    tech: 'Model Context Protocol / ADB / APIs',
    icon: '🛠️',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/40',
    bgGlow: 'bg-purple-500/10',
    details: 'Standardized Model Context Protocol servers communicating with external SaaS, local databases, and Android edge hardware.',
  },
  {
    id: 'memory',
    label: 'Memory / State',
    role: 'Long-term vector & relational state',
    tech: 'pgvector / ChromaDB / MEM0',
    icon: '🧠',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgGlow: 'bg-emerald-500/10',
    details: 'Persistent semantic vector memory and structured session state keeping agent interactions coherent over time.',
  },
  {
    id: 'observability',
    label: 'Observability & Eval',
    role: 'Tracing, latency & safety governance',
    tech: 'Langfuse / A2AS / Prometheus',
    icon: '📊',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgGlow: 'bg-amber-500/10',
    details: 'Continuous tracing of LLM token usage, tool call latency, and behavior boundary validation against A2AS safety policies.',
  },
];

const SystemArchitecture = () => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(nodes[2]); // Default to Specialized Agents

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--accent-tertiary)]/10 border border-[color:var(--accent-tertiary)]/30 text-[color:var(--accent-tertiary)] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            System Design Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            How I Build <span className="text-shimmer">Autonomous AI Systems</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Click any node below to inspect my multi-tier agentic architecture designed for low latency, security isolation, and tool execution.
          </p>
        </div>

        {/* Visual Flow Pipeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative">
          {nodes.map((node, index) => {
            const isSelected = selectedNode.id === node.id;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setSelectedNode(node)}
                className={`glass p-6 rounded-3xl cursor-pointer border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? `${node.borderColor} ${node.bgGlow} shadow-2xl scale-[1.02]`
                    : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
                }`}
              >
                {/* Connection Index Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-gray-400">
                    0{index + 1}
                  </span>
                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${node.bgGlow} ${node.color} border ${node.borderColor}`}>
                    {node.tech}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{node.icon}</span>
                  <div>
                    <h3 className={`text-xl font-bold ${node.color} tracking-tight`}>
                      {node.label}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {node.role}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {node.details}
                </p>

                {isSelected && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 border-2 border-current rounded-3xl pointer-events-none opacity-20"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Selected Node Deep Dive Inspector */}
        <div className="glass glow-card rounded-3xl p-6 sm:p-8 border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl ${selectedNode.bgGlow} border ${selectedNode.borderColor} flex items-center justify-center text-4xl shrink-0 shadow-lg`}>
              {selectedNode.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className={`text-2xl font-bold ${selectedNode.color}`}>
                  {selectedNode.label}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/10 text-white border border-white/20">
                  {selectedNode.tech}
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-1 font-medium">
                {selectedNode.role}
              </p>
              <p className="text-xs text-gray-400 mt-2 max-w-3xl leading-relaxed">
                {selectedNode.details}
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto text-right">
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Architecture Standard</span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Verified Agentic Flow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
