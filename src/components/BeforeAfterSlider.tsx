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

  const onMouseMove = (e: MouseEvent) => { if (!isDragging) return; handleMove(e.clientX); };
  const onTouchMove = (e: TouchEvent) => { if (!isDragging) return; handleMove(e.touches[0].clientX); };

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
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${beforeImage}')` }}></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${afterImage}')`, clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}></div>

      {/* ASAP RED Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] bg-[#E62020] shadow-[0_0_15px_rgba(230,32,32,0.8)]"
        style={{ left: `calc(${sliderPosition}%)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#050505] border-2 border-[#E62020] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(230,32,32,0.5)] transition-transform group-hover:scale-110">
          <span className="text-[#E62020] text-xs font-black tracking-tighter">⟨ ⟩</span>
        </div>
      </div>
    </div>
  );
}