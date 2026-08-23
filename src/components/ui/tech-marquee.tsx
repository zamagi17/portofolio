"use client";

import * as React from "react";

const technologies = [
  { name: "Java (OOP / 17)", category: "Backend Core" },
  { name: "Spring Boot 3.5", category: "Microservices" },
  { name: "Core Banking Systems", category: "Domain" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Spring Security", category: "Security" },
  { name: "React 19", category: "Frontend" },
  { name: "Next.js", category: "Fullstack" },
  { name: "WebAuthn (Passkeys)", category: "Biometrics" },
  { name: "Docker", category: "DevOps" },
  { name: "WhatsApp Business API", category: "AI Integration" },
  { name: "Binance API", category: "Fintech Bot" },
  { name: "TypeScript", category: "Language" },
  { name: "Astro & Vite", category: "Modern Web" },
  { name: "Tailwind CSS v4", category: "Styling" },
  { name: "Postman & Git", category: "Tooling" },
  { name: "Cloudflare", category: "Edge & DNS" },
];

export function TechMarquee() {
  return (
    <div
      suppressHydrationWarning
      className="w-full py-8 border-y border-border/80 bg-muted/20 overflow-hidden relative"
    >
      {/* Edge gradient fades for clean infinite look */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {/* First copy */}
        <div className="flex items-center gap-4 px-2">
          {technologies.map((tech, idx) => (
            <div
              key={`tech-1-${idx}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border/80 bg-card/80 backdrop-blur-xs text-xs font-mono whitespace-nowrap hover:border-foreground/40 hover:scale-105 transition-all shadow-xs cursor-default"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-semibold text-foreground">{tech.name}</span>
              <span className="text-muted-foreground text-[10px]">• {tech.category}</span>
            </div>
          ))}
        </div>

        {/* Duplicate copy for continuous seamless looping */}
        <div className="flex items-center gap-4 px-2">
          {technologies.map((tech, idx) => (
            <div
              key={`tech-2-${idx}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-border/80 bg-card/80 backdrop-blur-xs text-xs font-mono whitespace-nowrap hover:border-foreground/40 hover:scale-105 transition-all shadow-xs cursor-default"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="font-semibold text-foreground">{tech.name}</span>
              <span className="text-muted-foreground text-[10px]">• {tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
