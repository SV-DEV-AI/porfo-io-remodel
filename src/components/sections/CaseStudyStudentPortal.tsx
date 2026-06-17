"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";

export default function CaseStudyStudentPortal() {
  return (
    <section className="w-full bg-background text-foreground py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          <div className="lg:w-1/2">
             <div className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                 <GraduationCap className="w-8 h-8 text-white" />
               </div>
               <div>
                 <span className="text-white/50 font-mono tracking-widest text-xs uppercase block mb-1">Genesis Project</span>
                 <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Student Portal</h3>
               </div>
             </div>
             
             <p className="text-xl text-muted-foreground font-light leading-relaxed mb-10">
               Where the journey began. Built to learn web development fundamentals, this project laid the groundwork for my understanding of DOM manipulation, responsive design, and core programming paradigms.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://sv-dev-ai.github.io/student-portal-/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-semibold">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="https://github.com/SV-DEV-AI/student-portal-" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 transition-colors text-sm font-medium">
                  <span>Source Code</span>
                </a>
             </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-[#111] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-lg font-medium text-white mb-2">Growth Journey</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Demonstrating the crucial transition from theory to practice in a self-taught environment.</p>
               </div>
               <div className="bg-[#111] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                  <h4 className="text-lg font-medium text-white mb-2">Fundamentals</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Mastering raw HTML, CSS, and vanilla JavaScript without the crutch of modern frameworks.</p>
               </div>
               <div className="bg-[#111] p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors sm:col-span-2">
                  <h4 className="text-lg font-medium text-white mb-2">The Baseline</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">It serves as a benchmark—a reminder of how far the technical capability has scaled into distributed systems and AI over a short period.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
