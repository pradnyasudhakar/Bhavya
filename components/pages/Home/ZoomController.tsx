"use client";
import { useEffect } from "react";

export default function ZoomController() {
  useEffect(() => {
    const el = document.getElementById("zoom-video");
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / window.innerHeight));

      const width = 45 + progress * 55;
      const height = 150 + progress * (window.innerHeight - 150);
      const radius = (1 - progress) * 12;

      el.style.width = `${width}vw`;
      el.style.height = `${height}px`;
      el.style.borderRadius = `${radius}px`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
