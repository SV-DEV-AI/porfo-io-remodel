"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2, Database, BrainCircuit, Workflow, Rocket } from "lucide-react";

const skillsData = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: <Code2 className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Crafting pixel-perfect, responsive, and highly animated user interfaces.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"]
  },
  {
    id: "backend",
    title: "Backend Architecture",
    icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Building scalable APIs and managing robust data architectures.",
    skills: ["Node.js", "MySQL", "RESTful APIs", "Java", "Python", "C++"]
  },
  {
    id: "ai",
    title: "AI Integration",
    icon: <BrainCircuit className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Integrating intelligent capabilities into applications through advanced models.",
    skills: ["Prompt Engineering", "Generative AI", "LLM APIs", "AI Agents"]
  },
  {
    id: "automation",
    title: "Workflow Automation",
    icon: <Workflow className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Orchestrating complex business logic and third-party integrations.",
    skills: ["n8n", "Webhooks", "Telegram Bot API", "Process Optimization"]
  },
  {
    id: "deployment",
    title: "Cloud & Deployment",
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Ensuring applications are delivered securely, reliably, and globally.",
    skills: ["AWS Data Analytics", "Vercel", "Git/GitHub", "Linux OS"]
  }
];

export default function SkillsInteractive() {
  const [activeId, setActiveId] = useState<string | null>(skillsData[0].id);

  return (
    <section className="w-full bg-[#0B0B0B] text-foreground py-32 md:py-48 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light">A comprehensive toolkit for modern product development.</p>
        </div>

        <div className="flex flex-col gap-4">
          {skillsData.map((category) => {
            const isActive = activeId === category.id;

            return (
              <div 
                key={category.id} 
                className={`border rounded-3xl overflow-hidden transition-colors duration-500 ${isActive ? 'bg-[#111111] border-white/20' : 'bg-transparent border-white/5 hover:border-white/10'}`}
              >
                <button
                  onClick={() => setActiveId(isActive ? null : category.id)}
                  className="w-full flex items-center justify-between p-6 md:p-10 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-4 rounded-2xl transition-colors duration-500 ${isActive ? 'bg-primary/10 text-primary' : 'bg-white/5 text-muted-foreground'}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl md:text-3xl font-semibold tracking-tight transition-colors duration-500 ${isActive ? 'text-white' : 'text-muted-foreground'}`}>
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" as const }}
                    className={`p-2 rounded-full ${isActive ? 'bg-white/10 text-white' : 'text-muted-foreground'}`}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" as const }}
                    >
                      <div className="px-6 md:px-10 pb-10 pt-2 flex flex-col md:flex-row gap-8 md:gap-16">
                        <div className="md:w-1/3">
                           <p className="text-muted-foreground font-light leading-relaxed">{category.description}</p>
                        </div>
                        <div className="md:w-2/3 flex flex-wrap gap-3">
                          {category.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="px-5 py-2.5 rounded-full border border-white/10 bg-[#1A1A1A] text-white text-sm font-medium tracking-wide"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
