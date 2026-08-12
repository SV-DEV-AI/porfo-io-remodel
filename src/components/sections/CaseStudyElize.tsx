"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Bot, Network, MessageSquare, Cpu, ArrowUpRight } from "lucide-react";

export default function CaseStudyElize() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="elize-ai" ref={containerRef} className="w-full bg-background text-foreground py-24 md:py-32 relative overflow-hidden border-t border-border/10">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-primary font-mono tracking-[0.3em] text-xs uppercase mb-6 block">Case Study 02</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">Elize AI</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
            An intelligent academic assistant. Seamlessly connecting Telegram, n8n workflows, and Large Language Models.
          </p>
          <a href="https://elize-remodel.vercel.app/chat" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary border border-primary/20 transition-colors text-sm font-semibold">
            <span>Interact with Elize</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-border/20 py-12 mb-24">
          {[
            { label: "Product", value: "AI Academic Assistant" },
            { label: "Platform", value: "Telegram Integration" },
            { label: "Workflow", value: "n8n Automation" },
            { label: "Process", value: "Multi-Step AI" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className="text-muted-foreground text-xs uppercase tracking-[0.2em]">{stat.label}</span>
              <span className="text-xl md:text-2xl font-medium text-white">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Visual Framework & Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
          
          {/* Chat Interface Placeholder */}
          <motion.div className="lg:col-span-4 h-full bg-surface border border-border/20 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center shadow-2xl group min-h-[250px] md:min-h-[400px]">
            <Image 
              src="/images/case-studies/elize-ai.png" 
              alt="Elize AI Chat Interface" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10 flex flex-col items-center justify-center">
              <MessageSquare className="w-12 h-12 text-white/50 mb-4 group-hover:scale-110 transition-transform duration-500" />
              <p className="text-white/80 font-mono text-xs uppercase tracking-widest">Telegram Chat Interface</p>
            </div>
          </motion.div>

          {/* Interactive Architecture Flow */}
          <div className="lg:col-span-8 w-full bg-surface border border-border/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
          
          <h3 className="text-2xl font-semibold mb-16 text-center tracking-tight">System Architecture</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-4xl mx-auto relative mb-12">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[2px] bg-white/10 -translate-y-1/2 z-0">
               <motion.div 
                 className="absolute top-0 left-0 h-full bg-blue-500" 
                 animate={{ width: ["0%", "100%"] }} 
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
            </div>

            <Node id="telegram" icon={<MessageSquare />} title="Telegram API" desc="User Input" delay={0} activeNode={activeNode} onClick={() => setActiveNode(activeNode === 'telegram' ? null : 'telegram')} />
            <Node id="n8n" icon={<Network />} title="n8n" desc="Orchestration" delay={0.5} activeNode={activeNode} onClick={() => setActiveNode(activeNode === 'n8n' ? null : 'n8n')} />
            <Node id="llm" icon={<Cpu />} title="LLM (AI)" desc="Processing" delay={1.0} activeNode={activeNode} onClick={() => setActiveNode(activeNode === 'llm' ? null : 'llm')} />
            <Node id="response" icon={<Bot />} title="Response" desc="Output Delivery" delay={1.5} activeNode={activeNode} onClick={() => setActiveNode(activeNode === 'response' ? null : 'response')} />
          </div>

          <AnimatePresence mode="wait">
            {activeNode && (
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto bg-blue-500/10 border border-blue-500/20 p-6 rounded-2xl text-center"
              >
                <h4 className="text-xl font-medium text-white mb-2">{nodeDetails[activeNode].title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{nodeDetails[activeNode].content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

        {/* Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface border border-border/10 p-8 rounded-3xl space-y-4 hover:border-border/30 transition-colors">
            <h4 className="text-xl font-medium text-foreground">The Problem</h4>
            <p className="text-muted-foreground font-light leading-relaxed">Students needed instant, personalized academic support without navigating complex interfaces or waiting for human tutors.</p>
          </div>
          <div className="bg-surface border border-border/10 p-8 rounded-3xl space-y-4 hover:border-border/30 transition-colors">
            <h4 className="text-xl font-medium text-foreground">The Automation</h4>
            <p className="text-muted-foreground font-light leading-relaxed">Built scalable webhook integrations via n8n to route messages seamlessly between the Telegram Bot API and AI models.</p>
          </div>
          <div className="bg-surface border border-border/10 p-8 rounded-3xl space-y-4 hover:border-border/30 transition-colors">
            <h4 className="text-xl font-medium text-foreground">The Outcome</h4>
            <p className="text-muted-foreground font-light leading-relaxed">A lightning-fast conversational agent providing 24/7 educational assistance, reducing query resolution time to seconds.</p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

const nodeDetails: Record<string, {title: string, content: string}> = {
  "telegram": {
    title: "Client Interface",
    content: "Acts as the frictionless front-end. Captures raw student queries directly from their mobile devices without requiring any app installation or complex authentication."
  },
  "n8n": {
    title: "Stateful Orchestration Engine",
    content: "The central nervous system. Receives webhooks, manages session state, verifies user permissions, and structures the payload before passing it to the intelligence layer."
  },
  "llm": {
    title: "Intelligence Layer",
    content: "Processes the structured context. Uses advanced prompt engineering to ensure responses are pedagogically sound, preventing hallucinations and ensuring academic integrity."
  },
  "response": {
    title: "Low-Latency Delivery",
    content: "The generated response is streamed back through n8n to the Telegram API, arriving at the student's device in under 2 seconds."
  }
};

function Node({ id, icon, title, desc, delay, activeNode, onClick }: { id: string, icon: React.ReactNode, title: string, desc: string, delay: number, activeNode: string | null, onClick: () => void }) {
  const isActive = activeNode === id;
  return (
    <div className="relative z-10 flex flex-col items-center gap-4 w-full md:w-auto group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-2" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()} onClick={onClick}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative transition-all duration-300 ${
          isActive 
            ? "bg-primary text-primary-foreground shadow-[0_0_40px_rgba(var(--primary),0.5)] border-transparent scale-110" 
            : "bg-surface-elevated border-2 border-border/20 text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.15)]"
        }`}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay, repeat: Infinity }}
          className={`absolute inset-0 rounded-full border ${isActive ? "border-white/30" : "border-blue-500/30"}`}
        />
        <div className="relative z-10">{icon}</div>
      </motion.div>
      <div className="text-center">
        <h5 className={`font-medium transition-colors ${isActive ? "text-blue-400" : "text-white"}`}>{title}</h5>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">{desc}</span>
      </div>
    </div>
  );
}
