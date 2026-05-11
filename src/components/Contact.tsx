export default function Contact() {
  return (
    <section id="contact" className="bg-[#121110] border-t border-[#2a2826] flex flex-col lg:flex-row">
      
      {/* LEFT SIDE: Contact Info & Full-Color Map */}
      <div className="w-full lg:w-5/12 p-10 lg:p-20 flex flex-col justify-between bg-[#121110] border-b lg:border-b-0 lg:border-r border-[#2a2826]">
        <div>
          <h2 className="text-[#d98f2b] font-bold tracking-[0.2em] uppercase text-[10px] mb-6 flex items-center space-x-4">
            <span className="w-8 h-[1px] bg-[#d98f2b]"></span>
            <span>Get In Touch</span>
          </h2>
          
          <h3 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            Request a <span className="text-[#d98f2b] italic">Free<br/>Estimate</span>
          </h3>
          
          <p className="text-[#a3a3a3] leading-relaxed mb-12 text-sm max-w-md font-light">
            Whether you've been in an accident, need rust work done, or have a vintage project in mind — ASAP Autobody is your go-to shop. Free, no-obligation estimates on all work.
          </p>

          <div className="space-y-8 mb-12">
            {/* Location */}
            <div className="flex items-start">
              <span className="text-[#d98f2b] text-xl mr-5 mt-1">📍</span>
              <div>
                <div className="text-[10px] tracking-[0.2em] text-[#666] uppercase mb-2 font-bold">Location</div>
                <div className="text-gray-200 text-sm leading-relaxed font-light">Unit 4 – 2952 Thompson Rd<br />Smithville, ON L0R 2A0</div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start">
              <span className="text-[#d98f2b] text-xl mr-5 mt-1">📞</span>
              <div>
                <div className="text-[10px] tracking-[0.2em] text-[#666] uppercase mb-2 font-bold">Phone</div>
                <div className="text-gray-200 text-sm font-light">289-237-8359</div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start">
              <span className="text-[#d98f2b] text-xl mr-5 mt-1">⏱️</span>
              <div>
                <div className="text-[10px] tracking-[0.2em] text-[#666] uppercase mb-2 font-bold">Hours</div>
                <div className="text-gray-200 text-sm leading-relaxed font-light">
                  Mon–Fri: 8:00am – 5:00pm<br />
                  Sat–Sun: Closed
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Full-Color Map Embed - FIXED URL */}
          <div className="w-full h-64 md:h-80 rounded-sm overflow-hidden border border-[#2a2826]">
            <iframe 
              src="https://maps.google.com/maps?q=2952+Thompson+Rd,+Smithville,+ON+L0R+2A0&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: The Form (Fully functional with Web3Forms) */}
      <div className="w-full lg:w-7/12 p-10 lg:p-20 flex flex-col justify-center bg-[#1a1918]">
        
        <form action="https://api.web3forms.com/submit" method="POST" encType="multipart/form-data" className="w-full max-w-[800px] mx-auto space-y-8">
          
          {/* PASTE YOUR WEB3FORMS ACCESS KEY HERE */}
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input type="hidden" name="subject" value="New Estimate Request - ASAP Autobody" />
          <input type="hidden" name="from_name" value="ASAP Autobody Website" />
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3">First Name</label>
              <input type="text" name="First_Name" required className="w-full bg-[#121110] border border-[#2a2826] focus:border-[#d98f2b] hover:border-[#444] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="John" />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3">Last Name</label>
              <input type="text" name="Last_Name" required className="w-full bg-[#121110] border border-[#2a2826] focus:border-[#d98f2b] hover:border-[#444] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="Doe" />
            </div>
          </div>

          {/* Email - Changed to lowercase "email" to enable direct replies in Gmail */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3">Email</label>
            <input type="email" name="email" required className="w-full bg-[#121110] border border-[#2a2826] focus:border-[#d98f2b] hover:border-[#444] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="john@example.com" />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3">Phone</label>
            <input type="tel" name="Phone" required className="w-full bg-[#121110] border border-[#2a2826] focus:border-[#d98f2b] hover:border-[#444] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="(905) 000-0000" />
          </div>

          {/* Service Needed */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3">Service Needed</label>
            <select name="Service_Requested" required defaultValue="" className="w-full bg-[#121110] border border-[#2a2826] focus:border-[#d98f2b] hover:border-[#444] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm appearance-none cursor-pointer">
              <option value="" disabled>Select a service...</option>
              <option value="Collision & Auto Body">Collision & Auto Body</option>
              <option value="Custom Paint & Refinishing">Custom Paint & Refinishing</option>
              <option value="Rust & Oxidation Restoration">Rust & Oxidation Restoration</option>
              <option value="Vintage & Classic Refinement">Vintage & Classic Refinement</option>
              <option value="Other / General Inquiry">Other / General Inquiry</option>
            </select>
          </div>

          {/* Vehicle Info */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3">Year, Make & Model</label>
            <input type="text" name="Vehicle" required className="w-full bg-[#121110] border border-[#2a2826] focus:border-[#d98f2b] hover:border-[#444] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="e.g. 1969 Chevrolet Camaro" />
          </div>

          {/* VIN */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3">VIN Number (Optional)</label>
            <input type="text" name="VIN" className="w-full bg-[#121110] border border-[#2a2826] focus:border-[#d98f2b] hover:border-[#444] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="E.G. 1HGBH41JXMN109186" />
          </div>

          {/* Photo Upload Area */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3">Photos of Damage (Optional)</label>
            <label className="w-full border border-dashed border-[#444] hover:border-[#d98f2b] bg-[#121110] px-4 py-16 text-center cursor-pointer group rounded-sm block transition-colors">
              <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100">📷</div>
              <div className="text-[#d98f2b] font-bold tracking-[0.1em] text-xs uppercase mb-2">Click to upload photos</div>
              <div className="text-[#666] text-[11px] tracking-wide">JPG, PNG, HEIC accepted · Select multiple files if needed</div>
              <input type="file" name="attachment" multiple accept="image/*" className="hidden" />
            </label>
          </div>

          {/* Details */}
          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3">Tell Us More</label>
            <textarea name="Message" rows={5} className="w-full bg-[#121110] border border-[#2a2826] focus:border-[#d98f2b] hover:border-[#444] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm resize-none" placeholder="Describe the damage or work needed..."></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full mt-4 bg-[#d98f2b] hover:bg-[#c07a1b] text-black px-8 py-5 font-bold tracking-[0.2em] text-[11px] uppercase transition-colors rounded-sm cursor-pointer shadow-lg">
            Send Request
          </button>
          
        </form>
      </div>
    </section>
  );
}