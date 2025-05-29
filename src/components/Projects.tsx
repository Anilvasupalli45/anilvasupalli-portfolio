import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Filter, ArrowUp, Palette, Video, Star, Settings, Sparkles, Play } from "lucide-react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { name: "All", icon: Filter },
    { name: "Social Media", icon: Palette },
    { name: "Video Edits", icon: Video },
    { name: "Branding", icon: Star },
    { name: "Print Design", icon: Palette },
    { name: "Motion Graphics", icon: Play },
    { name: "Logo Design", icon: Sparkles }
  ];

  const projects = [
    {
      id: 1,
      title: "Brand Identity for Tech Startup",
      description: "Complete branding package including logo, color palette, and brand guidelines.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&h=300&fit=crop",
      category: "Branding",
      tools: ["Illustrator", "Photoshop"],
      link: "#"
    },
    {
      id: 2,
      title: "Social Media Campaign Design",
      description: "Instagram and Facebook post designs for a lifestyle brand's product launch.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "Social Media",
      tools: ["Photoshop", "Canva"],
      link: "#"
    },
    {
      id: 3,
      title: "Product Launch Video",
      description: "Dynamic video editing with motion graphics for a tech product announcement.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop",
      category: "Video Edits",
      tools: ["Premiere Pro", "After Effects"],
      link: "#"
    },
    {
      id: 4,
      title: "Corporate Brochure Design",
      description: "Professional tri-fold brochure for a consulting firm's service offerings.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
      category: "Print Design",
      tools: ["InDesign", "Illustrator"],
      link: "#"
    },
    {
      id: 5,
      title: "Animated Logo Reveal",
      description: "Eye-catching logo animation for brand presentations and digital media.",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=500&h=300&fit=crop",
      category: "Motion Graphics",
      tools: ["After Effects", "Illustrator"],
      link: "#"
    },
    {
      id: 6,
      title: "Restaurant Menu Design",
      description: "Elegant menu layout with custom typography and food photography integration.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
      category: "Print Design",
      tools: ["InDesign", "Photoshop"],
      link: "#"
    },
    {
      id: 7,
      title: "E-commerce Social Posts",
      description: "Product showcase designs for online store's social media marketing.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "Social Media",
      tools: ["Photoshop", "Canva"],
      link: "#"
    },
    {
      id: 8,
      title: "Minimalist Logo Collection",
      description: "Clean, modern logo designs for various small business clients.",
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=500&h=300&fit=crop",
      category: "Logo Design",
      tools: ["Illustrator", "Photoshop"],
      link: "#"
    },
    {
      id: 9,
      title: "Podcast Intro Animation",
      description: "Engaging animated intro sequence for a weekly business podcast.",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=300&fit=crop",
      category: "Motion Graphics",
      tools: ["After Effects", "Premiere Pro"],
      link: "#"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
            <Eye className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Featured Work</span>
          </div>

          <h2 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-white">My</span>{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my latest creative work across different design disciplines
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeFilter === category.name;
            
            return (
              <button
                key={category.name}
                onClick={() => setActiveFilter(category.name)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-dark-card/60 border-gray-800 text-gray-400 hover:border-primary/50 hover:text-primary backdrop-blur-sm'
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="font-medium">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="card-hover glass-morphism rounded-2xl overflow-hidden border border-gray-800 
                         group glow-effect transform-gpu animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110 transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 
                                group-hover:opacity-100 transition-all duration-500">
                  <Link to={`/project/${project.id}`}>
                    <Button className="btn-primary group/btn transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Eye className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      View Project
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-white mb-3 
                               group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-body text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tools/Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full 
                                 text-xs text-primary font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full 
                                   text-xs text-gray-300 font-medium">
                    {project.category}
                  </span>
                  <div className="w-8 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Behance CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="glass-morphism rounded-3xl p-12 max-w-4xl mx-auto glow-effect">
            <h3 className="font-title font-bold text-3xl lg:text-4xl text-white mb-6">
              Want to see more of my work?
            </h3>
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
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
