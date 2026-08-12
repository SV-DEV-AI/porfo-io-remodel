"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, ChevronRight, Terminal } from "lucide-react";

export default function LeetCodeExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [solvedCount, setSolvedCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch("https://alfa-leetcode-api.onrender.com/sarthakv2005/solved");
        if (!response.ok) throw new Error("API failed");
        const data = await response.json();
        if (data.solvedProblem) {
          setSolvedCount(data.solvedProblem);
        } else {
          setSolvedCount(127);
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode data", error);
        setSolvedCount(127); // Fallback
      }
    };

    fetchLeetCodeData();
  }, []);

  return (
    <section className="w-full bg-background text-foreground py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-status-success/5 via-background to-background pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10" ref={ref}>
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-status-success/10 rounded-2xl mb-6 border border-green-500/20">
             <Code2 className="w-8 h-8 text-status-success" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">The Algorithm<br />Journey.</h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto">
            LeetCode isn&apos;t just about passing interviews. It&apos;s about training the brain to recognize patterns, optimize constraints, and write elegant logic under pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1 bg-surface border border-white/5 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center min-h-[300px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-status-success/10 blur-[50px] rounded-full"></div>
            <span className="text-muted-foreground font-mono uppercase tracking-widest text-xs mb-4 block">Problems Solved</span>
            <div className="flex items-baseline gap-2 mb-2">
              {solvedCount !== null ? (
                <Counter value={solvedCount} active={isInView} />
              ) : (
                <span className="text-5xl md:text-8xl font-bold text-white tracking-tighter tabular-nums">0</span>
              )}
              <span className="text-status-success font-bold text-4xl">+</span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Consistently challenging myself with algorithmic puzzles to maintain sharp problem-solving capabilities.
            </p>
          </div>

          <div className="md:col-span-2 bg-surface border border-white/5 p-8 rounded-3xl relative flex flex-col justify-between group overflow-hidden min-h-[300px]">
            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
              <Terminal className="w-32 h-32" />
            </div>
            <div className="w-full">
              <span className="text-muted-foreground font-mono uppercase tracking-widest text-xs mb-6 block">Core Topics & Focus</span>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Graphs", "Dynamic Programming", "Trees", "Backtracking", "Greedy"].map(topic => (
                  <span key={topic} className="px-4 py-2 rounded-full bg-status-success/10 border border-green-500/20 text-status-success text-sm font-medium">
                    {topic}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground font-light leading-relaxed max-w-lg">
                Consistently solving medium to hard algorithmic challenges. Training the brain to recognize patterns, optimize constraints, and write elegant logic under pressure.
              </p>
            </div>
            
            <a href="https://leetcode.com/u/sarthakv2005/" target="_blank" rel="noreferrer" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background inline-flex items-center gap-2 mt-8 text-status-success font-mono text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
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
    if (value === 0) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = Math.max(10, duration / end);

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 10)); // increment by step
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [value, active]);

  return <span className="text-5xl md:text-8xl font-bold text-white tracking-tighter tabular-nums">{count}</span>;
}
