"use client";

import { motion } from "framer-motion";
import { Award, Cloud, Cpu, Code, Briefcase } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const allCredentials = [
  {
    category: "AI",
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    date: "2024",
    icon: <Cpu className="w-8 h-8 text-accent-blue" />,
    skillsGained: ["Prompt Design", "LLM Context Windows", "AI Workflows"]
  },
  {
    category: "Cloud",
    title: "Getting Started with Data Analytics on AWS",
    issuer: "AWS",
    date: "2023",
    icon: <Cloud className="w-8 h-8 text-accent-amber" />,
    skillsGained: ["Data Pipelines", "Cloud Architecture", "AWS Services"]
  },
  {
    category: "Networking",
    title: "Introduction to Networking",
    issuer: "NVIDIA",
    date: "2023",
    icon: <NetworkIcon className="w-8 h-8 text-status-success" />,
    skillsGained: ["Network Topology", "Protocols", "Edge Computing"]
  }
];

function NetworkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section className="w-full bg-background text-foreground py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-24">
          
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <span className="text-primary font-mono tracking-widest text-xs uppercase mb-6 block">Verified Credentials</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Continuous<br />Learning.</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
                Validating skills through industry-recognized programs and real-world corporate simulations.
              </p>
            </div>
          </div>

          <div className="md:w-2/3">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {allCredentials.map((cred, i) => (
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                   viewport={{ once: true }}
                   key={cred.title + cred.issuer} 
                 >
                   <TiltCard className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-surface p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden flex flex-col h-[280px] w-full block">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                     
                     <div className="flex justify-between items-start mb-auto">
                       <div className="p-3 bg-white/5 rounded-2xl">
                         {cred.icon}
                       </div>
                       <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">
                         {cred.category}
                       </span>
                     </div>

                     <div className="relative mt-auto pt-8">
                       <div className="transform md:group-hover:-translate-y-[4.5rem] transition-transform duration-500 ease-out">
                         <span className="text-primary text-xs font-mono uppercase tracking-widest block mb-2">{cred.issuer} • {cred.date}</span>
                         <h4 className="text-xl font-medium text-white leading-snug">{cred.title}</h4>
                       </div>

                       {/* Hover Reveal Content */}
                       <div className="absolute bottom-0 left-0 right-0 opacity-100 md:opacity-0 group-hover:opacity-100 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                         <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                           {cred.skillsGained.map(s => (
                             <span key={s} className="text-[10px] bg-white/10 text-white/80 px-2 py-1 rounded tracking-wide">
                               {s}
                             </span>
                           ))}
                         </div>
                       </div>
                     </div>
                   </TiltCard>
                 </motion.div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
