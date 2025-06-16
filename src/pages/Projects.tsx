import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye } from "lucide-react";
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

  // Auto-scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const projectData = {
    "Social Media Design": [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        alt: "Instagram Campaign Series"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop",
        alt: "Facebook Ad Templates"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
        alt: "Story Templates Collection"
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
        alt: "Product Showcase Posts"
      },
      {
        id: 5,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        alt: "Event Promotion Graphics"
      },
      {
        id: 6,
        image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
        alt: "Brand Awareness Campaign"
      }
    ],
    "Branding & Identity": [
      {
        id: 7,
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
        alt: "Tech Startup Brand Identity"
      },
      {
        id: 8,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        alt: "Restaurant Brand Package"
      },
      {
        id: 9,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        alt: "Fashion Brand Identity"
      },
      {
        id: 10,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        alt: "Corporate Rebranding"
      },
      {
        id: 11,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
        alt: "Eco-Friendly Brand"
      },
      {
        id: 12,
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        alt: "Healthcare Brand System"
      }
    ],
    "Video & Motion": [
      {
        id: 13,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
        alt: "Product Launch Video"
      },
      {
        id: 14,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
        alt: "Corporate Explainer"
      },
      {
        id: 15,
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
        alt: "Social Media Video Ads"
      },
      {
        id: 16,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
        alt: "Motion Graphics Package"
      },
      {
        id: 17,
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
        alt: "Event Highlight Reel"
      },
      {
        id: 18,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        alt: "Educational Video Series"
      }
    ],
    "Logo Design": [
      {
        id: 19,
        image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&h=600&fit=crop",
        alt: "Minimalist Tech Logo"
      },
      {
        id: 20,
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&h=600&fit=crop",
        alt: "Restaurant Logo Collection"
      },
      {
        id: 21,
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
        alt: "Fitness Brand Logos"
      },
      {
        id: 22,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        alt: "Creative Agency Marks"
      },
      {
        id: 23,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        alt: "E-commerce Logo Suite"
      },
      {
        id: 24,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        alt: "Professional Service Logos"
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
    // Auto-scroll to top when switching categories
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#121212]">
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
              <span className="text-primary font-medium">Portfolio Gallery</span>
            </div>

            <h1 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8">
              <span className="text-white">Creative</span>{" "}
              <span className="text-gradient">Gallery</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore my creative work through visual storytelling
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
                  onClick={() => handleCategoryChange(category.name)}
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
          {/* Clean Image Gallery - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <div
                    className="group cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedImage(project)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover transition-transform duration-700 
                                   group-hover:scale-110 transform-gpu"
                      />
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-500"></div>
                      {/* Soft glow effect on hover */}
                      <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-500 rounded-2xl
                                      shadow-primary/20 group-hover:shadow-primary/40"></div>
                    </div>
                  </div>
                </DialogTrigger>

                {/* Lightbox Modal */}
                <DialogContent className="max-w-6xl bg-[#121212] border-gray-800 p-4">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Back to Categories */}
          <div className="text-center mt-16">
            <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-heading font-semibold text-2xl text-white mb-6">
                Explore More Categories
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {categories.filter(cat => cat.name !== activeCategory).map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    className="btn-secondary text-sm px-4 py-2"
                  >
                    {category.emoji} {category.name}
                  </button>
                ))}
              </div>
              <Button 
                onClick={scrollToTop}
                className="btn-primary mt-4"
              >
                Back to Top
              </Button>
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
