"use client";
import { useState } from "react";
import photoGalleryImages from "./photoGalleryImages";

const PhotoGallery = () => {

  const images = photoGalleryImages;
  const [current, setCurrent] = useState(0);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">フォトギャラリー</h2>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-xl">
          <div className="carousel rounded-box relative flex justify-center items-center">
            <div className="relative w-full aspect-[16/9] flex justify-center items-center bg-base-200 overflow-hidden">
              {images.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`フォト${idx + 1}`}
                  className={`absolute left-0 top-0 w-full h-full object-cover transition-opacity duration-150 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  draggable={false}
                  style={{ pointerEvents: current === idx ? 'auto' : 'none' }}
                />
              ))}
            </div>
            <button
              className="btn btn-circle btn-outline absolute left-2 top-1/2 -translate-y-1/2 z-20"
              onClick={() => setCurrent(current === 0 ? images.length - 1 : current - 1)}
              aria-label="前の画像"
              type="button"
            >
              ‹
            </button>
            <button
              className="btn btn-circle btn-outline absolute right-2 top-1/2 -translate-y-1/2 z-20"
              onClick={() => setCurrent(current === images.length - 1 ? 0 : current + 1)}
              aria-label="次の画像"
              type="button"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
