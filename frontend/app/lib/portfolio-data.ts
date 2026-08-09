/**
 * Centralized Portfolio Data
 * This file contains all portfolio information used for RAG indexing and components
 */

export interface PortfolioProject {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  category: string;
  featured?: boolean;
  image?: string;
  mcpMarketUrl?: string;
  certificateUrl?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  keyCapabilities?: string[];
  challenges?: string[];
  results?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
  credentialUrl: string;
  icon: string;
  badge?: string; // special highlight badge label, e.g. "A2AS Certified"
  agentId?: string; // e.g. "abdullahmalik17/deep-research-age"
}

export interface PersonalInfo {
  name: string;
  email: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  instagram?: string;
  profession: string;
  tagline: string;
  specialty: string;
}

export interface AboutInfo {
  experience: string;
  journey: string;
  education: string[];
  philosophy: string;
}

// Personal Information
export const PERSONAL_INFO: PersonalInfo = {
  name: "Abdullah Malik",
  email: "muhammadabdullah51700@gmail.com",
  whatsapp: "+923040705172",
  linkedin: "https://www.linkedin.com/in/muhammad-abdullah-athar",
  github: "https://github.com/AbdullahMalik17",
  profession: "Agentic AI Engineer",
  tagline: "Autonomous AI Agents • Multi-Agent Systems • MCP • Digital FTEs • AI Automation",
  specialty: "I build autonomous AI systems, Digital FTEs, MCP-powered tools, and production-ready agentic workflows."
};

// Projects
export const PROJECTS: PortfolioProject[] = [
  {
    title: "MalikClaw",
    description: "Ultra-lightweight, high-performance agentic AI assistant & gateway optimized for edge hardware ($10 Raspberry Pi/Android) with Urdu-First support.",
    longDescription: "MalikClaw is an edge-native autonomous agent runtime designed for low-resource hardware. Built in Go, it features a privacy-first architecture, Urdu-First bilingual support, and mobile device automation via ADB. Operates on <10MB RAM with sub-second response times.",
    tech: ["Go", "React", "TypeScript", "ADB", "MCP", "Docker"],
    githubUrl: "https://github.com/AbdullahMalik17/malikclaw",
    liveUrl: "https://malikclaw.vercel.app/",
    mcpMarketUrl: "https://mcpmarket.com/ko/server/malikclaw",
    certificateUrl: "/Muhammad_Abdullah_Certificate.pdf",
    category: "Agentic AI",
    featured: true,
    image: "🦅",
    problem: "Running full agentic AI workflows on constrained edge hardware without high RAM footprint or external gateway overhead.",
    solution: "A Go-based lightweight agent runtime with Model Context Protocol (MCP) support, ADB mobile automation, and Urdu-First regional localization.",
    architecture: "User Request → Go AI Gateway → Agent Router → MCP Servers → Tool Execution (ADB/System) → Memory",
    keyCapabilities: [
      "Edge-Optimized (<10MB RAM, <1s boot time)",
      "Urdu-First Ecosystem with native RTL support",
      "Mobile Automation via ADB (taps, swipes, text input)",
      "Listed on global MCP Market as a discoverable server",
      "A2AS Behavior Certified Agent Security"
    ],
    challenges: [
      "Optimized agentic execution loop for ARM/RISC-V edge devices",
      "Integrated native RTL Urdu NLP parsers into core agent logic",
      "Built sandboxed local ADB controller for Android hardware automation"
    ],
    results: [
      "99% memory reduction compared to Python-based agent gateways",
      "Deployed successfully on $10 Raspberry Pi Zero",
      "Listed globally on MCP Market"
    ]
  },
  {
    title: "Digital FTE — Abdullah Junior",
    description: "High-autonomy AI agent acting as a 24/7 Digital Employee for personal and enterprise task execution.",
    longDescription: "A comprehensive AI agent system operating as a Digital Full-Time Equivalent (FTE). Features a dual-agent architecture with Cloud Sentry for monitoring and Local Executive for secure execution, orchestrated by an intelligent Brain.",
    tech: ["Python", "FastAPI", "Gemini 1.5 Pro", "Claude 3.5", "MCP", "Docker", "Fly.io"],
    githubUrl: "https://github.com/AbdullahMalik17/Digital-FTE",
    liveUrl: null,
    category: "Agentic AI",
    featured: true,
    image: "🤖",
    problem: "Handling high-volume daily operations across multiple platforms without manual human intervention while keeping system secrets isolated.",
    solution: "Dual-agent Cloud/Local system separating read-only monitoring from privileged local task execution, synchronized via MCP tool protocols.",
    architecture: "Cloud Sentry (Gmail/WhatsApp/LinkedIn) → Message Bus → Intelligent Brain → Local Executive → Odoo/Obsidian Vault",
    keyCapabilities: [
      "24/7 automated multi-channel inbox and lead monitoring",
      "Dual-agent security model (Cloud Sentry + Local Executive)",
      "Financial automation via Odoo ERP integration",
      "Knowledge sync with Git-backed Obsidian Vault"
    ],
    challenges: [
      "Decoupled cloud event listening from local secure function execution",
      "Integrated multi-model fallback between Gemini 1.5 Pro and Claude 3.5 Sonnet",
      "Implemented audit logging and rollback protection"
    ],
    results: [
      "Created fully autonomous 24/7 digital employee",
      "Automated multi-channel response workflows across 6+ platforms"
    ]
  },
  {
    title: "Customer Success Digital FTE",
    description: "Enterprise support agent handling inquiries 24/7 across Email, WhatsApp, and Web with intelligent escalation.",
    longDescription: "Complete AI customer success system that autonomously resolves support tickets across channels using semantic vector search with pgvector and Kafka message queuing.",
    tech: ["Python", "FastAPI", "OpenAI GPT-4", "PostgreSQL", "pgvector", "Kafka", "Docker"],
    githubUrl: "https://github.com/AbdullahMalik17/Hacathan_5",
    liveUrl: null,
    category: "Agentic AI",
    featured: true,
    image: "💬",
    problem: "Delivering instant, contextual customer support across email, messaging, and web forms with guaranteed resolution tracking.",
    solution: "Kafka-driven asynchronous agent with 5 function tools, pgvector knowledge base retrieval, and automatic sentiment escalation.",
    architecture: "Ingress (Webhook/Email) → Kafka Topic → Customer Success Agent → 5 Tools (Tickets, History, KB Search, Mail, Escalate) → pgvector",
    keyCapabilities: [
      "Multi-channel support (Email, WhatsApp via Twilio, Web)",
      "Semantic search using 1536-dim pgvector embeddings",
      "Real-time sentiment and urgency escalation detection",
      "Production-ready Docker & Kubernetes deployment"
    ],
    challenges: [
      "Built reliable Kafka dead-letter-queue for failed message retries",
      "Formulated strict function calling schema for customer ticket resolution",
      "Maintained 100% test completion across 9 development phases"
    ],
    results: [
      "117/117 tasks completed (100% production readiness)",
      "Sub-second semantic knowledge base search performance"
    ]
  },
  {
    title: "Deep Research Agent",
    description: "Autonomously conducts deep multi-step web research, synthesizes evidence, and generates structured academic reports.",
    longDescription: "Autonomous deep research system powered by OpenAI Agent SDK and web tools, certified by A2AS Registry for agent behavior compliance.",
    tech: ["Python", "OpenAI SDK", "SerpAPI", "Markdown", "A2AS"],
    githubUrl: "https://github.com/AbdullahMalik17/Agentic_AI",
    liveUrl: null,
    category: "Agentic AI",
    featured: false,
    image: "🔬",
    mcpMarketUrl: undefined,
    certificateUrl: "https://a2as.org/certified/agents/abdullahmalik17/deep-research-age"
  },
  {
    title: "Voice Assistant Agent",
    description: "Privacy-first voice assistant with wake word detection, semantic memory, and system control.",
    longDescription: "Advanced voice-activated AI assistant featuring custom wake word detection, semantic memory for personalized interactions, and offline speech recognition.",
    tech: ["Python", "Gemini API", "Whisper", "ChromaDB", "Picovoice"],
    githubUrl: "https://github.com/AbdullahMalik17/Voice-Assistant17",
    liveUrl: null,
    category: "Agentic AI",
    featured: false,
    image: "🎙️"
  },
  {
    title: "Physical AI Platform",
    description: "Interactive learning platform for Physical AI & Humanoid Robotics with a RAG chatbot and 43+ code examples.",
    longDescription: "Comprehensive educational platform designed to teach Physical AI and Humanoid Robotics with Pinecone-powered semantic Q&A.",
    tech: ["Docusaurus", "React", "OpenAI", "Pinecone", "Tailwind"],
    githubUrl: "https://github.com/AbdullahMalik17/Physical_AI",
    liveUrl: null,
    category: "Education",
    featured: false,
    image: "📘"
  },
  {
    title: "AI Code Assistant",
    description: "Multi-model coding agent that assists developers with writing, debugging, and refactoring code.",
    longDescription: "Intelligent coding assistant featuring long-term memory via MEM0, multi-turn reasoning, and Chainlit UI.",
    tech: ["OpenAI SDK", "MEM0", "Python", "Chainlit", "Langfuse"],
    githubUrl: "https://github.com/AbdullahMalik17/Agentic_AI/tree/main/_Projects/Code_Assistant_agent",
    liveUrl: null,
    category: "Agentic AI",
    featured: false,
    image: "💻"
  },
  {
    title: "AI Portfolio Assistant",
    description: "Interactive portfolio interface with embedded RAG chatbot for visitor inquiry automation.",
    longDescription: "Full-stack AI-powered portfolio dashboard integrating OpenAI Assistants API with RAG capabilities to answer visitor questions.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Vercel Postgres", "Tailwind CSS"],
    githubUrl: "https://github.com/AbdullahMalik17/Portfolio-AI-Assistant",
    liveUrl: "https://portfolio-ai-assistant-of-malik.vercel.app/",
    category: "Web Development",
    featured: false,
    image: "⚡"
  },
  {
    title: "Online Quran — Asad Ali",
    description: "Modern interactive web application providing accessible digital Quran reading and search capabilities.",
    longDescription: "An open-source digital web application built to deliver an elegant, fast, and responsive reading experience for the Holy Quran.",
    tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Web APIs"],
    githubUrl: "https://github.com/AbdullahMalik17/Asad-Ali",
    liveUrl: "https://github.com/AbdullahMalik17/Asad-Ali",
    category: "Web Development",
    featured: false,
    image: "📖"
  }
];

// Skills
export const SKILLS: SkillCategory[] = [
  {
    title: "CORE ENGINEERING",
    skills: ["Python", "TypeScript", "JavaScript", "React", "Next.js 15", "FastAPI", "Go"]
  },
  {
    title: "AGENTIC AI",
    skills: ["OpenAI Agents SDK", "Model Context Protocol (MCP)", "A2A", "N8N", "Agent Orchestration", "Function Calling"]
  },
  {
    title: "AI MODELS",
    skills: ["OpenAI (GPT-4o)", "Gemini 1.5 Pro", "Claude 3.5 Sonnet", "Qwen", "Whisper"]
  },
  {
    title: "DATA & INFRASTRUCTURE",
    skills: ["PostgreSQL", "pgvector", "Supabase", "Pinecone", "ChromaDB", "Docker", "Fly.io", "Kubernetes"]
  },
  {
    title: "DEVELOPER TOOLING",
    skills: ["Git", "GitHub", "Cursor", "Codex", "Gemini CLI", "Claude Code", "Langfuse", "ADB"]
  }
];

// Certifications
export const CERTIFICATIONS: Certification[] = [
  {
    title: "A2AS Behavior Certificate — deep-research-age",
    issuer: "A2AS Registry (a2as.org)",
    year: "2026",
    description: "Certified by the A2AS Registry for AI Agent Security and Governance. Validates that deep-research-age operates within audited, declared behavioral boundaries.",
    skills: ["AI Security", "Agent Governance", "Behavior Certificates", "Agentic AI"],
    credentialUrl: "https://a2as.org/certified/agents/abdullahmalik17/deep-research-age",
    icon: "🛡️",
    badge: "A2AS Certified",
    agentId: "abdullahmalik17/deep-research-age"
  },
  {
    title: "Prompt Engineering Specialist",
    issuer: "Panaversity",
    year: "2024",
    description: "Advanced certification in prompt engineering, LLM orchestration, and AI agent development.",
    skills: ["LLM Optimization", "Few-Shot Prompting", "Chain-of-Thought", "Agentic Workflows"],
    credentialUrl: "/Muhammad_Abdullah_Certificate.pdf",
    icon: "📜"
  }
];

// About Information
export const ABOUT: AboutInfo = {
  experience: "2+ years",
  journey: "Started coding at age 14 by mastering web fundamentals. Advanced into TypeScript, full-stack frameworks, and specialized in Agentic AI Development at Panaversity. Currently engineering autonomous digital FTEs, edge agent runtimes in Go, and multi-agent orchestration tools.",
  education: ["Panaversity — Agentic AI Development", "PIAIC — Artificial Intelligence"],
  philosophy: "Building autonomous software systems that operate reliably, securely, and transparently to handle complex workflows without human bottlenecks."
};

// GitHub Repositories
export const GITHUB_REPOS = {
  main: "https://github.com/AbdullahMalik17",
  malikclaw: "https://github.com/AbdullahMalik17/malikclaw",
  digitalFTE: "https://github.com/AbdullahMalik17/Digital-FTE",
  customerSuccess: "https://github.com/AbdullahMalik17/Hacathan_5",
  agenticAI: "https://github.com/AbdullahMalik17/Agentic_AI"
};
