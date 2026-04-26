import { Play } from "lucide-react";

export const Showreel = () => {
  return (
    <section id="showreel" className="section-padding">
      <div className="container-narrow">
        <div className="flex flex-col items-start mb-12">
          <span className="accent-pill mb-6">Video & Motion</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold max-w-2xl">
            Showreel &amp; <span className="text-gradient">motion work</span>.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl">
            A glimpse of recent edits, reels and motion graphics — crafted for
            brands, creators and campaigns.
          </p>
        </div>

        <div className="surface-card overflow-hidden aspect-video relative group">
          {/* Placeholder for embed — replace src with YouTube embed when ready */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_60%)]" />
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1400&h=800&fit=crop"
            alt="Showreel placeholder"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
              aria-label="Play showreel"
            >
              <Play className="w-10 h-10 ml-1" fill="currentColor" />
            </button>
          </div>
          <div className="absolute bottom-6 left-6 text-sm text-muted-foreground">
            Showreel · 2024
          </div>
        </div>
      </div>
    </section>
  );
};
