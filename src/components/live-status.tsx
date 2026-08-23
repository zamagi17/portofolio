"use client";

import * as React from "react";
import { Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function LiveStatus() {
  const { t } = useLanguage();
  const [time, setTime] = React.useState<string>("");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      // Format time in Asia/Jakarta (WIB UTC+7)
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(`${formatted} WIB`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-card/90 border border-border text-xs font-mono backdrop-blur-md shadow-xs"
    >
      <div className="flex items-center gap-1.5 text-emerald-500 font-semibold">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] text-foreground font-medium">{t.liveStatus.available}</span>
      </div>

      <span className="text-border hidden sm:inline">•</span>

      <div className="hidden sm:flex items-center gap-1.5 text-muted-foreground text-[11px]">
        <MapPin size={12} className="text-muted-foreground" />
        <span>{t.liveStatus.location}</span>
      </div>

      {mounted && time && (
        <>
          <span className="text-border hidden md:inline">•</span>
          <div className="hidden md:flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <Clock size={12} className="text-muted-foreground" />
            <span suppressHydrationWarning className="font-semibold text-foreground">
              {time}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
