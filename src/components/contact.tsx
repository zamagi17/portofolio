"use client";

import * as React from "react";
import { Copy, Check, ExternalLink, Send, MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { t } = useLanguage();
  const [emailCopied, setEmailCopied] = React.useState(false);
  const [phoneCopied, setPhoneCopied] = React.useState(false);
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const email = "muhammadzaky00@gmail.com";
  const phone = "+62 821-4809-3099";
  const waUrl = "https://wa.me/6282148093099";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
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
            {t.contact.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-xs">
              <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                {t.contact.emailTitle}
              </span>
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-muted/60 border border-border">
                <span className="font-mono text-xs sm:text-sm font-semibold text-foreground truncate">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors shrink-0 flex items-center gap-1 text-xs cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {emailCopied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-[11px] text-emerald-500 font-mono">{t.contact.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">{t.contact.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-xs">
              <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                {t.contact.phoneTitle}
              </span>
              <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-muted/60 border border-border">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs sm:text-sm font-semibold text-foreground hover:text-emerald-500 transition-colors truncate flex items-center gap-1.5"
                >
                  <Phone size={13} className="text-emerald-500 shrink-0" />
                  <span>{phone}</span>
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors shrink-0 flex items-center gap-1 text-xs cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {phoneCopied ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-[11px] text-emerald-500 font-mono">{t.contact.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="text-[11px] font-mono text-muted-foreground hidden sm:inline">{t.contact.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Profiles Card */}
            <div className="p-6 rounded-2xl border border-border bg-card shadow-xs space-y-3">
              <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                {t.contact.profilesTitle}
              </span>

              <a
                href="https://linkedin.com/in/muhammadzaky17"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground hover:text-foreground py-2 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn (muhammadzaky17)</span>
                </div>
                <ExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/zamagi17"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground hover:text-foreground py-2 transition-colors border-t border-border/80 group"
              >
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.38 6.52-1.6 6.52-7.02a4.36 4.36 0 0 0-1.2-3.08 4.04 4.04 0 0 0 .08-3.04s-1-.32-3.2 1.18a11.08 11.08 0 0 0-5.8 0C8.16 1.42 7.14 1.74 7.14 1.74A4.04 4.04 0 0 0 7.22 4.78 4.36 4.36 0 0 0 6 7.86c0 5.4 3.32 6.64 6.52 7.02a4.8 4.8 0 0 0-1 2.82V22"></path>
                  </svg>
                  <span>GitHub (@zamagi17)</span>
                </div>
                <ExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="http://www.zonakas.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground hover:text-foreground py-2 transition-colors border-t border-border/80 group"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                  <span>SaaS (zonakas.com)</span>
                </div>
                <ExternalLink size={13} className="opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Location & Timezone card */}
            <div className="p-5 rounded-2xl border border-border bg-muted/30 text-xs text-muted-foreground space-y-1.5 font-mono">
              <span className="font-semibold text-foreground block text-[11px]">{t.contact.locationTitle}</span>
              <p className="leading-relaxed text-[11px]">
                {t.contact.locationDesc}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs">
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare size={16} className="text-foreground" />
                <h3 className="text-base font-bold text-foreground">{t.contact.formTitle}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                {t.contact.formSubtitle}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-muted/60 border border-border text-center py-10"
                >
                  <div className="h-10 w-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-3">
                    <Check size={20} />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-1">{t.contact.successTitle}</h4>
                  <p className="text-xs text-muted-foreground mb-5 max-w-sm mx-auto leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => {
                      setFormState({ name: "", email: "", message: "" });
                      setSubmitted(false);
                    }}
                    className="px-4 py-2 rounded-xl bg-card border border-border text-xs font-mono font-semibold text-foreground hover:bg-muted transition-colors cursor-pointer"
                  >
                    {t.contact.sendAnotherBtn}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block font-mono text-[11px] text-muted-foreground mb-1.5 font-medium">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border focus:border-foreground focus:outline-hidden text-foreground placeholder:text-muted-foreground/60 transition-colors text-xs font-sans"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-muted-foreground mb-1.5 font-medium">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border focus:border-foreground focus:outline-hidden text-foreground placeholder:text-muted-foreground/60 transition-colors text-xs font-sans"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] text-muted-foreground mb-1.5 font-medium">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-muted/50 border border-border focus:border-foreground focus:outline-hidden text-foreground placeholder:text-muted-foreground/60 resize-none transition-colors text-xs font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-foreground text-background font-mono text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.submittingBtn}</span>
                    ) : (
                      <>
                        <span>{t.contact.submitBtn}</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
