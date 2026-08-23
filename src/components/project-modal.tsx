"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Gauge, Layers, Cpu, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export interface ProjectDetail {
  id: string;
  title: string;
  titleId?: string;
  category: string;
  categoryId?: string;
  tagline: string;
  taglineId?: string;
  description: string;
  descriptionId?: string;
  liveUrl?: string;
  githubUrl?: string;
  spotlight?: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    deployment: string;
    flow: string[];
    flowId?: string[];
  };
  highlights: string[];
  highlightsId?: string[];
  metrics: { label: string; labelId?: string; value: string; detail: string; detailId?: string }[];
  stack: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = React.useState<"overview" | "architecture" | "highlights">("overview");

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const title = language === "id" && project.titleId ? project.titleId : project.title;
  const category = language === "id" && project.categoryId ? project.categoryId : project.category;
  const tagline = language === "id" && project.taglineId ? project.taglineId : project.tagline;
  const description = language === "id" && project.descriptionId ? project.descriptionId : project.description;
  const highlights = language === "id" && project.highlightsId ? project.highlightsId : project.highlights;
  const flow = language === "id" && project.architecture.flowId ? project.architecture.flowId : project.architecture.flow;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          suppressHydrationWarning
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 28, stiffness: 350 }}
            className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl z-10 flex flex-col"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border p-5 sm:p-6 flex items-start justify-between gap-4 z-20">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-muted border border-border/80 text-[11px] font-mono text-muted-foreground font-semibold">
                    {category}
                  </span>
                  <span className="text-xs font-mono text-emerald-500 font-medium flex items-center gap-1">
                    <CheckCircle2 size={12} />
                    {t.projects.modal.verified}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl border border-border bg-muted/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors shrink-0 cursor-pointer"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="px-5 sm:px-6 pt-4 border-b border-border/60 flex items-center gap-2 bg-muted/20">
              {(
                [
                  { id: "overview", label: t.projects.modal.tabs.overview },
                  { id: "architecture", label: t.projects.modal.tabs.architecture },
                  { id: "highlights", label: t.projects.modal.tabs.highlights },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 text-xs font-mono font-semibold border-b-2 transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-6 flex-1 text-xs sm:text-sm">
              {activeTab === "overview" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="text-xs font-mono uppercase text-muted-foreground font-semibold mb-2">
                      {t.projects.modal.aboutTitle}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Metrics Bar */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-muted-foreground font-semibold mb-3">
                      {t.projects.modal.metricsTitle}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.metrics.map((m, idx) => {
                        const labelText = language === "id" && m.labelId ? m.labelId : m.label;
                        const detailText = language === "id" && m.detailId ? m.detailId : m.detail;
                        return (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl border border-border bg-muted/30"
                          >
                            <span className="text-2xl font-bold font-mono text-foreground block">
                              {m.value}
                            </span>
                            <span className="text-xs font-semibold text-foreground block mt-0.5">
                              {labelText}
                            </span>
                            <span className="text-[11px] text-muted-foreground block mt-1">
                              {detailText}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-muted-foreground font-semibold mb-2.5">
                      {t.projects.modal.matrixTitle}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-muted border border-border text-[11px] font-mono text-foreground font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "architecture" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="text-xs font-mono uppercase text-muted-foreground font-semibold mb-2">
                      {t.projects.modal.breakdownTitle}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl border border-border bg-muted/30">
                        <div className="flex items-center gap-2 mb-1 text-foreground font-semibold font-mono text-xs">
                          <Layers size={14} className="text-blue-500" />
                          <span>Frontend Layer</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{project.architecture.frontend}</p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-border bg-muted/30">
                        <div className="flex items-center gap-2 mb-1 text-foreground font-semibold font-mono text-xs">
                          <Cpu size={14} className="text-purple-500" />
                          <span>Backend Services</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{project.architecture.backend}</p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-border bg-muted/30">
                        <div className="flex items-center gap-2 mb-1 text-foreground font-semibold font-mono text-xs">
                          <ShieldCheck size={14} className="text-emerald-500" />
                          <span>Database &amp; Storage</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{project.architecture.database}</p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-border bg-muted/30">
                        <div className="flex items-center gap-2 mb-1 text-foreground font-semibold font-mono text-xs">
                          <Gauge size={14} className="text-amber-500" />
                          <span>Deployment &amp; Edge</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{project.architecture.deployment}</p>
                      </div>
                    </div>
                  </div>

                  {/* Architecture Flow List */}
                  <div>
                    <h4 className="text-xs font-mono uppercase text-muted-foreground font-semibold mb-2.5">
                      {t.projects.modal.lifecycleTitle}
                    </h4>
                    <div className="p-4 rounded-xl border border-border bg-[#0d1017] font-mono text-xs text-[#e6edf3] space-y-2">
                      {flow.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="text-amber-400 font-bold">[{idx + 1}]</span>
                          <span className="text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "highlights" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h4 className="text-xs font-mono uppercase text-muted-foreground font-semibold mb-1">
                    {t.projects.modal.challengesTitle}
                  </h4>
                  <ul className="space-y-3">
                    {highlights.map((h, idx) => (
                      <li
                        key={idx}
                        className="p-3.5 rounded-xl border border-border bg-muted/20 flex items-start gap-3"
                      >
                        <span className="p-1 rounded-md bg-emerald-500/10 text-emerald-500 font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="text-muted-foreground leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Modal Footer with Actions */}
            <div className="p-5 sm:p-6 border-t border-border bg-muted/30 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-xs font-semibold hover:bg-muted transition-colors inline-flex items-center gap-1.5"
                  >
                    <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.38 6.52-1.6 6.52-7.02a4.36 4.36 0 0 0-1.2-3.08 4.04 4.04 0 0 0 .08-3.04s-1-.32-3.2 1.18a11.08 11.08 0 0 0-5.8 0C8.16 1.42 7.14 1.74 7.14 1.74A4.04 4.04 0 0 0 7.22 4.78 4.36 4.36 0 0 0 6 7.86c0 5.4 3.32 6.64 6.52 7.02a4.8 4.8 0 0 0-1 2.82V22"></path>
                    </svg>
                    <span>{t.projects.viewRepo}</span>
                  </a>
                )}
              </div>

              <div className="flex items-center gap-2">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-foreground text-background font-mono text-xs font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <span>{t.projects.visitSite}</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl border border-border bg-card text-foreground font-mono text-xs font-medium hover:bg-muted transition-colors cursor-pointer"
                >
                  {t.projects.modal.close}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
