
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      <Hero />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
