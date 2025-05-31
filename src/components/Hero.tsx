
import { Download, Sparkles, Zap, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/30 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl floating-animation" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/15 rounded-full blur-3xl floating-animation" style={{
        animationDelay: '4s'
      }}></div>
        <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl floating-animation" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="animate-slide-up">
          {/* Enhanced creative badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-orange-500/10 
                          border border-primary/30 rounded-full px-10 py-5 mb-16 backdrop-blur-sm
                          shadow-lg shadow-primary/20">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-primary font-semibold text-lg tracking-wide">Creative Professional</span>
            <Zap className="w-6 h-6 text-primary animate-pulse" />
          </div>

          <h1 className="font-playfair font-bold text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] mb-16 leading-tight">
            <span className="block text-white text-center">Hi, I'm</span>
            <span className="block text-gradient text-center mt-4">Anil</span>
          </h1>
          
          <div className="relative mb-16">
            <h2 className="font-body text-3xl md:text-4xl lg:text-5xl text-gray-300 mb-8 font-light">
              Graphic Designer & Video Editor
            </h2>
            <div className="w-48 h-1.5 bg-gradient-to-r from-primary via-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="font-body text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-6xl mx-auto mb-24 leading-relaxed">
            I'm a <span className="text-primary font-semibold">creative professional</span> with over 3 years of experience crafting 
            <span className="text-primary font-semibold"> powerful visual content</span> — from social media creatives to compelling 
            videos and pitch decks. Currently with <span className="text-primary font-semibold">Furi Media Services</span>. 
            Open to freelance and remote opportunities.
          </p>
          
          {/* Enhanced stats with better spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-24 max-w-4xl mx-auto">
            {[{
            number: "50+",
            label: "Projects Delivered",
            delay: "0s",
            color: "from-primary to-orange-500"
          }, {
            number: "30+",
            label: "Happy Clients",
            delay: "0.2s",
            color: "from-purple-500 to-pink-500"
          }, {
            number: "3+",
            label: "Years Experience",
            delay: "0.4s",
            color: "from-orange-500 to-red-500"
          }].map((stat, index) => (
            <div key={stat.label} className="text-center group animate-scale-in relative" style={{
            animationDelay: stat.delay
          }}>
                <div className="relative mb-6">
                  <div className={`text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r ${stat.color} 
                                  bg-clip-text text-transparent mb-4 group-hover:scale-110 
                                  transition-transform duration-500`}>
                    {stat.number}
                  </div>
                  <div className={`absolute inset-0 text-6xl md:text-7xl lg:text-8xl font-bold 
                                  bg-gradient-to-r ${stat.color} bg-clip-text text-transparent 
                                  opacity-20 blur-sm group-hover:blur-md transition-all duration-500`}>
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-400 font-body font-medium text-xl lg:text-2xl">
                  {stat.label}
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-orange-500 mx-auto mt-4 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24">
            <Button onClick={scrollToContact} className="btn-primary group text-xl px-16 py-8 
                                                          shadow-2xl shadow-primary/40 rounded-2xl">
              <Sparkles className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
              Let's Work Together
            </Button>
            <Button asChild className="btn-secondary group text-xl px-16 py-8 rounded-2xl">
              <a href="#" className="flex items-center gap-3">
                <Download className="w-7 h-7 group-hover:bounce transition-transform duration-300" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <button 
        onClick={scrollToSkills}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce 
                   group hover:scale-110 transition-transform duration-300"
      >
        <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center 
                        group-hover:border-primary transition-colors duration-300 relative">
          <div className="w-1.5 h-4 bg-primary rounded-full mt-3 animate-pulse"></div>
          <ArrowDown className="w-4 h-4 text-primary/60 group-hover:text-primary 
                                 absolute -bottom-8 transition-colors duration-300" />
        </div>
      </button>
    </section>
  );
};
