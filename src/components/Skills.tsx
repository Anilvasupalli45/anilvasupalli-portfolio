
import { Palette, Monitor, Share2, Star, Image, Camera, Type, Badge, Film, Video, Headphones } from "lucide-react";

export const Skills = () => {
  const skills = [
    { name: "Print Design", icon: Palette },
    { name: "Digital Design", icon: Monitor },
    { name: "Social Media Design", icon: Share2 },
    { name: "Logo Design", icon: Star },
    { name: "Banners Design", icon: Image },
    { name: "Photo Retouching", icon: Camera },
    { name: "Typography", icon: Type },
    { name: "Branding", icon: Badge },
    { name: "Color Grading", icon: Palette },
    { name: "Motion Graphics", icon: Film },
    { name: "Short Videos", icon: Video },
    { name: "Podcast Editing", icon: Headphones }
  ];

  return (
    <section id="skills" className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
            <Palette className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
            <span className="text-white">My</span>{" "}
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Expertise across design and video editing tools to bring your vision to life with 
            <span className="text-primary font-semibold"> professional excellence</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <div
                key={skill.name}
                className={`card-hover glass-morphism rounded-2xl p-8 text-center border 
                           border-gray-800 glow-effect hover:shadow-primary/30 transform-gpu
                           animate-scale-in hover:border-primary/50 group`}
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-primary/20 
                                  flex items-center justify-center mb-4 group-hover:scale-110 
                                  transition-transform duration-500`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 mx-auto rounded-2xl 
                                  bg-primary/20 blur-xl opacity-50
                                  group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
                
                <h3 className="font-body font-semibold text-white text-lg lg:text-xl mb-4 
                               group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
                
                <div className="h-1 w-0 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full 
                                group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-400 text-lg mb-6">Ready to bring your creative vision to life?</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary group"
          >
            <Star className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Let's Create Together
          </button>
        </div>
      </div>
    </section>
  );
};
