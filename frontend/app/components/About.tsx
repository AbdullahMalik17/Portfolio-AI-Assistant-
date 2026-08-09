'use client';

import Timeline, { TimelineEvent } from './Timeline';
import FadeInWhenVisible from './FadeInWhenVisible';
import AnimatedCounter from './AnimatedCounter';
import { ABOUT } from '../lib/portfolio-data';

const About = () => {
  const stats = [
    { number: 2, label: 'Years Experience', suffix: '+' },
    { number: 12, label: 'AI Agents Built', suffix: '+' },
    { number: 30, label: 'GitHub Repos', suffix: '+' },
    { number: 100, label: 'A2AS Audited', suffix: '%' },
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      year: '2023',
      title: 'Full-Stack Foundations',
      description: 'Mastered web fundamentals and core JavaScript/TypeScript software architecture.',
    },
    {
      year: '2024',
      title: 'Agentic AI Specialization',
      description: 'Specialized in Agentic AI at Panaversity. Mastered OpenAI Agent SDK, LangChain, N8N, and autonomous tool calling.',
    },
    {
      year: '2025',
      title: 'Digital FTEs & Edge Gateways',
      description: 'Engineered MalikClaw (Go edge runtime) and Digital FTE systems with Cloud Sentry + Local Executive dual-agent security.',
    },
    {
      year: 'Present',
      title: 'Enterprise AI & Governance',
      description: 'Expanding cloud-native agent orchestration (Docker, Kubernetes, pgvector, MCP) with A2AS behavior audit compliance.',
    },
  ];

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-[color:var(--background-secondary)]/20"
      data-component="About Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 text-[color:var(--accent)] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            Engineering Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            About <span className="text-shimmer">Abdullah Malik</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            An engineering focus on high-autonomy software, edge performance, and verified agentic protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeInWhenVisible direction="right">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[color:var(--accent)]/20 flex items-center justify-center text-sm">🛠️</span>
                Technical Evolution
              </h3>
              
              <Timeline events={timelineEvents} />

              <div className="mt-8 p-6 glass rounded-2xl border-l-4 border-l-[color:var(--accent)] font-medium text-gray-300 bg-white/[0.02]">
                &quot;{ABOUT.philosophy}&quot;
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible direction="left" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[color:var(--accent-secondary)]/20 flex items-center justify-center text-sm">🧠</span>
                Core Engineering Philosophy
              </h3>

              <div className="glass p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-4">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">01. Autonomous Efficiency First</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    AI agents should execute seamlessly without heavy runtime baggage. MalikClaw proves agents can run on &lt;10MB RAM on edge devices.
                  </p>
                </div>
                <div className="space-y-1 pt-3 border-t border-white/5">
                  <h4 className="text-base font-bold text-white">02. Strict Privilege Isolation</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Cloud event monitoring must be decoupled from privileged local execution. Secrets stay local; sentries stay read-only.
                  </p>
                </div>
                <div className="space-y-1 pt-3 border-t border-white/5">
                  <h4 className="text-base font-bold text-white">03. Deterministic Standards (MCP & A2AS)</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Tool calling must follow verifiable transport protocols like Model Context Protocol, and agent behavior must be declared and certified.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="glass p-4 rounded-xl text-center border border-white/10 bg-white/[0.02]">
                    <div className="text-2xl font-extrabold text-[color:var(--accent)] mb-1">
                      <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400 font-mono font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default About;

