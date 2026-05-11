"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Cleaned up array: Just the images, no text needed!
const projects = [
  { id: 1, before: "/before1.jpg", after: "/after1.jpg" },
  { id: 2, before: "/before2.jpg", after: "/after2.jpg" },
  { id: 3, before: "/before3.jpg", after: "/after3.jpg" },
  { id: 4, before: "/before4.jpg", after: "/after4.jpg" },
  { id: 5, before: "/before5.jpg", after: "/after5.jpg" }
];

export default function PortfolioMontage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAfter, setIsAfter] = useState(false);

  // 1-Second High-Energy Loop
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAfter((prevIsAfter) => {
        if (prevIsAfter) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
          return false;
        } else {
          return true;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentImage = isAfter ? projects[currentIndex].after : projects[currentIndex].before;
  const currentLabel = isAfter ? "AFTER" : "BEFORE";

  return (
    <section id="portfolio" className="relative w-full h-[500px] md:h-[750px] bg-[#050505] overflow-hidden border-t border-b border-[#1a1a1a]">
      
      {/* 1. The Blended Cinematic Image */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${currentIndex}-${isAfter}`}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 0.3, ease: "easeInOut" }, 
            scale: { duration: 1.5, ease: "linear" } 
          }}
          className="absolute inset-0 bg-contain bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url('${currentImage}')`,
            // THE MAGIC BLEND TRICK: This feathers the edges of the image perfectly into the dark background
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
            maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)'
          }}
        />
      </AnimatePresence>

      {/* 2. Extra dark overlays just to ensure the background stays pure black */}
      <div className="absolute inset-0 bg-[#050505]/20 pointer-events-none"></div> 

      {/* 3. Centered Badge & Status Indicator */}
      <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center justify-center pointer-events-none">
        
        {/* Animated Badge */}
        <motion.div 
          key={currentLabel}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className={`mb-6 px-8 py-2 text-sm font-black tracking-[0.4em] uppercase border rounded-sm backdrop-blur-sm ${
            isAfter 
              ? 'border-[#E62020] text-[#E62020] bg-[#E62020]/10 shadow-[0_0_20px_rgba(230,32,32,0.2)]' 
              : 'border-[#888] text-[#888] bg-white/5'
          }`}
        >
          {currentLabel}
        </motion.div>
        
        {/* Progress Dots */}
        <div className="flex space-x-3 items-center">
          {projects.map((_, i) => (
            <div 
              key={i} 
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex 
                  ? 'bg-[#E62020] h-1.5 w-8 shadow-[0_0_10px_rgba(230,32,32,0.5)]' 
                  : 'bg-[#333] h-1.5 w-1.5'
              }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}