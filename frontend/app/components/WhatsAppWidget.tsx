'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '@/app/lib/portfolio-data';

const WhatsAppWidget = () => {
  const phoneNumber = PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent("Hi Abdullah! I visited your portfolio and would like to discuss an autonomous AI agent project.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-24 left-6 z-40"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-12 h-12 rounded-2xl glass border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 shadow-xl shadow-emerald-500/15 group relative cursor-pointer"
        aria-label="Direct WhatsApp Contact"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />

        {/* Pulse Dot */}
        <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        </span>

        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-3 py-1.5 glass bg-slate-950 text-slate-200 text-xs font-mono font-medium rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl">
          WhatsApp Direct: {PERSONAL_INFO.whatsapp}
        </span>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppWidget;
