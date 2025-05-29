
import { Download, Sparkles, Zap } from "lucide-react";
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

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-slide-up">
          {/* Creative badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-8 py-4 mb-12 backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-primary font-medium text-lg">Creative Professional</span>
            <Zap className="w-6 h-6 text-primary animate-pulse" />
          </div>

          <h1 className="font-title font-bold text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] mb-12 leading-tight">
            <span className="text-white block">Anil</span>
            <span className="text-gradient block transform hover:scale-105 transition-transform duration-500">
              Vasupalli
            </span>
          </h1>
          
          <div className="relative mb-12">
            <h2 className="font-body text-3xl md:text-4xl lg:text-5xl text-gray-300 mb-6">
              Graphic Designer & Video Editor
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="font-body text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-5xl mx-auto mb-20 leading-relaxed">
            I'm a <span className="text-primary font-semibold">creative professional</span> with over 3 years of experience in graphic design and video editing. 
            I help brands stand out with <span className="text-primary font-semibold">powerful visual content</span> — from social media creatives to short-form 
            videos and pitch decks. Currently with <span className="text-primary font-semibold">Furi Media Services</span>. Open to freelance and remote work.
          </p>
          
          {/* Enhanced stats */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 mb-20">
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
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 
                                  group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-bold 
                                  text-primary/20 blur-sm group-hover:blur-md transition-all duration-500">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-400 font-body font-medium text-xl">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-20">
            <Button 
              onClick={scrollToContact}
              className="btn-primary group text-xl px-12 py-6 shadow-2xl shadow-primary/30"
            >
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Let's Work Together
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button 
              asChild
              className="btn-secondary group text-xl px-12 py-6"
            >
              <a href="#" className="flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:bounce transition-transform duration-300" />
                Download Resume
              </a>
            </Button>
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
