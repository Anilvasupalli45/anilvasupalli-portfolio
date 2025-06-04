import { Mail, Phone, MapPin, Send, Heart, ExternalLink } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const currentYear = new Date().getFullYear();
  return <footer id="contact" className="bg-dark border-t border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 relative z-10">
        {/* Main contact section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-6">
            <Send className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Get In Touch</span>
          </div>

          <h2 className="font-title font-bold text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="text-white">Let's</span>{" "}
            <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="font-body text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Ready to bring your creative vision to life? Let's discuss your project and create something 
            <span className="text-primary font-semibold"> extraordinary together</span>
          </p>

          {/* Quick contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <a href="mailto:anilvasupalli@gmail.com" className="glass-morphism rounded-2xl p-6 group hover:scale-105 transition-all duration-500 
                         glow-effect hover:shadow-primary/30">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Email Me</h3>
              <p className="text-gray-400 text-sm">anilvasupalli@gmail.com</p>
            </a>
            
            <a href="tel:+919550502688" className="glass-morphism rounded-2xl p-6 group hover:scale-105 transition-all duration-500 
                         glow-effect hover:shadow-green-500/30">
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Call Me</h3>
              <p className="text-gray-400 text-sm">+91 9550502688</p>
            </a>
            
            <div className="glass-morphism rounded-2xl p-6 group hover:scale-105 transition-all duration-500 
                            glow-effect hover:shadow-blue-500/30">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Remote & Freelance</p>
            </div>
          </div>

          {/* Start Your Project Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 
                       text-white px-8 py-4 rounded-full font-semibold text-lg
                       hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30
                       hover:shadow-primary/50 group"
          >
            <Send className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Start Your Project
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1 animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            <h3 className="font-title font-bold text-2xl text-white mb-4 text-gradient">
              Anil Vasupalli
            </h3>
            <p className="font-body text-gray-400 mb-6 leading-relaxed">
              Creative professional specializing in graphic design and video editing.
              Let's bring your vision to life with innovative and impactful designs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/anilvasupalli" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center 
                           hover:bg-blue-600 transition-all duration-500 hover:scale-110 
                           hover:shadow-lg hover:shadow-blue-600/30 group">
                <span className="text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">Li</span>
              </a>
              <a href="https://www.behance.net/anilvasupalli" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center 
                           hover:bg-primary transition-all duration-500 hover:scale-110 
                           hover:shadow-lg hover:shadow-primary/30 group">
                <span className="text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">Be</span>
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Home', 'Skills', 'Portfolio', 'Testimonials'].map(item => <li key={item}>
                  <button onClick={() => scrollToSection(item.toLowerCase())} className="font-body text-gray-400 hover:text-primary transition-all duration-300 
                               text-left group flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </button>
                </li>)}
            </ul>
          </div>
          
          {/* Services */}
          <div className="animate-slide-up" style={{
          animationDelay: '0.3s'
        }}>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {['Graphic Design', 'Video Editing', 'Social Media Design', 'Branding', 'Motion Graphics'].map(service => <li key={service}>
                  <div className="font-body text-gray-400 group flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary/50 rounded-full group-hover:bg-primary 
                                     transition-colors duration-300"></span>
                    {service}
                  </div>
                </li>)}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row 
                        justify-between items-center animate-slide-up" style={{
        animationDelay: '0.4s'
      }}>
          <p className="font-body text-gray-500 mb-4 md:mb-0 flex items-center gap-2 text-sm">
            © {currentYear} Anil Vasupalli. Made with 
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <button className="hover:text-primary transition-colors duration-300">Privacy Policy</button>
            <button className="hover:text-primary transition-colors duration-300">Terms of Service</button>
            <a href="https://www.behance.net/anilvasupalli" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 flex items-center gap-1">
              Portfolio <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
