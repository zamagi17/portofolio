"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  active?: boolean;
}

export function TypingText({
  text,
  className = "",
  speed = 70,
  delay = 300,
  active = true,
}: TypingTextProps) {
  const [displayedCount, setDisplayedCount] = React.useState(0);
  const [started, setStarted] = React.useState(false);
  const [showCursor, setShowCursor] = React.useState(false);

  React.useEffect(() => {
    if (!active) return;
    setShowCursor(true);
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [active, delay]);

  React.useEffect(() => {
    if (!started) return;
    if (displayedCount >= text.length) {
      const blinkTimer = setTimeout(() => setShowCursor(false), 2000);
      return () => clearTimeout(blinkTimer);
    }

    const timer = setTimeout(() => {
      setDisplayedCount((c) => c + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [started, displayedCount, text.length, speed]);

  return (
    <span className={className}>
      {text.slice(0, displayedCount)}
      <AnimatePresence>
        {showCursor && (
          <motion.span
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="typing-cursor"
            aria-hidden="true"
          >
            |
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
