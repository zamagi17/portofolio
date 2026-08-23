"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check, Play, Sparkles } from "lucide-react";

export function DeveloperTerminal() {
  const [activeTab, setActiveTab] = React.useState<"profile" | "skills" | "contact">("profile");
  const [copied, setCopied] = React.useState(false);

  const tabs = {
    profile: {
      command: "zaky --info",
      output: `{\n  "developer": "Muhammad Zaky",\n  "role": "Full-Stack Software Engineer",\n  "location": "Indonesia (UTC+7)",\n  "active_work": "Zonakas Digital Platform",\n  "status": "Available for high-impact projects"\n}`,
    },
    skills: {
      command: "zaky --stack",
      output: `{\n  "frontend": ["Next.js 15", "React 19", "TypeScript", "Tailwind"],\n  "backend": ["Node.js", "Express", "RESTful APIs", "JWT"],\n  "databases": ["PostgreSQL", "MongoDB", "Prisma ORM"],\n  "devops": ["Vercel", "Git/GitHub", "Docker", "Linux"]\n}`,
    },
    contact: {
      command: "zaky --contact",
      output: `{\n  "email": "contact@zonakas.com",\n  "github": "https://github.com/zamagi17",\n  "website": "http://www.zonakas.com"\n}`,
    },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(tabs[activeTab].output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl border border-border bg-card/95 backdrop-blur-md shadow-2xl overflow-hidden font-mono text-xs">
      {/* Top terminal bar */}
      <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 bg-muted/40">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] text-muted-foreground ml-2">bash ~ zaky-cli v2.4</span>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-background/60 p-1 rounded-lg border border-border/70">
          {(["profile", "skills", "contact"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-bold transition-all ${
                activeTab === tab
                  ? "bg-foreground text-background shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          title="Copy output"
        >
          {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Terminal prompt & output */}
      <div className="p-4 sm:p-5 text-muted-foreground">
        <div className="flex items-center gap-2 text-foreground font-semibold mb-3">
          <span className="text-emerald-500 font-bold">$</span>
          <span className="text-foreground">{tabs[activeTab].command}</span>
          <span className="h-4 w-2 bg-emerald-500 animate-pulse inline-block ml-1" />
        </div>

        <AnimatePresence mode="wait">
          <motion.pre
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-[11px] sm:text-xs leading-relaxed text-foreground/90 overflow-x-auto selection:bg-emerald-500 selection:text-black"
          >
            <code>{tabs[activeTab].output}</code>
          </motion.pre>
        </AnimatePresence>
      </div>
    </div>
  );
}
