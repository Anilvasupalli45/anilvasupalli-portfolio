
import { useState, useEffect } from "react";
import { Mail, FileText, Menu, X, Download } from "lucide-react";

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-dark/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-gray-800/50" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="font-heading font-bold text-2xl lg:text-3xl text-gradient 
                         hover:scale-105 transition-transform duration-300"
            >
              Anil Vasupalli
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-primary transition-all duration-300 
                             font-medium text-lg relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary 
                                   group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="mailto:anil@example.com"
                className="p-3 rounded-xl hover:bg-primary/20 transition-all duration-300 
                           group hover:scale-110"
              >
                <Mail className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="p-3 rounded-xl hover:bg-primary/20 transition-all duration-300 
                           group hover:scale-110"
              >
                <Download className="w-6 h-6 text-primary group-hover:bounce transition-transform duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-primary/20 transition-all duration-300"
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
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
          <div className="p-8 pt-24">
            {/* Navigation Items */}
            <div className="space-y-6 mb-12">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-xl font-medium text-white 
                             hover:text-primary transition-all duration-300 
                             transform hover:translate-x-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href="mailto:anil@example.com"
                className="flex items-center gap-3 w-full p-4 rounded-xl 
                           bg-primary/10 border border-primary/30 text-primary 
                           hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>
              <a
                href="#"
                className="flex items-center gap-3 w-full p-4 rounded-xl 
                           bg-gray-800/50 border border-gray-700 text-white 
                           hover:bg-gray-700 transition-all duration-300"
              >
                <Download className="w-6 h-6" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://www.linkedin.com/in/anilvasupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center 
                           hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <span className="text-white font-bold text-sm">Li</span>
              </a>
              <a
                href="https://www.behance.net/anilvasupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center 
                           hover:bg-primary transition-all duration-300 hover:scale-110"
              >
                <span className="text-white font-bold text-sm">Be</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
