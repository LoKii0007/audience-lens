"use client";

import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const scrollToForm = () => {
    const formSection = document.getElementById("analysis-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-6 backdrop-blur-md bg-[#050A18]/70 border-b border-white/5">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex items-center gap-2">
          <div className="p-1.5">
            <Image
              src="/images/logo-2.png"
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Audience<span className="text-cyan-400">Lens</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/LoKii0007/audience-lens" target="_blank" className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <Github size={20} color="white" />
          </Link>
          <button
            onClick={scrollToForm}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors px-6 py-1"
          >
            Analyze Video
          </button>
        </div>
      </div>
    </nav>
  );
}
