'use client'

import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('analysis-section');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col justify-center items-center overflow-hidden min-h-screen">
      {/* Abstract Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            AI-Powered Comment Analysis
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Decode the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Comment Section
            </span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
        >
          Don't just read comments. Understand them. From teachers finding questions to travelers finding gems, extract insights instantly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={scrollToForm}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-slate-950 transition-all duration-300 hover:bg-cyan-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            <span>Analyze Now</span>
            <ArrowDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>

      {/* Floating Use Cases */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Card 1: Teacher */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-32 left-[5%] md:left-[10%] p-4 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl max-w-xs hidden md:block "
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Search size={16} /></div>
            <span className="text-sm font-semibold text-white">Teachers</span>
          </div>
          <p className="text-xs text-slate-400">"What topics are students asking about efficiently?"</p>
        </motion.div>

        {/* Card 2: Traveler */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute bottom-32 right-[5%] md:right-[10%] p-4 bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl max-w-xs hidden md:block"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><MapPin size={16} /></div>
            <span className="text-sm font-semibold text-white">Travelers</span>
          </div>
          <p className="text-xs text-slate-400">"Is this place safe? Best time to visit based on recent comments?"</p>
        </motion.div>
      </div>
    </section>
  );
}

