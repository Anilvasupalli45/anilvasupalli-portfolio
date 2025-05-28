
import { Mail, FileText, Phone } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
            <span className="text-white">Anil</span>{" "}
            <span className="text-primary">Vasupalli</span>
          </h1>
          
          <h2 className="font-body text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
            Graphic Designer & Video Editor
          </h2>
          
          <p className="font-body text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            I'm a creative professional with over 3 years of experience in graphic design and video editing. 
            I help brands stand out with powerful visual content — from social media creatives to short-form 
            videos and pitch decks. Currently with Furi Media Services. Open to freelance and remote work.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-400 font-body">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-gray-400 font-body">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-gray-400 font-body">Years Experience</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
            <a 
              href="#" 
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <a 
              href="mailto:anil@example.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              anil@example.com
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 hover:text-primary transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              +123 456 7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
