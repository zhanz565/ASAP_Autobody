"use client";

import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      name: "Michael T.",
      vehicle: "2018 Mustang GT",
      review: "Absolutely flawless work. Someone backed into my quarter panel and ASAP made it look like it just rolled off the showroom floor. The paint match is indistinguishable.",
    },
    {
      name: "Sarah J.",
      vehicle: "2021 BMW 330i",
      review: "Fast, professional, and transparent. They handled all the insurance paperwork for my collision claim and got my car back to me days earlier than expected. Highly recommend.",
    },
    {
      name: "David L.",
      vehicle: "1969 Camaro RS",
      review: "Finding a shop you trust with a classic is tough. These guys cut out all the rust, fabricated new metal, and laid down a mirror-finish clear coat. True craftsmen.",
    }
  ];

  return (
    <section id="reviews" className="bg-[#050505] py-24 lg:py-32 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-[#E62020] font-bold tracking-[0.2em] uppercase text-[10px] mb-6 flex items-center justify-center">
            <span className="w-8 h-[2px] bg-[#E62020] mr-4"></span>
            Client Testimonials
            <span className="w-8 h-[2px] bg-[#E62020] ml-4"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-black italic tracking-tight text-white leading-tight uppercase drop-shadow-md">
            Built on <span className="text-[#E62020]">Reputation.</span>
          </h3>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-[#0a0a0a] border border-[#1a1a1a] p-10 flex flex-col rounded-sm hover:border-[#333] transition-colors"
            >
              {/* 5 ASAP Red Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#E62020] fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8 font-light flex-grow">
                "{review.review}"
              </p>
              
              <div>
                <div className="text-white font-black italic uppercase tracking-wider text-sm">{review.name}</div>
                <div className="text-[#666] text-[10px] tracking-[0.1em] uppercase font-bold mt-1">{review.vehicle}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}