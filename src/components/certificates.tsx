"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck, FileCheck } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLanguage } from "@/lib/language-context";

interface CertificateItem {
  id: string;
  titleEn: string;
  titleId: string;
  issuerEn: string;
  issuerId: string;
  date: string;
  credentialId: string;
  skills: string[];
  descriptionEn: string;
  descriptionId: string;
  spotlight: string;
}

const certificates: CertificateItem[] = [
  {
    id: "bnsp-analis-program",
    titleEn: "Software Developer Competency Certificate (Qualification: Program Analyst)",
    titleId: "Sertifikat Kompetensi Pengembang Perangkat Lunak (Kualifikasi: Analis Program)",
    issuerEn: "BNSP / LSP Nusa Mandiri",
    issuerId: "BNSP / LSP Nusa Mandiri",
    date: "2022",
    credentialId: "BNSP-LSP-AP-2022",
    spotlight: "rgba(59, 130, 246, 0.15)",
    skills: ["System Analysis", "Software Architecture", "Data Modeling", "Algorithm Design", "BNSP"],
    descriptionEn:
      "National competency certification verified by Badan Nasional Sertifikasi Profesi (BNSP) and LSP Nusa Mandiri, assessing competencies in software requirements analysis, system architecture, and program flow.",
    descriptionId:
      "Sertifikasi kompetensi nasional yang diterbitkan oleh Badan Nasional Sertifikasi Profesi (BNSP) dan LSP Nusa Mandiri dengan kualifikasi Analis Program, menguji perancangan arsitektur perangkat lunak dan analisis sistem.",
  },
  {
    id: "java-oop-binus",
    titleEn: "Object-Oriented Programming with Java Certification",
    titleId: "Pelatihan Pemrograman Berorientasi Objek Menggunakan Java",
    issuerEn: "Binus Center",
    issuerId: "Binus Center",
    date: "2022",
    credentialId: "BINUS-JAVA-OOP-2022",
    spotlight: "rgba(168, 85, 247, 0.15)",
    skills: ["Java (OOP)", "Inheritance & Polymorphism", "Design Patterns", "Clean Code", "Collections"],
    descriptionEn:
      "Professional enterprise training program focusing on Object-Oriented Programming (OOP) fundamentals, design patterns, multi-threading, collections framework, and clean Java architecture.",
    descriptionId:
      "Program pelatihan profesional yang berfokus pada penguasaan konsep Object-Oriented Programming (OOP) Java, pola desain enterprise, enkapsulasi, polimorfisme, dan arsitektur kode bersih.",
  },
  {
    id: "db-expert-iaii",
    titleEn: "Database System Proficiency (Grade: Expert)",
    titleId: "Database System Proficiency (Predikat: Expert)",
    issuerEn: "Ikatan Ahli Informatika Indonesia (IAII)",
    issuerId: "Ikatan Ahli Informatika Indonesia (IAII)",
    date: "Dec 2019",
    credentialId: "IAII-DB-EXPERT-2019",
    spotlight: "rgba(16, 185, 129, 0.15)",
    skills: ["PostgreSQL", "MySQL", "Relational Database Design", "Complex SQL", "Indexing & Tuning"],
    descriptionEn:
      "Specialized competency verification with Expert grade from the Indonesian Informatics Experts Association (IAII), validating mastery in relational database normalization, indexing strategies, and complex SQL optimization.",
    descriptionId:
      "Sertifikasi keahlian dengan predikat Expert dari Ikatan Ahli Informatika Indonesia (IAII), menguji penguasaan normalisasi basis data relasional, strategi indexing, kueri kompleks, dan optimasi performa SQL.",
  },
  {
    id: "ppkd-teknik-komputer",
    titleEn: "Competency-Based Vocational Training in Computer Engineering",
    titleId: "Pelatihan Berbasis Kompetensi Kejuruan Teknik Komputer",
    issuerEn: "PPKD Jakarta Selatan",
    issuerId: "PPKD Jakarta Selatan",
    date: "Nov 2022",
    credentialId: "PPKD-JAKSEL-TK-2022",
    spotlight: "rgba(245, 158, 11, 0.15)",
    skills: ["Computer Systems", "Networking Basics", "Hardware Configuration", "Troubleshooting"],
    descriptionEn:
      "Vocational training program covering computer hardware systems, networking fundamentals, operating system setup, and infrastructure troubleshooting at PPKD Jakarta Selatan.",
    descriptionId:
      "Pelatihan berbasis kompetensi kejuruan teknik komputer yang mencakup konfigurasi perangkat keras, fondasi jaringan komputer, sistem operasi, dan troubleshooting infrastruktur di PPKD Jakarta Selatan.",
  },
];

export function Certificates() {
  const { t, language } = useLanguage();

  return (
    <section id="certificates" className="py-24 border-b border-border/80 bg-background overflow-hidden">
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
            {t.certificates.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.certificates.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
            {t.certificates.subtitle}
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => {
            const title = language === "id" ? cert.titleId : cert.titleEn;
            const issuer = language === "id" ? cert.issuerId : cert.issuerEn;
            const description = language === "id" ? cert.descriptionId : cert.descriptionEn;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={cert.spotlight}
                  className="p-6 sm:p-7 h-full flex flex-col justify-between hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/80">
                      <div className="p-2.5 rounded-xl bg-muted border border-border">
                        <Award size={20} className="text-foreground" />
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground font-semibold px-2.5 py-1 rounded-md bg-muted border border-border/70">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-foreground mb-1">
                      {title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground mb-3 font-semibold">
                      {issuer}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                      {description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-mono text-muted-foreground font-semibold"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="text-[11px] font-mono text-muted-foreground flex items-center justify-between pt-1">
                      <span>ID: {cert.credentialId}</span>
                      <span className="text-emerald-500 font-semibold flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        {t.certificates.verified}
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
