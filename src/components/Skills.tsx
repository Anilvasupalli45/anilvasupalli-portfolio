
export const Skills = () => {
  const skills = [
    { name: "Adobe Photoshop", category: "Design" },
    { name: "Adobe Illustrator", category: "Design" },
    { name: "Adobe After Effects", category: "Video" },
    { name: "Adobe Premiere Pro", category: "Video" },
    { name: "Canva", category: "Design" },
    { name: "Anu Script Manager", category: "Tool" },
    { name: "Social Media Design", category: "Specialty" },
    { name: "Motion Graphics", category: "Video" },
    { name: "Pitch Deck Design", category: "Design" },
    { name: "Print Design", category: "Design" },
    { name: "Logo Design", category: "Branding" },
    { name: "Video Editing", category: "Video" }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Design": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "Video": "bg-primary/20 text-primary border-primary/30",
      "Tool": "bg-green-500/20 text-green-300 border-green-500/30",
      "Specialty": "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "Branding": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  return (
    <section id="skills" className="section-padding bg-dark-lighter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="text-white">My</span>{" "}
            <span className="text-primary">Skills</span>
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise across design and video editing tools to bring your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="card-hover bg-dark-card rounded-xl p-6 text-center border border-gray-800"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${getCategoryColor(skill.category)}`}>
                {skill.category}
              </div>
              <h3 className="font-body font-semibold text-white text-lg">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
