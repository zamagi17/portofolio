"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Gauge, Check } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 border-b border-border/80 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
            {t.about.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Story & Engineering Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16"
        >
          <div className="p-6 rounded-2xl border border-border bg-card space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed shadow-xs">
            <h3 className="text-base font-bold text-foreground font-sans">
              {t.about.storyTitle}
            </h3>
            <p>{t.about.story1}</p>
            <p>{t.about.story2}</p>
          </div>

          {/* Core Pillars */}
          <div className="p-5 rounded-2xl border border-border bg-muted/30 space-y-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
              {t.about.pillarsTitle}
            </span>
            {t.about.pillars.map((p, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs">
                <span className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold shrink-0 mt-0.5">
                  <Check size={12} />
                </span>
                <div>
                  <strong className="text-foreground font-semibold block">{p.title}</strong>
                  <span className="text-muted-foreground text-[11px] leading-relaxed">{p.description}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3 Core Capability Cards */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
              {t.about.specTitle}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.capabilities.map((cap, idx) => {
              const Icon = idx === 0 ? Code2 : idx === 1 ? Server : Gauge;
              const color =
                idx === 0
                  ? "rgba(59, 130, 246, 0.15)"
                  : idx === 1
                  ? "rgba(168, 85, 247, 0.15)"
                  : "rgba(16, 185, 129, 0.15)";
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <SpotlightCard
                    spotlightColor={color}
                    className="p-6 h-full flex flex-col justify-between hover:shadow-xl transition-all"
                  >
                    <div>
                      <div className="p-2.5 w-fit rounded-xl bg-muted border border-border mb-4">
                        <Icon size={18} className="text-foreground" />
                      </div>

                      <h3 className="text-base font-bold text-foreground mb-2">{cap.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                        {cap.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border flex flex-wrap gap-1.5">
                      {cap.tech.map((techItem) => (
                        <span
                          key={techItem}
                          className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-mono text-muted-foreground"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
