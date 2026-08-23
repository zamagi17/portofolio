"use client";

import * as React from "react";
import { ExternalLink, ArrowUpRight, Layers, Cpu, ShieldCheck, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ProjectModal, type ProjectDetail } from "@/components/project-modal";
import { useLanguage } from "@/lib/language-context";

const projectList: ProjectDetail[] = [
  {
    id: "zonakas-saas",
    title: "Zonakas – Modern SaaS Financial & Mutation Management",
    titleId: "Zonakas – Sistem SaaS Manajemen Keuangan & Mutasi",
    category: "Fintech & SaaS",
    categoryId: "Fintech & SaaS",
    tagline: "High-scale financial engine with Java 17, Spring Boot 3.5 & WhatsApp AI NLP tracking",
    taglineId: "Engine finansial skala tinggi dengan Java 17, Spring Boot 3.5 & pelacakan AI WhatsApp NLP",
    spotlight: "rgba(59, 130, 246, 0.2)",
    description:
      "A modern financial technology SaaS platform engineered with Java 17, Spring Boot 3.5, and React 19 PWA. Features double-entry ACID ledger transactions, WhatsApp AI mutation tracking, WebAuthn biometric passkeys, Bucket4j rate limiting, and enterprise PDF/Excel reporting.",
    descriptionId:
      "Platform SaaS teknologi finansial modern yang dibangun dengan Java 17, Spring Boot 3.5, dan React 19 PWA. Dilengkapi transaksi ledger ACID, pencatatan otomatis AI via WhatsApp NLP, autentikasi biometrik WebAuthn, rate limiting Bucket4j, dan ekspor laporan PDF/Excel.",
    liveUrl: "http://www.zonakas.com",
    githubUrl: "https://github.com/zamagi17",
    architecture: {
      frontend: "React 19, Vite, Tailwind CSS v4, Offline-ready Progressive Web App (PWA), Chart.js",
      backend: "Java 17, Spring Boot 3.5, Spring Security, Bucket4j Rate Limiting, RESTful APIs",
      database: "PostgreSQL with connection pooling, stored functions, and pessimistic locking",
      deployment: "Docker Container, Linux Cloud Server, Cloudflare Edge DNS, Firebase Cloud Messaging",
      flow: [
        "Client sends biometric WebAuthn passkey assertion or JWT credential over SSL",
        "Spring Security verifies token and applies Bucket4j token-bucket rate limiter per tenant",
        "Financial mutations process in serializable PostgreSQL transactions to eliminate race conditions",
        "WhatsApp Business API webhooks trigger NLP classification engine to auto-record income & expense mutations",
        "Reporting service generates high-throughput PDF (iText) and Excel (Apache POI) statements asynchronously",
      ],
      flowId: [
        "Client mengirimkan autentikasi biometrik WebAuthn passkey atau kredensial JWT melalui SSL",
        "Spring Security memvalidasi token dan menerapkan rate limiter Bucket4j per tenant akun",
        "Mutasi keuangan dieksekusi dalam transaksi PostgreSQL serializable untuk mencegah race condition",
        "Webhook WhatsApp Business API memicu engine klasifikasi NLP untuk mencatat mutasi pemasukan/pengeluaran otomatis",
        "Layanan laporan menghasilkan rekapan PDF (iText) dan Excel (Apache POI) berkinerja tinggi secara asinkron",
      ],
    },
    highlights: [
      "Engineered core financial engine using Java 17 and Spring Boot 3.5 with strict ACID transactional consistency",
      "Built an NLP-driven conversational interface enabling automated tracking of income, expenses, and mutations via WhatsApp",
      "Developed an offline-ready, responsive Progressive Web App (PWA) using React 19, Vite, and Tailwind CSS v4",
      "Implemented Spring Security, JWT, rate-limiting (Bucket4j), and passwordless biometric authentication via WebAuthn",
      "Integrated interactive financial charts (Chart.js), high-performance export engines for PDF (iText) & Excel (Apache POI), and FCM real-time alerts",
    ],
    highlightsId: [
      "Merekayasa engine finansial inti menggunakan Java 17 dan Spring Boot 3.5 dengan konsistensi transaksi ACID ketat",
      "Membangun antarmuka percakapan NLP untuk pencatatan otomatis pemasukan, pengeluaran, dan mutasi via WhatsApp",
      "Mengembangkan Progressive Web App (PWA) responsif dan offline-ready dengan React 19, Vite, dan Tailwind CSS v4",
      "Mengimplementasikan Spring Security, JWT, rate-limiting (Bucket4j), dan autentikasi biometrik tanpa password WebAuthn",
      "Mengintegrasikan grafik keuangan interaktif (Chart.js), engine ekspor PDF (iText) & Excel (Apache POI), serta notifikasi real-time FCM",
    ],
    metrics: [
      { label: "Transaction Integrity", labelId: "Integritas Transaksi", value: "100% ACID", detail: "Pessimistic row locking", detailId: "Pessimistic row locking" },
      { label: "Throughput", labelId: "Kecepatan Respons", value: "<45ms", detail: "Optimized Spring Boot & PostgreSQL", detailId: "Optimasi Spring Boot & PostgreSQL" },
      { label: "Security Standard", labelId: "Standar Keamanan", value: "WebAuthn", detail: "Passkeys + Spring Security + JWT", detailId: "Passkeys + Spring Security + JWT" },
    ],
    stack: ["Java 17", "Spring Boot 3.5", "PostgreSQL", "React 19", "WebAuthn", "WhatsApp API", "Docker", "Vite", "Tailwind v4"],
  },
  {
    id: "zonatrade-bot",
    title: "ZonaTrade – AI Crypto Trading Automation Bot",
    titleId: "ZonaTrade – Bot Otomasi Trading Kripto Berbasis AI",
    category: "AI & Automation",
    categoryId: "AI & Otomasi",
    tagline: "Real-time market analysis and automated algorithmic order execution via Binance API",
    taglineId: "Analisis pasar real-time dan eksekusi order algoritmik otomatis via Binance API",
    spotlight: "rgba(245, 158, 11, 0.2)",
    description:
      "An intelligent AI-driven algorithmic bot designed for market analysis, technical indicator evaluation, risk mitigation, and automated real-time trade execution connected to Binance API.",
    descriptionId:
      "Bot algoritmik cerdas berbasis AI untuk analisis pasar, evaluasi indikator teknikal, mitigasi risiko, dan eksekusi order real-time yang terintegrasi dengan Binance API.",
    liveUrl: "#",
    githubUrl: "https://github.com/zamagi17",
    architecture: {
      frontend: "Interactive real-time monitoring dashboard with WebSocket price streaming",
      backend: "Java / Node.js algorithmic execution engine with Binance REST & WebSocket API",
      database: "PostgreSQL with timeseries indexing for historical trade evaluation",
      deployment: "Docker Container on Linux Cloud VPS with 99.9% uptime requirement",
      flow: [
        "WebSocket ingests real-time ticker and candlestick order book data from Binance",
        "AI signal processor calculates momentum, trend divergence, and risk-to-reward metrics",
        "Execution engine places atomic limit/market buy & sell orders with stop-loss triggers",
        "Telegram / Discord webhook dispatches instant transaction execution alerts",
      ],
      flowId: [
        "WebSocket menerima data order book ticker & candlestick real-time dari Binance",
        "Prosesor sinyal AI menghitung momentum, divergensi tren, dan metrik risk-to-reward",
        "Engine eksekusi menempatkan order beli/jual limit/market secara atomik dengan trigger stop-loss",
        "Webhook mengirimkan notifikasi eksekusi transaksi instan secara real-time",
      ],
    },
    highlights: [
      "Built an AI-driven bot for analyzing and automating crypto trading, integrated with Binance API for real-time order execution",
      "Engineered millisecond order dispatch with dynamic trailing stop-loss protection",
      "Designed resilient retry mechanisms and connection re-establishment for 24/7 autonomous trading",
    ],
    highlightsId: [
      "Membangun bot AI untuk menganalisis dan mengotomatisasi trading kripto terintegrasi dengan Binance API untuk eksekusi real-time",
      "Merekayasa pengiriman order milidetik dengan proteksi trailing stop-loss dinamis",
      "Merancang mekanisme koneksi ulang otomatis yang tangguh untuk trading otonom 24/7",
    ],
    metrics: [
      { label: "Execution Latency", labelId: "Latensi Eksekusi", value: "<85ms", detail: "Direct Binance WebSocket", detailId: "WebSocket langsung Binance" },
      { label: "Automation Uptime", labelId: "Uptime Otomasi", value: "99.9%", detail: "24/7 cloud container", detailId: "Container cloud 24/7" },
      { label: "Risk Control", labelId: "Kontrol Risiko", value: "Active", detail: "Dynamic Stop-loss & Take-profit", detailId: "Stop-loss & Take-profit dinamis" },
    ],
    stack: ["Java", "Binance API", "WebSocket", "PostgreSQL", "Docker", "AI Algorithmic Models"],
  },
  {
    id: "core-banking-system",
    title: "Core Banking Systems & Financial Ledger",
    titleId: "Sistem Core Banking & Ledger Finansial Enterprise",
    category: "Enterprise Core",
    categoryId: "Core Enterprise",
    tagline: "Mission-critical financial consulting core banking backend at PT. Ukabima Group",
    taglineId: "Sistem backend Core Banking finansial mission-critical di PT. Ukabima Group",
    spotlight: "rgba(168, 85, 247, 0.2)",
    description:
      "Enterprise Core Banking backend architecture developed for financial consulting clients. Guarantees strict financial data integrity, ACID compliance, high transaction availability, and optimized complex PostgreSQL queries.",
    descriptionId:
      "Arsitektur backend Core Banking tingkat enterprise yang dikembangkan untuk klien konsultan keuangan. Menjamin integritas data keuangan ketat, kepatuhan ACID, ketersediaan transaksi tinggi, dan optimasi kueri PostgreSQL kompleks.",
    liveUrl: "#",
    githubUrl: "https://github.com/zamagi17",
    architecture: {
      frontend: "Enterprise banking operator console & financial audit dashboard",
      backend: "Java (OOP), Spring Framework, Spring Boot, Spring Security, Microservices",
      database: "PostgreSQL with complex query optimization, schema indexing, and stored procedures",
      deployment: "Enterprise Linux servers with high availability clustering and audit trails",
      flow: [
        "Incoming multi-channel transaction request received via secured enterprise banking gateway",
        "Transaction isolation verifies balance, account status, and compliance rule policies",
        "Double-entry bookkeeping journal commits to PostgreSQL with strict ACID guarantees",
        "Immutable audit log records cryptographic digest of transaction for regulatory auditing",
      ],
      flowId: [
        "Permintaan transaksi multi-kanal diterima melalui gateway perbankan enterprise aman",
        "Isolasi transaksi memverifikasi saldo, status rekening, dan kebijakan kepatuhan",
        "Jurnal pembukuan ganda (double-entry) di-commit ke PostgreSQL dengan jaminan ACID ketat",
        "Audit log immutable mencatat ringkasan transaksi untuk keperluan audit regulasi",
      ],
    },
    highlights: [
      "Develop, maintain, and optimize mission-critical Core Banking Systems for financial consulting clients using Java and Spring Framework",
      "Ensure strict financial data integrity, ACID compliance, and high transaction consistency across high-volume enterprise operations",
      "Design and implement secure, scalable backend microservices and RESTful APIs aligned with banking compliance and performance standards",
      "Optimize complex PostgreSQL/SQL queries and database schema structures to improve transaction response times and system throughput",
    ],
    highlightsId: [
      "Mengembangkan, memelihara, dan mengoptimalkan Core Banking System berskala mission-critical untuk klien konsultan keuangan dengan Java & Spring",
      "Menjamin integritas data keuangan ketat, kepatuhan ACID, dan konsistensi transaksi tinggi pada operasi bervolume enterprise",
      "Merancang dan mengimplementasikan microservices backend dan RESTful API aman yang memenuhi standar kepatuhan perbankan",
      "Mengoptimalkan kueri PostgreSQL/SQL kompleks dan struktur skema database guna meningkatkan kecepatan respons dan throughput",
    ],
    metrics: [
      { label: "Data Consistency", labelId: "Konsistensi Data", value: "ACID Guaranteed", detail: "Zero double-spending or drift", detailId: "Bebas double-spending / drift" },
      { label: "Query Optimization", labelId: "Optimasi Kueri", value: "High Scale", detail: "Optimized complex PostgreSQL joins", detailId: "Optimasi kueri PostgreSQL kompleks" },
      { label: "Architecture", labelId: "Arsitektur", value: "Microservices", detail: "Java & Spring Enterprise", detailId: "Java & Spring Enterprise" },
    ],
    stack: ["Java (OOP)", "Spring Framework", "Spring Boot", "PostgreSQL", "Microservices", "Spring Security", "Linux"],
  },
  {
    id: "rotibuaya-ecommerce",
    title: "Roti Buaya JKT – E-Commerce & Growth Platform",
    titleId: "Roti Buaya JKT – Platform E-Commerce & Pertumbuhan Brand",
    category: "E-Commerce",
    categoryId: "E-Commerce",
    tagline: "E-commerce platform (rotibuayajkt.web.id), digital marketing, and data-driven purchasing analytics",
    taglineId: "Platform e-commerce (rotibuayajkt.web.id), strategi pemasaran digital, dan analitik data konsumen",
    spotlight: "rgba(16, 185, 129, 0.2)",
    description:
      "Co-founded and engineered the brand's digital presence (rotibuayajkt.web.id), optimizing mobile checkout UX, loading performance, marketplace promotions, and sales analytics to maximize conversion and customer acquisition.",
    descriptionId:
      "Mendirikan dan mengembangkan kehadiran digital brand (rotibuayajkt.web.id), mengoptimalkan UX checkout mobile, kecepatan loading, promosi marketplace, dan analitik penjualan guna memaksimalkan konversi dan akuisisi pelanggan.",
    liveUrl: "https://rotibuayajkt.web.id",
    githubUrl: "https://github.com/zamagi17",
    architecture: {
      frontend: "Responsive mobile-first web storefront, dynamic catalog, and fast checkout flow",
      backend: "Node.js / Web service, order management pipeline, and notification dispatchers",
      database: "PostgreSQL / MySQL for order tracking, inventory, and purchasing analytics",
      deployment: "Cloud hosting with Cloudflare CDN and SSL caching",
      flow: [
        "Customer discovers product via optimized SEO or social marketing channel",
        "Mobile-optimized catalog loads instantly with sub-second page transitions",
        "Checkout streamlines order customisation and directs to payment fulfillment",
        "Analytics engine records consumer purchasing behaviors for promotional tuning",
      ],
      flowId: [
        "Pelanggan menemukan produk melalui saluran SEO teroptimasi atau pemasaran digital",
        "Katalog web teroptimasi seluler memuat secara instan dengan transisi cepat",
        "Alur checkout menyederhanakan kustomisasi pesanan dan memproses pembayaran",
        "Engine analitik mencatat pola pembelian konsumen untuk optimalisasi promosi",
      ],
    },
    highlights: [
      "Developed and actively maintain the brand’s e-commerce platform (rotibuayajkt.web.id), optimizing loading performance, mobile responsiveness, and user checkout experience",
      "Implemented digital marketing strategies, SEO optimization, and marketplace promotions across major online channels to drive customer acquisition and brand visibility",
      "Analyzed sales metrics and consumer purchasing behaviors to optimize promotional campaigns, product packaging, and inventory turnover",
    ],
    highlightsId: [
      "Mengembangkan dan memelihara platform e-commerce (rotibuayajkt.web.id), mengoptimalkan performa loading, responsivitas seluler, dan checkout",
      "Menerapkan strategi pemasaran digital, optimasi SEO, dan promosi online di kanal utama untuk meningkatkan akuisisi pelanggan",
      "Menganalisis metrik penjualan dan perilaku pembelian konsumen untuk mengoptimalkan kampanye promosi dan perputaran inventaris",
    ],
    metrics: [
      { label: "Mobile Performance", labelId: "Performa Mobile", value: "Fast UX", detail: "Optimized checkout journey", detailId: "Alur checkout teroptimasi" },
      { label: "SEO Visibility", labelId: "Visibilitas SEO", value: "Top Rank", detail: "Targeted brand keywords", detailId: "Peringkat teratas kata kunci brand" },
      { label: "Analytics", labelId: "Analitik Penjualan", value: "Data-Driven", detail: "Customer behavior optimization", detailId: "Optimalisasi perilaku konsumen" },
    ],
    stack: ["Web Platform", "rotibuayajkt.web.id", "JavaScript / TypeScript", "PostgreSQL", "Cloudflare", "SEO & Analytics"],
  },
];

export function Projects() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openProjectModal = (proj: ProjectDetail) => {
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const filterKeys = ["All", "Fintech & SaaS", "AI & Automation", "E-Commerce", "Enterprise Core"];

  const filteredProjects =
    activeCategory === "All"
      ? projectList
      : projectList.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 border-b border-border/80 bg-background overflow-hidden">
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
            {t.projects.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
            {t.projects.subtitle}
          </p>

          {/* Animated Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {filterKeys.map((catKey) => {
              const label = t.projects.filters[catKey] || catKey;
              const isSelected = activeCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setActiveCategory(catKey)}
                  className={`relative isolate px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                    isSelected ? "text-background font-bold" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="active-project-filter"
                      className="absolute inset-0 rounded-xl bg-foreground shadow-xs z-0"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => {
              const title = language === "id" && proj.titleId ? proj.titleId : proj.title;
              const category = language === "id" && proj.categoryId ? proj.categoryId : proj.category;
              const tagline = language === "id" && proj.taglineId ? proj.taglineId : proj.tagline;
              const description = language === "id" && proj.descriptionId ? proj.descriptionId : proj.description;
              const highlights = language === "id" && proj.highlightsId ? proj.highlightsId : proj.highlights;

              return (
                <motion.div
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                >
                  <SpotlightCard
                    spotlightColor={proj.spotlight}
                    className="p-6 sm:p-7 h-full flex flex-col justify-between hover:shadow-2xl transition-all group"
                  >
                    <div>
                      {/* Top pill & actions */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                        <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground">
                          {category}
                        </span>

                        <div className="flex items-center gap-1.5">
                          {proj.githubUrl && (
                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                              title="GitHub Profile & Projects"
                              aria-label="GitHub Repository"
                            >
                              <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.18-.38 6.52-1.6 6.52-7.02a4.36 4.36 0 0 0-1.2-3.08 4.04 4.04 0 0 0 .08-3.04s-1-.32-3.2 1.18a11.08 11.08 0 0 0-5.8 0C8.16 1.42 7.14 1.74 7.14 1.74A4.04 4.04 0 0 0 7.22 4.78 4.36 4.36 0 0 0 6 7.86c0 5.4 3.32 6.64 6.52 7.02a4.8 4.8 0 0 0-1 2.82V22"></path>
                              </svg>
                            </a>
                          )}
                          {proj.liveUrl && proj.liveUrl !== "#" && (
                            <a
                              href={proj.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                              title="Visit Platform"
                              aria-label="Live Demo"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>

                      <h3
                        onClick={() => openProjectModal(proj)}
                        className="text-xl font-bold text-foreground mb-1 group-hover:text-blue-500 transition-colors cursor-pointer"
                        title="Click to view technical architecture"
                      >
                        {title}
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground mb-3">
                        {tagline}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                        {description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {highlights.slice(0, 3).map((pt, pIdx) => (
                          <li key={pIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-emerald-500 font-bold mt-0.5">✔</span>
                            <span className="line-clamp-2">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Bottom: Tech stack & Deep Dive Trigger */}
                    <div className="pt-4 border-t border-border space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map((tItem) => (
                          <span
                            key={tItem}
                            className="px-2 py-0.5 rounded-md bg-muted text-[11px] font-mono text-muted-foreground"
                          >
                            {tItem}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => openProjectModal(proj)}
                          className="text-xs font-mono font-semibold text-foreground hover:text-blue-500 inline-flex items-center gap-1.5 transition-colors p-1 -ml-1 rounded-md hover:bg-muted cursor-pointer"
                        >
                          <Layers size={13} />
                          <span>{t.projects.deepDiveBtn}</span>
                        </button>

                        {proj.liveUrl && proj.liveUrl !== "#" && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs font-mono font-semibold text-foreground hover:underline inline-flex items-center gap-1 shrink-0"
                          >
                            <span>{t.projects.visitSite}</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Project Architecture Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
