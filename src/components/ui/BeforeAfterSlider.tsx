"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  width?: number;
  height?: number;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  width = 400,
  height = 400,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100;

      if (newPosition >= 0 && newPosition <= 100) {
        setSliderPosition(newPosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Touch support
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  useEffect(() => {
    if (!isDragging) return;

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100;

      if (newPosition >= 0 && newPosition <= 100) {
        setSliderPosition(newPosition);
      }
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100 cursor-col-resize select-none"
        style={{ width: "100%", aspectRatio: "1" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image
            src={beforeImage}
            alt="Before"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* After Image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden transition-all"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all"
          style={{ left: `${sliderPosition}%`, cursor: "col-resize" }}
        >
          {/* Handle Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none">
            <div className="flex gap-1">
              <svg
                className="w-5 h-5 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M8.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 15a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
              <svg
                className="w-5 h-5 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M11.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.5 15a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider pointer-events-none">
          Before
        </div>

        {/* After Label */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider pointer-events-none">
          After
        </div>
      </div>

      {/* Title */}
      <p className="text-center text-gray-600 text-sm font-medium">
        Drag the slider to see the transformation
      </p>
    </div>
  );
}
