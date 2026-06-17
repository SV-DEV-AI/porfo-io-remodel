"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bot, Network, MessageSquare, Cpu, ExternalLink } from "lucide-react";

export default function CaseStudyElize() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section ref={containerRef} className="w-full bg-[#050505] text-white py-32 md:py-48 relative overflow-hidden border-t border-white/5">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div style={{ opacity, y }} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <span className="text-blue-400 font-mono tracking-[0.3em] text-xs uppercase mb-6 block">Case Study 02</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">Elize AI</h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            An intelligent academic assistant. Seamlessly connecting Telegram, n8n workflows, and Large Language Models.
          </p>
        </div>

        {/* Interactive Architecture Flow */}
        <div className="w-full bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-8 md:p-16 mb-32 relative overflow-hidden shadow-2xl shadow-blue-900/10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
          
          <h3 className="text-2xl font-semibold mb-16 text-center tracking-tight">System Architecture</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-4xl mx-auto relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[2px] bg-white/10 -translate-y-1/2 z-0">
               <motion.div 
                 className="absolute top-0 left-0 h-full bg-blue-500" 
                 animate={{ width: ["0%", "100%"] }} 
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
            </div>

            {/* Node 1 */}
            <Node icon={<MessageSquare />} title="Telegram API" desc="User Input" delay={0} />
            {/* Node 2 */}
            <Node icon={<Network />} title="n8n" desc="Orchestration" delay={0.5} />
            {/* Node 3 */}
            <Node icon={<Cpu />} title="LLM (AI)" desc="Processing" delay={1.0} />
            {/* Node 4 */}
            <Node icon={<Bot />} title="Response" desc="Output Delivery" delay={1.5} />
          </div>
        </div>

        {/* Deep Dive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111] border border-white/5 p-10 rounded-3xl space-y-4 hover:border-white/20 transition-colors">
            <h4 className="text-xl font-medium text-white">The Problem</h4>
            <p className="text-muted-foreground font-light leading-relaxed">Students needed instant, personalized academic support without navigating complex interfaces or waiting for human tutors.</p>
          </div>
          <div className="bg-[#111] border border-white/5 p-10 rounded-3xl space-y-4 hover:border-white/20 transition-colors">
            <h4 className="text-xl font-medium text-white">The Automation</h4>
            <p className="text-muted-foreground font-light leading-relaxed">Built scalable webhook integrations via n8n to route messages seamlessly between the Telegram Bot API and AI models.</p>
          </div>
          <div className="bg-[#111] border border-white/5 p-10 rounded-3xl space-y-4 hover:border-white/20 transition-colors">
            <h4 className="text-xl font-medium text-white">The Outcome</h4>
            <p className="text-muted-foreground font-light leading-relaxed">A lightning-fast conversational agent providing 24/7 educational assistance, reducing query resolution time to seconds.</p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}

function Node({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-4 w-full md:w-auto">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        viewport={{ once: true }}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1A1A1A] border-2 border-white/10 flex items-center justify-center text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, delay, repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-blue-500/30"
        />
        {icon}
      </motion.div>
      <div className="text-center">
        <h5 className="font-medium text-white">{title}</h5>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">{desc}</span>
      </div>
    </div>
  );
}
