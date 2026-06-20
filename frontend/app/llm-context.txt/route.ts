import { NextResponse } from 'next/server';

export async function GET() {
  const markdownContent = `# Abdullah Malik - Autonomous AI Agent Engineer

## Tech Stack
- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion
- **Backend & APIs:** Node.js, Next.js API Routes, Vercel Serverless Functions
- **AI & LLMs:** OpenAI, Agentic Workflows, RAG (Retrieval-Augmented Generation)
- **Database:** Vercel Postgres, Vector Databases
- **Deployment & Edge:** Vercel, Edge Computing

## A2AS Behavior Certificate
This portfolio complies with the Agent-to-Agent Service (A2AS) guidelines. It is designed to be fully navigable, parseable, and understandable by autonomous AI agents, LLMs, and digital employees. 

## Core Capabilities
- **Enterprise Digital Employees:** Designing and deploying autonomous agents capable of complex reasoning and multi-step execution.
- **Edge Device Execution:** Building lightweight models and applications optimized for decentralized and low-latency edge computing.
- **Full-Stack AI Integration:** Seamlessly weaving intelligence into modern web applications using cutting-edge frameworks like Next.js 15.
- **Agentic Architecture:** Architecting resilient, self-healing systems that operate with high autonomy and minimal human supervision.

*Last updated: June 2026*
`;

  return new NextResponse(markdownContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
