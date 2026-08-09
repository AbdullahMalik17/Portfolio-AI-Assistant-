'use client';

import { Link } from 'react-scroll';
import SocialLinks from './SocialLinks';
import TypewriterEffect from './TypewriterEffect';
import Button from './Button';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  return (
    <section
      id="home"
      data-component="Hero Section"
      data-type="Client Component"
      className="min-h-[92vh] flex items-center justify-center relative overflow-hidden pt-24 pb-12"
    >
      {/* Canvas Background */}
      <div data-tech="Canvas Animation" className="absolute inset-0">
        <NetworkBackground />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="hero-glow top-[10%] left-[-10%] opacity-40"></div>
        <div className="hero-glow bottom-[10%] right-[-10%] opacity-40" style={{ '--accent-glow': 'var(--accent-glow-secondary)' } as React.CSSProperties}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-component="Content Wrapper" data-type="Layout">
        <div className="text-center space-y-8">
          {/* Identity Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[color:var(--accent)]/30 shadow-lg shadow-[color:var(--accent-glow)]/20 animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-200">
              Abdullah Malik • Agentic AI Engineer
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
            Engineering <br className="hidden sm:block" />
            <span className="text-shimmer">Autonomous AI Systems</span>
            <br />
            & Digital FTEs
          </h1>

          {/* Subheading Positioning Statement */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-normal leading-relaxed">
            I build autonomous AI systems, Digital FTEs, MCP-powered tools, and production-ready agentic workflows using{' '}
            <span className="text-[color:var(--neon-cyan)] font-semibold inline-block font-mono">
              <TypewriterEffect
                words={[
                  'Go & Python Gateways',
                  'Model Context Protocol (MCP)',
                  'Multi-Agent Systems',
                  'pgvector & RAG Memory',
                  'Autonomous ADB Automation',
                ]}
                typeSpeed={80}
                deleteSpeed={40}
                delayBetweenWords={2200}
              />
            </span>
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2 animate-fade-in-up">
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              className="px-8 py-4 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-secondary)] text-white rounded-full font-bold text-base hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] cursor-pointer flex items-center gap-2"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <a
              href="https://github.com/AbdullahMalik17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                leftIcon={
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                }
              >
                GitHub Profile
              </Button>
            </a>

            <a
              href="/Abdullah_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                rightIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
              >
                Resume
              </Button>
            </a>
          </div>

          <div className="flex justify-center pt-6 relative z-20">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
