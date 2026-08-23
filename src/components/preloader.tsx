"use client";

import * as React from "react";
import { motion } from "framer-motion";

const PRELOADER_DURATION = 800;

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = React.useState(false);

  React.useEffect(() => {
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, PRELOADER_DURATION);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, PRELOADER_DURATION + 300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`preloader-overlay ${exiting ? "preloader-exit" : ""}`}
      aria-hidden="true"
    >
      {/* Ambient glow — pure CSS */}
      <div className="preloader-ambient">
        <div className="preloader-glow preloader-glow-1" />
        <div className="preloader-glow preloader-glow-2" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 editorial-grid opacity-30" />

      {/* Center content */}
      <div className="preloader-center">
        {/* Orbiting dots — pure CSS */}
        <div className="preloader-orbit-container">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`preloader-orbit-dot preloader-orbit-dot-${i}`}
            />
          ))}
          <div className="preloader-center-pulse" />
        </div>

        {/* Text — single Framer Motion fade */}
        <motion.div
          className="preloader-text"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <span className="preloader-label">Portfolio</span>
          <h1 className="preloader-name">Muhammad Zaky</h1>
          <span className="preloader-role">
            Software Engineer • Core Banking
          </span>
        </motion.div>

        {/* Progress bar — CSS animation only */}
        <motion.div
          className="preloader-progress-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <div className="preloader-progress-track">
            <div className="preloader-progress-bar" />
          </div>
          <div className="preloader-progress-meta">
            <span className="preloader-status-text" />
            <span className="preloader-percent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
