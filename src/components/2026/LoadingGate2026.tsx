"use client";

import { SITE_2026 } from "@/constants/2026-site";
import { useEffect, useState } from "react";

const STORAGE_KEY = "gakkorave2026-loading-done";

export default function LoadingGate2026() {
  const [phase, setPhase] = useState<"check" | "show" | "hide">("check");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) {
        setPhase("hide");
        return;
      }
    } catch {
      /* ignore */
    }
    setPhase("show");
    const t = window.setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setPhase("hide");
    }, 2200);
    return () => window.clearTimeout(t);
  }, []);

  if (phase !== "show") return null;

  return (
    <div
      className="loading-gate-2026"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="loading-gate-2026__inner">
        <p className="loading-gate-2026__chalk loading-gate-2026__chalk--main">
          {SITE_2026.loading.chalkTitle}
        </p>
        <p className="loading-gate-2026__chalk loading-gate-2026__chalk--sub">
          {SITE_2026.loading.subtitle}
        </p>
      </div>
    </div>
  );
}
