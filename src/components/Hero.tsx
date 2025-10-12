
import { Download, Sparkles, Zap, ArrowDown } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      try {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      } catch (error) {
        console.warn(`Failed to scroll to section: ${sectionId}`, error);
        // Fallback scroll method
        window.scrollTo({ 
          top: element.offsetTop - 100, 
          behavior: "smooth" 
        });
      }
    } else {
      console.warn(`Section not found: ${sectionId}`);
    }
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  const scrollToSkills = () => {
    scrollToSection("skills");
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
                          border border-primary/30 rounded-full px-8 py-4 mb-12 backdrop-blur-sm
                          shadow-lg shadow-primary/20">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary font-semibold font-heading tracking-wide">Creative Professional</span>
            <Zap className="w-5 h-5 text-primary animate-pulse" />
          </div>

          <h1 className="font-title font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-12 leading-tight">
            <span className="block text-white text-center">Hi, I'm</span>
            <span className="block text-gradient text-center mt-2">Anil Vasupalli</span>
          </h1>
          
          <div className="relative mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-6 font-semibold">
              Graphic Designer & Video Editor
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="font-body text-lg md:text-xl lg:text-2xl text-gray-400 max-w-5xl mx-auto mb-16 leading-relaxed">
            I'm a <span className="text-primary font-semibold">creative professional</span> with over 3 years of experience crafting 
            <span className="text-primary font-semibold"> powerful visual content</span> — from social media creatives to compelling 
            videos and pitch decks. Currently with <span className="text-primary font-semibold">Furi Media Services</span>. 
            Open to freelance and remote opportunities.
          </p>
          
          {/* Enhanced stats with better spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mb-16 max-w-4xl mx-auto">
            {[{
              number: "25+",
              label: "Projects Delivered",
              delay: "0s",
              color: "from-primary to-orange-500"
            }, {
              number: "30+",
              label: "Happy Clients",
              delay: "0.2s",
              color: "from-primary to-orange-500"
            }, {
              number: "3+",
              label: "Years Experience",
              delay: "0.4s",
              color: "from-primary to-orange-500"
            }].map((stat, index) => (
              <div key={stat.label} className="text-center group animate-scale-in relative" style={{
                animationDelay: stat.delay
              }}>
                <div className="relative mb-4">
                  <div className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} 
                                  bg-clip-text text-transparent mb-3 group-hover:scale-110 
                                  transition-transform duration-500 font-heading`}>
                    {stat.number}
                  </div>
                  <div className={`absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold 
                                  bg-gradient-to-r ${stat.color} bg-clip-text text-transparent 
                                  opacity-20 blur-sm group-hover:blur-md transition-all duration-500`}>
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-400 font-body font-medium text-lg lg:text-xl">
                  {stat.label}
                </div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-orange-500 mx-auto mt-3 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Button onClick={scrollToContact} className="btn-primary group text-lg px-12 py-6 
                                                          shadow-2xl shadow-primary/40 rounded-xl font-heading">
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Let's Work Together
            </Button>
            <Button asChild className="btn-secondary group text-lg px-12 py-6 rounded-xl font-heading">
              <a href="https://drive.google.com/file/d/17sJeawuPrk2VkPNe604u5E0Gc6Pn_rCI/view?usp=sharing" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center gap-3">
                <Download className="w-6 h-6 group-hover:bounce transition-transform duration-300" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <button onClick={scrollToSkills} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce 
                   group hover:scale-110 transition-transform duration-300">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center 
                        group-hover:border-primary transition-colors duration-300 relative">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          <ArrowDown className="w-4 h-4 text-primary/60 group-hover:text-primary 
                                 absolute -bottom-6 transition-colors duration-300" />
        </div>
      </button>
    </section>
  );
};
