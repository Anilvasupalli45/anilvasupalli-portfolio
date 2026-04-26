import { Palette, Share2, Film, Printer } from "lucide-react";

const items = [
  {
    icon: Palette,
    title: "Brand Identity Design",
    desc: "Logos, visual systems and guidelines that give brands a clear voice.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    desc: "Scroll-stopping creatives crafted for engagement and consistency.",
  },
  {
    icon: Film,
    title: "Video Editing & Motion Graphics",
    desc: "Edits, reels and motion that turn raw footage into stories.",
  },
  {
    icon: Printer,
    title: "Print & Digital Design",
    desc: "Brochures, posters, decks and ads — pixel-perfect for any medium.",
  },
];

export const WhatIDo = () => {
  return (
    <section id="what-i-do" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="flex flex-col items-start mb-14">
          <span className="accent-pill mb-6">What I Do</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold max-w-2xl">
            Services tailored to make brands <span className="text-gradient">stand out</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="surface-card p-8 hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
