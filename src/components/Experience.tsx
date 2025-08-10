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
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-8 hover:bg-blue-500/20 transition-all duration-300">
            <Briefcase className="w-5 h-5 text-blue-500 animate-pulse" />
            <span className="text-blue-500 font-medium">Career Journey</span>
          </div>
          
          <h2 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8 animate-fade-in">
            <span className="text-white">Professional</span>{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-pulse">Experience</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8 animate-scale-in"></div>
          <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            My journey through creative excellence and 
            <span className="text-blue-500 font-semibold"> professional growth</span>
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full hidden lg:block opacity-80 shadow-lg shadow-blue-500/30">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-orange-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="space-y-24 lg:space-y-32">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 animate-slide-up opacity-0`}
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Timeline Node - Enhanced */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-dark shadow-2xl shadow-blue-500/50 hover:scale-125 transition-all duration-300">
                      <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
                      <div className="absolute -inset-2 bg-blue-500/20 rounded-full animate-ping"></div>
                    </div>
                    {/* Connection line to card */}
                    <div className={`absolute top-1/2 w-16 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? 'from-blue-500 to-transparent -right-16' 
                        : 'from-blue-500 to-transparent -left-16 rotate-180'
                    }`}></div>
                  </div>
                </div>

                {/* Content Card - Better positioning */}
                <div className={`w-full lg:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? 'lg:pr-0' : 'lg:pl-0 lg:ml-auto'
                }`}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-105"></div>
                    
                    <div className="relative card-hover glass-morphism rounded-2xl p-8 border border-gray-800/50 backdrop-blur-xl bg-gray-900/30 hover:border-blue-500/50 transform-gpu transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                      {/* Company Header */}
                      <div className="mb-6">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="font-title font-bold text-2xl lg:text-3xl text-white group-hover:text-blue-400 transition-all duration-300 transform group-hover:scale-105">
                            {exp.company}
                          </h3>
                          {exp.isCurrent && (
                            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-green-500/30 animate-pulse">
                              Current Role
                            </span>
                          )}
                        </div>
                        
                        <h4 className="font-body font-semibold text-xl text-orange-400 mb-4 group-hover:text-orange-300 transition-colors duration-300">
                          {exp.role}
                        </h4>
                        
                        <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
                          <div className="flex items-center gap-2 group-hover:text-blue-400 transition-colors duration-300">
                            <Calendar className="w-4 h-4" />
                            <span className="font-body">{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 group-hover:text-purple-400 transition-colors duration-300">
                            <MapPin className="w-4 h-4" />
                            <span className="font-body">{exp.location}</span>
                          </div>
                        </div>
                        
                        {/* Decorative line */}
                        <div className="h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-700 ease-out"></div>
                      </div>

                      {/* Responsibilities */}
                      <div className="space-y-4">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-4 group/item hover:transform hover:translate-x-2 transition-all duration-300"
                            style={{ animationDelay: `${(index * 0.3) + (idx * 0.1)}s` }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/50"></div>
                            <p className="font-body text-gray-300 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                              {responsibility}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile timeline indicator */}
                <div className="lg:hidden w-full flex justify-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-dark shadow-lg shadow-blue-500/50">
                    <div className="w-full h-full bg-white rounded-full animate-pulse opacity-80"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating elements for enhanced visual appeal */}
          <div className="absolute top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
          <div className="absolute bottom-10 -right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};