"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  Code2,
  Cpu,
  Copy,
  Check,
  Building2,
  Phone,
  FileText,
} from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { LiveStatus } from "@/components/live-status";
import { TypingText } from "@/components/ui/typing-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useLanguage } from "@/lib/language-context";

export function Hero({ ready = true }: { ready?: boolean }) {
  const { t, language } = useLanguage();
  const [copied, setCopied] = React.useState(false);
  const email = "muhammadzaky00@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#projects");
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 editorial-grid border-b border-border/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-12 left-1/3 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/[0.05] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline, Telemetry & Value Prop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Telemetry Pill */}
            <div className="mb-6">
              <LiveStatus />
            </div>

            {/* Name & Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-4">
              <TypingText text="Muhammad Zaky" speed={38} delay={120} active={ready} />
            </h1>

            {/* Sub-headline / Role */}
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs sm:text-sm font-semibold text-foreground px-3 py-1 rounded-lg bg-muted/80 border border-border">
                {t.hero.role}
              </span>
            </div>

            {/* Bio & Practical Engineering Focus */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {t.hero.bio}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background text-xs sm:text-sm font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>{t.hero.exploreProjects}</span>
                <ArrowRight size={15} />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground text-xs sm:text-sm font-mono font-medium transition-colors shadow-xs cursor-pointer"
                title="Copy email address (muhammadzaky00@gmail.com)"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-emerald-500">{t.hero.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-muted-foreground" />
                    <span>{t.hero.copyEmail}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <MagneticButton>
                  <a
                    href="https://linkedin.com/in/muhammadzaky17"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shadow-xs"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn Profile (muhammadzaky17)"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="https://github.com/zamagi17"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shadow-xs"
                    aria-label="GitHub Profile"
                    title="GitHub Profile (@zamagi17)"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.38 6.52-1.6 6.52-7.02a4.36 4.36 0 0 0-1.2-3.08 4.04 4.04 0 0 0 .08-3.04s-1-.32-3.2 1.18a11.08 11.08 0 0 0-5.8 0C8.16 1.42 7.14 1.74 7.14 1.74A4.04 4.04 0 0 0 7.22 4.78 4.36 4.36 0 0 0 6 7.86c0 5.4 3.32 6.64 6.52 7.02a4.8 4.8 0 0 0-1 2.82V22"></path>
                    </svg>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="https://wa.me/6282148093099"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl border border-border bg-card text-muted-foreground hover:text-emerald-500 hover:bg-muted transition-colors shadow-xs"
                    title="WhatsApp (+62 821-4809-3099)"
                    aria-label="Chat on WhatsApp"
                  >
                    <Phone size={16} />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="https://drive.google.com/file/d/1s-oiRitdiwGcW2xdcPV_Da-t6KDSiGap/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2.5 rounded-xl border border-border bg-card text-muted-foreground hover:text-blue-500 hover:border-blue-500/40 hover:bg-muted transition-colors shadow-xs font-mono text-[11px] font-bold tracking-wide"
                    title="Download CV / Resume"
                    aria-label="Download CV / Resume"
                  >
                    CV
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Developer Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-[320px] w-full">
              <TiltCard>
                <div className="relative rounded-2xl border border-border bg-card p-3 shadow-2xl transition-all duration-300 hover:border-foreground/30">
                  {/* Photo container */}
                  <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-muted group">
                    <Image
                      src="/zaky-new.jpg"
                      alt="Muhammad Zaky"
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                    {/* Bottom details */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                      <span className="text-sm font-mono font-bold tracking-wide block text-white">
                        Muhammad Zaky
                      </span>
                      <span className="text-xs font-mono text-white/80">
                        {language === "id" ? "Software Engineer • Core Banking" : "Software Engineer • Core Banking"}
                      </span>
                    </div>
                  </div>

                  {/* Card Telemetry footer */}
                  <div className="mt-3 px-1 py-1 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                      <MapPin size={13} />
                      Jakarta, Indonesia
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-emerald-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Engineer
                    </span>
                  </div>
                </div>
              </TiltCard>

              {/* Floating tech badge 1 */}
              <div className="absolute -top-3 -left-3 px-3 py-1.5 rounded-xl bg-card border border-border text-foreground text-xs font-mono font-bold shadow-xl flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-500" />
                <span>Java 17 • Spring Boot</span>
              </div>

              {/* Floating tech badge 2 */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-xl bg-card border border-border text-foreground text-xs font-mono font-bold shadow-xl flex items-center gap-1.5">
                <Cpu size={14} className="text-emerald-500" />
                <span>Core Banking System</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-14 pt-8 border-t border-border/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs"
        >
          <div className="p-4 rounded-xl border border-border/70 bg-card/60">
            <span className="font-mono text-muted-foreground block mb-1 text-[11px]">
              {t.hero.expLabel}
            </span>
            <span className="text-2xl font-bold font-mono text-foreground block">
              <AnimatedCounter to={4} suffix={t.hero.expValue} />
            </span>
          </div>

          <div className="p-4 rounded-xl border border-border/70 bg-card/60">
            <span className="font-mono text-muted-foreground block mb-1 text-[11px]">
              {t.hero.roleLabel}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-foreground font-mono mt-1 block truncate">
              {t.hero.roleValue}
            </span>
          </div>

          <div className="p-4 rounded-xl border border-border/70 bg-card/60">
            <span className="font-mono text-muted-foreground block mb-1 text-[11px]">
              {t.hero.coreStackLabel}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-foreground font-mono mt-1 block truncate">
              Java • Spring • SQL
            </span>
          </div>

          <div className="p-4 rounded-xl border border-border/70 bg-card/60">
            <span className="font-mono text-muted-foreground block mb-1 text-[11px]">
              {t.hero.companyLabel}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-foreground font-mono mt-1 block truncate">
              PT. Ukabima Group
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
