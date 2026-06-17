"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

type Message = { id: string; role: "user" | "ai"; text: string };

const CURATED_KNOWLEDGE: Record<string, string> = {
  "shineora": "Shineora is a premium luxury e-commerce platform I built from scratch using Next.js, Tailwind, and headless APIs. My role was Lead Developer, focusing on sub-second page loads and seamless mobile UX.",
  "elize": "Elize is an AI-powered academic assistant I developed. It connects Telegram with n8n workflows and LLMs to provide students with 24/7 personalized, stateful support.",
  "technologies": "My core stack revolves around Next.js, TypeScript, and Tailwind CSS for the frontend, with Node.js and SQL on the backend. For AI and automation, I heavily use n8n, OpenAI APIs, and Telegram Bot integrations.",
  "certifications": "I hold professional credentials from IBM (Generative AI), AWS (Data Analytics), NVIDIA (Networking), and HackerRank (Java), along with corporate simulations from Tata, British Airways, and Siemens.",
  "default": "I'm a static AI assistant trained on Sarthak's portfolio. Try asking me about 'Shineora', 'Elize', 'technologies', or 'certifications'!"
};

function getResponse(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("shineora")) return CURATED_KNOWLEDGE["shineora"];
  if (q.includes("elize")) return CURATED_KNOWLEDGE["elize"];
  if (q.includes("tech") || q.includes("stack") || q.includes("use")) return CURATED_KNOWLEDGE["technologies"];
  if (q.includes("cert") || q.includes("credential")) return CURATED_KNOWLEDGE["certifications"];
  return CURATED_KNOWLEDGE["default"];
}

export default function MiniAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "ai", text: "Hi! I'm Sarthak's AI clone. Ask me about his projects, skills, or experience." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate network delay
    setTimeout(() => {
      const aiMsg: Message = { id: (Date.now() + 1).toString(), role: "ai", text: getResponse(userMsg.text) };
      setMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center border border-primary-foreground/10"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <MessageSquare className="w-6 h-6 fill-current" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-28 right-8 z-50 w-[350px] max-w-[calc(100vw-4rem)] bg-[#111] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1A1A1A] p-4 border-b border-white/5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Ask Sarthak</h4>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs text-muted-foreground font-mono">Curated AI</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 h-[300px] overflow-y-auto flex flex-col gap-4 bg-[#0A0A0A] scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((m) => (
                <div key={m.id} className={`flex gap-3 max-w-[85%] ${m.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
                  <div className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center mt-1 ${m.role === "user" ? "bg-white/10 text-white" : "bg-primary/20 text-primary"}`}>
                    {m.role === "user" ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${m.role === "user" ? "bg-white/10 text-white rounded-tr-sm" : "bg-[#1A1A1A] border border-white/5 text-muted-foreground rounded-tl-sm"}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#111] border-t border-white/5">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Shineora..."
                  className="w-full bg-[#1A1A1A] text-white text-sm rounded-full pl-4 pr-12 py-3 outline-none border border-white/5 focus:border-primary/50 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 translate-x-[-1px] translate-y-[1px]" />
                </button>
              </form>
              <div className="flex gap-2 mt-2 px-2 overflow-x-auto scrollbar-hide">
                 {["What is Shineora?", "Tech stack?", "Elize?"].map(suggestion => (
                   <button 
                     key={suggestion} 
                     onClick={() => setInput(suggestion)}
                     className="shrink-0 text-[10px] uppercase font-mono tracking-widest text-muted-foreground hover:text-white bg-white/5 px-2 py-1 rounded-full border border-white/5 transition-colors"
                   >
                     {suggestion}
                   </button>
                 ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
