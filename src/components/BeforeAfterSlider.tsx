"use client";

import { useState, useRef, useEffect } from "react";

export default function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", () => setIsDragging(false));
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", () => setIsDragging(false));
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] overflow-hidden cursor-ew-resize group select-none"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
    >
      {/* Before Image (Background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${beforeImage}')` }}
      ></div>

      {/* After Image (Clipped overlay) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${afterImage}')`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
        }}
      ></div>

      {/* The Draggable Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#d98f2b] shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#121110] border-2 border-[#d98f2b] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <span className="text-[#d98f2b] text-xs font-bold tracking-tighter">⟨ ⟩</span>
        </div>
      </div>
    </div>
  );
}