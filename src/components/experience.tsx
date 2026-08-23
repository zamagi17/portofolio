"use client";

import * as React from "react";
import { ArrowUpRight, Calendar, Building2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

interface ExperienceItem {
  roleEn: string;
  roleId: string;
  company: string;
  location: string;
  url?: string;
  periodEn: string;
  periodId: string;
  typeEn: string;
  typeId: string;
  badgeEn: string;
  badgeId: string;
  descriptionEn: string;
  descriptionId: string;
  achievementsEn: string[];
  achievementsId: string[];
  stack: string[];
}

const experiences: ExperienceItem[] = [
  {
    roleEn: "Java Software Developer",
    roleId: "Java Software Developer",
    company: "PT. Ukabima Group",
    location: "Jakarta, Indonesia",
    periodEn: "Dec 2022 – Present",
    periodId: "Des 2022 – Sekarang",
    typeEn: "Enterprise Core Banking",
    typeId: "Core Banking Enterprise",
    badgeEn: "Active Role",
    badgeId: "Peran Aktif",
    descriptionEn:
      "Engineering, maintaining, and scaling mission-critical Core Banking Systems for financial consulting clients using Java enterprise technologies and Spring Framework.",
    descriptionId:
      "Mengembangkan, memelihara, dan mengoptimalkan sistem Core Banking berskala mission-critical untuk klien konsultan keuangan menggunakan Java dan Spring Framework.",
    achievementsEn: [
      "Develop, maintain, and optimize mission-critical Core Banking Systems for financial consulting clients using Java and Spring Framework.",
      "Ensure strict financial data integrity, ACID compliance, and high transaction consistency across high-volume enterprise operations.",
      "Design and implement secure, scalable backend microservices and RESTful APIs aligned with banking compliance and performance standards.",
      "Optimize complex PostgreSQL/SQL queries and database schema structures to improve transaction response times and system throughput.",
    ],
    achievementsId: [
      "Mengembangkan, memelihara, dan mengoptimalkan Core Banking System berskala mission-critical untuk klien konsultan keuangan dengan Java & Spring.",
      "Menjamin integritas data keuangan ketat, kepatuhan ACID, dan konsistensi transaksi tinggi pada operasi perbankan bervolume besar.",
      "Merancang dan mengimplementasikan microservices backend dan RESTful API aman yang memenuhi standar kepatuhan dan performa perbankan.",
      "Mengoptimalkan kueri PostgreSQL/SQL kompleks dan struktur skema database guna meningkatkan kecepatan respons transaksi dan throughput sistem.",
    ],
    stack: ["Java 17", "Spring Boot", "Spring Framework", "PostgreSQL", "RESTful APIs", "Microservices", "Spring Security", "Docker"],
  },
  {
    roleEn: "Co-Founder & Web Developer",
    roleId: "Co-Founder & Web Developer",
    company: "Roti Buaya JKT",
    location: "Jakarta, Indonesia",
    url: "https://rotibuayajkt.web.id",
    periodEn: "Jan 2019 – Present",
    periodId: "Jan 2019 – Sekarang",
    typeEn: "E-Commerce & Venture",
    typeId: "E-Commerce & Bisnis",
    badgeEn: "Active Platform",
    badgeId: "Platform Aktif",
    descriptionEn:
      "Co-founded and engineered the brand's digital e-commerce presence (rotibuayajkt.web.id), driving technical architecture, checkout speed, digital marketing, and sales analytics.",
    descriptionId:
      "Mendirikan dan mengembangkan platform e-commerce digital brand (rotibuayajkt.web.id), mengelola arsitektur teknis, kecepatan checkout, strategi SEO, dan analitik penjualan.",
    achievementsEn: [
      "Developed and actively maintain the brand’s e-commerce platform (rotibuayajkt.web.id), optimizing loading performance, mobile responsiveness, and user checkout experience.",
      "Implemented digital marketing strategies, SEO optimization, and marketplace promotions across major online channels to drive customer acquisition and brand visibility.",
      "Analyzed sales metrics and consumer purchasing behaviors to optimize promotional campaigns, product packaging, and inventory turnover.",
      "Created digital promotional assets and visual merchandising in alignment with brand identity and marketing objectives.",
    ],
    achievementsId: [
      "Mengembangkan dan aktif memelihara platform e-commerce (rotibuayajkt.web.id), mengoptimalkan kecepatan loading, responsivitas mobile, dan pengalaman checkout pengguna.",
      "Menerapkan strategi pemasaran digital, optimasi SEO, dan promosi marketplace di kanal online utama untuk meningkatkan akuisisi pelanggan dan visibilitas brand.",
      "Menganalisis metrik penjualan dan pola pembelian konsumen untuk mengoptimalkan kampanye promosi, kemasan produk, dan perputaran inventaris.",
      "Membuat aset promosi digital dan visual merchandising yang selaras dengan identitas brand dan tujuan pemasaran.",
    ],
    stack: ["E-Commerce Web", "rotibuayajkt.web.id", "JavaScript / TypeScript", "PostgreSQL / MySQL", "SEO & Marketing", "Analytics"],
  },
];

export function Experience() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-24 border-b border-border/80 bg-background overflow-hidden">
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
            {t.experience.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const role = language === "id" ? exp.roleId : exp.roleEn;
            const period = language === "id" ? exp.periodId : exp.periodEn;
            const type = language === "id" ? exp.typeId : exp.typeEn;
            const badge = language === "id" ? exp.badgeId : exp.badgeEn;
            const description = language === "id" ? exp.descriptionId : exp.descriptionEn;
            const achievements = language === "id" ? exp.achievementsId : exp.achievementsEn;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="p-6 sm:p-8 rounded-2xl border border-border bg-card precision-card shadow-xs"
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mb-4 pb-3 border-b border-border/70">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                        {type}
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-emerald-500 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                        {badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground">{role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold text-foreground">{exp.company}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground font-mono">{exp.location}</span>
                      {exp.url && (
                        <>
                          <span className="text-xs text-muted-foreground">•</span>
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono font-semibold text-foreground hover:underline inline-flex items-center gap-1"
                          >
                            rotibuayajkt.web.id
                            <ArrowUpRight size={12} />
                          </a>
                        </>
                      )}
                    </div>
                  </div>

                  <span className="font-mono text-xs text-muted-foreground px-3 py-1.5 rounded-lg bg-muted self-start sm:self-auto border border-border/80 flex items-center gap-1.5">
                    <Calendar size={13} />
                    {period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-foreground mb-5 leading-relaxed">
                  {description}
                </p>

                {/* Achievements */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground block">
                    {t.experience.achievementsTitle}
                  </span>
                  {achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-bold mt-0.5">✔</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack tags */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center gap-1.5">
                  {exp.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-md bg-muted text-[11px] font-mono text-muted-foreground font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
