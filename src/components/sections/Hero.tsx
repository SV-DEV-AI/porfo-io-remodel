"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow for luxury feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        className="z-10 flex flex-col items-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-6 text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-widest">
          <span className="px-4 py-1.5 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-md">Computer Science Student</span>
        </motion.div>

        <div className="overflow-hidden mb-6 flex justify-center">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground flex"
          >
            {"Sarthak Verma".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + index * 0.05,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className={char === " " ? "w-4 md:w-6" : ""}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
          <p className="text-xl md:text-2xl font-semibold text-white tracking-wide">
            I ship production systems, not prototypes.
          </p>
          <p className="max-w-3xl text-base md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
            Building AI-powered applications, e-commerce platforms,<br className="hidden md:block"/> and automation systems.
          </p>
          <p className="text-sm md:text-base text-white/60 font-medium tracking-wide">
            Developer of <span className="text-white">Shineora</span> and <span className="text-white">Elize</span>.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-70">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
