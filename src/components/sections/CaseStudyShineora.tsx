"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
    <section id="shineora-metrics" ref={containerRef} className="w-full bg-background text-foreground py-24 md:py-32 rounded-[2rem] md:rounded-[3rem] relative z-10 border-t border-border/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-mono tracking-widest text-sm uppercase mb-4 block">Case Study 01</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 text-white">Shineora</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              A premium e-commerce platform redefining how fashion jewellery is explored and purchased online. Built to solve critical UX friction points and deliver sub-second page loads, significantly boosting mobile conversion rates.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.shineora.in/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors text-sm font-semibold">
              <span>Visit Platform</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="https://github.com/SV-DEV-AI/shineora.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-border/50 bg-surface hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors text-sm font-medium">
              <GitBranch className="w-4 h-4" />
              <span>Source</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Framework */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          
          <motion.div style={{ scale }} className="md:col-span-8 aspect-[16/10] bg-surface border border-border/20 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center shadow-2xl group">
            <Image src="/images/case-studies/shineora-hero.png" alt="Shineora Homepage" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
              <p className="text-white font-mono text-xs uppercase tracking-widest">Homepage & Product Catalog</p>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6">
             <motion.div style={{ scale }} className="h-full bg-surface border border-border/20 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center shadow-2xl group min-h-[200px]">
                <Image src="/images/case-studies/shineora-products.png" alt="Shineora Checkout Flow" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white font-mono text-xs uppercase tracking-widest">Checkout Flow</p>
                </div>
             </motion.div>
             <motion.div style={{ scale }} className="h-full bg-surface border border-border/20 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center shadow-2xl group min-h-[200px]">
                <Image src="/images/case-studies/shineora-bridal.png" alt="Shineora Mobile View" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <p className="text-white font-mono text-xs uppercase tracking-widest">Mobile View</p>
                </div>
             </motion.div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-border/20 py-12 mb-24">
          {[
            { label: "Scale", value: "128+ Products" },
            { label: "Platform", value: "Responsive E-commerce" },
            { label: "Optimization", value: "SEO Optimized" },
            { label: "Deployment", value: "Production" },
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



import { useSpring } from "framer-motion";

function BuildExplorer() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-6 md:px-12">
          {buildStages.map((stage) => {
            return (
              <div 
                key={stage.id} 
                className="w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 relative min-h-[400px] bg-surface rounded-[2rem] border border-border/10 p-8 md:p-12 flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="relative z-10">
                  <span className="font-mono text-sm tracking-widest text-muted-foreground mb-4 block">{stage.title}</span>
                  <h4 className="text-2xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight">{stage.title.split(". ")[1]}</h4>
                  <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-10">
                    {stage.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {stage.tech.map(t => (
                      <span key={t} className="px-4 py-2 rounded-full bg-surface-elevated border border-border/10 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
