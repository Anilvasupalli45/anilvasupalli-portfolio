export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <span className="accent-pill mb-6">About</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
            A designer who cares about the <span className="text-gradient">details</span>.
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            I’m Anil — a graphic designer and video editor with 3+ years of
            experience helping brands look sharp and tell better stories.
          </p>
          <p>
            I specialise in <span className="text-foreground">brand identity, social
            media design, video editing and motion graphics</span>. I work with
            startups, agencies and creators who care about thoughtful craft and
            consistent visuals.
          </p>
          <p>
            Currently designing at Furi Media Services and open to freelance &amp;
            remote opportunities worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};
