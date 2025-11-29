'use client'

import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Code, ShoppingBag, Gamepad2, TrendingUp, AlertCircle, HelpCircle } from 'lucide-react';
import AnalysisForm from './AnalysisForm';

const useCases = [
  { icon: Search, label: "Product Research", text: "Is the battery life actually good?" },
  { icon: MapPin, label: "Travel Planning", text: "Is it safe for solo travelers?" },
  { icon: Code, label: "Developers", text: "Feature requests vs Bug reports" },
  { icon: ShoppingBag, label: "E-Commerce", text: "Sizing fit real feedback" },
  { icon: Gamepad2, label: "Gaming", text: "Is the optimization patch working?" },
  { icon: TrendingUp, label: "Finance", text: "Bullish or Bearish sentiment?" },
  { icon: AlertCircle, label: "Crisis Mgmt", text: "Identify PR backlashes early" },
  { icon: HelpCircle, label: "Education", text: "What are students confused about?" },
];

const MarqueeRow = ({ items, duration, reverse = false }) => (
  <motion.div
    initial={{ x: reverse ? "-50%" : "0%" }}
    animate={{ x: reverse ? "0%" : "-50%" }}
    transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
    className="flex gap-8 flex-shrink-0"
  >
    {[...items, ...items, ...items].map((item, idx) => (
      <div 
        key={idx} 
        className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/30 border border-white/[0.03] backdrop-blur-[1px] min-w-[280px]"
      >
        <div className="p-2 bg-slate-800/30 rounded-lg text-slate-900">
          <item.icon size={16} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">{item.label}</div>
          <div className="text-xs text-slate-900 font-medium truncate">"{item.text}"</div>
        </div>
      </div>
    ))}
  </motion.div>
);

export default function AnalysisSection() {
  return (
    <section 
      id="analysis-section"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-[#050A18] overflow-hidden"
    >
      {/* --- Diagonal Marquee Background --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 flex flex-col gap-8 justify-center opacity-30 origin-center"
          style={{ transform: 'rotate(-12deg) scale(1.5)' }} // Tilted -12deg or -45deg depending on preference. -12 looks better for text readability, but here is logic for diagonal.
        >
          {/* We use multiple rows with different speeds/directions to create the infinite diagonal flow */}
          <MarqueeRow items={useCases.slice(0, 4)} duration={40} />
          <MarqueeRow items={useCases.slice(4, 8)} duration={50} reverse />
          <MarqueeRow items={useCases.slice(0, 4)} duration={45} />
          <MarqueeRow items={useCases.slice(4, 8)} duration={35} reverse />
          <MarqueeRow items={useCases.slice(0, 4)} duration={60} />
        </div>
        
        {/* Gradient Overlay to fade edges and keep focus center */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-[#050A18] z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A18] via-transparent to-[#050A18] z-0"></div>
      </div>

      {/* --- Main Content (Centered) --- */}
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-[32px] shadow-2xl relative overflow-hidden w-full"
        >
          {/* Decorative gradient blob inside card */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />

          <div className="relative z-20 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Analyze Any Video</h2>
            <p className="text-slate-400 text-sm mb-10 max-w-md mx-auto">
              Paste a YouTube URL below to instantly decode audience sentiment, find key questions, and extract hidden topics.
            </p>
            
            <AnalysisForm />
          </div>
        </motion.div>

      </div>
    </section>
  );
}