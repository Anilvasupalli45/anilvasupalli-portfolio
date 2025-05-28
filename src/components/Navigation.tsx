
import { useState, useEffect } from "react";
import { Mail, FileText } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <div className="font-heading font-bold text-xl text-white">
            Anil Vasupalli
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:anil@example.com"
              className="p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-primary/20 transition-colors duration-300"
            >
              <FileText className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
