"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: readonly string[];
  intervalMs: number;
};

export default function HeroSlideshow2026({ images, intervalMs }: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(t);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  const src = images[idx] ?? images[0];

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: "none" }}
    >
      <Image
        key={src}
        src={src}
        alt=""
        fill
        priority={idx === 0}
        sizes="100vw"
        className="object-cover transition-opacity duration-[600ms] ease-in-out"
        style={{ pointerEvents: "none" }}
        draggable={false}
      />
    </div>
  );
}
