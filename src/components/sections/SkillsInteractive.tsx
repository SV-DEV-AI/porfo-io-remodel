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
    skills: [
      { name: "Next.js", projects: ["Shineora", "Portfolio"] },
      { name: "React", projects: ["Shineora", "Student Portal"] },
      { name: "TypeScript", projects: ["Shineora", "Portfolio", "Elize"] },
      { name: "Tailwind CSS", projects: ["Shineora", "Portfolio"] },
      { name: "Framer Motion", projects: ["Portfolio", "Shineora"] }
    ]
  },
  {
    id: "backend",
    title: "Backend Architecture",
    icon: <Database className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Building scalable APIs and managing robust data architectures.",
    skills: [
      { name: "Node.js", projects: ["Elize"] },
      { name: "Firebase", projects: ["Client Projects"] },
      { name: "MySQL", projects: ["Student Management System"] },
      { name: "REST APIs", projects: ["Shineora", "Elize"] }
    ]
  },
  {
    id: "ai",
    title: "AI Integration",
    icon: <BrainCircuit className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Integrating intelligent capabilities into applications through advanced models.",
    skills: [
      { name: "Prompt Engineering", projects: ["Elize"] },
      { name: "LLM Orchestration", projects: ["Elize"] },
      { name: "OpenAI API", projects: ["Elize"] }
    ]
  },
  {
    id: "automation",
    title: "Workflow Automation",
    icon: <Workflow className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Orchestrating complex business logic and third-party integrations.",
    skills: [
      { name: "n8n", projects: ["Elize"] },
      { name: "Webhooks", projects: ["Elize"] },
      { name: "Telegram Bot API", projects: ["Elize"] }
    ]
  },
  {
    id: "deployment",
    title: "Cloud & Deployment",
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Ensuring applications are delivered securely, reliably, and globally.",
    skills: [
      { name: "Vercel Edge", projects: ["Shineora", "Portfolio"] },
      { name: "AWS", projects: ["Data Analytics Simulations"] },
      { name: "Hostinger", projects: ["Various Web Apps"] },
      { name: "CI/CD", projects: ["Shineora", "Portfolio"] }
    ]
  }
];

export default function SkillsInteractive() {
  const [activeId, setActiveId] = useState<string | null>(skillsData[0].id);

  return (
    <section id="tech-stack" className="w-full bg-[#0B0B0B] text-foreground py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Technical Arsenal</h2>
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
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
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

                <motion.div
                  initial={false}
                  animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" as const }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-8 pt-2 flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="md:w-1/3">
                       <p className="text-muted-foreground font-light leading-relaxed">{category.description}</p>
                    </div>
                    <div className="md:w-2/3 flex flex-wrap gap-4">
                      {category.skills.map((skill) => (
                        <div 
                          key={skill.name} 
                          className="group relative px-5 py-3 rounded-2xl border border-white/10 bg-[#1A1A1A] hover:bg-[#222] hover:border-white/20 transition-all cursor-default"
                        >
                          <div className="text-white text-sm font-medium tracking-wide mb-1">
                            {skill.name}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Used In:</span>
                            {skill.projects.map(p => (
                              <span key={p} className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
