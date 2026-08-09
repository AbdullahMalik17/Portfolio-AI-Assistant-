import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProofBar from './components/ProofBar';

// Dynamic imports with SSR for structured narrative flow
const Projects = dynamic(() => import('./components/Projects'), { ssr: true });
const CaseStudies = dynamic(() => import('./components/CaseStudies'), { ssr: true });
const SystemArchitecture = dynamic(() => import('./components/SystemArchitecture'), { ssr: true });
const EngineeringCredibility = dynamic(() => import('./components/EngineeringCredibility'), { ssr: true });
const Skills = dynamic(() => import('./components/Skills'), { ssr: true });
const Certifications = dynamic(() => import('./components/Certifications'), { ssr: true });
const About = dynamic(() => import('./components/About'), { ssr: true });
const Contact = dynamic(() => import('./components/Contact'), { ssr: true });

// Dynamic imports for below-fold content
const GitHubStats = dynamic(() => import('./components/GitHubStats'), {
  loading: () => (
    <section className="py-20 bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-12 animate-pulse">
          <div className="h-6 bg-[color:var(--accent)]/10 rounded w-32 mx-auto mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center space-y-2">
                <div className="h-8 bg-[color:var(--accent)]/10 rounded-full w-12 mx-auto"></div>
                <div className="h-3 bg-[color:var(--accent)]/5 rounded w-16 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ),
});

const WhatsAppWidget = dynamic(() => import('./components/WhatsAppWidget'), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProofBar />
      <Projects />
      <CaseStudies />
      <SystemArchitecture />
      <EngineeringCredibility />
      <Skills />
      <Certifications />
      <About />
      <GitHubStats />
      <Contact />

      {/* Footer */}
      <footer className="bg-[color:var(--background-secondary)] text-[color:var(--foreground)] py-12 border-t border-[color:var(--card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Abdullah Malik</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Agentic AI Engineer specializing in Autonomous AI Agents, Multi-Agent Systems, MCP, and Digital FTEs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Navigation</h3>
              <div className="space-y-2 text-sm">
                <a href="#home" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">Home</a>
                <a href="#projects" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">Featured Systems</a>
                <a href="#case-studies" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">Case Studies</a>
                <a href="#architecture" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">Agentic Architecture</a>
                <a href="#skills" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">Technical Arsenal</a>
                <a href="#certifications" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">Certifications</a>
                <a href="#contact" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Connect & Direct Links</h3>
              <div className="space-y-2 text-sm">
                <a href="https://github.com/AbdullahMalik17" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">
                  GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/muhammad-abdullah-athar" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">
                  LinkedIn
                </a>
                <a href="https://mcpmarket.com/ko/server/malikclaw" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">
                  MalikClaw on MCP Market
                </a>
                <a href="https://a2as.org/certified/agents/abdullahmalik17/deep-research-age" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">
                  A2AS Behavior Certificate
                </a>
                <a href="mailto:muhammadabdullah51700@gmail.com" className="block text-gray-400 hover:text-[color:var(--accent)] transition-colors">
                  Email Abdullah
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-[color:var(--card-border)]">
            <p className="text-xs text-gray-400 font-mono">
              © 2026 Abdullah Malik. Built with Next.js 15, TypeScript, Go & Model Context Protocol.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Widgets */}
      <WhatsAppWidget />
    </main>
  );
}
