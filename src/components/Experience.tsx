import { Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Furi Media Services",
      role: "Graphic Designer / Video Editor",
      duration: "Aug 2023 – Present",
      location: "Visakhapatnam",
      points: [
        "Lead visual concepts for branding, marketing and communications.",
        "Design print & digital assets — logos, ads, social media graphics.",
        "Edit and grade videos, add motion graphics, sound and effects.",
      ],
      isCurrent: true,
    },
    {
      company: "Digipe Fintech Pvt Ltd",
      role: "Graphic Designer / Video Editor",
      duration: "May 2022 – Jul 2023",
      location: "Visakhapatnam",
      points: [
        "Designed brochures, posters, banners and full social media systems.",
        "Produced YouTube and Instagram short-form videos with motion.",
        "Collaborated with stakeholders to translate briefs into visuals.",
      ],
      isCurrent: false,
    },
    {
      company: "Freelancer",
      role: "Graphic Designer",
      duration: "Jun 2021 – May 2022",
      location: "Visakhapatnam",
      points: [
        "Conceptualised designs for print and digital across industries.",
        "Created brand assets — logos, brochures and advertisements.",
        "Designed political banners, name boards and paper-cut work.",
      ],
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="flex flex-col items-start mb-14">
          <span className="accent-pill mb-6">Experience</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold max-w-2xl">
            A timeline of <span className="text-gradient">creative work</span>.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="relative pl-12 md:pl-16 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Dot */}
                <span className="absolute left-2.5 md:left-4 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                <div className="surface-card p-7 hover-lift">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading font-semibold text-xl">{exp.company}</h3>
                    {exp.isCurrent && (
                      <span className="text-xs uppercase tracking-wider text-primary border border-primary/40 rounded-full px-2.5 py-0.5">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-medium mb-4">{exp.role}</p>
                  <div className="flex flex-wrap gap-5 text-sm text-muted-foreground mb-5">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.points.map((p) => (
                      <li key={p} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
