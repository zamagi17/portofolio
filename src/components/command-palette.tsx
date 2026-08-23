"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  ArrowRight,
  Sun,
  Moon,
  Copy,
  Check,
  ExternalLink,
  Code2,
  FolderGit2,
  Briefcase,
  Award,
  Mail,
  User,
  GraduationCap,
  Languages,
  Phone,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/language-context";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "External Links";
  icon: React.ElementType;
  shortcut?: string;
  perform: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const { t, language, toggleLanguage } = useLanguage();
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const scrollTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("muhammadzaky00@gmail.com");
    showToast(t.commandPalette.sections.emailCopiedToast);
  };

  const toggleTheme = () => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    showToast(
      language === "id"
        ? `Tema diubah ke mode ${nextTheme === "dark" ? "Gelap" : "Terang"}`
        : `Switched to ${nextTheme === "dark" ? "Dark" : "Light"} mode`
    );
  };

  const handleToggleLanguage = () => {
    toggleLanguage();
    showToast(
      language === "id"
        ? "Language changed to English"
        : "Bahasa diubah ke Bahasa Indonesia"
    );
  };

  const isDarkMode = mounted && resolvedTheme === "dark";

  const commands: CommandItem[] = [
    {
      id: "nav-about",
      title: t.commandPalette.sections.about,
      category: "Navigation",
      icon: User,
      perform: () => scrollTo("about"),
    },
    {
      id: "nav-stack",
      title: t.commandPalette.sections.stack,
      category: "Navigation",
      icon: Code2,
      perform: () => scrollTo("stack"),
    },
    {
      id: "nav-experience",
      title: t.commandPalette.sections.experience,
      category: "Navigation",
      icon: Briefcase,
      perform: () => scrollTo("experience"),
    },
    {
      id: "nav-projects",
      title: t.commandPalette.sections.projects,
      category: "Navigation",
      icon: FolderGit2,
      perform: () => scrollTo("projects"),
    },
    {
      id: "nav-education",
      title: t.commandPalette.sections.education,
      category: "Navigation",
      icon: GraduationCap,
      perform: () => scrollTo("education"),
    },
    {
      id: "nav-certificates",
      title: t.commandPalette.sections.certificates,
      category: "Navigation",
      icon: Award,
      perform: () => scrollTo("certificates"),
    },
    {
      id: "nav-contact",
      title: t.commandPalette.sections.contact,
      category: "Navigation",
      icon: Mail,
      perform: () => scrollTo("contact"),
    },
    {
      id: "act-copy-email",
      title: t.commandPalette.sections.copyEmail,
      category: "Actions",
      icon: Copy,
      shortcut: "C",
      perform: copyEmail,
    },
    {
      id: "act-whatsapp",
      title: t.commandPalette.sections.openWhatsapp,
      category: "Actions",
      icon: Phone,
      perform: () => {
        window.open("https://wa.me/6282148093099", "_blank");
        onClose();
      },
    },
    {
      id: "act-toggle-lang",
      title: t.commandPalette.sections.toggleLang,
      category: "Actions",
      icon: Languages,
      shortcut: "L",
      perform: handleToggleLanguage,
    },
    {
      id: "act-toggle-theme",
      title: `${t.commandPalette.sections.toggleTheme} (${isDarkMode ? "Light" : "Dark"})`,
      category: "Actions",
      icon: isDarkMode ? Sun : Moon,
      shortcut: "T",
      perform: toggleTheme,
    },
    {
      id: "ext-linkedin",
      title: t.commandPalette.sections.openLinkedin,
      category: "External Links",
      icon: ExternalLink,
      perform: () => {
        window.open("https://linkedin.com/in/muhammadzaky17", "_blank");
        onClose();
      },
    },
    {
      id: "ext-github",
      title: t.commandPalette.sections.openGithub,
      category: "External Links",
      icon: ExternalLink,
      perform: () => {
        window.open("https://github.com/zamagi17", "_blank");
        onClose();
      },
    },
    {
      id: "ext-zonakas",
      title: t.commandPalette.sections.openZonakas,
      category: "External Links",
      icon: ExternalLink,
      perform: () => {
        window.open("http://www.zonakas.com", "_blank");
        onClose();
      },
    },
    {
      id: "ext-rotibuaya",
      title: "Roti Buaya JKT Platform (rotibuayajkt.web.id)",
      category: "External Links",
      icon: ExternalLink,
      perform: () => {
        window.open("https://rotibuayajkt.web.id", "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = React.useMemo(() => {
    if (!query.trim()) return commands;
    const lower = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(lower) ||
        c.category.toLowerCase().includes(lower)
    );
  }, [query, commands]);

  React.useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].perform();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        suppressHydrationWarning
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
        />

        {/* Command Palette Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          className="relative w-full max-w-xl rounded-2xl border border-border bg-card shadow-2xl overflow-hidden z-10 flex flex-col font-sans"
        >
          {/* Search Input Bar */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-muted/30">
            <Search size={18} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.commandPalette.placeholder}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden"
            />
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-muted border border-border text-muted-foreground">
              {t.commandPalette.escToClose}
            </span>
          </div>

          {/* Toast Notice inside palette if triggered */}
          {toastMessage && (
            <div className="px-4 py-2 bg-emerald-500/10 border-b border-emerald-500/30 text-emerald-500 text-xs font-mono flex items-center gap-2">
              <Check size={14} />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Results List */}
          <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="py-10 text-center text-xs font-mono text-muted-foreground">
                {t.commandPalette.noResults} &quot;{query}&quot;
              </div>
            ) : (
              filteredCommands.map((cmd, idx) => {
                const Icon = cmd.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.perform}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-foreground text-background font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-1.5 rounded-lg ${
                          isSelected ? "bg-background/20 text-background" : "bg-muted text-foreground"
                        }`}
                      >
                        <Icon size={15} />
                      </div>
                      <div>
                        <span className="block">{cmd.title}</span>
                        <span
                          className={`text-[10px] font-mono ${
                            isSelected ? "text-background/70" : "text-muted-foreground"
                          }`}
                        >
                          {cmd.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {cmd.shortcut && (
                        <span
                          className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                            isSelected ? "bg-background/20 text-background" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {cmd.shortcut}
                        </span>
                      )}
                      <ArrowRight
                        size={13}
                        className={`transition-transform ${isSelected ? "translate-x-1" : "opacity-40"}`}
                      />
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2.5 bg-muted/40 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
            <span>{t.commandPalette.footerNav}</span>
            <div className="flex items-center gap-1">
              <Command size={11} />
              <span>{t.commandPalette.cmdCenter}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
