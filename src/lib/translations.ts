export type Language = "en" | "id";

export interface TranslationDictionary {
  nav: {
    about: string;
    stack: string;
    experience: string;
    projects: string;
    education: string;
    certificates: string;
    contact: string;
    search: string;
    searchShortcut: string;
    getInTouch: string;
  };
  liveStatus: {
    available: string;
    location: string;
  };
  hero: {
    role: string;
    bio: string;
    exploreProjects: string;
    copyEmail: string;
    emailCopied: string;
    expLabel: string;
    expValue: string;
    roleLabel: string;
    roleValue: string;
    coreStackLabel: string;
    companyLabel: string;
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    story1: string;
    story2: string;
    pillarsTitle: string;
    pillars: { title: string; description: string }[];
    specTitle: string;
    capabilities: {
      title: string;
      description: string;
      tech: string[];
    }[];
  };
  skills: {
    tag: string;
    title: string;
    subtitle: string;
    filters: { [key: string]: string };
    statusLabel: string;
    statusValue: string;
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    filters: { [key: string]: string };
    deepDiveBtn: string;
    visitSite: string;
    viewRepo: string;
    modal: {
      verified: string;
      tabs: {
        overview: string;
        architecture: string;
        highlights: string;
      };
      aboutTitle: string;
      metricsTitle: string;
      matrixTitle: string;
      breakdownTitle: string;
      lifecycleTitle: string;
      challengesTitle: string;
      close: string;
    };
  };
  experience: {
    tag: string;
    title: string;
    subtitle: string;
    achievementsTitle: string;
  };
  education: {
    tag: string;
    title: string;
    subtitle: string;
    gpaLabel: string;
  };
  certificates: {
    tag: string;
    title: string;
    subtitle: string;
    verified: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    emailTitle: string;
    phoneTitle: string;
    profilesTitle: string;
    locationTitle: string;
    locationDesc: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    sendAnotherBtn: string;
    copyBtn: string;
    copiedBtn: string;
  };
  footer: {
    engineeredWith: string;
    backToTop: string;
  };
  commandPalette: {
    placeholder: string;
    escToClose: string;
    noResults: string;
    footerNav: string;
    cmdCenter: string;
    sections: {
      about: string;
      stack: string;
      experience: string;
      projects: string;
      education: string;
      certificates: string;
      contact: string;
      copyEmail: string;
      emailCopiedToast: string;
      openWhatsapp: string;
      toggleTheme: string;
      toggleLang: string;
      openLinkedin: string;
      openGithub: string;
      openZonakas: string;
    };
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      about: "About",
      stack: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      certificates: "Credentials",
      contact: "Contact",
      search: "Search",
      searchShortcut: "⌘K",
      getInTouch: "Get In Touch",
    },
    liveStatus: {
      available: "Open for Software Engineering roles",
      location: "Jakarta, Indonesia (UTC+7)",
    },
    hero: {
      role: "Software Engineer — Enterprise Backend & Fintech",
      bio: "Software Engineer with over 4 years of experience specializing in enterprise backend systems, Core Banking architecture, financial technology (Fintech), and modern web applications. Currently engineering Core Banking systems at PT. Ukabima Group and building Zonakas SaaS.",
      exploreProjects: "View Technical Projects",
      copyEmail: "Copy Email",
      emailCopied: "Email Copied!",
      expLabel: "EXPERIENCE",
      expValue: "+ Years",
      roleLabel: "PRIMARY DOMAIN",
      roleValue: "Core Banking & Fintech",
      coreStackLabel: "CORE STACK",
      companyLabel: "CURRENT COMPANY",
    },
    about: {
      tag: "01 / PROFESSIONAL SUMMARY & PHILOSOPHY",
      title: "Enterprise Systems & Financial Engineering",
      subtitle: "Proven expertise in developing, maintaining, and optimizing mission-critical Core Banking Systems to guarantee high transaction consistency, availability, and efficient database architecture.",
      storyTitle: "Background & Core Expertise",
      story1: "I am a Software Engineer with over 4 years of experience delivering robust enterprise backend systems, financial technology platforms, and data-driven web applications. At PT. Ukabima Group, I develop and maintain mission-critical Core Banking systems for financial consulting clients using Java and Spring Framework.",
      story2: "In addition to enterprise banking, I co-founded Roti Buaya JKT (rotibuayajkt.web.id) driving e-commerce architecture and customer growth, and engineered Zonakas, a modern financial & mutation management SaaS with Java 17, Spring Boot 3.5, and AI conversational interfaces.",
      pillarsTitle: "ENGINEERING PRINCIPLES",
      pillars: [
        {
          title: "ACID Compliance & Financial Integrity",
          description: "Strict transaction isolation, race-condition mitigation, and double-entry consistency for high-volume banking operations.",
        },
        {
          title: "Enterprise Microservices & Security",
          description: "Robust RESTful APIs with Spring Security, JWT, WebAuthn biometric authentication, and Bucket4j rate limiting.",
        },
        {
          title: "High-Performance Database Architecture",
          description: "Optimized complex PostgreSQL queries, custom functions, schema normalization, and compound indexing for low latency.",
        },
      ],
      specTitle: "CORE SPECIALIZATIONS",
      capabilities: [
        {
          title: "Core Banking & Enterprise Backend",
          description: "Architecting mission-critical financial backend services with Java (OOP), Spring Boot 3.5, Microservices, and Spring Security ensuring compliance and uptime.",
          tech: ["Java 17", "Spring Boot", "Spring Security", "Microservices", "RESTful APIs"],
        },
        {
          title: "Modern Frontend & PWA",
          description: "Building responsive, offline-ready Progressive Web Apps (PWAs) with React 19, Next.js, Vite, TypeScript, and Tailwind CSS v4.",
          tech: ["React 19", "Next.js", "TypeScript", "Tailwind CSS v4", "Vite / PWA"],
        },
        {
          title: "AI Integration & Data Pipelines",
          description: "Integrating NLP-driven conversational AI tracking via WhatsApp Business API, Binance crypto order automation, and high-performance reporting engines (iText & Apache POI).",
          tech: ["WhatsApp API", "Binance API", "Chart.js", "iText / Apache POI", "FCM"],
        },
      ],
    },
    skills: {
      tag: "02 / CORE SKILLS & TECHNICAL ARSENAL",
      title: "Skills & Technology Matrix",
      subtitle: "A comprehensive breakdown of enterprise backend technologies, modern web frameworks, databases, and security tools from my professional experience.",
      filters: {
        All: "All Skills",
        "Backend & Architecture": "Backend & Architecture",
        "Frontend & Web": "Frontend & Web",
        Databases: "Databases",
        "Security & Integrations": "Security & Integrations",
        "DevOps & Tools": "DevOps & Tools",
      },
      statusLabel: "Status",
      statusValue: "Enterprise Ready ✔",
    },
    projects: {
      tag: "03 / TECHNICAL PROJECTS",
      title: "Featured Engineering Projects",
      subtitle: "Production-grade SaaS systems, AI-driven bots, and e-commerce platforms engineered for high scale and reliability.",
      filters: {
        All: "All Projects",
        "Fintech & SaaS": "Fintech & SaaS",
        "AI & Automation": "AI & Automation",
        "E-Commerce": "E-Commerce",
        "Enterprise Core": "Enterprise Core",
      },
      deepDiveBtn: "Architecture Deep Dive →",
      visitSite: "Visit Platform",
      viewRepo: "View Details",
      modal: {
        verified: "Verified Architecture",
        tabs: {
          overview: "Project Overview",
          architecture: "System Architecture",
          highlights: "Technical Highlights",
        },
        aboutTitle: "About the Project",
        metricsTitle: "Performance & Scale Metrics",
        matrixTitle: "Technology Matrix",
        breakdownTitle: "Layered Stack Breakdown",
        lifecycleTitle: "System Request Lifecycle",
        challengesTitle: "Key Technical Challenges & Solutions",
        close: "Close",
      },
    },
    experience: {
      tag: "04 / PROFESSIONAL EXPERIENCE",
      title: "Career & Work History",
      subtitle: "Chronological trajectory of software engineering roles in enterprise banking and entrepreneurial web development.",
      achievementsTitle: "KEY RESPONSIBILITIES & ACCOMPLISHMENTS",
    },
    education: {
      tag: "05 / ACADEMIC BACKGROUND",
      title: "Education & Qualifications",
      subtitle: "Academic degrees in Information Systems with outstanding academic achievements.",
      gpaLabel: "GPA",
    },
    certificates: {
      tag: "06 / VERIFIED CERTIFICATIONS",
      title: "Professional Certifications & Training",
      subtitle: "National competency certifications (BNSP) and specialized enterprise training in software engineering.",
      verified: "Certified & Verified",
    },
    contact: {
      tag: "07 / CONTACT & ENGAGEMENT",
      title: "Get In Touch with Muhammad Zaky",
      subtitle: "Available for Software Engineering opportunities, enterprise backend consulting, and fintech collaborations.",
      emailTitle: "DIRECT EMAIL",
      phoneTitle: "PHONE & WHATSAPP",
      profilesTitle: "PROFESSIONAL PROFILES",
      locationTitle: "LOCATION & TIMEZONE",
      locationDesc: "Based in Jakarta, Indonesia (WIB / UTC+7). Open to full-time, hybrid, and remote software engineering roles.",
      formTitle: "Send a Direct Message",
      formSubtitle: "Leave a message below and I will respond to your email promptly.",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. Hiring Manager / Client Name",
      emailLabel: "Your Email Address",
      emailPlaceholder: "e.g. name@company.com",
      messageLabel: "Opportunity Details or Project Scope",
      messagePlaceholder: "Describe the role, project scope, or inquiry...",
      submitBtn: "Submit Message",
      submittingBtn: "Sending message...",
      successTitle: "Message Received!",
      successDesc: "Thank you for reaching out. Muhammad Zaky will review your message and reply via your email address.",
      sendAnotherBtn: "Send Another Message",
      copyBtn: "Copy",
      copiedBtn: "Copied",
    },
    footer: {
      engineeredWith: "Muhammad Zaky • Software Engineer (Jakarta, Indonesia)",
      backToTop: "Back to top",
    },
    commandPalette: {
      placeholder: "Type a command or jump to section...",
      escToClose: "ESC to close",
      noResults: "No matching commands found for",
      footerNav: "Navigate with ↑ ↓, select with ↵",
      cmdCenter: "Command Center",
      sections: {
        about: "Jump to: About & Summary",
        stack: "Jump to: Core Skills & Arsenal",
        experience: "Jump to: Professional Experience",
        projects: "Jump to: Technical Projects",
        education: "Jump to: Academic Background",
        certificates: "Jump to: Certifications",
        contact: "Jump to: Contact Deck",
        copyEmail: "Copy Email (muhammadzaky00@gmail.com)",
        emailCopiedToast: "Email address copied to clipboard!",
        openWhatsapp: "Chat on WhatsApp (+62 821-4809-3099)",
        toggleTheme: "Toggle Color Theme",
        toggleLang: "Ganti Bahasa (Switch to Indonesian)",
        openLinkedin: "Open LinkedIn (linkedin.com/in/muhammadzaky17)",
        openGithub: "Open GitHub Profile (@zamagi17)",
        openZonakas: "Visit Zonakas Platform (zonakas.com)",
      },
    },
  },
  id: {
    nav: {
      about: "Tentang",
      stack: "Keahlian",
      experience: "Pengalaman",
      projects: "Proyek",
      education: "Pendidikan",
      certificates: "Sertifikasi",
      contact: "Kontak",
      search: "Cari",
      searchShortcut: "⌘K",
      getInTouch: "Hubungi Saya",
    },
    liveStatus: {
      available: "Terbuka untuk posisi Software Engineer",
      location: "Jakarta, Indonesia (WIB / UTC+7)",
    },
    hero: {
      role: "Software Engineer — Enterprise Backend & Fintech",
      bio: "Software Engineer dengan pengalaman lebih dari 4 tahun yang berspesialisasi dalam sistem backend enterprise, arsitektur Core Banking, teknologi finansial (Fintech), dan aplikasi web modern. Mengembangkan sistem Core Banking di PT. Ukabima Group dan membangun platform SaaS Zonakas.",
      exploreProjects: "Lihat Proyek Teknis",
      copyEmail: "Salin Email",
      emailCopied: "Email Tersalin!",
      expLabel: "PENGALAMAN",
      expValue: "+ Tahun",
      roleLabel: "FOKUS UTAMA",
      roleValue: "Core Banking & Fintech",
      coreStackLabel: "STACK UTAMA",
      companyLabel: "PERUSAHAAN SAAT INI",
    },
    about: {
      tag: "01 / RINGKASAN PROFESIONAL & FILOSOFI",
      title: "Sistem Enterprise & Rekayasa Finansial",
      subtitle: "Keahlian terbukti dalam mengembangkan, memelihara, dan mengoptimalkan Core Banking System berskala mission-critical untuk menjamin konsistensi transaksi, ketersediaan tinggi, dan arsitektur database yang efisien.",
      storyTitle: "Latar Belakang & Keahlian Utama",
      story1: "Saya adalah Software Engineer dengan pengalaman lebih dari 4 tahun dalam membangun sistem backend enterprise yang tangguh, teknologi finansial, dan platform web data-driven. Di PT. Ukabima Group, saya bertanggung jawab mengembangkan dan memelihara sistem Core Banking untuk klien konsultan keuangan menggunakan Java dan Spring Framework.",
      story2: "Selain perbankan enterprise, saya mendirikan Roti Buaya JKT (rotibuayajkt.web.id) mengelola platform e-commerce dan pertumbuhan pasar, serta merekayasa Zonakas, sistem SaaS manajemen keuangan & mutasi modern dengan Java 17, Spring Boot 3.5, dan integrasi AI NLP via WhatsApp.",
      pillarsTitle: "PRINSIP REKAYASA SISTEM",
      pillars: [
        {
          title: "Kepatuhan ACID & Integritas Finansial",
          description: "Isolasi transaksi ketat, mitigasi race condition, dan konsistensi pembukuan ganda untuk operasi perbankan volume tinggi.",
        },
        {
          title: "Microservices Enterprise & Keamanan",
          description: "RESTful API tangguh dengan Spring Security, JWT, autentikasi biometrik WebAuthn, dan rate limiting Bucket4j.",
        },
        {
          title: "Arsitektur Database Berkinerja Tinggi",
          description: "Optimasi kueri PostgreSQL kompleks, fungsi kustom, normalisasi skema, dan compound indexing untuk latensi rendah.",
        },
      ],
      specTitle: "SPESIALISASI UTAMA",
      capabilities: [
        {
          title: "Core Banking & Backend Enterprise",
          description: "Merancang layanan backend keuangan berskala mission-critical dengan Java (OOP), Spring Boot 3.5, Microservices, dan Spring Security untuk menjamin kepatuhan dan ketersediaan tinggi.",
          tech: ["Java 17", "Spring Boot", "Spring Security", "Microservices", "RESTful APIs"],
        },
        {
          title: "Frontend Modern & PWA",
          description: "Membangun Progressive Web Apps (PWA) responsif dan offline-ready dengan React 19, Next.js, Vite, TypeScript, dan Tailwind CSS v4.",
          tech: ["React 19", "Next.js", "TypeScript", "Tailwind CSS v4", "Vite / PWA"],
        },
        {
          title: "Integrasi AI & Pipeline Data",
          description: "Integrasi antarmuka percakapan NLP untuk pencatatan otomatis via WhatsApp Business API, bot trading kripto Binance API, dan engine pelaporan iText & Apache POI.",
          tech: ["WhatsApp API", "Binance API", "Chart.js", "iText / Apache POI", "FCM"],
        },
      ],
    },
    skills: {
      tag: "02 / KEAHLIAN INTI & ARSENAL TEKNIS",
      title: "Matriks Keahlian & Teknologi",
      subtitle: "Rangkuman teknologi backend enterprise, framework web modern, basis data, dan keamanan yang teruji di lingkungan produksi nyata.",
      filters: {
        All: "Semua Keahlian",
        "Backend & Architecture": "Backend & Arsitektur",
        "Frontend & Web": "Frontend & Web",
        Databases: "Basis Data",
        "Security & Integrations": "Keamanan & Integrasi",
        "DevOps & Tools": "DevOps & Alat",
      },
      statusLabel: "Status",
      statusValue: "Tingkat Enterprise ✔",
    },
    projects: {
      tag: "03 / PROYEK TEKNIS",
      title: "Proyek Rekayasa Unggulan",
      subtitle: "Sistem SaaS skala produksi, bot otomatisasi berbasis AI, dan platform e-commerce berkinerja tinggi.",
      filters: {
        All: "Semua Proyek",
        "Fintech & SaaS": "Fintech & SaaS",
        "AI & Automation": "AI & Otomasi",
        "E-Commerce": "E-Commerce",
        "Enterprise Core": "Core Enterprise",
      },
      deepDiveBtn: "Bedah Arsitektur →",
      visitSite: "Kunjungi Platform",
      viewRepo: "Lihat Detail",
      modal: {
        verified: "Arsitektur Terverifikasi",
        tabs: {
          overview: "Ringkasan Proyek",
          architecture: "Arsitektur Sistem",
          highlights: "Sorotan Teknis",
        },
        aboutTitle: "Tentang Proyek",
        metricsTitle: "Metrik Performa & Skala",
        matrixTitle: "Matriks Teknologi",
        breakdownTitle: "Struktur Layer Sistem",
        lifecycleTitle: "Siklus Alur Request Sistem",
        challengesTitle: "Tantangan Teknis & Solusi Rekayasa",
        close: "Tutup",
      },
    },
    experience: {
      tag: "04 / PENGALAMAN PROFESIONAL",
      title: "Riwayat Karir & Pengalaman Kerja",
      subtitle: "Linimasa profesional dalam rekayasa perangkat lunak Core Banking perbankan enterprise dan pengembangan platform web mandiri.",
      achievementsTitle: "TANGGUNG JAWAB & PENCAPAIAN UTAMA",
    },
    education: {
      tag: "05 / LATAR BELAKANG PENDIDIKAN",
      title: "Pendidikan & Kualifikasi Akademik",
      subtitle: "Pendidikan formal di bidang Sistem Informasi dengan predikat kelulusan memuaskan (IPK 3.96 & 3.92).",
      gpaLabel: "IPK",
    },
    certificates: {
      tag: "06 / SERTIFIKASI TERVERIFIKASI",
      title: "Sertifikasi Profesi & Pelatihan",
      subtitle: "Sertifikasi kompetensi nasional (BNSP) dan pelatihan spesialisasi pemrograman Java dan basis data.",
      verified: "Terverifikasi & Bersertifikat",
    },
    contact: {
      tag: "07 / KONTAK & KONSULTASI",
      title: "Mari Terhubung dengan Muhammad Zaky",
      subtitle: "Terbuka untuk peluang karir Software Engineer, konsultasi backend enterprise, dan kolaborasi teknologi finansial.",
      emailTitle: "EMAIL UTAMA",
      phoneTitle: "TELEPON & WHATSAPP",
      profilesTitle: "PROFIL PROFESIONAL",
      locationTitle: "LOKASI & ZONA WAKTU",
      locationDesc: "Berlokasi di Jakarta, Indonesia (WIB / UTC+7). Terbuka untuk peran Software Engineer secara Full-time, Hybrid, maupun Remote.",
      formTitle: "Kirim Pesan Langsung",
      formSubtitle: "Isi formulir di bawah ini dan saya akan membalas ke email Anda.",
      nameLabel: "Nama Anda",
      namePlaceholder: "cth. Nama Rekruter / Klien",
      emailLabel: "Alamat Email Anda",
      emailPlaceholder: "cth. name@perusahaan.com",
      messageLabel: "Detail Peluang atau Kebutuhan Proyek",
      messagePlaceholder: "Jelaskan posisi lowongan, ruang lingkup proyek, atau pesan Anda...",
      submitBtn: "Kirim Pesan",
      submittingBtn: "Mengirim pesan...",
      successTitle: "Pesan Berhasil Terkirim!",
      successDesc: "Terima kasih telah menghubungi. Muhammad Zaky akan meninjau pesan Anda dan membalas melalui alamat email yang dicantumkan.",
      sendAnotherBtn: "Kirim Pesan Lainnya",
      copyBtn: "Salin",
      copiedBtn: "Tersalin",
    },
    footer: {
      engineeredWith: "Muhammad Zaky • Software Engineer (Jakarta, Indonesia)",
      backToTop: "Kembali ke atas",
    },
    commandPalette: {
      placeholder: "Ketik perintah atau lompat ke bagian halaman...",
      escToClose: "ESC untuk menutup",
      noResults: "Tidak ada perintah yang cocok untuk",
      footerNav: "Navigasi dengan ↑ ↓, pilih dengan ↵",
      cmdCenter: "Pusat Perintah",
      sections: {
        about: "Lompat ke: Tentang & Ringkasan",
        stack: "Lompat ke: Keahlian Inti & Arsenal",
        experience: "Lompat ke: Pengalaman Kerja",
        projects: "Lompat ke: Proyek Teknis",
        education: "Lompat ke: Riwayat Pendidikan",
        certificates: "Lompat ke: Sertifikasi Profesi",
        contact: "Lompat ke: Kontak",
        copyEmail: "Salin Email (muhammadzaky00@gmail.com)",
        emailCopiedToast: "Alamat email berhasil disalin ke clipboard!",
        openWhatsapp: "Hubungi via WhatsApp (+62 821-4809-3099)",
        toggleTheme: "Ganti Tema Warna",
        toggleLang: "Switch to English (Ganti ke Bahasa Inggris)",
        openLinkedin: "Buka LinkedIn (linkedin.com/in/muhammadzaky17)",
        openGithub: "Buka Profil GitHub (@zamagi17)",
        openZonakas: "Kunjungi Platform Zonakas (zonakas.com)",
      },
    },
  },
};
