"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, Network, ArrowUpRight, Code2, Globe, FileText } from "lucide-react";

const links = [
  {
    name: "Resume",
    url: "/Sarthak_Verma_Resume.pdf",
    icon: <FileText className="w-5 h-5" />,
    handle: "View PDF"
  },
  {
    name: "Email",
    url: "mailto:hello@sarthakverma.com",
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
  return (
    <section className="w-full bg-[#0B0B0B] text-foreground py-32 md:py-48 relative border-t border-white/5 overflow-hidden">
      {/* Background elegant gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[200px] rounded-[100%] pointer-events-none translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Let&apos;s build something <br className="hidden md:block" /> <span className="text-primary italic font-serif tracking-normal">meaningful.</span>
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl font-light">
            Currently open for new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row flex-wrap gap-6 w-full justify-center">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" as const }}
              viewport={{ once: true }}
              className="group flex items-center justify-between px-8 py-6 rounded-full border border-white/10 bg-[#111] hover:bg-[#1A1A1A] hover:border-white/20 transition-all duration-300 w-full md:w-auto min-w-[280px]"
            >
              <div className="flex items-center gap-4 text-white">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  {link.icon}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">{link.name}</span>
                  <span className="font-medium tracking-wide">{link.handle}</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          ))}
        </div>

      </div>
      
      <div className="absolute bottom-8 w-full text-center text-muted-foreground text-sm font-light">
        © {new Date().getFullYear()} Sarthak Verma. Designed & Engineered with precision.
      </div>
    </section>
  );
}
