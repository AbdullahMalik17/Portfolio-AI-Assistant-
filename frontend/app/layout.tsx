import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatbotWidget from "./components/ChatbotWidget";
import PWAInstallPrompt from "./components/PWAInstallPrompt";
import CommandPalette from "./components/CommandPalette";
import ContextMenu from "./components/ContextMenu";
import DeveloperTerminal from "./components/DeveloperTerminal";
import ClientProviders from "./components/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-ai-assistant-of-malik.vercel.app'),
  title: "Abdullah Malik — Agentic AI Engineer",
  description: "I build autonomous AI systems, Digital FTEs, MCP-powered tools, and production-ready agentic workflows.",
  keywords: ["Abdullah Malik", "Agentic AI Engineer", "Autonomous AI Agents", "Multi-Agent Systems", "Model Context Protocol", "MCP", "Digital FTE", "Go", "Python", "TypeScript", "Next.js"],
  authors: [{ name: "Abdullah Malik", url: "https://portfolio-ai-assistant-of-malik.vercel.app/" }],
  creator: "Abdullah Malik",
  publisher: "Abdullah Malik",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Abdullah Malik — Agentic AI Engineer",
    description: "I build autonomous AI systems, Digital FTEs, MCP-powered tools, and production-ready agentic workflows.",
    url: "https://portfolio-ai-assistant-of-malik.vercel.app/",
    siteName: "Abdullah Malik — Agentic AI Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Malik — Agentic AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Malik — Agentic AI Engineer",
    description: "I build autonomous AI systems, Digital FTEs, MCP-powered tools, and production-ready agentic workflows.",
    creator: "@Ab4695Athar",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Abdullah Malik Portfolio",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for direct LLM and Search Engine parsing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Abdullah Malik",
    "url": "https://portfolio-ai-assistant-of-malik.vercel.app/",
    "jobTitle": "Agentic AI Engineer",
    "sameAs": [
      "https://github.com/AbdullahMalik17",
      "https://www.linkedin.com/in/muhammad-abdullah-athar"
    ],
    "knowsAbout": [
      "Agentic AI Systems",
      "Autonomous Agents",
      "Model Context Protocol (MCP)",
      "Digital FTEs",
      "Go",
      "Python",
      "TypeScript",
      "Next.js",
      "Docker"
    ],
    "mainEntityOfPage": {
      "@type": "WebSite",
      "@id": "https://portfolio-ai-assistant-of-malik.vercel.app/"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders>
          {children}
          <DeveloperTerminal />
          <ContextMenu />
          <ChatbotWidget />
          <PWAInstallPrompt />
          <CommandPalette />
        </ClientProviders>
      </body>
    </html>
  );
}
