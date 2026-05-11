"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Estimate & Approval",
      desc: "We do a thorough assessment of all damage, and provide a detailed written estimate."
    },
    {
      number: "02",
      title: "Teardown & Parts",
      desc: "We uncover structural damages and order premium OEM or exact-match aftermarket parts."
    },
    {
      number: "03",
      title: "Repair & Refinish",
      desc: "Expert metal fabrication, frame straightening, and seamless multi-stage paint matching in our state-of-the-art spray booths."
    },
    {
      number: "04",
      title: "Quality Control",
      desc: "A rigorous multi-point inspection, clear coat polishing, and final detailing. Your vehicle is returned in pristine, showroom condition."
    }
  ];

  return (
    <section id="process" className="bg-[#050505] py-24 lg:py-32 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-[#E62020] font-bold tracking-[0.2em] uppercase text-[10px] mb-6 flex items-center justify-center md:justify-start">
            <span className="w-12 h-[2px] bg-[#E62020] mr-4"></span>
            How We Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tight text-white leading-tight max-w-2xl uppercase drop-shadow-md mx-auto md:mx-0">
            The ASAP <span className="text-[#E62020]">Standard.</span>
          </h3>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col group"
            >
              {/* Red Connecting Line (Hidden on mobile) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-20 right-[-20px] h-[2px] bg-[#1a1a1a] z-0">
                  <div className="h-full bg-[#E62020] w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              )}
              
              {/* Step Number */}
              <div className="w-16 h-16 rounded-sm bg-[#0a0a0a] border-2 border-[#1a1a1a] group-hover:border-[#E62020] flex items-center justify-center text-xl font-black italic text-[#888] group-hover:text-[#E62020] transition-colors duration-300 z-10 mb-6 shadow-lg">
                {step.number}
              </div>
              
              {/* Content */}
              <h4 className="text-xl text-white mb-3 font-black italic uppercase tracking-wide">{step.title}</h4>
              <p className="text-[#a3a3a3] text-sm leading-relaxed font-light pr-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}