"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    year: "Phase I",
    title: "Student Portal",
    description: "Learning web development fundamentals and building the foundation of my technical journey.",
  },
  {
    year: "Phase II",
    title: "Shineora",
    description: "Building a production e-commerce platform. Focused on architecture, UX, and deploying real-world solutions.",
  },
  {
    year: "Phase III",
    title: "Elize",
    description: "Exploring AI and workflow automation. Bridging the gap between raw intelligence and user utility.",
  },
  {
    year: "Phase IV",
    title: "The Future",
    description: "Building intelligent software systems. Continuously pushing the boundaries of product engineering and automation.",
  },
];

export default function StoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-64 bg-background">
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">The Journey</h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light">From first lines of code to intelligent systems.</p>
        </div>

        {/* Animated Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-border/30 -translate-x-1/2 mt-48 mb-32">
          <motion.div
            className="absolute top-0 left-0 w-full bg-primary"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="relative flex flex-col gap-24 md:gap-48">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItem
                key={item.year}
                item={item}
                isEven={isEven}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface TimelineItemType {
  year: string;
  title: string;
  description: string;
}

function TimelineItem({ item, isEven }: { item: TimelineItemType; isEven: boolean }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={`flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-8 md:gap-0 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-[45%] flex flex-col gap-2 pl-8 md:pl-0">
        <span className="text-primary font-mono text-sm tracking-widest uppercase">{item.year}</span>
        <h3 className="text-2xl md:text-4xl font-semibold text-foreground tracking-tight">{item.title}</h3>
        <p className="text-muted-foreground mt-4 leading-relaxed font-light text-base md:text-lg">
          {item.description}
        </p>
      </div>
      
      {/* Center dot */}
      <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1/2 mt-2 md:mt-0 z-10" />

      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
}
