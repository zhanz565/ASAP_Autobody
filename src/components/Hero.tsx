import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col justify-between bg-[#121110]" style={{ minHeight: 'calc(100vh - 88px)' }}>
      
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-no-repeat opacity-60 mix-blend-luminosity"
        style={{ 
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundPosition: '30% center' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110] via-[#121110]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121110]/40 to-[#121110]"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 px-8 py-20 lg:pt-32 lg:pb-24 max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        <div className="max-w-3xl">
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-8 h-[1px] bg-[#d98f2b]"></span>
            <span className="text-[#d98f2b] text-[10px] tracking-[0.2em] uppercase font-bold">Est. 1996 · Master Craftsmen</span>
          </div>

          <h1 
            className="text-[4rem] md:text-[5.5rem] font-bold leading-[1.05] mb-8 tracking-tight text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            FAST, FLAWLESS <span className="text-[#d98f2b] italic">REFINING.</span>
          </h1>
          
          <p className="text-[#a3a3a3] text-lg max-w-xl mb-12 leading-relaxed font-light">
            Refining your vehicle with unparalleled speed and precision. <br/>
            <strong className="text-white font-medium">ASAP AutoBody and Refining</strong> is the destination for faster, show-quality restoration and refinement.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#contact" className="bg-[#d98f2b] hover:bg-[#c07a1b] text-black px-10 py-4 font-bold tracking-[0.15em] text-[11px] uppercase transition-colors text-center rounded-sm">
              Request a Quote
            </Link>
            <Link href="#services" className="bg-transparent border border-[#444] hover:border-[#d98f2b] text-white hover:text-[#d98f2b] px-10 py-4 font-bold tracking-[0.15em] text-[11px] uppercase transition-colors text-center rounded-sm">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#2a2826] z-30 relative"></div>

      {/* Stats Bottom Section */}
      <div className="relative z-20 w-full bg-[#121110] px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-left">
          
          <div className="flex flex-col items-start">
            <span className="text-[3.5rem] font-bold leading-none tracking-tighter text-[#d98f2b] mb-3">30+</span>
            <span className="text-[#666] text-[10px] tracking-[0.15em] uppercase font-bold">Years in Business</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[3.5rem] font-bold leading-none tracking-tighter text-[#d98f2b] mb-3">5,000+</span>
            <span className="text-[#666] text-[10px] tracking-[0.15em] uppercase font-bold">Vehicles Restored</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[3.5rem] font-bold leading-none tracking-tighter text-[#d98f2b] mb-3">100%</span>
            <span className="text-[#666] text-[10px] tracking-[0.15em] uppercase font-bold">Satisfaction Rate</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[3.5rem] font-bold leading-none tracking-tighter text-[#d98f2b] mb-3">ALL</span>
            <span className="text-[#666] text-[10px] tracking-[0.15em] uppercase font-bold">Makes & Models</span>
          </div>

        </div>
      </div>
    </section>
  );
}