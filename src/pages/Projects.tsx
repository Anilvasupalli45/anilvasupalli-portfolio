import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, ExternalLink } from "lucide-react";
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
        image: "/lovable-uploads/9892b099-ff84-4c4e-8c35-ae516c2c3972.png",
        alt: "UPVC windows and doors social media campaign with professional interior design layouts",
        link: undefined
      },
      {
        id: 2,
        image: "/lovable-uploads/e6e9df65-2b1a-4d8d-aa8a-495cde660e7e.png",
        alt: "Real estate social media designs for Sankar Nagar residential plots with creative visual storytelling",
        link: undefined
      },
      {
        id: 3,
        image: "/lovable-uploads/9c338136-019d-48ac-8414-f7bcd56fe99b.png",
        alt: "Startup and business social media posts with modern design elements and engaging visuals",
        link: undefined
      },
      {
        id: 4,
        image: "/lovable-uploads/2d9c45e0-b890-4336-ada3-47f51c454fd9.png",
        alt: "Healthcare and medical social media campaign designs with professional branding",
        link: undefined
      },
      {
        id: 5,
        image: "/lovable-uploads/8d88883c-637f-46eb-a19e-7319029658c9.png",
        alt: "Pest control service social media designs with bold red branding and clear messaging",
        link: undefined
      }
    ],
    "Branding & Identity": [
      {
        id: 7,
        image: "/lovable-uploads/a94d9fb4-9a35-43a4-80b7-87902b2c737b.png",
        alt: "GreetHello brand identity featuring modern logo design with green color scheme",
        link: undefined
      },
      {
        id: 8,
        image: "/lovable-uploads/c5316c3c-b944-4a90-be60-218470316d31.png",
        alt: "GreetHello brand application icons and mobile app interface design",
        link: undefined
      },
      {
        id: 9,
        image: "/lovable-uploads/d9b778ad-49e5-4124-9f67-8618bca31c70.png",
        alt: "GreetHello brand variations showing inverted and monochrome logo versions",
        link: undefined
      },
      {
        id: 10,
        image: "/lovable-uploads/c1374b52-b40d-4e84-a1e1-0092cc1d0a1a.png",
        alt: "GreetHello brand guidelines including color palette and typography specifications",
        link: undefined
      },
      {
        id: 11,
        image: "/lovable-uploads/948d841f-978a-4a7a-b3ff-cbafd13519ea.png",
        alt: "GreetHello business card mockup showcasing professional brand application",
        link: undefined
      },
      {
        id: 12,
        image: "/lovable-uploads/9c6c3f4e-e46e-416f-babe-bd0cd3b2e466.png",
        alt: "GreetHello presentation slide design with thank you message",
        link: undefined
      }
    ],
    "Video & Motion": [
      {
        id: 13,
        image: "/lovable-uploads/0a970095-a60b-4385-9343-03484fd1b9dd.png",
        alt: "Video portfolio showcase featuring diverse motion graphics and promotional content",
        link: "https://drive.google.com/drive/folders/1XMMJFv--DW0Kty5G4ELVOz83BTLzBKGC?usp=sharing"
      },
      {
        id: 14,
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
        alt: "Product Launch Video",
        link: undefined
      },
      {
        id: 15,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
        alt: "Corporate Explainer",
        link: undefined
      },
      {
        id: 16,
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
        alt: "Social Media Video Ads",
        link: undefined
      },
      {
        id: 17,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
        alt: "Motion Graphics Package",
        link: undefined
      },
      {
        id: 18,
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
        alt: "Event Highlight Reel",
        link: undefined
      },
      {
        id: 19,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        alt: "Educational Video Series",
        link: undefined
      }
    ],
    "Logo Design": [
      {
        id: 20,
        image: "/lovable-uploads/fafb378e-98c4-4915-a1b4-d2f2c9a76f70.png",
        alt: "Professional logo design collection featuring tech, transport, and business brands",
        link: undefined
      },
      {
        id: 21,
        image: "/lovable-uploads/2c7f3b94-26cf-448d-a144-316d53a10ea6.png",
        alt: "Creative logo portfolio showcasing diverse brand identities and design styles",
        link: undefined
      },
      {
        id: 22,
        image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
        alt: "Fitness Brand Logos",
        link: undefined
      },
      {
        id: 23,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
        alt: "Creative Agency Marks",
        link: undefined
      },
      {
        id: 24,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        alt: "E-commerce Logo Suite",
        link: undefined
      },
      {
        id: 25,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
        alt: "Professional Service Logos",
        link: undefined
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
              <div key={project.id} className="relative">
                {project.link ? (
                  // If project has a link, make it clickable to external link
                  <div
                    className="group cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
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
                      {/* External link icon */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-300">
                        <div className="bg-primary text-white p-2 rounded-full shadow-lg">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                      {/* Soft glow effect on hover */}
                      <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-500 rounded-2xl
                                      shadow-primary/20 group-hover:shadow-primary/40"></div>
                    </div>
                    {/* Click handler for external link */}
                    <div 
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => window.open(project.link, '_blank')}
                    />
                  </div>
                ) : (
                  // Regular modal behavior for projects without links
                  <Dialog>
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
                )}
              </div>
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
