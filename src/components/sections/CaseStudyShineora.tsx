"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GitBranch, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function CaseStudyShineora() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section ref={containerRef} className="w-full bg-[#111111] text-foreground py-24 md:py-32 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative z-10 border-t border-border/10 shadow-[0_-40px_100px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-mono tracking-widest text-sm uppercase mb-4 block">Case Study 01</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white">Shineora</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              A premium e-commerce platform redefining how fashion jewellery is explored and purchased online.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.shineora.in/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm font-semibold">
              <span>Visit Platform</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/SV-DEV-AI/shineora.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-border/50 bg-[#1A1A1A] hover:bg-[#222222] transition-colors text-sm font-medium">
              <GitBranch className="w-4 h-4" />
              <span>Source</span>
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <motion.div style={{ scale }} className="w-full aspect-[4/3] md:aspect-[21/9] bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-border/20 rounded-3xl overflow-hidden relative flex items-center justify-center mb-24 shadow-2xl">
          <ShoppingBag className="w-24 h-24 text-primary/20" />
          <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          <p className="absolute bottom-8 right-8 text-muted-foreground/50 font-mono text-xs uppercase tracking-widest">Product UI Placeholder</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border/20 py-12 mb-24">
          {[
            { label: "Role", value: "Lead Developer" },
            { label: "Timeline", value: "5 Months" },
            { label: "Stack", value: "Next.js, TS, Tailwind" },
            { label: "Status", value: "Production" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="text-muted-foreground text-xs uppercase tracking-[0.2em]">{stat.label}</span>
              <span className="text-xl md:text-2xl font-medium text-white">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Build Explorer */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">How It Was Built</h3>
            <div className="h-[1px] flex-1 bg-border/20"></div>
          </div>
          <BuildExplorer />
        </div>
      </div>
    </section>
  );
}

const buildStages = [
  {
    id: "research",
    title: "01. Research & Strategy",
    content: "Analyzed existing luxury e-commerce platforms. The goal was to identify UX friction points. Discovered that slow image loading and clunky category transitions were the biggest drop-off points for users.",
    tech: ["Market Analysis", "UX Auditing"]
  },
  {
    id: "design",
    title: "02. Design & Architecture",
    content: "Drafted a fluid, typography-first design system. Decided on a headless architecture to completely decouple the frontend presentation from the backend business logic, ensuring maximum creative freedom.",
    tech: ["Figma", "Headless Commerce", "System Design"]
  },
  {
    id: "dev",
    title: "03. Development",
    content: "Engineered the storefront using React and Tailwind CSS. Implemented complex state management for the cart and seamless page transitions. Focused heavily on building reusable, accessible components.",
    tech: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "opt",
    title: "04. Optimization",
    content: "Aggressively optimized Web Vitals. Implemented advanced image compression, dynamic imports for heavy components, and strategic caching to ensure sub-second page loads across all devices.",
    tech: ["Next.js Image", "Dynamic Imports", "Lighthouse"]
  },
  {
    id: "deploy",
    title: "05. Deployment",
    content: "Configured edge deployment for global low-latency access. Set up automated CI/CD pipelines to ensure that every push to the main branch is instantly built, tested, and deployed to production safely.",
    tech: ["Vercel Edge", "CI/CD", "GitHub Actions"]
  }
];

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

function BuildExplorer() {
  const [activeStage, setActiveStage] = useState(buildStages[0].id);

  const activeData = buildStages.find(s => s.id === activeStage)!;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
      {/* Navigation */}
      <div className="flex flex-col gap-2">
        {buildStages.map((stage) => {
          const isActive = activeStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`text-left flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="font-mono text-sm tracking-widest">{stage.title}</span>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="lg:col-span-2 relative min-h-[300px] bg-[#1A1A1A] rounded-[2rem] border border-white/5 p-8 md:p-12 overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10"
          >
            <h4 className="text-2xl md:text-4xl font-semibold text-white mb-6 tracking-tight">{activeData.title.split(". ")[1]}</h4>
            <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-10">
              {activeData.content}
            </p>
            
            <div className="flex flex-wrap gap-3">
              {activeData.tech.map(t => (
                <span key={t} className="px-4 py-2 rounded-full bg-[#222] border border-white/10 text-xs font-mono uppercase tracking-widest text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
