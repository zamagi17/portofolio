"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { Globe } from "lucide-react";

export function LanguageToggle({
  className = "",
  layoutIdPrefix = "desktop",
}: {
  className?: string;
  layoutIdPrefix?: string;
}) {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        suppressHydrationWarning
        className={`inline-flex items-center p-0.5 rounded-xl border border-border bg-card/80 text-xs font-mono font-bold ${className}`}
      >
        <span className="px-2 py-1 rounded-lg text-[11px] text-foreground bg-muted">
          {language.toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div
      suppressHydrationWarning
      className={`inline-flex items-center p-0.5 rounded-xl border border-border bg-card/80 backdrop-blur-md shadow-xs ${className}`}
      role="group"
      aria-label="Select language"
    >
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={`relative isolate px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-colors cursor-pointer ${
          language === "id"
            ? "text-background font-black"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="Bahasa Indonesia"
      >
        {language === "id" && (
          <motion.div
            layoutId={`${layoutIdPrefix}-lang-pill`}
            className="absolute inset-0 rounded-lg bg-foreground shadow-xs z-0"
            transition={{ type: "spring", stiffness: 450, damping: 35 }}
          />
        )}
        <span className="relative z-10">ID</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative isolate px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-colors cursor-pointer ${
          language === "en"
            ? "text-background font-black"
            : "text-muted-foreground hover:text-foreground"
        }`}
        title="English"
      >
        {language === "en" && (
          <motion.div
            layoutId={`${layoutIdPrefix}-lang-pill`}
            className="absolute inset-0 rounded-lg bg-foreground shadow-xs z-0"
            transition={{ type: "spring", stiffness: 450, damping: 35 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
}
