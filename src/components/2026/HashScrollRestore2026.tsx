"use client";

import { useEffect } from "react";

function scrollToHash(hash: string) {
  if (!hash || hash === "#") return;

  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;

  target.scrollIntoView({ block: "start" });
}

export default function HashScrollRestore2026() {
  useEffect(() => {
    const restore = () => {
      if (!window.location.hash) return;
      requestAnimationFrame(() => scrollToHash(window.location.hash));
    };

    restore();

    window.addEventListener("hashchange", restore);
    window.addEventListener("pageshow", restore);

    return () => {
      window.removeEventListener("hashchange", restore);
      window.removeEventListener("pageshow", restore);
    };
  }, []);

  return null;
}
