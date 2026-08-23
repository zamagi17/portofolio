"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Layout, Database, ShieldCheck, Terminal, CheckCircle2 } from "lucide-react";
import { TechMarquee } from "@/components/ui/tech-marquee";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLanguage } from "@/lib/language-context";

interface TechItem {
  name: string;
  level: "Advanced" | "Production" | "Proficient";
  highlight?: string;
  highlightId?: string;
}

interface StackCategory {
  id: "Backend & Architecture" | "Frontend & Web" | "Databases" | "Security & Integrations" | "DevOps & Tools";
  icon: React.ElementType;
  color: string;
  descriptionEn: string;
  descriptionId: string;
  items: TechItem[];
}

const stackGroups: StackCategory[] = [
  {
    id: "Backend & Architecture",
    icon: Server,
    color: "rgba(59, 130, 246, 0.15)",
    descriptionEn: "Enterprise Java & Spring ecosystem for high-volume Core Banking and distributed microservices.",
    descriptionId: "Ekosistem enterprise Java & Spring untuk Core Banking volume tinggi dan arsitektur microservices terdistribusi.",
    items: [
      { name: "Java (OOP / Java 17)", level: "Advanced", highlight: "Enterprise Core", highlightId: "Inti Enterprise" },
      { name: "Spring Boot 3.x", level: "Advanced", highlight: "Microservices", highlightId: "Layanan Mikro" },
      { name: "Spring Framework", level: "Advanced", highlight: "IoC & Data JPA", highlightId: "IoC & Data JPA" },
      { name: "RESTful APIs", level: "Advanced", highlight: "High Throughput", highlightId: "Throughput Tinggi" },
      { name: "Microservices Architecture", level: "Production", highlight: "Distributed", highlightId: "Sistem Terdistribusi" },
      { name: "MVC Pattern", level: "Advanced", highlight: "Enterprise Design", highlightId: "Pola Desain" },
    ],
  },
  {
    id: "Frontend & Web",
    icon: Layout,
    color: "rgba(16, 185, 129, 0.15)",
    descriptionEn: "Modern reactive frameworks, Progressive Web Apps (PWA), and fast responsive web experiences.",
    descriptionId: "Framework modern reaktif, Progressive Web Apps (PWA), dan antarmuka web berkecepatan tinggi.",
    items: [
      { name: "React.js (React 19)", level: "Advanced", highlight: "PWA & SPA", highlightId: "PWA & SPA" },
      { name: "Next.js (App Router)", level: "Advanced", highlight: "SSR & Edge", highlightId: "SSR & Edge" },
      { name: "Astro", level: "Production", highlight: "Static & Content", highlightId: "Statis & Konten" },
      { name: "Vite", level: "Advanced", highlight: "Modern Bundler", highlightId: "Bundler Cepat" },
      { name: "TypeScript / JS (ES6+)", level: "Advanced", highlight: "Type Safe", highlightId: "Type Safe" },
      { name: "Tailwind CSS v4", level: "Advanced", highlight: "Design Systems", highlightId: "Sistem Desain" },
    ],
  },
  {
    id: "Databases",
    icon: Database,
    color: "rgba(245, 158, 11, 0.15)",
    descriptionEn: "Relational database modeling, complex SQL queries, stored functions, indexing, and ACID compliance.",
    descriptionId: "Pemodelan basis data relasional, kueri SQL kompleks, fungsi kustom, indexing, dan integritas ACID.",
    items: [
      { name: "PostgreSQL", level: "Advanced", highlight: "Complex Queries & Functions", highlightId: "Kueri & Fungsi Kompleks" },
      { name: "MySQL", level: "Production", highlight: "Relational DB", highlightId: "Database Relasional" },
      { name: "Relational DB Design", level: "Advanced", highlight: "Normalization & Schema", highlightId: "Normalisasi & Skema" },
      { name: "Indexing & Tuning", level: "Advanced", highlight: "Query Optimization", highlightId: "Optimasi Kueri" },
      { name: "ACID Transactions", level: "Advanced", highlight: "Financial Integrity", highlightId: "Integritas Finansial" },
    ],
  },
  {
    id: "Security & Integrations",
    icon: ShieldCheck,
    color: "rgba(168, 85, 247, 0.15)",
    descriptionEn: "Enterprise security frameworks, token management, biometrics, third-party APIs, and automation.",
    descriptionId: "Framework keamanan enterprise, manajemen token, biometrik, integrasi API pihak ketiga, dan otomasi.",
    items: [
      { name: "Spring Security", level: "Advanced", highlight: "Auth & RBAC", highlightId: "Autentikasi & RBAC" },
      { name: "JWT (JSON Web Token)", level: "Advanced", highlight: "Stateless Auth", highlightId: "Autentikasi Stateless" },
      { name: "WebAuthn (Passkeys)", level: "Production", highlight: "Biometric Auth", highlightId: "Autentikasi Biometrik" },
      { name: "WhatsApp Business API", level: "Production", highlight: "NLP Mutation Tracking", highlightId: "Pelacakan Mutasi NLP" },
      { name: "Binance API", level: "Production", highlight: "Crypto Order Execution", highlightId: "Eksekusi Order Kripto" },
      { name: "Bucket4j", level: "Production", highlight: "Rate Limiting", highlightId: "Pembatas Laju Request" },
    ],
  },
  {
    id: "DevOps & Tools",
    icon: Terminal,
    color: "rgba(236, 72, 153, 0.15)",
    descriptionEn: "Containerization, version control, server deployment, API testing, and performance optimization.",
    descriptionId: "Containerisasi, kontrol versi, manajemen server, pengujian endpoint, dan optimasi performa.",
    items: [
      { name: "Docker", level: "Production", highlight: "Containerization", highlightId: "Containerisasi" },
      { name: "Git & GitHub", level: "Advanced", highlight: "Version Control", highlightId: "Kontrol Versi" },
      { name: "Linux / Server Basics", level: "Production", highlight: "CLI & Deployment", highlightId: "CLI & Deployment" },
      { name: "Postman", level: "Advanced", highlight: "API Testing & Mocking", highlightId: "Pengujian API" },
      { name: "Cloudflare", level: "Production", highlight: "DNS & Edge Protection", highlightId: "DNS & Keamanan Edge" },
      { name: "NetBeans IDE", level: "Production", highlight: "Java Development", highlightId: "Pengembangan Java" },
    ],
  },
];

export function Skills() {
  const { t, language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = React.useState<string>("All");

  const filterKeys = [
    "All",
    "Backend & Architecture",
    "Frontend & Web",
    "Databases",
    "Security & Integrations",
    "DevOps & Tools",
  ];

  const filteredGroups =
    selectedFilter === "All"
      ? stackGroups
      : stackGroups.filter((g) => g.id === selectedFilter);

  return (
    <section id="stack" className="border-b border-border/80 bg-background overflow-hidden">
      
      {/* Infinite Tech Marquee */}
      <TechMarquee />

      <div className="max-w-5xl mx-auto px-6 py-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
            {t.skills.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
            {t.skills.subtitle}
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {filterKeys.map((catKey) => {
              const label = t.skills.filters[catKey] || catKey;
              const isSelected = selectedFilter === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedFilter(catKey)}
                  className={`relative isolate px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "text-background font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-skill-filter"
                      className="absolute inset-0 rounded-xl bg-foreground shadow-xs z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Stack Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGroups.map((group, gIdx) => {
              const Icon = group.icon;
              const title = t.skills.filters[group.id] || group.id;
              const desc = language === "id" ? group.descriptionId : group.descriptionEn;

              return (
                <motion.div
                  key={group.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: gIdx * 0.05 }}
                >
                  <SpotlightCard
                    spotlightColor={group.color}
                    className="p-6 h-full flex flex-col justify-between hover:shadow-xl transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-xl bg-muted border border-border">
                          <Icon size={18} className="text-foreground" />
                        </div>
                        <div>
                          <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-foreground">
                            {title}
                          </h3>
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {desc}
                          </p>
                        </div>
                      </div>

                      {/* Tech Chips Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
                        {group.items.map((item) => {
                          const highlightText =
                            language === "id" && item.highlightId
                              ? item.highlightId
                              : item.highlight;
                          return (
                            <div
                              key={item.name}
                              className="p-2.5 rounded-lg bg-muted/60 border border-border/70 text-xs flex flex-col justify-between hover:border-foreground/30 transition-colors"
                            >
                              <span className="font-mono font-medium text-foreground text-[12px]">
                                {item.name}
                              </span>
                              <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground mt-1">
                                <span className="text-emerald-500 font-semibold flex items-center gap-1">
                                  <CheckCircle2 size={10} />
                                  {item.level}
                                </span>
                                {highlightText && (
                                  <span className="text-muted-foreground/80 truncate">
                                    {highlightText}
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                      <span>{t.skills.statusLabel}</span>
                      <span className="text-emerald-500 font-semibold">{t.skills.statusValue}</span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
