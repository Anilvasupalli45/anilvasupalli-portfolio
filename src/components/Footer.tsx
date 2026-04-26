import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <span className="accent-pill mb-6">Contact</span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
                Let’s work <span className="text-gradient">together</span>.
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                Have a project in mind, or just want to say hi? I’d love to hear
                about your idea and help bring it to life.
              </p>
              <a
                href="mailto:anilvasupalli@gmail.com"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 h-12 font-medium transition-all"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <a
                href="mailto:anilvasupalli@gmail.com"
                className="surface-card p-5 flex items-center gap-4 hover-lift block"
              >
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-medium">anilvasupalli@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:+919550502688"
                className="surface-card p-5 flex items-center gap-4 hover-lift block"
              >
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <div className="font-medium">+91 95505 02688</div>
                </div>
              </a>
              <div className="surface-card p-5 flex items-center gap-4">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="font-medium">Visakhapatnam · Remote worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-narrow px-6 md:px-10 lg:px-16 xl:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {year} Anil Vasupalli. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/anilvasupalli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/anilvasupalli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
