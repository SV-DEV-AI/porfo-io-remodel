"use client";

import { motion } from "framer-motion";
import { useMode, Mode } from "@/context/ModeContext";
import { Code2, BrainCircuit, Lightbulb } from "lucide-react";

const modes: { id: Mode; label: string; icon: React.ReactNode }[] = [
  { id: "developer", label: "Developer", icon: <Code2 className="w-4 h-4" /> },
  { id: "ai-builder", label: "AI Builder", icon: <BrainCircuit className="w-4 h-4" /> },
  { id: "entrepreneur", label: "Entrepreneur", icon: <Lightbulb className="w-4 h-4" /> },
];

export default function ModeSwitcher() {
  const { mode, setMode } = useMode();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-1 p-1.5 bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      >
        {modes.map((m) => {
          const isActive = mode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive ? "text-white" : "text-muted-foreground hover:text-white/80"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-mode-bg"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{m.icon}</span>
              <span className="relative z-10 hidden sm:inline-block">{m.label}</span>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
