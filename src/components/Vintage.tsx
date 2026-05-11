import Link from "next/link";
import BeforeAfterSlider from "./BeforeAfterSlider"; // <-- Import the new slider component

export default function Vintage() {
  return (
    <section id="vintage" className="bg-[#121110] border-t border-[#2a2826] flex flex-col lg:flex-row">
      
      {/* LEFT SIDE: The Image Showcase */}
      <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-[800px] relative overflow-hidden bg-[#000] border-b lg:border-b-0 lg:border-r border-[#2a2826]">
        
        {/* INTERACTIVE BEFORE/AFTER SLIDER */}
        <div className="absolute inset-0">
           <BeforeAfterSlider 
             beforeImage="/vintage-before.jpg" 
             afterImage="/vintage-car.jpg" /* Updated to .jpg based on your folder! */
           />
        </div>
        
        {/* Subtle dark gradient only at the bottom so the text remains readable */}
        {/* pointer-events-none ensures we can click and drag the slider right through the shadow! */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#121110] to-transparent pointer-events-none"></div>
        
        {/* Overlay Label */}
        <div className="absolute bottom-10 left-10 border-l-2 border-[#d98f2b] pl-5 pointer-events-none">
          <div className="text-white font-bold text-3xl tracking-wide" style={{ fontFamily: 'var(--font-playfair), serif' }}>Vintage Restoration</div>
          <div className="text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase mt-2 font-bold">Metal Fabrication & Paint</div>
        </div>
      </div>

      {/* RIGHT SIDE: The Content */}
      <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center bg-[#121110]">
        
        {/* Section Pre-title */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="w-8 h-[1px] bg-[#d98f2b]"></span>
          <span className="text-[#d98f2b] text-[10px] tracking-[0.2em] uppercase font-bold">Our Passion</span>
        </div>
        
        {/* Luxury Serif Headline */}
        <h3 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          Bringing <span className="text-[#d98f2b] italic">Classics</span><br />
          Back to Life.
        </h3>

        <p className="text-[#a3a3a3] leading-relaxed mb-12 max-w-xl text-sm font-light">
          Vintage and classic cars are rolling pieces of history. Based on decades of hands-on experience, our restoration team specializes in full tear-downs, custom metal fabrication, and authentic refinishing. We don't just cover up rust—we cut it out, weld it right, and ensure your classic is breathtaking from the frame up.
        </p>

        {/* Specialty List - Styled with clean template borders */}
        <ul className="flex flex-col mb-14 w-full max-w-xl">
          {[
            "Custom metal fabrication & deep rust repair",
            "Quarter panel replacement & welding",
            "Full frame-off & rotisserie restorations",
            "Period-correct color matching & custom paint",
            "Show-quality clear coat polishing"
          ].map((item, i) => (
            <li key={i} className="flex items-center text-[#a3a3a3] text-sm font-light py-4 border-b border-[#2a2826] group">
              <span className="text-[#d98f2b] mr-5 font-bold">—</span>
              <span className="group-hover:text-white transition-colors">{item}</span>
            </li>
          ))}
        </ul>

        <div>
          {/* Flat Gold Button */}
          <Link href="#contact" className="inline-block bg-[#d98f2b] hover:bg-[#c07a1b] text-black px-10 py-5 font-bold tracking-[0.15em] text-[11px] uppercase transition-colors rounded-sm">
            Discuss Your Classic
          </Link>
        </div>

      </div>
    </section>
  );
}