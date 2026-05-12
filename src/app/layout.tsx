import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ASAP Autobody & Refinishing",
  description: "Smithville's trusted vehicle restoration and collision specialists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white selection:bg-[#E62020] selection:text-white relative">
        
        {/* THE CINEMATIC FILM GRAIN (The Agency Polish) */}
        <div 
          className="pointer-events-none fixed inset-0 z-[999] opacity-[0.03]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>

        {/* PREMIUM TOAST NOTIFICATIONS */}
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            style: {
              background: '#0a0a0a',
              color: '#fff',
              border: '1px solid #E62020',
              fontFamily: 'var(--font-geist-sans)',
            },
          }} 
        />

        {/* GLOBAL NAVIGATION */}
        <nav className="flex items-center justify-between px-8 py-8 bg-[#050505]/90 backdrop-blur-md border-b border-[#1a1a1a] sticky top-0 z-50">
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col border-l-4 border-[#E62020] pl-3">
              <span className="text-3xl font-black italic tracking-wider text-white leading-none mb-1 group-hover:text-[#E62020] transition-colors">ASAP</span>
              <span className="text-[9px] text-[#888] tracking-[0.2em] uppercase font-bold leading-none">Autobody & Refinishing</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8 text-[11px] font-bold tracking-[0.15em] text-[#a3a3a3] uppercase">
            <Link href="#" className="hover:text-[#E62020] transition-colors">Home</Link>
            <Link href="#services" className="hover:text-[#E62020] transition-colors">Services</Link>
            <Link href="#vintage" className="hover:text-[#E62020] transition-colors">Before & After</Link>
            <Link href="#gallery" className="hover:text-[#E62020] transition-colors">Portfolio</Link>
            <Link href="#process" className="hover:text-[#E62020] transition-colors">Process</Link>
            <Link href="#reviews" className="hover:text-[#E62020] transition-colors">Reviews</Link>
            <Link href="#contact" className="hover:text-[#E62020] transition-colors">Contact</Link>
          </div>
        </nav>
        
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}