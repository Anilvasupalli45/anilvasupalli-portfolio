
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Palette, Video, Star, Sparkles, ArrowRight } from "lucide-react";

export const Portfolio = () => {
  const portfolioCategories = [
    {
      title: "Social Media Design",
      description: "Eye-catching designs for social platforms that drive engagement and brand awareness with modern aesthetics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      projects: "25+ Projects"
    },
    {
      title: "Branding & Identity",
      description: "Complete brand identity systems that tell compelling stories and create lasting impressions across all touchpoints.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&h=300&fit=crop",
      icon: Star,
      color: "from-purple-500 to-indigo-500",
      projects: "15+ Brands"
    },
    {
      title: "Video & Motion",
      description: "Professional video editing and motion graphics that bring ideas to life with dynamic storytelling and seamless transitions.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      icon: Video,
      color: "from-red-500 to-pink-500",
      projects: "30+ Videos"
    },
    {
      title: "Logo Design",
      description: "Unique and memorable logo designs that capture brand essence and stand out in competitive markets.",
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=500&h=300&fit=crop",
      icon: Sparkles,
      color: "from-yellow-500 to-orange-500",
      projects: "40+ Logos"
    }
  ];

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-60 right-1/4 w-48 h-48 bg-orange-500/15 rounded-full blur-3xl floating-animation" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
            <Eye className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Creative Showcase</span>
          </div>

          <h2 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-white">My</span>{" "}
            <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Explore my work across different creative disciplines and see how I transform 
            <span className="text-primary font-semibold"> ideas into compelling visual stories</span> that resonate with audiences
          </p>
        </div>
        
        {/* Enhanced Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {portfolioCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div
                key={category.title}
                className="card-hover glass-morphism rounded-3xl overflow-hidden border border-gray-800 
                           group glow-effect transform-gpu animate-scale-in relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 
                               group-hover:scale-110 transform-gpu"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} 
                                  opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
                  
                  {/* Enhanced icon overlay */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-black/60 backdrop-blur-sm 
                                  rounded-2xl flex items-center justify-center opacity-0 
                                  group-hover:opacity-100 transition-all duration-500 
                                  transform translate-y-2 group-hover:translate-y-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Project count badge */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm 
                                  rounded-full px-4 py-2 opacity-0 group-hover:opacity-100 
                                  transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-white text-sm font-medium">{category.projects}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-heading font-semibold text-xl text-white mb-4 
                                 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="font-body text-gray-400 mb-6 leading-relaxed text-sm">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-primary 
                                           transition-colors duration-300 transform 
                                           group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Behance CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-morphism rounded-3xl p-16 max-w-5xl mx-auto glow-effect relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 
                              rounded-full px-6 py-3 mb-8">
                <Star className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-primary font-medium">Complete Portfolio</span>
              </div>
              
              <h3 className="font-title font-bold text-4xl lg:text-5xl text-white mb-6">
                Ready to see more amazing work?
              </h3>
              <p className="text-gray-400 text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Dive into my complete portfolio on Behance with detailed case studies, 
                project breakdowns, and behind-the-scenes insights
              </p>
              
              <a
                href="https://www.behance.net/anilvasupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="btn-primary text-xl lg:text-2xl px-16 py-8 group animate-glow-pulse 
                                   rounded-2xl shadow-2xl shadow-primary/40">
                  <ExternalLink className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Full Portfolio on Behance
                  <Star className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </a>
              
              <div className="mt-8 flex items-center justify-center gap-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>100+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Case Studies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Process Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
