"use client";

import { motion, Variants } from "framer-motion";

export default function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 50, damping: 15 } 
    }
  };

  return (
    <section id="services" className="bg-[#050505] py-24 lg:py-32 border-t border-[#1a1a1a] overflow-hidden">
      
      {/* ASAP RACING RED GRADIENTS */}
      <svg width="0" height="0" className="hidden absolute">
        <defs>
          <linearGradient id="redIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="50%" stopColor="#E62020" />
            <stop offset="100%" stopColor="#800000" />
          </linearGradient>
          <linearGradient id="silverIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#a3a3a3" />
            <stop offset="100%" stopColor="#666666" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-[#E62020] font-bold tracking-[0.2em] uppercase text-[10px] mb-6 flex items-center justify-center md:justify-start">
            <span className="w-12 h-[2px] bg-[#E62020] mr-4"></span>
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tight text-white leading-tight max-w-2xl uppercase drop-shadow-md mx-auto md:mx-0">
            Comprehensive Auto Body <span className="text-[#E62020]">Solutions.</span>
          </h3>
        </motion.div>

        {/* 6-Card Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          
          {/* Card 1: Rust Restoration */}
          <motion.div variants={cardVariants} className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] transition-colors duration-500 p-10 lg:p-12 flex flex-col relative group overflow-hidden rounded-sm">
            <div className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-r from-transparent to-[#E62020] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#silverIconGrad)" strokeWidth="1.5" className="mb-6 group-hover:scale-110 transition-transform duration-500">
               <rect x="2" y="6" width="20" height="12" rx="2" />
               <path d="M12 6V18" />
               <path d="M6 10H8" stroke="url(#redIconGrad)" />
               <path d="M6 14H8" stroke="url(#redIconGrad)" />
               <path d="M16 12H18" stroke="url(#redIconGrad)" />
            </svg>
            <h4 className="text-xl text-white mb-4 font-black italic uppercase tracking-wide">Rust Restoration</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Full rust removal, treatment, and panel replacement. We stop corrosion in its tracks and restore the metal to like-new condition.
            </p>
          </motion.div>

          {/* Card 2: Frame Straightening */}
          <motion.div variants={cardVariants} className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] transition-colors duration-500 p-10 lg:p-12 flex flex-col relative group overflow-hidden rounded-sm">
            <div className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-r from-transparent to-[#E62020] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#silverIconGrad)" strokeWidth="1.5" className="mb-6 group-hover:scale-110 transition-transform duration-500">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <h4 className="text-xl text-white mb-4 font-black italic uppercase tracking-wide">Frame Straightening</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Precision frame alignment to restore your vehicle's structural integrity and ensure safe, proper handling on the road.
            </p>
          </motion.div>

          {/* Card 3: Paint & Refinishing */}
          <motion.div variants={cardVariants} className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] transition-colors duration-500 p-10 lg:p-12 flex flex-col relative group overflow-hidden rounded-sm">
            <div className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-r from-transparent to-[#E62020] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#redIconGrad)" strokeWidth="1.5" className="mb-6 group-hover:scale-110 transition-transform duration-500">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
              <circle cx="7.5" cy="9.5" r="1.5" fill="url(#silverIconGrad)" stroke="none"/>
              <circle cx="10.5" cy="6.5" r="1.5" fill="url(#silverIconGrad)" stroke="none"/>
              <circle cx="14.5" cy="7.5" r="1.5" fill="url(#silverIconGrad)" stroke="none"/>
              <circle cx="16.5" cy="11.5" r="1.5" fill="url(#silverIconGrad)" stroke="none"/>
              <path d="M15.5 17.5C15.5 17.5 14 15 11.5 15C9 15 8.5 17.5 8.5 17.5" stroke="url(#silverIconGrad)" strokeLinecap="round"/>
            </svg>
            <h4 className="text-xl text-white mb-4 font-black italic uppercase tracking-wide">Paint & Refinishing</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Custom color matching and full auto paint refinishing. We achieve flawless, showroom-quality finishes using premium automotive paints every time.
            </p>
          </motion.div>

          {/* Card 4: Classic Car Specialty */}
          <motion.div variants={cardVariants} className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] transition-colors duration-500 p-10 lg:p-12 flex flex-col relative group overflow-hidden rounded-sm">
            <div className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-r from-transparent to-[#E62020] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#redIconGrad)" strokeWidth="1.5" className="mb-6 group-hover:scale-110 transition-transform duration-500">
              <path d="M8 21H16" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17V21" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 4H17C17 4 18 11 12 17C6 11 7 4 7 4Z" strokeLinejoin="round"/>
              <path d="M7 7H3C3 7 3 11 6 12.5" stroke="url(#silverIconGrad)" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 7H21C21 7 21 11 18 12.5" stroke="url(#silverIconGrad)" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h4 className="text-xl text-white mb-4 font-black italic uppercase tracking-wide">Classic Car Specialty</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Dedicated vintage and classic car restoration experts — from pre-war American iron to 1970s muscle cars, we handle it all with expert hands.
            </p>
          </motion.div>

          {/* Card 5: Dent Removal */}
          <motion.div variants={cardVariants} className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] transition-colors duration-500 p-10 lg:p-12 flex flex-col relative group overflow-hidden rounded-sm">
            <div className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-r from-transparent to-[#E62020] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#redIconGrad)" strokeWidth="1.5" className="mb-6 group-hover:scale-110 transition-transform duration-500">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" strokeLinejoin="round"/>
              <path d="M20 4L21 6.5L23.5 7.5L21 8.5L20 11L19 8.5L16.5 7.5L19 6.5L20 4Z" stroke="url(#silverIconGrad)" strokeLinejoin="round"/>
            </svg>
            <h4 className="text-xl text-white mb-4 font-black italic uppercase tracking-wide">Dent Removal</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Paintless dent repair and traditional auto body work to eliminate dents, dings, and creases — leaving no trace behind.
            </p>
          </motion.div>

          {/* Card 6: Collision Repair */}
          <motion.div variants={cardVariants} className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#333] transition-colors duration-500 p-10 lg:p-12 flex flex-col relative group overflow-hidden rounded-sm">
            <div className="absolute bottom-0 right-0 w-full h-[4px] bg-gradient-to-r from-transparent to-[#E62020] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="url(#silverIconGrad)" strokeWidth="1.5" className="mb-6 group-hover:scale-110 transition-transform duration-500">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinejoin="round"/>
            </svg>
            <h4 className="text-xl text-white mb-4 font-black italic uppercase tracking-wide">Collision Repair</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Smithville's trusted collision repair shop — from minor fender benders to major structural damage, we restore your vehicle to factory specifications with precision and care.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}