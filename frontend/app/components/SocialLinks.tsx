'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '@/app/lib/portfolio-data';

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

const SocialLinks = ({ className = '', showLabels = false }: SocialLinksProps) => {
  const links = [
    {
      name: 'GitHub',
      icon: <Github className="w-4 h-4" />,
      url: PERSONAL_INFO.github,
      hoverBorder: 'hover:border-white/40 hover:text-white',
      ariaLabel: "Visit Abdullah Malik's GitHub profile",
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      url: PERSONAL_INFO.linkedin,
      hoverBorder: 'hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]',
      ariaLabel: "Visit Abdullah Malik's LinkedIn profile",
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-4 h-4" />,
      url: PERSONAL_INFO.twitter || 'https://x.com/Ab4695Athar',
      hoverBorder: 'hover:border-indigo-500/50 hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]',
      ariaLabel: "Visit Abdullah Malik's Twitter profile",
    },
    {
      name: 'Email',
      icon: <Mail className="w-4 h-4" />,
      url: `mailto:${PERSONAL_INFO.email}`,
      hoverBorder: 'hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]',
      ariaLabel: "Send an email to Abdullah Malik",
    },
    {
      name: 'Resume',
      icon: <FileText className="w-4 h-4" />,
      url: '/Abdullah_resume.pdf',
      hoverBorder: 'hover:border-pink-500/50 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]',
      ariaLabel: "View Abdullah Malik's Resume PDF",
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 p-2.5 rounded-xl glass border border-white/[0.08] text-slate-400 transition-all duration-300 ${link.hoverBorder}`}
          aria-label={link.ariaLabel}
          title={link.name}
        >
          {link.icon}
          {showLabels && <span className="text-xs font-mono font-medium">{link.name}</span>}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
