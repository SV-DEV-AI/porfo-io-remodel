"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, BrainCircuit, Lightbulb, X, ArrowRight } from "lucide-react";

const perspectives = [
  {
    id: "developer",
    title: "Developer",
    subtitle: "Code, Architecture, Engineering",
    icon: <Code2 className="w-12 h-12 md:w-16 md:h-16 mb-6 text-white" />,
    color: "from-blue-500/20 to-blue-900/20",
    content: "I engineer robust, scalable systems using modern architectures. From decoupling frontends with Next.js 15 to designing highly normalized MySQL databases, I treat code as craft. Performance, type-safety, and maintainability are not afterthoughts—they are the foundation.",
    points: ["Next.js App Router", "TypeScript Strict Mode", "Tailwind Architecture"]
  },
  {
    id: "ai-builder",
    title: "AI Builder",
    subtitle: "Workflows, Automation, Agents",
    icon: <BrainCircuit className="w-12 h-12 md:w-16 md:h-16 mb-6 text-white" />,
    color: "from-purple-500/20 to-purple-900/20",
    content: "I connect the dots between raw intelligence and user utility. Building an AI wrapper is easy; orchestrating seamless, stateful agents via n8n and webhooks is where the magic happens. I build systems that automate the mundane and augment human capability.",
    points: ["LLM Orchestration", "n8n Webhooks", "Telegram Bot API"]
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    subtitle: "Products, Impact, Problem Solving",
    icon: <Lightbulb className="w-12 h-12 md:w-16 md:h-16 mb-6 text-white" />,
    color: "from-amber-500/20 to-amber-900/20",
    content: "Technology without impact is just syntax. I build products to solve real problems. Shineora was born from a need for better e-commerce UX; Elize was built to democratize academic support. I focus on user retention, scalable business logic, and frictionless onboarding.",
    points: ["Product Management", "UX Engineering", "Business Logic"]
  }
];

export default function PerspectiveChoice() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="w-full bg-background text-foreground py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">What would you like to explore?</h2>
           <p className="text-muted-foreground text-xl font-light">Choose a perspective to understand how I approach problems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {perspectives.map((item) => (
            <motion.div
              layoutId={`card-container-${item.id}`}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="bg-[#111] hover:bg-[#151515] border border-white/5 hover:border-white/20 rounded-[2rem] p-8 md:p-10 cursor-pointer transition-colors group flex flex-col items-center text-center relative overflow-hidden h-[400px] md:h-[450px]"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <motion.div layoutId={`icon-${item.id}`} className="z-10 mt-auto">
                {item.icon}
              </motion.div>
              <motion.h3 layoutId={`title-${item.id}`} className="text-3xl md:text-4xl font-bold text-white mb-4 z-10 tracking-tight">
                {item.title}
              </motion.h3>
              <motion.p layoutId={`subtitle-${item.id}`} className="text-muted-foreground font-mono text-sm uppercase tracking-widest z-10 mb-auto">
                {item.subtitle}
              </motion.p>

              <div className="absolute bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white text-sm tracking-widest uppercase font-medium">
                Explore <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            >
              {perspectives.filter(item => item.id === selectedId).map(item => (
                <motion.div
                  layoutId={`card-container-${item.id}`}
                  key={item.id}
                  className="bg-[#111] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 relative flex flex-col shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-8 right-8 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                    <div className="md:w-1/3 flex flex-col">
                      <motion.div layoutId={`icon-${item.id}`}>
                        {item.icon}
                      </motion.div>
                      <motion.h3 layoutId={`title-${item.id}`} className="text-5xl font-bold text-white mb-4 tracking-tight">
                        {item.title}
                      </motion.h3>
                      <motion.p layoutId={`subtitle-${item.id}`} className="text-primary font-mono text-xs uppercase tracking-widest">
                        {item.subtitle}
                      </motion.p>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-8">
                      <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                        {item.content}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                        {item.points.map(point => (
                          <div key={point} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span className="text-white tracking-wide">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
