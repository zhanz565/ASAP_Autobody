import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "ASAP Autobody | Restoration Specialists",
  description: "Smithville's trusted vehicle restoration specialists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      {/* We apply the dark theme and the new golden-orange custom selection colors to the body here */}
      <body className="min-h-full flex flex-col bg-[#121110] text-white selection:bg-[#d98f2b] selection:text-white">
        
        {/* GLOBAL NAVIGATION - Flat Luxury Style */}
        <nav className="flex items-center justify-between px-8 py-8 bg-[#121110] border-b border-[#2a2826] sticky top-0 z-50">
          <Link href="/" className="flex items-center group">
            {/* Minimalist Logo matching the template */}
            <div className="flex flex-col border-l-2 border-[#d98f2b] pl-3">
              <span className="text-2xl font-bold tracking-widest text-white leading-none mb-1">ASAP</span>
              <span className="text-[9px] text-[#888] tracking-[0.2em] uppercase font-medium leading-none">Autobody & Refining</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8 text-[11px] font-semibold tracking-[0.15em] text-[#a3a3a3] uppercase">
            <Link href="#" className="hover:text-[#d98f2b] transition-colors">Home</Link>
            <Link href="#services" className="hover:text-[#d98f2b] transition-colors">Services</Link>
            <Link href="#vintage" className="hover:text-[#d98f2b] transition-colors">Before & After</Link>
            <Link href="#process" className="hover:text-[#d98f2b] transition-colors">Process</Link>
            <Link href="#reviews" className="hover:text-[#d98f2b] transition-colors">Reviews</Link>
            <Link href="#contact" className="hover:text-[#d98f2b] transition-colors">Contact</Link>
          </div>
        </nav>
        
        {/* PAGE CONTENT */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}