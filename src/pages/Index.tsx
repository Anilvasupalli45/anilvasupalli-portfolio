
import { Hero } from "@/components/Hero";
import { Tools } from "@/components/Tools";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { useHashNavigation } from "@/hooks/useHashNavigation";

const Index = () => {
  useHashNavigation();

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <Hero />
      <Tools />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
