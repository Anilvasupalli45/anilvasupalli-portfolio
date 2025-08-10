import { Briefcase, MapPin, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Furi Media Services",
      role: "Graphic Designer / Video Editor",
      duration: "August 2023 – Present",
      location: "Visakhapatnam",
      responsibilities: [
        "Create visual concepts for branding, marketing, and communication.",
        "Design print and digital assets like logos, advertisements, and social media graphics.",
        "Select colors, typography, and layouts to convey specific messages.",
        "Collaborate with clients or teams to meet project objectives.",
        "Edit and assemble raw footage into cohesive videos.",
        "Add sound effects, music, and visual elements to enhance storytelling.",
        "Perform color grading and adjust audio levels for a polished final product."
      ],
      isCurrent: true
    },
    {
      company: "Digipe Fintech Pvt Ltd",
      role: "Graphic Designer / Video Editor",
      duration: "May 2022 – July 2023",
      location: "Visakhapatnam",
      responsibilities: [
        "Design logos, brochures, posters, banners, print materials, and social media designs.",
        "Develop layouts and select typography, colors, and images.",
        "Collaborate with clients or teams to understand project requirements.",
        "Produce YouTube & Instagram short videos.",
        "Cut and arrange video clips to create seamless transitions.",
        "Add visual effects, sound, music, and graphics."
      ],
      isCurrent: false
    },
    {
      company: "Freelancer",
      role: "Graphic Designer",
      duration: "May 2022 – July 2023",
      location: "Visakhapatnam",
      responsibilities: [
        "Conceptualize and create designs for various media, including print and digital.",
        "Develop brand assets such as logos, brochures, and advertisements.",
        "Create political banners, name boards, and paper cuts."
      ],
      isCurrent: false
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Briefcase className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-medium">Career Journey</span>
          </div>
          
          <h2 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-white">Professional</span>{" "}
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My journey through creative excellence and 
            <span className="text-blue-500 font-semibold"> professional growth</span>
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden lg:block"></div>
          
          <div className="space-y-16 lg:space-y-24">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 animate-slide-up ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="card-hover glass-morphism rounded-2xl p-8 border border-gray-800 glow-effect hover:shadow-blue-500/30 transform-gpu hover:border-blue-500/50 group">
                    {/* Company Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="font-title font-bold text-2xl lg:text-3xl text-white group-hover:text-blue-500 transition-colors duration-300">
                          {exp.company}
                        </h3>
                        {exp.isCurrent && (
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      
                      <h4 className="font-body font-semibold text-xl text-orange-500 mb-4">
                        {exp.role}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-body">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-body">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="font-body text-gray-300 leading-relaxed">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-dark shadow-lg shadow-blue-500/50">
                  <div className="w-full h-full bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};