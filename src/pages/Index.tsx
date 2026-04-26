import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhatIDo } from "@/components/WhatIDo";
import { Portfolio } from "@/components/Portfolio";
import { Showreel } from "@/components/Showreel";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useHashNavigation } from "@/hooks/useHashNavigation";

const Index = () => {
  useHashNavigation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <WhatIDo />
      <Portfolio />
      <Showreel />
      <Experience />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
