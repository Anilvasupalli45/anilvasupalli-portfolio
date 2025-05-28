
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Eye, Palette, Video, Star } from "lucide-react";

export const Portfolio = () => {
  const portfolioCategories = [
    {
      title: "Social Media Design",
      description: "Eye-catching designs for Instagram, Facebook, and LinkedIn that drive engagement",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      icon: Palette,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Print Media Designs",
      description: "Professional brochures, flyers, and marketing materials that make an impact",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
      icon: Palette,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Branding",
      description: "Complete brand identity and visual communication systems",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&h=300&fit=crop",
      icon: Star,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Logo Designs",
      description: "Memorable logos that represent your brand perfectly and stand out",
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=500&h=300&fit=crop",
      icon: Star,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Video Edits",
      description: "Professional video editing for all your content needs and platforms",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      icon: Video,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Short Video Edits",
      description: "Engaging short-form content for social media platforms that converts",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
      icon: Play,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Podcast Edits",
      description: "Clean, professional podcast editing and post-production services",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=300&fit=crop",
      icon: Video,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic animations and motion graphics for various media platforms",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=500&h=300&fit=crop",
      icon: Play,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
            <Eye className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Creative Showcase</span>
          </div>

          <h2 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-white">My</span>{" "}
            <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my work across different creative disciplines and see how I bring 
            <span className="text-primary font-semibold"> ideas to life</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {portfolioCategories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <div
                key={category.title}
                className="card-hover glass-morphism rounded-2xl overflow-hidden border border-gray-800 
                           group glow-effect transform-gpu animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 
                               group-hover:scale-110 transform-gpu"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} 
                                  opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm 
                                  rounded-full flex items-center justify-center opacity-0 
                                  group-hover:opacity-100 transition-all duration-500 
                                  transform translate-y-2 group-hover:translate-y-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-heading font-semibold text-xl lg:text-2xl text-white mb-4 
                                 group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="font-body text-gray-400 mb-6 text-sm lg:text-base leading-relaxed">
                    {category.description}
                  </p>
                  
                  <Button className="w-full btn-primary group/btn text-sm lg:text-base">
                    <Eye className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Projects
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced CTA section */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-morphism rounded-3xl p-12 max-w-4xl mx-auto glow-effect">
            <h3 className="font-heading font-bold text-3xl lg:text-4xl text-white mb-6">
              Want to see more of my work?
            </h3>
            <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
              Dive into my complete portfolio on Behance and discover the full range of my creative projects
            </p>
            
            <a
              href="https://www.behance.net/anilvasupalli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="btn-secondary text-lg lg:text-xl px-12 py-6 group animate-glow-pulse">
                <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                View Full Portfolio on Behance
                <Star className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
