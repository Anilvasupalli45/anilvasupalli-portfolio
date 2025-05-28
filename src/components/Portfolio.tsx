
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const portfolioCategories = [
    {
      title: "Social Media Design",
      description: "Eye-catching designs for Instagram, Facebook, and LinkedIn",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop"
    },
    {
      title: "Print Media Designs",
      description: "Professional brochures, flyers, and marketing materials",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop"
    },
    {
      title: "Branding",
      description: "Complete brand identity and visual communication",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&h=300&fit=crop"
    },
    {
      title: "Logo Designs",
      description: "Memorable logos that represent your brand perfectly",
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=500&h=300&fit=crop"
    },
    {
      title: "Video Edits",
      description: "Professional video editing for all your content needs",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&h=300&fit=crop"
    },
    {
      title: "Short Video Edits",
      description: "Engaging short-form content for social media platforms",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop"
    },
    {
      title: "Podcast Edits",
      description: "Clean, professional podcast editing and post-production",
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&h=300&fit=crop"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic animations and motion graphics for various media",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="text-white">My</span>{" "}
            <span className="text-primary">Portfolio</span>
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my work across different creative disciplines
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {portfolioCategories.map((category, index) => (
            <div
              key={category.title}
              className="card-hover bg-dark-card rounded-xl overflow-hidden border border-gray-800"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-white mb-3">
                  {category.title}
                </h3>
                <p className="font-body text-gray-400 mb-4 text-sm">
                  {category.description}
                </p>
                <Button className="w-full btn-primary">
                  View Projects
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href="https://www.behance.net/anilvasupalli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="btn-secondary text-lg px-8 py-4 glow-on-hover">
              View Full Portfolio on Behance
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
