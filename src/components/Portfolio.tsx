import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Social Media Design",
    meta: "25+ Projects",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=900&h=700&fit=crop",
  },
  {
    title: "Branding & Identity",
    meta: "15+ Brands",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=900&h=700&fit=crop",
  },
  {
    title: "Video & Motion",
    meta: "30+ Videos",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&h=700&fit=crop",
  },
  {
    title: "Logo Design",
    meta: "40+ Logos",
    image: "/lovable-uploads/logo-design-preview.jpg",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="accent-pill mb-6">Featured Work</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold max-w-2xl">
              Selected <span className="text-gradient">projects</span>.
            </h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
            View all <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map((c, i) => (
            <Link
              key={c.title}
              to={`/projects?category=${encodeURIComponent(c.title)}`}
              className="group surface-card overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-1 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{c.meta}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="https://www.behance.net/anilvasupalli" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-full h-12 px-6 border-border hover:border-primary hover:text-primary bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              See full portfolio on Behance
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
