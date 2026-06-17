"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const currentFocus = [
  "Autonomous AI Agents",
  "Distributed Automation Systems",
  "Typography-First Design",
  "Edge Computing Architectures"
];

export default function CurrentlyBuilding() {
  return (
    <section className="w-full bg-[#111111] text-foreground py-24 relative overflow-hidden border-t border-border/10">
      
      {/* Background Pulse Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex items-center gap-6 md:w-1/3">
          <div className="relative flex items-center justify-center w-12 h-12">
             <motion.div 
               animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 bg-primary/30 rounded-full"
             />
             <div className="relative z-10 bg-[#111] p-3 rounded-full border border-primary/50 text-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]">
               <Activity className="w-5 h-5" />
             </div>
          </div>
          <div>
            <span className="text-primary font-mono text-xs uppercase tracking-widest block mb-1">Live Status</span>
            <h3 className="text-2xl font-semibold text-white tracking-tight">Currently Exploring</h3>
          </div>
        </div>

        <div className="md:w-2/3 w-full flex flex-wrap gap-4">
          {currentFocus.map((focus, i) => (
             <motion.div
               key={focus}
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               viewport={{ once: true }}
               className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium tracking-wide backdrop-blur-sm"
             >
               {focus}
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
