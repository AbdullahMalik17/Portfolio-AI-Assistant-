'use client';

import { motion } from 'framer-motion';

const proofItems = [
  {
    value: '12+',
    label: 'Agentic AI Systems',
    subtext: 'Built with Go, Python & MCP',
    icon: '⚡',
  },
  {
    value: '30+',
    label: 'GitHub Repositories',
    subtext: 'Open-source & developer tools',
    icon: '📦',
  },
  {
    value: 'A2AS',
    label: 'Behavior Certified',
    subtext: 'Audited AI agent governance',
    icon: '🛡️',
    href: 'https://a2as.org/certified/agents/abdullahmalik17/deep-research-age',
  },
  {
    value: 'MCP Market',
    label: 'Global Listing',
    subtext: 'Official server registration',
    icon: '🌐',
    href: 'https://mcpmarket.com/ko/server/malikclaw',
  },
];

const ProofBar = () => {
  return (
    <section className="py-10 relative z-20 bg-black/40 border-y border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {proofItems.map((item, index) => {
            const content = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="glass p-5 rounded-2xl border border-white/10 hover:border-[color:var(--accent)]/40 transition-all flex items-center gap-4 bg-white/[0.02]"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                      {item.value}
                    </span>
                    {item.href && (
                      <svg className="w-3.5 h-3.5 text-[color:var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-gray-300 tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-gray-500 font-mono">
                    {item.subtext}
                  </p>
                </div>
              </motion.div>
            );

            if (item.href) {
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none"
                >
                  {content}
                </a>
              );
            }
            return content;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProofBar;
