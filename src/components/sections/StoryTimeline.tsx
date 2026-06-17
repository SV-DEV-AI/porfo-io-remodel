"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronRight, ArrowRight, LayoutTemplate, Cpu, Network, Briefcase } from "lucide-react";

const timelineData = [
  {
    id: "phase1",
    year: "Phase I",
    title: "Student Portal",
    description: "Learning web development fundamentals and building the foundation of my technical journey.",
    icon: <LayoutTemplate className="w-5 h-5" />,
    details: {
      lessons: "Mastered DOM manipulation, vanilla JS, and CSS layouts without relying on frameworks.",
      milestone: "First fully responsive web application.",
      achievement: "Built the foundation for scalable thinking."
    }
  },
  {
    id: "phase2",
    year: "Phase II",
    title: "Shineora",
    description: "Building a production e-commerce platform. Focused on architecture, UX, and deploying real-world solutions.",
    icon: <Briefcase className="w-5 h-5" />,
    details: {
      lessons: "Learned the importance of decoupling state, headless APIs, and edge deployment.",
      milestone: "Deployed a high-performance Next.js store.",
      achievement: "Engineered sub-second page loads."
    }
  },
  {
    id: "phase3",
    year: "Phase III",
    title: "Elize",
    description: "Exploring AI and workflow automation. Bridging the gap between raw intelligence and user utility.",
    icon: <Network className="w-5 h-5" />,
    details: {
      lessons: "Prompt engineering is just the start; orchestrating LLMs into stateful agents is the real challenge.",
      milestone: "Built an end-to-end n8n workflow.",
      achievement: "Integrated Telegram Bot API seamlessly."
    }
  },
  {
    id: "phase4",
    year: "Phase IV",
    title: "The Future",
    description: "Building intelligent software systems. Continuously pushing the boundaries of product engineering and automation.",
    icon: <Cpu className="w-5 h-5" />,
    details: {
      lessons: "Currently deep diving into distributed architectures and autonomous AI agent swarms.",
      milestone: "Exploring new paradigms in human-computer interaction.",
      achievement: "Always building."
    }
  },
];

export default function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-64 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <span className="text-primary font-mono tracking-widest text-xs uppercase mb-6 block">Origin Story</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">The Journey</h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light">From first lines of code to intelligent systems.</p>
        </div>

        {/* Animated Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-border/30 -translate-x-1/2 mt-48 mb-32 z-0">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-blue-500 to-purple-500"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="relative flex flex-col gap-8 z-10">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedId === item.id;
            
            return (
              <TimelineItem
                key={item.year}
                item={item}
                isEven={isEven}
                isExpanded={isExpanded}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface TimelineItemType {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: {
    lessons: string;
    milestone: string;
    achievement: string;
  }
}

function TimelineItem({ item, isEven, isExpanded, onClick }: { item: TimelineItemType; isEven: boolean; isExpanded: boolean; onClick: () => void }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`flex flex-col md:flex-row w-full items-start justify-between gap-8 md:gap-0 group ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={`w-full md:w-[45%] flex flex-col pl-12 md:pl-0 ${isEven ? "md:items-start" : "md:items-end text-left md:text-right"}`}>
        
        <motion.div 
          layout
          onClick={onClick}
          className="bg-[#111] border border-white/5 hover:border-white/20 p-6 md:p-8 rounded-3xl cursor-pointer w-full transition-colors relative overflow-hidden"
        >
          {/* Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className={`flex items-center gap-3 mb-4 ${isEven ? "justify-start" : "md:justify-end justify-start"}`}>
            <div className="p-2 bg-white/5 rounded-full text-primary">
              {item.icon}
            </div>
            <span className="text-primary font-mono text-sm tracking-widest uppercase">{item.year}</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-3">{item.title}</h3>
          <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">
            {item.description}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-white/5 space-y-4 text-left">
                  <div>
                    <span className="text-xs font-mono uppercase text-muted-foreground block mb-1">Lessons Learned</span>
                    <p className="text-sm text-white/80">{item.details.lessons}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-muted-foreground block mb-1">Key Milestone</span>
                    <p className="text-sm text-white/80">{item.details.milestone}</p>
                  </div>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4">
                    <ArrowRight className="w-4 h-4" />
                    {item.details.achievement}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors">
             {isExpanded ? "Close Chapter" : "Explore Chapter"}
             <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-90" : "group-hover:translate-x-1"}`} />
          </div>

        </motion.div>

      </div>
      
      {/* Center dot */}
      <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-[#111] border-2 border-primary -translate-x-1/2 mt-8 md:mt-12 z-20 transition-transform duration-300 group-hover:scale-150 group-hover:bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
}
