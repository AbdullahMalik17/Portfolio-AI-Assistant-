'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe2, Cpu, Bot, Wrench, Database, Activity, 
  CheckCircle2, Sparkles, type LucideIcon
} from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

interface ArchitectureNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  badge: string;
  description: string;
  specs: string[];
  codeSample: string;
}

const nodes: ArchitectureNode[] = [
  {
    id: 'gateway',
    step: '01',
    title: 'AI Gateway & Ingress',
    subtitle: 'Unified API & Event Router',
    icon: Globe2,
    color: 'from-indigo-500 to-cyan-400',
    badge: 'Go Daemon / gRPC',
    description: 'Inbound requests from Web, WhatsApp, Android ADB, and Email are authenticated, rate-limited, and normalized into JSON-RPC event streams.',
    specs: ['Sub-millisecond routing overhead (<5ms)', 'Token bucket rate-limiting per client', 'Bilingual Urdu/English RTL tokenizer'],
    codeSample: `// Go HTTP Gateway & Ingress
func (gw *Gateway) RouteInbound(req *Request) (*Event, error) {
    if err := gw.RateLimiter.Allow(req.ClientID); err != nil {
        return nil, ErrRateLimitExceeded
    }
    return gw.EventBus.Publish(req.Context(), req.Payload)
}`,
  },
  {
    id: 'router',
    step: '02',
    title: 'Agent Router & Intent Core',
    subtitle: 'Dynamic Dispatch & Fallback',
    icon: Cpu,
    color: 'from-cyan-400 to-emerald-400',
    badge: 'Intent Router',
    description: 'Dispatches tasks dynamically between lightweight local heuristics (regex/local SLMs) and cloud LLM reasoning cascades (Gemini 2.5 Flash / Claude 3.5 Sonnet).',
    specs: ['Confidence threshold routing (>0.85 local)', 'Cost-optimized model cascade strategy', 'Graceful fallback on cloud API timeouts'],
    codeSample: `async def route_intent(prompt: str) -> ExecutionPlan:
    classification = await local_classifier.predict(prompt)
    if classification.confidence > 0.85:
        return ExecutionPlan(target="local_edge_agent")
    return ExecutionPlan(target="cloud_reasoning_swarm")`,
  },
  {
    id: 'agents',
    step: '03',
    title: 'Specialized Agents & Swarms',
    subtitle: 'Autonomous Execution Subroutines',
    icon: Bot,
    color: 'from-pink-500 to-rose-400',
    badge: 'Dual-Agent Isolated',
    description: 'Autonomous worker nodes (Research Agent, Coding Agent, Financial Sentry) execute parallel subroutines with strict credential sandboxing.',
    specs: ['Cloud Sentry / Local Executive privilege split', 'Zero secret leakage across network boundaries', 'Parallel multi-agent consensus validation'],
    codeSample: `class CloudSentryAgent(ReadOnlyAgent):
    """Monitors incoming SaaS webhooks with zero write perms."""
    async def on_event(self, event: WebhookEvent):
        signature = hmac_sign(event.payload, SECRET)
        await local_executive_queue.push(event, signature)`,
  },
  {
    id: 'mcp-tools',
    step: '04',
    title: 'MCP Protocol & Function Tools',
    subtitle: 'Model Context Protocol (JSON-RPC)',
    icon: Wrench,
    color: 'from-purple-500 to-indigo-500',
    badge: 'MCP Standard',
    description: 'Enforces the official Anthropic Model Context Protocol specification for tool discovery, resource subscriptions, and standardized RPC schemas.',
    specs: ['JSON-RPC 2.0 transport over stdio and SSE', 'Strict JSON Schema input validation', 'Integrated with Odoo ERP, Gmail, Android ADB'],
    codeSample: `// Model Context Protocol Tool Schema
{
  "name": "odoo_create_invoice",
  "description": "Generates an invoice draft in Odoo ERP",
  "inputSchema": {
    "type": "object",
    "properties": {
      "partner_id": {"type": "integer"},
      "amount": {"type": "number"}
    },
    "required": ["partner_id", "amount"]
  }
}`,
  },
  {
    id: 'memory',
    step: '05',
    title: 'Memory & State Persistence',
    subtitle: 'pgvector & Obsidian Knowledge Graph',
    icon: Database,
    color: 'from-amber-400 to-orange-500',
    badge: 'pgvector / ChromaDB',
    description: 'Persistent conversation state, episodic memory, and semantic document vectors stored via pgvector (1536 dimensions) and synced with Obsidian Markdown vaults.',
    specs: ['Sub-second Cosine Similarity Search (<40ms)', 'Git-backed Obsidian Vault daily synchronization', 'Short-term rolling buffer + Long-term state'],
    codeSample: `-- pgvector 1536-dimensional similarity query
SELECT id, content, (embedding <=> $1) AS cosine_distance
FROM agent_knowledge_embeddings
WHERE cosine_distance < 0.25
ORDER BY cosine_distance ASC
LIMIT 5;`,
  },
  {
    id: 'observability',
    step: '06',
    title: 'Observability & Governance',
    subtitle: 'Langfuse Tracing & A2AS Audit',
    icon: Activity,
    color: 'from-emerald-400 to-teal-400',
    badge: 'A2AS Certified',
    description: 'Full token consumption tracking, function execution latency tracing with Langfuse, and audited agent safety policies verified via A2AS Registry certificates.',
    specs: ['End-to-end distributed span tracing', 'Token consumption cost attribution', 'A2AS declared behavioral boundaries'],
    codeSample: `# Telemetry & Safety Trace
with langfuse.trace(name="deep_research_task") as trace:
    trace.log_metric("tokens_in", tokens_prompt)
    trace.log_metric("tokens_out", tokens_completion)
    a2as_guard.assert_behavior_compliance(output_payload)`,
  },
];

export default function SystemArchitecture() {
  const [activeNode, setActiveNode] = useState<ArchitectureNode>(nodes[0]);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm shadow-indigo-500/10">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Autonomous Agent Engineering Blueprint
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Agentic <span className="text-shimmer">System Architecture</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              How I architect production multi-agent systems: end-to-end lifecycle from edge ingress and routing to MCP execution, vector memory, and A2AS safety governance.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* 6-Node Interactive Blueprint Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {nodes.map((node) => {
            const isSelected = activeNode.id === node.id;
            const Icon = node.icon;

            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`p-4 rounded-2xl glass border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? 'border-cyan-500/50 bg-slate-900/90 shadow-lg shadow-cyan-500/15 scale-105'
                    : 'border-white/[0.08] hover:border-white/20 bg-slate-900/40 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                    STEP {node.step}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  )}
                </div>

                <div>
                  <div className={`w-8 h-8 rounded-xl glass border border-white/10 flex items-center justify-center mb-2.5 ${isSelected ? 'text-white bg-cyan-500/20' : 'text-slate-400'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {node.title.split('&')[0]}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Node Deep-Dive Inspector Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="glass rounded-3xl p-6 sm:p-10 border border-white/10 bg-slate-950/80 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Details (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-bold uppercase">
                      Node {activeNode.step} • {activeNode.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                    {activeNode.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-400 mb-4 font-semibold">
                    {activeNode.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {activeNode.description}
                  </p>

                  {/* Architecture Specs */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">
                      Engineering Principles
                    </span>
                    {activeNode.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-slate-400">
                  <span>Standard: Production Autonomous Node Protocol</span>
                </div>
              </div>

              {/* Right Code Inspector (7 cols) */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="glass rounded-2xl border border-white/10 bg-[#070b14] overflow-hidden flex flex-col h-full shadow-inner">
                  {/* Code Header */}
                  <div className="px-4 py-2.5 bg-slate-900/80 border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-slate-400">
                        {activeNode.id}_pipeline_kernel.ts
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400">
                      SYNTAX VERIFIED
                    </span>
                  </div>

                  {/* Code Viewport */}
                  <div className="p-5 font-mono text-xs text-slate-200 overflow-x-auto flex-1 bg-black/40">
                    <pre className="leading-relaxed">
                      <code>{activeNode.codeSample}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
