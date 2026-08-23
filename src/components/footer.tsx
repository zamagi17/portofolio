"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/80 bg-card py-12 text-xs text-muted-foreground">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand info */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 font-mono font-bold text-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Muhammad Zaky</span>
          </div>
          <span className="hidden sm:inline text-border">•</span>
          <span className="font-mono text-[11px]">
            {t.footer.engineeredWith}
          </span>
        </div>

        {/* Right: Actions & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/zamagi17"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors font-mono text-[11px]"
          >
            GitHub
          </a>
          <a
            href="http://www.zonakas.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors font-mono text-[11px]"
          >
            Zonakas
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl border border-border bg-muted/50 hover:bg-muted text-foreground transition-colors flex items-center gap-1.5 font-mono text-[11px] cursor-pointer"
            title={t.footer.backToTop}
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
