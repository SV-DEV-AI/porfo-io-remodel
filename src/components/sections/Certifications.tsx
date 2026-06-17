"use client";

import { motion } from "framer-motion";
import { Award, Cloud, Cpu, Code, Briefcase, ChevronRight } from "lucide-react";

const credentials = [
  {
    title: "Generative AI: Prompt Engineering Basics",
    issuer: "IBM",
    icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />,
    type: "Certification",
  },
  {
    title: "Getting Started with Data Analytics",
    issuer: "AWS",
    icon: <Cloud className="w-8 h-8 md:w-10 md:h-10 text-amber-500" />,
    type: "Certification",
  },
  {
    title: "Introduction to Networking",
    issuer: "NVIDIA",
    icon: <NetworkIcon className="w-8 h-8 md:w-10 md:h-10 text-green-500" />,
    type: "Certification",
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    icon: <Code className="w-8 h-8 md:w-10 md:h-10 text-green-400" />,
    type: "Certification",
  },
];

const simulations = [
  { company: "Tata", role: "GenAI Simulation" },
  { company: "British Airways", role: "Software Engineering" },
  { company: "Siemens Mobility", role: "Digital Engineering" },
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
    <section className="w-full bg-[#080808] text-foreground py-32 md:py-48 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          <div className="md:w-1/3">
            <div className="sticky top-32">
              <span className="text-primary font-mono tracking-widest text-xs uppercase mb-6 block">Verified Credentials</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Continuous<br />Learning.</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
                Validating skills through industry-recognized programs and real-world corporate simulations.
              </p>
            </div>
          </div>

          <div className="md:w-2/3 space-y-16">
            
            {/* Certifications Grid */}
            <div className="space-y-8">
               <h3 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-3">
                 <Award className="w-6 h-6 text-primary" />
                 Professional Certifications
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {credentials.map((cred, i) => (
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
                     viewport={{ once: true }}
                     key={cred.title} 
                     className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
                   >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                     <div className="mb-8">{cred.icon}</div>
                     <span className="text-muted-foreground text-xs font-mono uppercase tracking-widest block mb-2">{cred.issuer}</span>
                     <h4 className="text-lg font-medium text-white leading-snug">{cred.title}</h4>
                   </motion.div>
                 ))}
               </div>
            </div>

            {/* Forage Simulations */}
            <div className="space-y-8 pt-8 border-t border-white/5">
               <h3 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-3">
                 <Briefcase className="w-6 h-6 text-primary" />
                 Forage Corporate Simulations
               </h3>
               <div className="flex flex-col gap-3">
                 {simulations.map((sim, i) => (
                   <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" as const }}
                     viewport={{ once: true }}
                     key={sim.company} 
                     className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                   >
                     <div>
                       <h4 className="text-white font-medium text-lg">{sim.company}</h4>
                       <span className="text-muted-foreground text-sm font-light">{sim.role}</span>
                     </div>
                     <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors group-hover:translate-x-1" />
                   </motion.div>
                 ))}
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
