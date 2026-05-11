export default function Process() {
  return (
    <section id="process" className="bg-[#121110] py-24 border-t border-[#2a2826]">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-[#d98f2b] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 flex items-center justify-center md:justify-start space-x-4">
            <span className="w-8 h-[1px] bg-[#d98f2b]"></span>
            <span>How It Works</span>
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Our <span className="text-[#d98f2b] italic">Process</span>
          </h3>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-[#2a2826] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-full border border-[#2a2826] group-hover:border-[#d98f2b] transition-all duration-300 bg-[#121110] text-[#d98f2b] flex items-center justify-center text-xl font-bold mb-6">
                01
              </div>
              <h4 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Inspection</h4>
              <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-xs font-light">
                We do a thorough assessment of all damage, visible and hidden, and provide a detailed written estimate.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-full border border-[#2a2826] group-hover:border-[#d98f2b] transition-all duration-300 bg-[#121110] text-[#d98f2b] flex items-center justify-center text-xl font-bold mb-6">
                02
              </div>
              <h4 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Approval</h4>
              <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-xs font-light">
                We walk you through every line item and coordinate directly with your insurance company if needed.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-full border border-[#2a2826] group-hover:border-[#d98f2b] transition-all duration-300 bg-[#121110] text-[#d98f2b] flex items-center justify-center text-xl font-bold mb-6">
                03
              </div>
              <h4 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Restoration</h4>
              <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-xs font-light">
                Our master technicians get to work — metal, paint, and finishing done to the highest standards.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group cursor-default">
              <div className="w-16 h-16 rounded-full border border-[#2a2826] group-hover:border-[#d98f2b] transition-all duration-300 bg-[#121110] text-[#d98f2b] flex items-center justify-center text-xl font-bold mb-6">
                04
              </div>
              <h4 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Delivery</h4>
              <p className="text-[#a3a3a3] text-sm leading-relaxed max-w-xs font-light">
                A final quality inspection before your vehicle is delivered to you — clean, complete, and road-ready.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}