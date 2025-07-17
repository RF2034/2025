"use client";
import { useEffect, useState } from "react";

const images = [
  "https://images.schoolrave.net/cdn-cgi/image/f=webp/20241005_085614.webp",
  "https://images.schoolrave.net/cdn-cgi/image/f=webp/DSC03758.webp",
  "https://images.schoolrave.net/cdn-cgi/image/f=webp/DSC_0039.webp",
  "https://images.schoolrave.net/cdn-cgi/image/f=webp/DSC_0003.webp",
  "https://images.schoolrave.net/cdn-cgi/image/f=webp/DSC_0300.webp",
];

const SLIDE_INTERVAL = 8000; // 5秒ごとに切り替え

const HeroSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 画像プリロード
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* 現在の画像のみ表示（カット切り替え） */}
      <div
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          opacity: 1,
        }}
      />
    </div>
  );
};

export default HeroSlideshow;