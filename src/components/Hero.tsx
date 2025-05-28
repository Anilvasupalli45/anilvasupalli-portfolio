
import { Mail, FileText, Phone, Download, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="animate-slide-up">
          {/* Creative badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-medium">Creative Professional</span>
            <Zap className="w-5 h-5 text-primary animate-pulse" />
          </div>

          <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 leading-tight">
            <span className="text-white block">Anil</span>
            <span className="text-gradient block transform hover:scale-105 transition-transform duration-500">
              Vasupalli
            </span>
          </h1>
          
          <div className="relative mb-8">
            <h2 className="font-body text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4">
              Graphic Designer & Video Editor
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="font-body text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed">
            I'm a <span className="text-primary font-semibold">creative professional</span> with over 3 years of experience in graphic design and video editing. 
            I help brands stand out with <span className="text-primary font-semibold">powerful visual content</span> — from social media creatives to short-form 
            videos and pitch decks. Currently with <span className="text-primary font-semibold">Furi Media Services</span>. Open to freelance and remote work.
          </p>
          
          {/* Enhanced stats */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-16">
            {[
              { number: "50+", label: "Projects Delivered", delay: "0s" },
              { number: "30+", label: "Happy Clients", delay: "0.2s" },
              { number: "3+", label: "Years Experience", delay: "0.4s" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group animate-scale-in"
                style={{ animationDelay: stat.delay }}
              >
                <div className="relative">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 
                                  group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold 
                                  text-primary/20 blur-sm group-hover:blur-md transition-all duration-500">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-400 font-body font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={scrollToContact}
              className="btn-primary group text-lg shadow-2xl shadow-primary/30"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Contact Me
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button 
              asChild
              className="btn-secondary group text-lg"
            >
              <a href="#" className="flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:bounce transition-transform duration-300" />
                Download Resume
              </a>
            </Button>
          </div>
          
          {/* Enhanced Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <a 
              href="mailto:anil@example.com" 
              className="flex items-center gap-3 hover:text-primary transition-all duration-300 
                         group hover:scale-105 glass-morphism px-6 py-3 rounded-full"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">anil@example.com</span>
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-3 hover:text-primary transition-all duration-300 
                         group hover:scale-105 glass-morphism px-6 py-3 rounded-full"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">+123 456 7890</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
