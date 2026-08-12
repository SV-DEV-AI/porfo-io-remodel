"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, Network, ArrowUpRight, Code2, Globe, FileText } from "lucide-react";

import MagneticButton from "@/components/ui/MagneticButton";

const links = [
  {
    name: "Resume",
    url: "https://sarthak.foo/Sarthak_Verma_Resume.pdf",
    icon: <FileText className="w-5 h-5" />,
    handle: "View PDF"
  },
  {
    name: "Email",
    url: "mailto:sarthakv2005@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    handle: "Get in touch"
  },
  {
    name: "GitHub",
    url: "https://github.com/SV-DEV-AI",
    icon: <GitBranch className="w-5 h-5" />,
    handle: "SV-DEV-AI"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sarthak-verma-1a03a52b5/",
    icon: <Network className="w-5 h-5" />,
    handle: "Sarthak Verma"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/sarthakv2005/",
    icon: <Code2 className="w-5 h-5" />,
    handle: "sarthakv2005"
  }
];

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-background text-foreground pt-16 pb-8 md:pt-48 md:pb-12 relative border-t border-white/5 overflow-hidden flex flex-col items-center">
      {/* Background elegant gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[200px] rounded-[100%] pointer-events-none translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center w-full flex-grow mb-16 md:mb-32">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
            Let&apos;s build something <br className="hidden md:block" /> <span className="text-primary italic font-serif tracking-normal">meaningful.</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl font-light">
            Currently open for new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 w-full justify-center mb-24">
          {links.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" as const }}
              viewport={{ once: true }}
            >
              <MagneticButton>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background group flex items-center justify-between px-8 py-6 rounded-full border border-white/10 bg-surface hover:bg-surface hover:border-white/20 transition-all duration-300 w-full md:w-auto"
                >
                  <div className="flex items-center gap-4 text-white">
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      {link.icon}
                    </div>
                    <div className="flex flex-col items-start pr-6 md:pr-12">
                      <span className="text-sm text-muted-foreground uppercase tracking-widest">{link.name}</span>
                      <span className="font-medium tracking-wide">{link.handle}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </MagneticButton>
            </motion.div>
          ))}
        </div>

        {/* Micro-stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-12 w-full max-w-4xl mx-auto">
          {[
            { label: "PRODUCTS SHIPPED", value: "128+" },
            { label: "CERTIFICATIONS", value: "7" },
            { label: "CASE STUDIES", value: "2" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{stat.value}</span>
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
      
      {/* Richer Footer */}
      <div className="w-full relative z-10 border-t border-white/10 pt-8 mt-auto px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-muted-foreground font-light">
          <span>© {new Date().getFullYear()} Sarthak Verma</span>
          <span className="hidden md:inline text-white/20">•</span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success"></span>
            </span>
            <span>Open to internships — Summer 2026</span>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-muted-foreground font-light">
          <span>Lucknow, India (GMT +5:30)</span>
          <span className="hidden md:inline text-white/20">•</span>
          <button onClick={scrollToTop} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-white transition-colors flex items-center gap-1">
            Back to top <ArrowUpRight className="w-3 h-3 -rotate-45" />
          </button>
        </div>
      </div>
    </section>
  );
}
