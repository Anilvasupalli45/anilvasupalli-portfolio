
import { Wrench, Palette } from "lucide-react";

export const Tools = () => {
  const tools = [
    { 
      name: "Photoshop", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
    },
    { 
      name: "Illustrator", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
    },
    { 
      name: "Premiere Pro", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg"
    },
    { 
      name: "After Effects", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
    },
    { 
      name: "Canva", 
      logo: "https://i.ibb.co/mnXYKpJ/canva-icon.png"
    }
  ];

  return (
    <section id="tools" className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-3 mb-8">
            <Wrench className="w-5 h-5 text-orange-500" />
            <span className="text-orange-500 font-medium">Professional Arsenal</span>
          </div>
          
          <h2 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-white">Tools I</span>{" "}
            <span className="text-gradient">Use</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-8"></div>
          <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Industry-standard software and creative tools that help me deliver 
            <span className="text-orange-500 font-semibold"> exceptional results</span>
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="card-hover glass-morphism rounded-2xl p-8 text-center border 
                         border-gray-800 glow-effect hover:shadow-orange-500/30 transform-gpu
                         animate-scale-in hover:border-orange-500/50 group min-w-[200px]"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 
                                flex items-center justify-center mb-4 group-hover:scale-110 
                                transition-transform duration-500 overflow-hidden">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto rounded-2xl 
                                bg-orange-500/20 blur-xl opacity-50
                                group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <h3 className="font-body font-semibold text-white text-lg lg:text-xl mb-2 
                             group-hover:text-orange-500 transition-colors duration-300">
                {tool.name}
              </h3>
              
              <div className="h-1 w-0 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full 
                              group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
