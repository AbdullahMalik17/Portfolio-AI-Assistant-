'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Button from './Button';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  mcpMarketUrl?: string;
  project: {
    title: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    githubUrl?: string | null;
    liveUrl?: string | null;
    features?: string[];
    challenges?: string[];
    technologies?: string[];
    results?: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project, mcpMarketUrl }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="glass rounded-3xl shadow-2xl border-2 border-[color:var(--accent)]/20 overflow-hidden">
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-[color:var(--accent)] hover:text-white transition-all"
                    aria-label="Close modal"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Header Image */}
                  <div className="relative h-64 md:h-80 bg-gradient-primary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-4xl md:text-5xl font-bold text-white text-center px-6">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {project.longDescription || project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[color:var(--accent)]/10 text-[color:var(--accent)] rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                          <span>✨</span> Key Features
                        </h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-[color:var(--accent)] mt-1">▸</span>
                              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                          <span>🔧</span> Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 glass rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Challenges */}
                    {project.challenges && project.challenges.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                          <span>🎯</span> Challenges & Solutions
                        </h3>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-[color:var(--accent)] mt-1">▸</span>
                              <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Results */}
                    {project.results && project.results.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                          <span>📊</span> Results & Impact
                        </h3>
                        <ul className="space-y-2">
                          {project.results.map((result, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-green-500 mt-1">✓</span>
                              <span className="text-gray-700 dark:text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Verified External Listings Node (MCP Market) */}
                    {mcpMarketUrl && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span>🔗</span> Verified External Listings
                        </h3>
                        <div className="flex flex-col gap-3">
                          <a
                            href={mcpMarketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-violet-500/10 border border-violet-500/25 text-violet-300 hover:bg-violet-500/20 hover:border-violet-500/50 transition-all group/mcp"
                          >
                            <span className="relative flex h-3 w-3 shrink-0">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                            </span>
                            <div className="flex flex-col flex-1">
                              <span className="font-bold text-sm">MCP Market Listing</span>
                              <span className="text-xs text-violet-400/70 mt-0.5">mcpmarket.com/ko/server/malikclaw</span>
                            </div>
                            <svg className="w-4 h-4 opacity-50 group-hover/mcp:opacity-100 transition-opacity shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-[color:var(--card-border)]">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="primary"
                            size="md"
                            rightIcon={
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            }
                          >
                            View Live Demo
                          </Button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            size="md"
                            rightIcon={
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            }
                          >
                            View Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
