"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center bg-[#050505] overflow-hidden">
      
      {/* Subtle Background Texture (Optional) 
        Keeps it mostly black but adds a tiny bit of depth.
      */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#111111] via-[#050505] to-[#050505] opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
        
        {/* 1. The Dramatic Logo Reveal 
          Waits 0.5s, then fades in over 1.5s for that slow, cinematic feel.
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Main ASAP Logo */}
          <h1 className="text-8xl md:text-[150px] font-black italic tracking-widest text-[#E62020] leading-none drop-shadow-[0_0_30px_rgba(230,32,32,0.3)]">
            ASAP
          </h1>
          {/* Subtitle */}
          <div className="text-[#888] tracking-[0.4em] uppercase text-xs md:text-sm font-bold mt-4 md:mt-2 ml-2">
            Autobody & Refinishing
          </div>
        </motion.div>

        {/* 2. The Call to Action Buttons
          Fades in slightly after the logo.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md"
        >
          {/* Primary Button: Red */}
          <Link 
            href="#contact" 
            className="w-full sm:w-auto bg-[#E62020] hover:bg-[#cc1c1c] text-white px-10 py-4 font-bold tracking-[0.2em] text-xs uppercase transition-all duration-300 rounded-sm text-center shadow-[0_0_15px_rgba(230,32,32,0.2)] hover:shadow-[0_0_25px_rgba(230,32,32,0.4)]"
          >
            Request a Quote
          </Link>
          
          {/* Secondary Button: Outline */}
          <Link 
            href="#services" 
            className="w-full sm:w-auto bg-transparent border-2 border-[#333] hover:border-[#E62020] text-white hover:text-[#E62020] px-10 py-4 font-bold tracking-[0.2em] text-xs uppercase transition-all duration-300 rounded-sm text-center"
          >
            Our Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}