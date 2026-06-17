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
    <section ref={containerRef} className="w-full bg-[#111111] text-foreground py-32 md:py-48 rounded-[3rem] overflow-hidden relative z-10 border-t border-border/10 shadow-[0_-40px_100px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <span className="text-primary font-mono tracking-widest text-sm uppercase mb-6 block">Case Study 01</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white">Shineora</h2>
            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed">
              A premium e-commerce platform redefining how fashion jewellery is explored and purchased online.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.shineora.in/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-colors text-sm font-semibold">
              <span>Visit Platform</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/SV-DEV-AI/shineora.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-4 rounded-full border border-border/50 bg-[#1A1A1A] hover:bg-[#222222] transition-colors text-sm font-medium">
              <GitBranch className="w-4 h-4" />
              <span>Source</span>
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <motion.div style={{ scale }} className="w-full aspect-[4/3] md:aspect-[21/9] bg-gradient-to-br from-[#1A1A1A] to-[#0B0B0B] border border-border/20 rounded-3xl overflow-hidden relative flex items-center justify-center mb-32 shadow-2xl">
          <ShoppingBag className="w-24 h-24 text-primary/20" />
          <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          <p className="absolute bottom-8 right-8 text-muted-foreground/50 font-mono text-xs uppercase tracking-widest">Product UI Placeholder</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-border/20 py-16 mb-32">
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

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          <motion.div style={{ y: y1 }} className="space-y-24">
            <div>
              <h3 className="text-4xl font-semibold mb-8 text-white tracking-tight">The Challenge</h3>
              <p className="text-muted-foreground text-xl leading-relaxed font-light">
                Creating an e-commerce platform that doesn&apos;t just sell products, but tells a story. The existing solutions were clunky, slow, and failed to capture the luxury aesthetic of fashion jewellery. We needed a system that was blazing fast, SEO-optimized, and visually stunning.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-semibold mb-8 text-white tracking-tight">The Solution</h3>
              <p className="text-muted-foreground text-xl leading-relaxed font-light">
                I engineered a custom storefront from the ground up, navigating complex client requirements. By integrating headless commerce APIs, I decoupled the frontend from the backend, ensuring sub-second page loads, exceptional mobile optimization, and seamless, app-like transitions between categories.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-semibold mb-8 text-white tracking-tight">The Impact</h3>
              <p className="text-muted-foreground text-xl leading-relaxed font-light">
                Successfully deployed a scalable platform capable of handling real-world business transactions. Gained deep hands-on experience in production deployments, product management, and responsive architectural design.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="aspect-square bg-[#1A1A1A] rounded-[2.5rem] border border-border/10 p-12 flex flex-col justify-end relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full transition-transform duration-700 group-hover:scale-110"></div>
               <h4 className="text-3xl font-medium mb-4 text-white">SEO & Deployment</h4>
               <p className="text-muted-foreground text-lg font-light leading-relaxed">Built on a cutting-edge stack for maximum performance, global edge deployment, and aggressive search engine optimization.</p>
            </div>
            <div className="aspect-[4/3] bg-[#0B0B0B] rounded-[2.5rem] border border-border/10 p-12 flex flex-col justify-end relative overflow-hidden group">
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full transition-transform duration-700 group-hover:scale-110"></div>
               <h4 className="text-3xl font-medium mb-4 text-white">UX & Mobile First</h4>
               <p className="text-muted-foreground text-lg font-light leading-relaxed">Utilized fluid, perfectly spaced layouts that feel native and expensive across all device viewports.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
