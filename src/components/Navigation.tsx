
import { useState, useEffect } from "react";
import { Mail, FileText, Menu, X, Download, Sparkles } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? "bg-dark/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-gray-800/50" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between h-24">
            {/* Enhanced Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="font-heading font-bold text-2xl lg:text-3xl text-gradient 
                         hover:scale-105 transition-all duration-300 group flex items-center gap-2"
            >
              <Sparkles className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              Anil Vasupalli
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-primary transition-all duration-300 
                             font-medium text-lg relative group py-2"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r 
                                   from-primary to-orange-500 group-hover:w-full 
                                   transition-all duration-300 rounded-full"></span>
                </button>
              ))}
            </div>

            {/* Enhanced Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="mailto:anil@example.com"
                className="p-4 rounded-2xl hover:bg-primary/20 transition-all duration-300 
                           group hover:scale-110 border border-gray-800 hover:border-primary/50"
              >
                <Mail className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://drive.google.com/file/d/17sJeawuPrk2VkPNe604u5E0Gc6Pn_rCI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl hover:bg-primary/20 transition-all duration-300 
                           group hover:scale-110 border border-gray-800 hover:border-primary/50"
              >
                <Download className="w-6 h-6 text-primary group-hover:bounce transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-4 rounded-2xl hover:bg-primary/20 transition-all duration-300
                         border border-gray-800 hover:border-primary/50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] 
                      bg-dark-card/95 backdrop-blur-xl border-l border-gray-800 
                      transform transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8 pt-32">
            {/* Navigation Items */}
            <div className="space-y-8 mb-16">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-2xl font-medium text-white 
                             hover:text-primary transition-all duration-300 
                             transform hover:translate-x-2 animate-slide-up relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary 
                                   group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>
              ))}
            </div>

            {/* Enhanced Mobile Action Buttons */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="mailto:anil@example.com"
                className="flex items-center gap-4 w-full p-6 rounded-2xl 
                           bg-gradient-to-r from-primary/10 to-orange-500/10 
                           border border-primary/30 text-primary 
                           hover:from-primary hover:to-orange-500 hover:text-white 
                           transition-all duration-300 shadow-lg shadow-primary/20"
              >
                <Mail className="w-6 h-6" />
                <span className="font-semibold text-lg">Email Me</span>
              </a>
              <a
                href="https://drive.google.com/file/d/17sJeawuPrk2VkPNe604u5E0Gc6Pn_rCI/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full p-6 rounded-2xl 
                           bg-gray-800/50 border border-gray-700 text-white 
                           hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <Download className="w-6 h-6" />
                <span className="font-semibold text-lg">Download Resume</span>
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-6 mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://www.linkedin.com/in/anilvasupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl 
                           flex items-center justify-center hover:scale-110 transition-all 
                           duration-300 shadow-lg shadow-blue-600/30"
              >
                <span className="text-white font-bold text-lg">Li</span>
              </a>
              <a
                href="https://www.behance.net/anilvasupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-primary to-orange-500 rounded-2xl 
                           flex items-center justify-center hover:scale-110 transition-all 
                           duration-300 shadow-lg shadow-primary/30"
              >
                <span className="text-white font-bold text-lg">Be</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
