
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Anil Vasupalli
            </h3>
            <p className="font-body text-gray-400 mb-6">
              Creative professional specializing in graphic design and video editing.
              Let's bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/anilvasupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <span className="text-white font-bold">Li</span>
              </a>
              <a
                href="https://www.behance.net/anilvasupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <span className="text-white font-bold">Be</span>
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="font-body text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="font-body text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="font-body text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="font-body text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:anil@example.com"
                className="flex items-center gap-3 font-body text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                anil@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 font-body text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                +123 456 7890
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Stay Updated
            </h4>
            <p className="font-body text-gray-400 text-sm mb-4">
              Subscribe to get updates on new projects and creative insights.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-primary"
              />
              <Button className="w-full btn-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="font-body text-gray-500">
            © 2024 Anil Vasupalli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
