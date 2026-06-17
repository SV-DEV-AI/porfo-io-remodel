"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";

export default function EasterEggs() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [keysPressed, setKeysPressed] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD + K or CTRL + K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowTerminal(prev => !prev);
      }

      // Konami Code: ArrowUp, ArrowUp, ArrowDown, ArrowDown, ArrowLeft, ArrowRight, ArrowLeft, ArrowRight, b, a
      setKeysPressed(prev => {
        const next = [...prev, e.key].slice(-10);
        if (next.join(",") === "ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,b,a") {
           setShowTerminal(true);
        }
        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {showTerminal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowTerminal(false)}
        >
          <div 
            className="w-full max-w-2xl bg-[#050505] border border-white/20 rounded-xl overflow-hidden shadow-2xl font-mono text-sm"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">developer-insights.sh</span>
              </div>
              <button onClick={() => setShowTerminal(false)} className="text-muted-foreground hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 text-green-400 space-y-4 h-[300px] overflow-y-auto">
              <p>{">"} INITIALIZING SECRET DEVELOPER LOGS...</p>
              <p className="text-muted-foreground">
                Welcome to the hidden layer of my portfolio. Here are some technical notes on how this site was built:
              </p>
              <ul className="space-y-2 mt-4 text-white/80">
                <li>- Everything is rendered in Next.js App Router for optimal Server Components.</li>
                <li>- Animations are handled by Framer Motion, specifically using hardware-accelerated transforms and opacity to maintain a Lighthouse 100 score.</li>
                <li>- The entire design system relies on Tailwind CSS, avoiding any external UI libraries to keep the bundle size minimal.</li>
                <li>- The typography is perfectly aligned on a 4px baseline grid.</li>
              </ul>
              <p className="mt-8">{">"} STATUS: Always building.</p>
              <p className="animate-pulse">{">"} _</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
