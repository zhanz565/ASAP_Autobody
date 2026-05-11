export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#1a1918] py-24 border-t border-[#2a2826]">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-[#d98f2b] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 flex items-center space-x-4">
              <span className="w-8 h-[1px] bg-[#d98f2b]"></span>
              <span>Google Reviews</span>
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              What Owners <span className="text-[#d98f2b] italic">Say</span>
            </h3>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-3 bg-[#121110] border border-[#2a2826] px-6 py-3 rounded-sm">
            {/* Google 'G' Logo SVG */}
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
              </g>
            </svg>
            <span className="font-bold text-white text-sm tracking-wide">Verified 5.0 Stars</span>
            <span className="text-[#d98f2b] text-lg tracking-widest">★★★★★</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Review 1 */}
          <div className="bg-[#121110] p-8 border border-[#2a2826] hover:border-[#d98f2b] transition-all duration-300 rounded-sm flex flex-col justify-between">
            <div>
              <div className="text-[#d98f2b] text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8 font-light">
                "Very happy with the work! Price was reasonable. No delays, actually couple days early. Definitely worth taken your vehicle to him! Thanks from steven from Cape breton"
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-playfair), serif' }}>GivenNameAtBirth</div>
              <div className="text-gray-500 text-[10px] tracking-[0.1em] uppercase mt-1">Local Guide</div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-[#121110] p-8 border border-[#2a2826] hover:border-[#d98f2b] transition-all duration-300 rounded-sm flex flex-col justify-between">
            <div>
              <div className="text-[#d98f2b] text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8 font-light">
                "Great experience here. Got front-end work done and the car looks brand new. Paint matched perfectly and everything lines up clean. Solid work and fair pricing."
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-playfair), serif' }}>Marquii</div>
              <div className="text-gray-500 text-[10px] tracking-[0.1em] uppercase mt-1">Google Review</div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-[#121110] p-8 border border-[#2a2826] hover:border-[#d98f2b] transition-all duration-300 rounded-sm flex flex-col justify-between">
            <div>
              <div className="text-[#d98f2b] text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8 font-light">
                "Brought my car to Russ and Peter. They did a fantastic job and returned my car in a timely manner. Really recommend"
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-playfair), serif' }}>O E</div>
              <div className="text-gray-500 text-[10px] tracking-[0.1em] uppercase mt-1">Local Guide</div>
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-[#121110] p-8 border border-[#2a2826] hover:border-[#d98f2b] transition-all duration-300 rounded-sm flex flex-col justify-between">
            <div>
              <div className="text-[#d98f2b] text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8 font-light">
                "Nice place"
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-playfair), serif' }}>Noah Nisbet</div>
              <div className="text-gray-500 text-[10px] tracking-[0.1em] uppercase mt-1">Local Guide</div>
            </div>
          </div>

          {/* Review 5 */}
          <div className="bg-[#121110] p-8 border border-[#2a2826] hover:border-[#d98f2b] transition-all duration-300 rounded-sm flex flex-col justify-between">
            <div>
              <div className="text-[#d98f2b] text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8 font-light">
                "Took my car in to get detailed and they did an amazing job. I would definitely check them out"
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-playfair), serif' }}>Tina Robins</div>
              <div className="text-gray-500 text-[10px] tracking-[0.1em] uppercase mt-1">Local Guide</div>
            </div>
          </div>

          {/* Review 6 */}
          <div className="bg-[#121110] p-8 border border-[#2a2826] hover:border-[#d98f2b] transition-all duration-300 rounded-sm flex flex-col justify-between">
            <div>
              <div className="text-[#d98f2b] text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8 font-light italic">
                "Fast and quality workmanship. Pictures show the depth of work.very satisfied"
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-playfair), serif' }}>Brian Goodbrand</div>
              <div className="text-gray-500 text-[10px] tracking-[0.1em] uppercase mt-1">Google Review</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}