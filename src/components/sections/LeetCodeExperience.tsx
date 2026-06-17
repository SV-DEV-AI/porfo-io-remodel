"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, ChevronRight, Terminal } from "lucide-react";

export default function LeetCodeExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-[#050505] text-foreground py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/5 via-[#050505] to-[#050505] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-2xl mb-6 border border-green-500/20">
             <Code2 className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">The Algorithm<br />Journey.</h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto">
            LeetCode isn&apos;t just about passing interviews. It&apos;s about training the brain to recognize patterns, optimize constraints, and write elegant logic under pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1 bg-[#111] border border-white/5 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center min-h-[300px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full"></div>
            <span className="text-muted-foreground font-mono uppercase tracking-widest text-xs mb-4 block">Problems Solved</span>
            <div className="flex items-baseline gap-2 mb-2">
              <Counter value={120} active={isInView} />
              <span className="text-green-400 font-bold text-4xl">+</span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Consistently challenging myself with algorithmic puzzles to maintain sharp problem-solving capabilities.
            </p>
          </div>

          <div className="md:col-span-2 bg-[#1A1A1A] border border-white/5 p-8 rounded-3xl relative flex flex-col justify-between group overflow-hidden min-h-[300px]">
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
              <Terminal className="w-32 h-32" />
            </div>
            <div>
              <span className="text-muted-foreground font-mono uppercase tracking-widest text-xs mb-8 block">Current Focus</span>
              <h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-4">Graph Theory &<br />Dynamic Programming</h3>
              <p className="text-muted-foreground font-light leading-relaxed max-w-md">
                Moving beyond the basics of arrays and strings. Currently obsessed with optimizing traversal algorithms and finding overlapping subproblems in complex state spaces.
              </p>
            </div>
            
            <a href="https://leetcode.com/u/sarthakv2005/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-8 text-green-400 font-mono text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
              View Profile <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

function Counter({ value, active }: { value: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = (duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, active]);

  return <span className="text-6xl md:text-8xl font-bold text-white tracking-tighter tabular-nums">{count}</span>;
}
