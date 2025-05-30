
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Filter, Palette, Video, Star, Settings, Sparkles, Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { name: "All", icon: Filter },
    { name: "Social Media", icon: Palette },
    { name: "Video Edits", icon: Video },
    { name: "Branding", icon: Star },
    { name: "Print Design", icon: Palette },
    { name: "Motion Graphics", icon: Play },
    { name: "Logo Design", icon: Sparkles },
    { name: "Podcast", icon: Settings },
    { name: "Short Videos", icon: Video }
  ];

  const projects = [
    {
      id: 1,
      title: "Brand Identity for Tech Startup",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&h=300&fit=crop",
      category: "Branding",
      tools: ["Illustrator", "Photoshop"]
    },
    {
      id: 2,
      title: "Social Media Campaign Design",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "Social Media",
      tools: ["Photoshop", "Canva"]
    },
    {
      id: 3,
      title: "Product Launch Video",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      category: "Video Edits",
      tools: ["Premiere Pro", "After Effects"]
    },
    {
      id: 4,
      title: "Corporate Brochure Design",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
      category: "Print Design",
      tools: ["InDesign", "Illustrator"]
    },
    {
      id: 5,
      title: "Animated Logo Reveal",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=500&h=300&fit=crop",
      category: "Motion Graphics",
      tools: ["After Effects", "Illustrator"]
    },
    {
      id: 6,
      title: "Restaurant Menu Design",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
      category: "Print Design",
      tools: ["InDesign", "Photoshop"]
    },
    {
      id: 7,
      title: "E-commerce Social Posts",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "Social Media",
      tools: ["Photoshop", "Canva"]
    },
    {
      id: 8,
      title: "Minimalist Logo Collection",
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=500&h=300&fit=crop",
      category: "Logo Design",
      tools: ["Illustrator", "Photoshop"]
    },
    {
      id: 9,
      title: "Podcast Intro Animation",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=300&fit=crop",
      category: "Podcast",
      tools: ["After Effects", "Premiere Pro"]
    },
    {
      id: 10,
      title: "Instagram Reels Package",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop",
      category: "Short Videos",
      tools: ["Premiere Pro", "After Effects"]
    },
    {
      id: 11,
      title: "Corporate Identity System",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&h=300&fit=crop",
      category: "Branding",
      tools: ["Illustrator", "InDesign"]
    },
    {
      id: 12,
      title: "TikTok Content Series",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      category: "Short Videos",
      tools: ["Premiere Pro", "Photoshop"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation Header */}
      <div className="section-padding pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300 mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section className="section-padding pt-0 pb-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
              <Eye className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Creative Gallery</span>
            </div>

            <h1 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8">
              <span className="text-white">My</span>{" "}
              <span className="text-gradient">Projects</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore a selection of my creative work categorized by format and medium
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeFilter === category.name;
              
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveFilter(category.name)}
                  className={`group flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 ${
                    isActive
                      ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105'
                      : 'bg-dark-card/60 border-gray-800 text-gray-400 hover:border-primary/50 hover:text-primary hover:scale-105 backdrop-blur-sm'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="font-medium text-sm">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding pt-0 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="card-hover glass-morphism rounded-xl overflow-hidden border border-gray-800 
                           group glow-effect transform-gpu animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - Creative project by Anil Vasupalli`}
                    className="w-full h-full object-cover transition-transform duration-700 
                               group-hover:scale-110 transform-gpu"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="font-heading font-semibold text-white text-sm mb-1">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.slice(0, 2).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 bg-primary/20 border border-primary/30 rounded-full 
                                     text-xs text-primary font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View More Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 
                                  group-hover:opacity-100 transition-all duration-500">
                    <Link to={`/project/${project.id}`}>
                      <Button className="btn-primary group/btn transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <Eye className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        View More
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-4">
                No projects found
              </h3>
              <p className="text-gray-400 mb-8">
                Try selecting a different category to see more projects.
              </p>
              <Button onClick={() => setActiveFilter("All")} className="btn-primary">
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Behance CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="glass-morphism rounded-3xl p-12 glow-effect">
            <h2 className="font-title font-bold text-3xl lg:text-4xl text-white mb-6">
              Want to see more of my work?
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
              Explore my complete portfolio on Behance with detailed case studies and project breakdowns
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://www.behance.net/anilvasupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="btn-primary text-lg lg:text-xl px-12 py-6 group animate-glow-pulse">
                  <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  View Full Portfolio on Behance
                  <Star className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </a>
              
              <button
                onClick={scrollToTop}
                className="btn-secondary group px-8 py-4"
                aria-label="Back to top"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 rotate-90" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
