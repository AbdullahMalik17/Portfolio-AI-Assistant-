'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Github, ExternalLink, 
  Cpu, Bot, MessageSquare, Check,
  type LucideIcon
} from 'lucide-react';
import FadeInWhenVisible from './FadeInWhenVisible';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: LucideIcon;
  accentColor: string;
  problem: string;
  requirements: string[];
  architecture: string;
  agentDesign: string;
  tools: string[];
  memory: string;
  mcpIntegration: string;
  modelStrategy: string;
  errorHandling: string;
  evaluation: string;
  keyDecisions: string[];
  result: string;
  githubUrl: string;
  liveUrl?: string | null;
  mcpUrl?: string;
  certUrl?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'malikclaw',
    title: 'MalikClaw — Edge Agentic Runtime',
    subtitle: 'Ultra-lightweight AI Assistant Gateway for Edge Devices with Urdu-First Support',
    badge: 'MCP Market Listed • A2AS Certified',
    icon: Cpu,
    accentColor: 'from-indigo-500 to-cyan-400',
    problem: 'Standard Python agent frameworks (e.g. LangChain, CrewAI) consume 300MB–1GB+ RAM, making them unusable on cheap $10 Raspberry Pi Zero or Android hardware.',
    requirements: [
      'Memory footprint <15MB RAM',
      'Native Urdu & English bilingual command parsing',
      'ADB interface for physical Android screen automation',
      'Compliance with Model Context Protocol (MCP) standards',
    ],
    architecture: 'Inbound Request → Go HTTP/gRPC Gateway → Urdu/English Intent Router → Local Tool Dispatcher (ADB/Shell) → MCP Server Bridge → State Store',
    agentDesign: 'Single-binary compiled Go daemon with asynchronous event queue. Uses lightweight thread locks instead of heavy Python runtime inter-process communications.',
    tools: ['ADB Automation Tool (taps, swipes, text entry)', 'Gmail MCP Server', 'Odoo ERP MCP Server', 'Local Shell Executor'],
    memory: 'File-backed JSON state machine with persistent vector embeddings stored locally on disk for zero cloud DB dependency.',
    mcpIntegration: 'Exposes standardized JSON-RPC 2.0 transport over stdin/stdout and SSE HTTP endpoints. Listed on official MCP Market registry.',
    modelStrategy: 'Hybrid local-cloud: Edge router handles regex/intent classification; falls back to Gemini 1.5 Flash / Claude 3.5 Sonnet for multi-step reasoning.',
    errorHandling: 'Autonomous retries with exponential backoff on ADB disconnections, fallbacks to Urdu audio feedback on execution failure.',
    evaluation: 'Benchmarked boot time (<850ms), idle memory (<8.5MB RAM), and task completion accuracy across 100+ simulated edge execution commands.',
    keyDecisions: [
      'Rewrote core runtime in Go (Golang) to eliminate Python memory overhead',
      'Designed custom RTL (Right-to-Left) Urdu parser for regional accessibility',
      'Secured agent sandbox via OS-level privilege separation',
    ],
    result: 'Achieved 98.4% RAM reduction vs traditional gateways, successful deployment on $10 edge hardware, and official A2AS behavior security certification.',
    githubUrl: 'https://github.com/AbdullahMalik17/malikclaw',
    liveUrl: 'https://malikclaw.vercel.app/',
    mcpUrl: 'https://mcpmarket.com/ko/server/malikclaw',
    certUrl: '/Muhammad_Abdullah_Certificate.pdf',
  },
  {
    id: 'digital-fte',
    title: 'Digital FTE — Abdullah Junior',
    subtitle: 'Autonomous 24/7 Digital Employee with Cloud Sentry + Local Executive Architecture',
    badge: 'Dual-Agent Architecture',
    icon: Bot,
    accentColor: 'from-pink-500 to-rose-400',
    problem: 'Businesses and founders waste hours manually sorting incoming communications (Email, WhatsApp, LinkedIn) and performing administrative bookkeeping across SaaS tools.',
    requirements: [
      'Continuous 24/7 background monitoring without exposing local system tokens to cloud endpoints',
      'Automated financial document processing via Odoo ERP',
      'Bidirectional synchronization with Git-backed Obsidian Vault',
    ],
    architecture: 'Cloud Sentry (Read-only Cloud listener) → Message Bus → Intelligent Brain (LLM Router) → Local Executive Agent (Privileged executor) → External APIs',
    agentDesign: 'Dual-Agent System: Cloud Sentry handles continuous passive listening; Local Executive executes stateful mutations safely within isolated desktop network.',
    tools: ['Gmail MCP Server', 'WhatsApp Webhook Tool', 'LinkedIn Lead Bot', 'Odoo Invoicing Tool', 'Obsidian Vault Sync'],
    memory: 'ChromaDB vector store combined with Markdown-based daily long-term logs synced directly into Obsidian.',
    mcpIntegration: 'Connects 5 isolated MCP servers across Gmail, WhatsApp, LinkedIn, Odoo, and Obsidian using standardized tool schemas.',
    modelStrategy: 'Gemini 1.5 Pro for multi-doc reasoning and high-context extraction; Claude 3.5 Sonnet for autonomous code/API execution scripts.',
    errorHandling: 'Strict read/write isolation; Cloud Sentry cannot trigger write actions without Local Executive verification and HMAC signature check.',
    evaluation: 'Evaluated on message response latency (<3s), false-positive transaction triggers (0%), and self-healing error resolution during network disconnects.',
    keyDecisions: [
      'Architected Cloud Sentry vs Local Executive split to maintain total credential security',
      'Standardized knowledge management around plaintext Markdown and Obsidian Vault',
      'Integrated self-evolution logging for autonomous bug reporting',
    ],
    result: 'Built complete 24/7 autonomous digital employee capable of managing multi-channel customer inquiries and financial record-keeping.',
    githubUrl: 'https://github.com/AbdullahMalik17/Digital-FTE',
    liveUrl: null,
  },
  {
    id: 'customer-success-fte',
    title: 'Customer Success Digital FTE',
    subtitle: 'Enterprise Multi-Channel AI Support System with pgvector & Kafka Async Queues',
    badge: '100% Complete (117/117 Tasks)',
    icon: MessageSquare,
    accentColor: 'from-cyan-500 to-emerald-400',
    problem: 'Customer support teams suffer from slow response times, disjointed cross-channel customer histories, and high operational costs for recurring support queries.',
    requirements: [
      'Asynchronous message processing to withstand peak load spikes without dropping requests',
      'Sub-second semantic knowledge base search over thousands of support articles',
      'Automated sentiment detection and escalation routing for urgent tickets',
    ],
    architecture: 'Ingress Webhooks (Twilio/Email/Web) → Apache Kafka Queue → Customer Success Agent → 5 Function Tools → PostgreSQL + pgvector → Response Queue',
    agentDesign: 'Event-driven agent with function calling tools. Maintains strict conversation state across disconnected channels via unified customer identity keys.',
    tools: ['create_ticket', 'get_customer_history', 'search_knowledge_base', 'send_email', 'escalate_to_human'],
    memory: 'PostgreSQL database with pgvector extension storing 1536-dimensional OpenAI vector embeddings of past resolution tickets.',
    mcpIntegration: 'Encapsulated support actions as formal tool schemas with input validation schemas and fallback error messages.',
    modelStrategy: 'GPT-4 Turbo for high-precision tool calling and ticket resolution; local embedding models for fast vector similarity search.',
    errorHandling: 'Kafka Dead Letter Queue (DLQ) for malformed payload isolation, retries with backoff, and automatic human escalation fallback on low confidence scores (<0.70).',
    evaluation: 'Completed all 9 production phases (117/117 development tasks), verified under load with synthetic customer ticket surges.',
    keyDecisions: [
      'Adopted Apache Kafka for resilient asynchronous queuing instead of synchronous HTTP routes',
      'Implemented pgvector inside PostgreSQL to keep relational data and vector embeddings in one ACID-compliant database',
      'Built multi-attribute escalation triggers (legal words, negative sentiment, refund requests)',
    ],
    result: 'Production-ready containerized customer success system supporting multi-channel automated ticket resolution with zero lost requests.',
    githubUrl: 'https://github.com/AbdullahMalik17/Hacathan_5',
    liveUrl: null,
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<string>(caseStudies[0].id);

  const selectedStudy = caseStudies.find((cs) => cs.id === activeTab) || caseStudies[0];
  const SelectedIcon = selectedStudy.icon;

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              Deep Engineering Insights
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Engineering <span className="text-shimmer">Case Studies</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Architectural breakdowns of flagship autonomous AI systems built for production performance, security isolation, and edge efficiency.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {caseStudies.map((cs) => {
            const Icon = cs.icon;
            const isSelected = activeTab === cs.id;

            return (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 scale-105 border border-white/20'
                    : 'glass text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cs.title.split('—')[0]}</span>
                <span className="text-[10px] opacity-70 hidden sm:inline font-mono">({cs.badge.split('•')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Case Study Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-3xl p-6 sm:p-10 border border-white/10 bg-slate-950/80 shadow-2xl"
          >
            {/* Case Study Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-cyan-400 bg-white/[0.02] shrink-0">
                  <SelectedIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                    {selectedStudy.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {selectedStudy.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 font-medium">
                    {selectedStudy.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 shrink-0">
                {selectedStudy.githubUrl && (
                  <a
                    href={selectedStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl glass hover:bg-white/10 border border-white/10 text-white text-xs font-bold transition-all flex items-center gap-2"
                  >
                    <Github className="w-4 h-4 text-slate-400" />
                    <span>Repository</span>
                  </a>
                )}
                {selectedStudy.liveUrl && (
                  <a
                    href={selectedStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold transition-all hover:opacity-90 flex items-center gap-2 shadow-md shadow-indigo-500/25"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live System</span>
                  </a>
                )}
              </div>
            </div>

            {/* 12-Point Engineering Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              {/* 01. Problem */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-pink-400 font-extrabold tracking-widest uppercase">01. Problem</span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{selectedStudy.problem}</p>
              </div>

              {/* 02. Requirements */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-pink-400 font-extrabold tracking-widest uppercase">02. Requirements</span>
                <ul className="space-y-1.5">
                  {selectedStudy.requirements.map((req, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 03. Architecture */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-pink-400 font-extrabold tracking-widest uppercase">03. System Architecture</span>
                <p className="text-xs text-slate-300 font-mono leading-relaxed bg-[#070b14] p-3 rounded-xl border border-white/5">{selectedStudy.architecture}</p>
              </div>

              {/* 04. Agent Design */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 font-extrabold tracking-widest uppercase">04. Agent Design</span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{selectedStudy.agentDesign}</p>
              </div>

              {/* 05. Tools */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 font-extrabold tracking-widest uppercase">05. Tool Integrations</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedStudy.tools.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* 06. Memory */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-cyan-400 font-extrabold tracking-widest uppercase">06. Memory & State</span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{selectedStudy.memory}</p>
              </div>

              {/* 07. MCP Integration */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-indigo-400 font-extrabold tracking-widest uppercase">07. MCP Protocol</span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{selectedStudy.mcpIntegration}</p>
              </div>

              {/* 08. Model Strategy */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-indigo-400 font-extrabold tracking-widest uppercase">08. Model Strategy</span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{selectedStudy.modelStrategy}</p>
              </div>

              {/* 09. Error Handling */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-indigo-400 font-extrabold tracking-widest uppercase">09. Resilience & Fallbacks</span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{selectedStudy.errorHandling}</p>
              </div>

              {/* 10. Evaluation */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 font-extrabold tracking-widest uppercase">10. Benchmarks & Evaluation</span>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{selectedStudy.evaluation}</p>
              </div>

              {/* 11. Key Decisions */}
              <div className="p-5 rounded-2xl glass border border-white/5 bg-slate-900/40 space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 font-extrabold tracking-widest uppercase">11. Engineering Decisions</span>
                <ul className="space-y-1.5">
                  {selectedStudy.keyDecisions.map((dec, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 12. Result */}
              <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 font-extrabold tracking-widest uppercase">12. Measured Impact</span>
                <p className="text-xs text-emerald-200 font-semibold leading-relaxed">{selectedStudy.result}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
