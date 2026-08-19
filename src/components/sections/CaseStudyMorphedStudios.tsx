"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Monitor } from "lucide-react";

export default function CaseStudyMorphedStudios() {
  return (
    <section className="w-full bg-background text-foreground py-24 md:py-32 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          
          <div className="lg:w-1/2">
             <div className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                 <Monitor className="w-8 h-8 text-white" />
               </div>
               <div>
                 <span className="text-white/50 font-mono tracking-widest text-xs uppercase block mb-1">Client Project</span>
                 <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Morphed Studios</h3>
               </div>
             </div>
             
             <p className="text-xl text-muted-foreground font-light leading-relaxed mb-10">
               Designed and developed a professional portfolio website for a client to effectively showcase their creative services.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://morphedstudios.co.in" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-foreground/10 text-foreground hover:bg-foreground/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors text-sm font-semibold">
                  <span>View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
             </div>
          </div>

          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-border/10 mt-12 lg:mt-0">
              <Image src="/images/case-studies/morphed-studios.png" alt="Morphed Studios Portfolio" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-surface p-6 md:p-8 rounded-3xl border border-border/5 hover:border-border/20 transition-colors">
                  <h4 className="text-lg font-medium text-foreground mb-2">Modern Web Technologies</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Leveraged cutting-edge tools to deliver a fast, scalable, and visually appealing web presence.</p>
               </div>
               <div className="bg-surface p-6 md:p-8 rounded-3xl border border-border/5 hover:border-border/20 transition-colors">
                  <h4 className="text-lg font-medium text-foreground mb-2">Responsive UI</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Implemented responsive UI components ensuring optimal performance and cross-device compatibility.</p>
               </div>
               <div className="bg-surface p-6 md:p-8 rounded-3xl border border-border/5 hover:border-border/20 transition-colors sm:col-span-2">
                  <h4 className="text-lg font-medium text-foreground mb-2">Creative Showcase</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Built specifically to highlight the client's creative portfolio, ensuring their work takes center stage with fluid interactions.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
