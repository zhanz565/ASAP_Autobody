import Link from "next/link";
import BeforeAfterSlider from "./BeforeAfterSlider"; 

export default function Vintage() {
  return (
    <section id="vintage" className="bg-[#050505] border-t border-[#1a1a1a] flex flex-col lg:flex-row">
      
      {/* LEFT SIDE: The Image Showcase */}
      <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-[800px] relative overflow-hidden bg-[#000] border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
        
        {/* INTERACTIVE BEFORE/AFTER SLIDER */}
        <div className="absolute inset-0">
           <BeforeAfterSlider 
             beforeImage="/vintage-before.jpg" 
             afterImage="/vintage-car.jpg" 
           />
        </div>
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
        
        {/* Overlay Label - ASAP Themed */}
        <div className="absolute bottom-10 left-10 border-l-4 border-[#E62020] pl-5 pointer-events-none">
          <div className="text-white font-black italic text-3xl tracking-wide uppercase drop-shadow-md">Vintage Restoration</div>
          <div className="text-[#888] text-[10px] tracking-[0.2em] uppercase mt-2 font-bold">Metal Fabrication & Paint</div>
        </div>
      </div>

      {/* RIGHT SIDE: The Content */}
      <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center bg-[#0a0a0a]">
        
        {/* Section Pre-title */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="w-8 h-[2px] bg-[#E62020]"></span>
          <span className="text-[#E62020] text-[10px] tracking-[0.2em] uppercase font-bold">Our Passion</span>
        </div>
        
        {/* Aggressive ASAP Headline */}
        <h3 className="text-5xl lg:text-6xl font-black italic uppercase text-white mb-8 leading-tight drop-shadow-sm">
          Bringing <span className="text-[#E62020]">Classics</span><br />
          Back to Life.
        </h3>

        <p className="text-[#a3a3a3] leading-relaxed mb-12 max-w-xl text-sm font-light">
          Vintage and classic cars are rolling pieces of history. Based on decades of hands-on experience, our restoration team specializes in full tear-downs, custom metal fabrication, and authentic refinishing. We don't just cover up rust—we cut it out, weld it right, and ensure your classic is breathtaking from the frame up.
        </p>

        {/* Specialty List */}
        <ul className="flex flex-col mb-14 w-full max-w-xl">
          {[
            "Custom metal fabrication & deep rust repair",
            "Quarter panel replacement & welding",
            "Full frame-off & rotisserie restorations",
            "Period-correct color matching & custom paint",
            "Show-quality clear coat polishing"
          ].map((item, i) => (
            <li key={i} className="flex items-center text-[#a3a3a3] text-sm font-light py-4 border-b border-[#1a1a1a] group">
              <span className="text-[#E62020] mr-5 font-black">—</span>
              <span className="group-hover:text-white transition-colors">{item}</span>
            </li>
          ))}
        </ul>

        <div>
          {/* ASAP Red Button */}
          <Link href="#contact" className="inline-block bg-[#E62020] hover:bg-[#cc1c1c] text-white px-10 py-5 font-bold tracking-[0.2em] text-[11px] uppercase transition-all shadow-[0_0_15px_rgba(230,32,32,0.2)] hover:shadow-[0_0_25px_rgba(230,32,32,0.4)] rounded-sm">
            Discuss Your Classic
          </Link>
        </div>

      </div>
    </section>
  );
}