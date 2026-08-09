'use client';

import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';

interface CredibilityPillar {
  title: string;
  category: string;
  description: string;
  icon: string;
  codeSnippet: string;
}

const pillars: CredibilityPillar[] = [
  {
    title: 'Model Context Protocol (MCP)',
    category: 'Tool Integration Standard',
    description: 'Enforces strict JSON-RPC 2.0 transport schemas between LLM runtimes and local/cloud resources (Odoo, Gmail, ADB, Obsidian).',
    icon: '🔌',
    codeSnippet: 'mcp.RegisterServer("malikclaw", transport.Stdio())',
  },
  {
    title: 'Cloud/Local Dual-Agent Split',
    category: 'Security & Privacy Model',
    description: 'Decouples read-only cloud monitoring (Cloud Sentry) from privileged desktop execution (Local Executive) to protect API secrets.',
    icon: '🛡️',
    codeSnippet: 'CloudSentry(Readonly) -> Bus -> LocalExecutive(Privileged)',
  },
  {
    title: 'RAG & Vector Search',
    category: 'State & Memory Strategy',
    description: 'Implements pgvector and ChromaDB embedding similarity search for fast, sub-second contextual knowledge retrieval.',
    icon: '🗄️',
    codeSnippet: 'SELECT * FROM docs ORDER BY embedding <=> $1 LIMIT 5;',
  },
  {
    title: 'Behavior Compliance & Safety',
    category: 'A2AS Certified Governance',
    description: 'Audits and declares agent behavior boundaries using A2AS Registry certificates for production governance.',
    icon: '📜',
    codeSnippet: 'a2as.VerifyBehaviorCertificate("deep-research-age")',
  },
  {
    title: 'Multi-Agent Orchestration',
    category: 'Agent Execution Strategy',
    description: 'Coordinates specialized subroutines (Research, Coding, Financials) with dynamic intent routers and model fallback cascades.',
    icon: '🔄',
    codeSnippet: 'Router.Dispatch(intent) -> Select(Gemini1.5, Claude3.5)',
  },
  {
    title: 'Observability & Telemetry',
    category: 'Quality Monitoring',
    description: 'Tracks LLM token consumption, execution latency, and function call success rates using Langfuse and structured logging.',
    icon: '📈',
    codeSnippet: 'langfuse.Trace(span_id, tokens_used, latency_ms)',
  },
];

const EngineeringCredibility = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[color:var(--background-secondary)]/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 text-[color:var(--accent)] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              Production Engineering Standards
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Engineering <span className="text-shimmer">Credibility</span> & Discipline
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
              How I approach building autonomous AI software: deterministic tooling, strict security boundaries, and verifiable observability.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass glow-card rounded-3xl p-6 border border-white/10 bg-white/[0.02] flex flex-col justify-between hover:border-[color:var(--accent)]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{pillar.icon}</span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 uppercase tracking-widest">
                    {pillar.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5">
                <code className="text-[11px] font-mono text-[color:var(--neon-cyan)] block bg-black/40 px-3 py-2 rounded-xl border border-white/5 truncate">
                  {pillar.codeSnippet}
                </code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringCredibility;
