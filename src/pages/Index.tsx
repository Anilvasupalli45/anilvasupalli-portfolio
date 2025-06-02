
import { Hero } from "@/components/Hero";
import { Tools } from "@/components/Tools";
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
      <Tools />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
