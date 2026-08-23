"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, Star } from "lucide-react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { useLanguage } from "@/lib/language-context";

interface EducationItem {
  institution: string;
  location: string;
  degreeEn: string;
  degreeId: string;
  periodEn: string;
  periodId: string;
  gpa?: string;
  highlightEn?: string;
  highlightId?: string;
  spotlight: string;
}

const educationList: EducationItem[] = [
  {
    institution: "Universitas Nusa Mandiri",
    location: "Jakarta, Indonesia",
    degreeEn: "Bachelor's Degree in Information Systems (S1)",
    degreeId: "Sarjana Sistem Informasi (S1)",
    periodEn: "Sep 2021 – Aug 2022",
    periodId: "Sep 2021 – Agu 2022",
    gpa: "3.96 / 4.00",
    highlightEn: "Graduated with High Honors (Summa Cum Laude / Outstanding Academic Record)",
    highlightId: "Lulus dengan Predikat Sangat Memuaskan (IPK 3.96 / 4.00)",
    spotlight: "rgba(59, 130, 246, 0.15)",
  },
  {
    institution: "Universitas Bina Sarana Informatika (UBSI)",
    location: "Jakarta, Indonesia",
    degreeEn: "Associate Degree in Information Systems (D3)",
    degreeId: "Diploma Tiga Sistem Informasi (D3)",
    periodEn: "Sep 2018 – Aug 2021",
    periodId: "Sep 2018 – Agu 2021",
    gpa: "3.92 / 4.00",
    highlightEn: "Graduated with High Honors in Software & Systems Analysis",
    highlightId: "Lulus dengan Predikat Sangat Memuaskan (IPK 3.92 / 4.00)",
    spotlight: "rgba(16, 185, 129, 0.15)",
  },
  {
    institution: "SMKN 16 Jakarta Pusat",
    location: "Jakarta, Indonesia",
    degreeEn: "Vocational High School Diploma in Marketing (Pemasaran)",
    degreeId: "Sekolah Menengah Kejuruan (SMK) Pemasaran",
    periodEn: "2013 – 2016",
    periodId: "2013 – 2016",
    highlightEn: "Strong foundation in commercial strategy, communication & digital marketing",
    highlightId: "Fondasi strategi komersial, komunikasi bisnis & pemasaran digital",
    spotlight: "rgba(245, 158, 11, 0.15)",
  },
];

export function Education() {
  const { t, language } = useLanguage();

  return (
    <section id="education" className="py-24 border-b border-border/80 bg-background overflow-hidden">
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
            {t.education.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.education.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
            {t.education.subtitle}
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((edu, idx) => {
            const degree = language === "id" ? edu.degreeId : edu.degreeEn;
            const period = language === "id" ? edu.periodId : edu.periodEn;
            const highlight = language === "id" ? edu.highlightId : edu.highlightEn;

            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={edu.spotlight}
                  className="p-6 sm:p-7 h-full flex flex-col justify-between hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/80">
                      <div className="p-2.5 rounded-xl bg-muted border border-border">
                        <GraduationCap size={20} className="text-foreground" />
                      </div>
                      <span className="text-[11px] font-mono text-muted-foreground font-semibold px-2.5 py-1 rounded-md bg-muted border border-border/70 flex items-center gap-1.5">
                        <Calendar size={12} />
                        {period}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-foreground mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground mb-3 font-semibold">
                      {edu.location}
                    </p>
                    <p className="text-xs font-semibold text-foreground leading-relaxed mb-4">
                      {degree}
                    </p>

                    {highlight && (
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        {highlight}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                    {edu.gpa ? (
                      <div className="flex items-center gap-1.5 text-emerald-500 font-bold">
                        <Star size={13} className="fill-emerald-500 text-emerald-500" />
                        <span>
                          {t.education.gpaLabel}: {edu.gpa}
                        </span>
                      </div>
                    ) : (
                      <span className="text-muted-foreground font-medium">Diploma</span>
                    )}

                    <span className="text-[11px] text-muted-foreground font-medium">Verified ✔</span>
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
