'use client';

import { motion } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';
import { CERTIFICATIONS } from '../lib/portfolio-data';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Professional <span className="text-shimmer">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-secondary)] mx-auto rounded-full"></div>
            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Validated expertise in cutting-edge AI technologies and software engineering
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => {
            const isA2AS = !!cert.badge;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`glass rounded-3xl p-8 border flex flex-col h-full transition-all duration-300 ${
                  isA2AS
                    ? 'border-emerald-500/40 bg-gradient-to-br from-emerald-950/40 via-black/60 to-[color:var(--background)] shadow-[0_0_40px_rgba(16,185,129,0.15)] hover:shadow-[0_0_60px_rgba(16,185,129,0.3)]'
                    : 'border-white/10 bg-white/5 glow-card hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]'
                }`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border ${
                      isA2AS
                        ? 'bg-emerald-500/15 border-emerald-500/30'
                        : 'bg-[color:var(--accent)]/10 border-[color:var(--accent)]/20'
                    }`}
                  >
                    {cert.icon}
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    {/* Badge pill */}
                    {isA2AS ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 tracking-wider animate-pulse">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {cert.badge}
                      </span>
                    ) : null}
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border tracking-wider ${
                        isA2AS
                          ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                          : 'text-[color:var(--accent)] bg-[color:var(--accent)]/10 border-[color:var(--accent)]/20'
                      }`}
                    >
                      {cert.year}
                    </span>
                  </div>
                </div>

                {/* Agent ID node (only for A2AS entries) */}
                {cert.agentId && (
                  <div className="mb-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-black/40 border border-emerald-500/20">
                    {/* Node indicator */}
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <code className="text-xs font-mono text-emerald-300 truncate">{cert.agentId}</code>
                  </div>
                )}

                {/* Title & Issuer */}
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className={`font-medium mb-4 text-sm ${isA2AS ? 'text-emerald-400' : 'text-[color:var(--accent)]'}`}>
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-medium border ${
                        isA2AS
                          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                          : 'bg-white/5 border-white/5 text-gray-300'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* CTA button */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto w-full py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 transition-all duration-300 ${
                    isA2AS
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:opacity-90 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                      : 'bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-secondary)] text-white hover:opacity-90'
                  }`}
                >
                  {isA2AS ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      View A2AS Certificate
                    </>
                  ) : (
                    <>
                      View Certificate
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </>
                  )}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
