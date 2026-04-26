import { ArrowRight, Mail, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding overflow-hidden"
    >
      {/* Soft purple ambience */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute top-24 -left-24 w-[28rem] h-[28rem] bg-primary/20 rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute bottom-10 -right-24 w-[26rem] h-[26rem] bg-primary-glow/15 rounded-full blur-[140px] animate-float-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-narrow w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7 animate-fade-up">
          <span className="accent-pill mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for freelance & full-time
          </span>

          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            Hi, I’m <span className="text-gradient">Anil Vasupalli</span>
          </h1>

          <h2 className="font-heading text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Graphic Designer &amp; Video Editor
          </h2>

          <p className="text-base md:text-lg text-muted-foreground/90 max-w-xl leading-relaxed mb-10">
            I create impactful branding, social media creatives, and motion
            content. 3+ years turning ideas into clean, story-driven design.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollTo("portfolio")}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 h-12 font-medium"
            >
              View Work
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollTo("contact")}
              variant="outline"
              className="rounded-full px-7 h-12 font-medium border-border hover:border-primary hover:text-primary bg-transparent"
            >
              <Mail className="w-4 h-4 mr-1" />
              Contact
            </Button>
          </div>

          {/* Tiny stat row */}
          <div className="mt-14 flex flex-wrap gap-10 text-sm">
            {[
              { n: "3+", l: "Years experience" },
              { n: "25+", l: "Projects delivered" },
              { n: "20+", l: "Happy clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-heading text-2xl font-bold text-foreground">{s.n}</div>
                <div className="text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: showreel preview card */}
        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <button
            onClick={() => scrollTo("showreel")}
            className="group relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-card hover-lift"
          >
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=1000&fit=crop"
              alt="Showreel preview"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-[var(--shadow-elegant)] group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Watch Showreel
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
