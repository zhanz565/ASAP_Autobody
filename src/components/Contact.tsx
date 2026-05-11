"use client";

import { useState, useRef } from "react";
import { toast } from "sonner"; 

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileCount, setFileCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending your estimate request...");
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success("Request sent successfully! We will be in touch shortly.", { id: toastId });
        formRef.current?.reset();
        setFileCount(0); 
      } else {
        toast.error("Something went wrong. Please try again or call us.", { id: toastId });
      }
    } catch (error) {
      toast.error("Network error. Please try again or call us.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFileCount(e.target.files.length);
  };

  return (
    <section id="contact" className="bg-[#050505] border-t border-[#1a1a1a] flex flex-col lg:flex-row">
      
      {/* LEFT SIDE: Contact Info */}
      <div className="w-full lg:w-5/12 p-10 lg:p-20 flex flex-col justify-between bg-[#050505] border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
        <div>
          <h2 className="text-[#E62020] font-bold tracking-[0.2em] uppercase text-[10px] mb-6 flex items-center space-x-4">
            <span className="w-8 h-[2px] bg-[#E62020]"></span>
            <span>Get In Touch</span>
          </h2>
          
          <h3 className="text-5xl lg:text-6xl font-black italic uppercase text-white mb-8 leading-tight drop-shadow-md">
            Request a <span className="text-[#E62020]">Free<br/>Estimate</span>
          </h3>
          
          <p className="text-[#a3a3a3] leading-relaxed mb-12 text-sm max-w-md font-light">
            Whether you've been in an accident, need rust work done, or have a vintage project in mind — ASAP Autobody is your go-to shop. Free, no-obligation estimates on all work.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start group">
              <span className="text-[#E62020] text-xl mr-5 mt-1 group-hover:scale-110 transition-transform">📍</span>
              <div>
                <div className="text-[10px] tracking-[0.2em] text-[#666] uppercase mb-2 font-bold">Location</div>
                <div className="text-gray-200 text-sm leading-relaxed font-light">2952 Thompson Rd<br />Smithville, ON L0R 2A0</div>
              </div>
            </div>
            
            <div className="flex items-start group">
              <span className="text-[#E62020] text-xl mr-5 mt-1 group-hover:scale-110 transition-transform">📞</span>
              <div>
                <div className="text-[10px] tracking-[0.2em] text-[#666] uppercase mb-2 font-bold">Phone</div>
                <div className="text-gray-200 text-sm font-light">365-219-0228</div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-64 md:h-80 rounded-sm overflow-hidden border border-[#1a1a1a]">
            <iframe 
              src="https://maps.google.com/maps?q=2952+Thompson+Rd,+Smithville,+ON+L0R+2A0&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: The Form */}
      <div className="w-full lg:w-7/12 p-10 lg:p-20 flex flex-col justify-center bg-[#0a0a0a]">
        
        <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-[800px] mx-auto space-y-8">
          
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3 font-bold">First Name</label>
              <input type="text" name="First_Name" required className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-[#E62020] hover:border-[#333] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="John" />
            </div>
            <div>
              <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3 font-bold">Last Name</label>
              <input type="text" name="Last_Name" required className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-[#E62020] hover:border-[#333] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="Doe" />
            </div>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3 font-bold">Email</label>
            <input type="email" name="email" required className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-[#E62020] hover:border-[#333] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="john@example.com" />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3 font-bold">Phone</label>
            <input type="tel" name="Phone" required className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-[#E62020] hover:border-[#333] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="(905) 000-0000" />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3 font-bold">Service Needed</label>
            <select name="Service_Requested" required defaultValue="" className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-[#E62020] hover:border-[#333] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm appearance-none cursor-pointer">
              <option value="" disabled>Select a service...</option>
              <option value="Collision Repair">Collision Repair</option>
              <option value="Paint & Refinishing">Paint & Refinishing</option>
              <option value="Rust Restoration">Rust Restoration</option>
              <option value="Classic Car Specialty">Classic Car Specialty</option>
              <option value="Other / General Inquiry">Other / General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3 font-bold">Year, Make & Model</label>
            <input type="text" name="Vehicle" required className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-[#E62020] hover:border-[#333] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm" placeholder="e.g. 2018 Ford Mustang" />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3 font-bold">Photos of Damage (Optional)</label>
            <label className="w-full border border-dashed border-[#333] hover:border-[#E62020] bg-[#050505] px-4 py-16 text-center cursor-pointer group rounded-sm block transition-colors">
              <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100">📷</div>
              {fileCount > 0 ? (
                <div className="text-[#E62020] font-black italic tracking-wide text-sm uppercase mb-2">{fileCount} File(s) Selected</div>
              ) : (
                <div className="text-[#E62020] font-black italic tracking-wide text-sm uppercase mb-2">Click to upload photos</div>
              )}
              <div className="text-[#666] text-[11px] tracking-wide">JPG, PNG, HEIC accepted</div>
              <input type="file" name="attachment" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[#888] uppercase mb-3 font-bold">Tell Us More</label>
            <textarea name="Message" rows={5} className="w-full bg-[#050505] border border-[#1a1a1a] focus:border-[#E62020] hover:border-[#333] px-5 py-4 text-white text-sm focus:outline-none transition-colors rounded-sm resize-none" placeholder="Describe the damage or work needed..."></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full mt-4 bg-[#E62020] hover:bg-[#cc1c1c] disabled:bg-[#333] text-white px-8 py-5 font-black tracking-[0.2em] text-[12px] uppercase transition-all rounded-sm cursor-pointer shadow-[0_0_15px_rgba(230,32,32,0.2)] hover:shadow-[0_0_25px_rgba(230,32,32,0.4)]"
          >
            {isSubmitting ? "Sending Request..." : "Send Request"}
          </button>
        </form>
      </div>
    </section>
  );
}