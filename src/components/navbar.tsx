"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Command, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { LanguageToggle } from "@/components/language-toggle";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.stack, href: "#stack" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.certificates, href: "#certificates" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/80 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-sm tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          <span className="font-mono font-bold tracking-tight">zaky.dev</span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded-md bg-muted/60 border border-border/60">
            v3.0
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 border border-border/80 bg-card/75 backdrop-blur-md px-3 py-1 rounded-full shadow-xs">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 rounded-full transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          {/* Language Toggle ID / EN */}
          <LanguageToggle />

          {/* Quick Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-border bg-card/80 hover:bg-muted text-xs font-mono text-muted-foreground hover:text-foreground transition-colors shadow-xs cursor-pointer"
            title="Open Command Palette (Cmd + K / Ctrl + K)"
          >
            <Command size={13} />
            <span className="text-[11px]">{t.nav.search}</span>
            <kbd className="text-[10px] px-1.5 py-0.2 rounded-md bg-muted border border-border/80 font-semibold">
              {t.nav.searchShortcut}
            </kbd>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-border bg-card/80 hover:bg-muted text-foreground transition-colors shadow-xs cursor-pointer"
            aria-label="Toggle color theme"
            suppressHydrationWarning
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun size={15} />
              ) : (
                <Moon size={15} />
              )
            ) : (
              <span className="inline-block w-[15px] h-[15px]" />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-xs cursor-pointer"
          >
            <span>{t.nav.contact}</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-border bg-card text-foreground cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-border/60">
                <span className="text-xs font-mono text-muted-foreground font-semibold">
                  Language / Bahasa:
                </span>
                <LanguageToggle />
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-muted/60 border border-border text-xs font-mono text-foreground mb-2"
              >
                <div className="flex items-center gap-2">
                  <Command size={14} />
                  <span>{t.nav.search}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">{t.nav.searchShortcut}</span>
              </button>

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleAnchorClick(e, item.href);
                  }}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-3 mt-1 border-t border-border">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleAnchorClick(e, "#contact");
                  }}
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-foreground text-background text-sm font-semibold shadow-xs cursor-pointer"
                >
                  <span>{t.nav.getInTouch}</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
