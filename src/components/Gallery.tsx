"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Generates an array of 30 image paths: ["/p1.jpg", "/p2.jpg", ... "/p30.jpg"]
const images = Array.from({ length: 30 }, (_, i) => `/p${i + 1}.jpg`);

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Close the gallery if the user presses the "Escape" key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight" && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev! + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && selectedIndex !== null) {
        setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : null));
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null));
  };

  return (
    <section id="gallery" className="bg-[#050505] py-24 lg:py-32 border-t border-[#1a1a1a]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-[#E62020] font-bold tracking-[0.2em] uppercase text-[10px] mb-6 flex items-center justify-center md:justify-start">
            <span className="w-12 h-[2px] bg-[#E62020] mr-4"></span>
            Our Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tight text-white leading-tight uppercase drop-shadow-md">
            Flawless <span className="text-[#E62020]">Results.</span>
          </h3>
        </div>

        {/* The Tight "iPhone Style" Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 md:gap-2">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 10) * 0.05 }} // Slight staggered pop-in
              className="relative aspect-square overflow-hidden group cursor-pointer bg-[#0a0a0a]"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={`ASAP Autobody Work ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#E62020]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="drop-shadow-lg">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* The Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)} // Click background to close
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-[#888] hover:text-[#E62020] transition-colors z-[110] p-2"
              onClick={() => setSelectedIndex(null)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Previous Button */}
            <button 
              className="absolute left-4 md:left-10 text-[#888] hover:text-white transition-colors z-[110] p-4"
              onClick={showPrev}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 md:right-10 text-[#888] hover:text-white transition-colors z-[110] p-4"
              onClick={showNext}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* The Zoomed Image */}
            <motion.img
              key={selectedIndex} // Forces animation to re-run when index changes
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={images[selectedIndex]}
              alt={`Zoomed Work ${selectedIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on the image from closing the gallery
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#888] font-bold tracking-[0.2em] text-xs uppercase">
              {selectedIndex + 1} / {images.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}