export default function Services() {
  return (
    <section id="services" className="bg-[#121110] py-24 lg:py-32 border-t border-[#2a2826]">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-[#d98f2b] font-bold tracking-[0.2em] uppercase text-[10px] mb-6 flex items-center justify-center md:justify-start">
            <span className="w-12 h-[1px] bg-[#d98f2b] mr-4"></span>
            What We Do
          </h2>
          <h3 
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Full-Service <span className="text-[#d98f2b] italic">Body Work</span>
          </h3>
        </div>

        {/* Services Grid (Flat, Dark Grey Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#2a2826] border border-[#2a2826]">
          
          {/* Card 1 */}
          <div className="bg-[#1a1918] hover:bg-[#1f1d1c] transition-colors p-10 flex flex-col">
            <div className="text-[#d98f2b] text-3xl mb-6">🔧</div>
            <h4 className="text-xl text-white mb-4 font-bold tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>Collision Repair</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Smithville's trusted collision repair shop — from minor fender benders to major structural damage, we restore your vehicle to factory specifications with precision and care.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1918] hover:bg-[#1f1d1c] transition-colors p-10 flex flex-col">
            <div className="text-[#d98f2b] text-3xl mb-6">🎨</div>
            <h4 className="text-xl text-white mb-4 font-bold tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>Paint & Refinishing</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Custom color matching and full auto paint refinishing. We achieve flawless, showroom-quality finishes using premium automotive paints every time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1918] hover:bg-[#1f1d1c] transition-colors p-10 flex flex-col">
            <div className="text-[#d98f2b] text-3xl mb-6">⚙️</div>
            <h4 className="text-xl text-white mb-4 font-bold tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>Frame Straightening</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Precision frame alignment to restore your vehicle's structural integrity and ensure safe, proper handling on the road.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1a1918] hover:bg-[#1f1d1c] transition-colors p-10 flex flex-col">
            <div className="text-[#d98f2b] text-3xl mb-6">🛡️</div>
            <h4 className="text-xl text-white mb-4 font-bold tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>Rust Restoration</h4>
            <p className="text-[#a3a3a3] leading-relaxed text-sm font-light">
              Full rust removal, treatment, and panel replacement. We stop corrosion in its tracks and restore the metal to like-new condition.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}