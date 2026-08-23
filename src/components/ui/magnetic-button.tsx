"use client";

import * as React from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = React.useState(false);

  React.useEffect(() => {
    setIsPointerFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isPointerFine) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [isPointerFine, strength]
  );

  const handleMouseLeave = React.useCallback(() => {
    if (!isPointerFine) return;
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }, [isPointerFine]);

  if (!isPointerFine) {
    return <div className={`inline-flex ${className}`}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

