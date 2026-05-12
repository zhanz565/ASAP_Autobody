import Hero from "@/components/Hero";
import PortfolioMontage from "@/components/PortfolioMontage";
import Services from "@/components/Services";
import Vintage from "@/components/Vintage";
import Gallery from "@/components/Gallery"; // <-- 1. Import the new Gallery
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="bg-[#050505]">
      <Hero />
      <PortfolioMontage />
      <Services />
      <Vintage />
      <Gallery /> {/* <-- 2. Place it right between Vintage and Process */}
      <Process />
      <Reviews />
      <Contact />
      <ChatWidget />
    </div>
  );
}