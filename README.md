<div align="center">

# ⚡ Muhammad Zaky — Software Engineer Portfolio

<p align="center">
  <strong>Production-Grade Interactive Portfolio & Engineering Showcase</strong>
</p>

<p align="center">
  <a href="https://linkedin.com/in/muhammadzaky17"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://github.com/zamagi17"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://wa.me/6282148093099"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Cloudflare_Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare Pages" />
</p>

---

</div>

## 📌 Overview

This repository contains the source code for the personal portfolio of **Muhammad Zaky**, a **Software Engineer** with 4+ years of experience specializing in **Mission-Critical Core Banking Systems**, **Java Spring Boot enterprise architectures**, scalable microservices, and modern reactive web applications.

Designed with an obsession for precision, 60fps GPU-accelerated micro-interactions, dark-mode-first aesthetic, and complete bilingual internationalization.

---

## ✨ Key Features & Architecture Highlights

- 🎬 **Branded Cinematic Preloader**: Pure CSS & GPU-accelerated entrance animation with dynamic status compiler and silky curtain reveal.
- ✍️ **Typing Text Animation**: Interactive typewriter headline that triggers smoothly post-preloader.
- 🧲 **Magnetic Hover Buttons**: Interactive buttons and social icons that physically pull toward the cursor using zero-re-render vector transforms.
- 📊 **GPU Scroll Progress Bar**: Real-time header progress indicator powered by `transform: scaleX()` compositing.
- 🌐 **Bilingual (EN / ID) Architecture**: Client-side instant language switching without page reloads or layout shifts.
- 🌓 **Adaptive Theme Engine**: Smooth dark and light theme transitions built on Tailwind CSS v4 CSS variables.
- ⌨️ **Global Command Palette (`⌘K` / `Ctrl+K`)**: Keyboard-driven navigation modal inspired by macOS Spotlight and Raycast.
- 🃏 **Interactive 3D Tilt Developer Card**: Gyroscopic-style 3D perspective tilt effect on developer profile card.
- 🔍 **Architecture Deep-Dive Modal**: Interactive modal showcasing system flow, database patterns, security implementations, and performance metrics for enterprise projects.
- 📱 **Mobile-First & Touch Optimized**: 100% responsive layout across all viewports (Mobile, Tablet, Desktop, Ultra-wide).
- 🚀 **Static Edge Export**: Configured with `output: 'export'` for sub-second global CDN delivery via Cloudflare Pages.

---

## 🛠️ Tech Stack & Ecosystem

| Layer | Technologies |
|---|---|
| **Framework & Runtime** | [Next.js 16 (App Router)](https://nextjs.org), [React 19](https://react.dev) |
| **Language & Typing** | [TypeScript 5](https://www.typescriptlang.org) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com), Custom CSS Tokens |
| **Animation & Transitions** | [Framer Motion](https://www.framer.com/motion), Pure CSS `@keyframes` (GPU Accelerated) |
| **Icons & Assets** | [Lucide React](https://lucide.dev), SVG Vector Badges |
| **Theme & Localization** | `next-themes`, Custom React Context Localization Engine |
| **Hosting & Deployment** | [Cloudflare Pages](https://pages.cloudflare.com) (Edge CDN Static Export) |

---

## 📂 Project Directory Structure

```text
├── public/                     # Static assets (images, custom SVG favicon, icons)
│   ├── favicon.svg             # Branded vector monogram favicon (Z)
│   └── zaky-new.jpg            # Professional portrait
├── src/
│   ├── app/
│   │   ├── globals.css         # Design system tokens, GPU @keyframes & animations
│   │   ├── icon.svg            # Next.js app icon metadata
│   │   ├── layout.tsx          # Root layout, Google Fonts & SEO metadata
│   │   └── page.tsx            # Main page assembly & orchestration
│   ├── components/
│   │   ├── about.tsx           # Narrative, core pillars & capabilities
│   │   ├── certificates.tsx    # BNSP & professional certifications
│   │   ├── command-palette.tsx # Global ⌘K search & quick navigation
│   │   ├── contact.tsx         # Direct contact channels & interactive message form
│   │   ├── education.tsx       # Academic background & verified degrees
│   │   ├── experience.tsx      # Enterprise career history & achievements
│   │   ├── footer.tsx          # Branded footer & smooth back-to-top
│   │   ├── hero.tsx            # Telemetry status, headline, magnetic CTA & 3D tilt card
│   │   ├── language-toggle.tsx # ID / EN switcher component
│   │   ├── live-status.tsx     # Real-time availability telemetry pill
│   │   ├── navbar.tsx          # Sticky glassmorphism header & mobile navigation
│   │   ├── preloader.tsx       # Branded entrance loading animation
│   │   ├── project-modal.tsx   # Interactive technical architecture deep-dive
│   │   ├── projects.tsx        # Project showcase & category filters
│   │   ├── skills.tsx          # Technical arsenal & domain expertise
│   │   └── ui/                 # Reusable UI primitives (TiltCard, MagneticButton, etc.)
│   └── lib/
│       ├── language-context.tsx# Language state provider
│       ├── translations.ts     # Complete EN & ID dictionary
│       └── utils.ts            # Class merging & utility helpers
├── next.config.ts              # Next.js static export configuration
└── package.json                # Project dependencies & scripts
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### 1. Clone the repository
```bash
git clone https://github.com/zamagi17/project_portofolio_pribadi.git
cd project_portofolio_pribadi
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build static export for production
```bash
npm run build
```
The optimized static website will be compiled into the `out/` directory.

---

## ☁️ Cloudflare Pages Deployment Guide

1. Push your repository to **GitHub**.
2. Open the [Cloudflare Dashboard](https://dash.cloudflare.com/) ➔ **Workers & Pages** ➔ **Create application** ➔ **Pages** ➔ **Connect to Git**.
3. Select this repository.
4. Set the build configuration:
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Environment Variable**: `NODE_VERSION` = `20`
5. Click **Save and Deploy**.

---

## 👤 Author & Contact

**Muhammad Zaky**
*Software Engineer — Core Banking, Enterprise Backend & Fullstack*

- 💼 **LinkedIn**: [linkedin.com/in/muhammadzaky17](https://linkedin.com/in/muhammadzaky17)
- 🐙 **GitHub**: [@zamagi17](https://github.com/zamagi17)
- 📧 **Email**: [muhammadzaky00@gmail.com](mailto:muhammadzaky00@gmail.com)
- 💬 **WhatsApp**: [+62 821-4809-3099](https://wa.me/6282148093099)
- 📄 **Curriculum Vitae**: [View CV](https://drive.google.com/file/d/1s-oiRitdiwGcW2xdcPV_Da-t6KDSiGap/view?usp=sharing)

---

<div align="center">
  <sub>Designed & engineered with precision by Muhammad Zaky. Built with Next.js 16, React 19 & Tailwind CSS.</sub>
</div>
