"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <section className="w-full bg-background text-foreground py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-primary font-mono tracking-widest text-xs uppercase mb-6 block">Professional Background</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Experience</h2>
          <p className="text-muted-foreground text-lg font-light">Delivering real-world solutions in a professional environment.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-surface border border-white/5 hover:border-white/20 p-8 md:p-12 rounded-3xl transition-colors relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] group"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/5 rounded-2xl text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Junior Developer Intern</h3>
                <h4 className="text-lg text-muted-foreground font-light">Shineora Arts and Jewels Pvt Ltd</h4>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground font-mono text-xs uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full self-start">
              <Calendar className="w-4 h-4" />
              <span>Internship</span>
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            {[
              "Built production e-commerce solutions",
              "Developed frontend experiences",
              "Improved responsiveness",
              "Worked with real business requirements",
              "Collaborated on deployment workflows"
            ].map((task, i) => (
              <div key={i} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/80 font-light leading-relaxed">{task}</span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
