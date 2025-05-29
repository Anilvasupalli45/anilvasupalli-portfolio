
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // Sample project data - in a real app this would come from an API or context
  const projects = [
    {
      id: "1",
      title: "Brand Identity for Tech Startup",
      description: "Complete branding package including logo, color palette, and brand guidelines for a cutting-edge technology startup. This project involved extensive research into the target market and competitive landscape to create a unique visual identity that would stand out in the crowded tech space.",
      fullDescription: "This comprehensive branding project involved creating a complete visual identity system for TechFlow, an innovative SaaS startup. The challenge was to create a modern, trustworthy brand that would appeal to both technical decision-makers and business executives. The solution included a minimalist logo design, a carefully curated color palette, custom typography, and extensive brand guidelines covering everything from business cards to digital applications.",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
      category: "Branding",
      tools: ["Illustrator", "Photoshop", "Figma"],
      client: "TechFlow Solutions",
      date: "March 2024",
      duration: "6 weeks",
      gallery: [
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"
      ]
    },
    {
      id: "2",
      title: "Social Media Campaign Design",
      description: "Instagram and Facebook post designs for a lifestyle brand's product launch campaign.",
      fullDescription: "Created a cohesive social media campaign for StyleLux's summer collection launch. The project included designing over 50 unique posts, stories templates, and promotional graphics that maintained brand consistency while driving engagement and sales.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      category: "Social Media",
      tools: ["Photoshop", "Canva", "After Effects"],
      client: "StyleLux Brand",
      date: "April 2024",
      duration: "3 weeks",
      gallery: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop"
      ]
    }
    // Add more projects as needed...
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/">
            <Button className="btn-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium">{project.category}</span>
              </div>
              
              <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                {project.title}
              </h1>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {project.fullDescription}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">Client</span>
                  </div>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Date</span>
                  </div>
                  <p className="text-white font-medium">{project.date}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full 
                               text-sm text-primary font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <Button className="btn-primary group">
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                View Live Project
              </Button>
            </div>

            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-12 text-center">
            Project Gallery
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 
                             group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 
                                transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-morphism rounded-3xl p-12 glow-effect">
            <h3 className="font-playfair font-bold text-3xl lg:text-4xl text-white mb-6">
              Interested in working together?
            </h3>
            <p className="text-gray-400 text-lg mb-8">
              Let's discuss your next project and bring your vision to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://www.behance.net/anilvasupalli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-primary text-lg px-8 py-4 group">
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  View More Projects
                </Button>
              </a>
              
              <Link to="/">
                <Button className="btn-secondary px-8 py-4">
                  <ArrowLeft className="w-5 h-5" />
                  Back to Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
