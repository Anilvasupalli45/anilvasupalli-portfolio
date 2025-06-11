
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Eye, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Projects = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'Social Media Design');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { name: "Social Media Design", emoji: "🎨" },
    { name: "Branding & Identity", emoji: "🧠" },
    { name: "Video & Motion", emoji: "🎬" },
    { name: "Logo Design", emoji: "🔤" }
  ];

  const projectData = {
    "Social Media Design": [
      {
        id: 1,
        title: "Instagram Campaign Series",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        description: "Modern social media designs for lifestyle brand"
      },
      {
        id: 2,
        title: "Facebook Ad Templates",
        image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop",
        description: "Eye-catching promotional graphics"
      },
      {
        id: 3,
        title: "Story Templates Collection",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
        description: "Interactive Instagram story designs"
      },
      {
        id: 4,
        title: "Product Showcase Posts",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        description: "E-commerce social media graphics"
      },
      {
        id: 5,
        title: "Event Promotion Graphics",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
        description: "Dynamic event marketing materials"
      },
      {
        id: 6,
        title: "Brand Awareness Campaign",
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
        description: "Cohesive brand storytelling visuals"
      }
    ],
    "Branding & Identity": [
      {
        id: 7,
        title: "Tech Startup Brand Identity",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
        description: "Complete brand system for SaaS company"
      },
      {
        id: 8,
        title: "Restaurant Brand Package",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        description: "Menu design and brand guidelines"
      },
      {
        id: 9,
        title: "Fashion Brand Identity",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
        description: "Luxury fashion brand development"
      },
      {
        id: 10,
        title: "Corporate Rebranding",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        description: "Modern corporate identity refresh"
      },
      {
        id: 11,
        title: "Eco-Friendly Brand",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
        description: "Sustainable brand identity design"
      },
      {
        id: 12,
        title: "Healthcare Brand System",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
        description: "Medical practice branding package"
      }
    ],
    "Video & Motion": [
      {
        id: 13,
        title: "Product Launch Video",
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
        description: "Dynamic product reveal animation"
      },
      {
        id: 14,
        title: "Corporate Explainer",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
        description: "Animated business process video"
      },
      {
        id: 15,
        title: "Social Media Video Ads",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
        description: "Short-form promotional content"
      },
      {
        id: 16,
        title: "Motion Graphics Package",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
        description: "Animated logo and transitions"
      },
      {
        id: 17,
        title: "Event Highlight Reel",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
        description: "Professional event documentation"
      },
      {
        id: 18,
        title: "Educational Video Series",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
        description: "Engaging tutorial animations"
      }
    ],
    "Logo Design": [
      {
        id: 19,
        title: "Minimalist Tech Logo",
        image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=600&h=400&fit=crop",
        description: "Clean geometric technology symbol"
      },
      {
        id: 20,
        title: "Restaurant Logo Collection",
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
        description: "Food & beverage brand marks"
      },
      {
        id: 21,
        title: "Fitness Brand Logos",
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
        description: "Dynamic health & wellness designs"
      },
      {
        id: 22,
        title: "Creative Agency Marks",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
        description: "Artistic and innovative symbols"
      },
      {
        id: 23,
        title: "E-commerce Logo Suite",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
        description: "Online retail brand identities"
      },
      {
        id: 24,
        title: "Professional Service Logos",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        description: "Corporate and consulting marks"
      }
    ]
  };

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.some(cat => cat.name === category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const currentProjects = projectData[activeCategory as keyof typeof projectData] || [];

  const scrollToGallery = () => {
    const gallery = document.getElementById('gallery-section');
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      <Navigation />
      
      {/* Header Section */}
      <section className="section-padding pt-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-40 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
              <Eye className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Featured Projects</span>
            </div>

            <h1 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8">
              <span className="text-white">My</span>{" "}
              <span className="text-gradient">Creative Work</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore detailed galleries of my work across different creative disciplines
            </p>

            <div className="mt-12">
              <Link to="/#portfolio">
                <Button className="btn-secondary group">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                  Back to Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {categories.map((category) => {
              const isActive = activeCategory === category.name;
              
              return (
                <button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    scrollToGallery();
                  }}
                  className={`group flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-300 ${
                    isActive
                      ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105'
                      : 'bg-dark-card/60 border-gray-800 text-gray-400 hover:border-primary/50 hover:text-primary backdrop-blur-sm hover:scale-105'
                  }`}
                >
                  <span className="text-xl">{category.emoji}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery-section" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-semibold text-3xl lg:text-4xl text-white mb-4">
              {activeCategory}
            </h2>
            <p className="text-gray-400 text-lg">
              {currentProjects.length} projects showcasing my expertise
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <article
                    className="card-hover glass-morphism rounded-2xl overflow-hidden border border-gray-800 
                               group glow-effect transform-gpu cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedImage(project)}
                  >
                    {/* Project Image */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 
                                   group-hover:scale-110 transform-gpu"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 
                                      group-hover:opacity-100 transition-all duration-500">
                        <Button className="btn-primary group/btn transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <Eye className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                          View Full Size
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="font-heading font-semibold text-xl text-white mb-3 
                                     group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="font-body text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </article>
                </DialogTrigger>

                {/* Lightbox Modal */}
                <DialogContent className="max-w-4xl bg-dark-card border-gray-800 p-0">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="p-6">
                      <h3 className="font-heading font-semibold text-2xl text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Back to Categories */}
          <div className="text-center mt-16">
            <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-heading font-semibold text-2xl text-white mb-4">
                Explore More Categories
              </h3>
              <p className="text-gray-400 mb-6">
                Discover my work across different creative disciplines
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.filter(cat => cat.name !== activeCategory).map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setActiveCategory(category.name);
                      scrollToGallery();
                    }}
                    className="btn-secondary text-sm px-4 py-2"
                  >
                    {category.emoji} {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Projects;
