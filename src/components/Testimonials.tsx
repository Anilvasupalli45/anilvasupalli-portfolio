import { Quote, Star, Heart, ThumbsUp } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Marketing Director",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Anil's creative vision and attention to detail exceeded our expectations. The social media designs he created helped us increase engagement by 150%. His professionalism and timely delivery made the entire process seamless.",
      highlight: "150% engagement increase"
    },
    {
      name: "Rajesh Kumar",
      role: "Content Creator",
      company: "Digital Media Co.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Working with Anil was a game-changer for our video content. His editing skills and creative input transformed our raw footage into compelling stories that resonated with our audience. Absolutely recommended!",
      highlight: "Game-changing results"
    },
    {
      name: "Sneha Patel",
      role: "Brand Manager",
      company: "Lifestyle Brand",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Professional, reliable, and incredibly talented. Anil delivered our complete brand identity package on time and beyond our expectations. His creativity brought our vision to life perfectly.",
      highlight: "Beyond expectations"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-colors duration-300 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Client Love</span>
          </div>

          <h2 className="font-title font-bold text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-white">What Clients</span>{" "}
            <span className="text-gradient">Say</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="font-body text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Hear from satisfied clients about their experience working with me and the 
            <span className="text-primary font-semibold"> results we achieved together</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-hover glass-morphism rounded-2xl p-8 border border-gray-800 
                         group glow-effect transform-gpu animate-scale-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full 
                              flex items-center justify-center shadow-lg shadow-primary/30">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-orange-500 
                                  flex items-center justify-center border-4 border-primary/30 
                                  group-hover:border-primary transition-colors duration-500">
                    <span className="text-white text-3xl font-bold font-heading">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="font-heading font-semibold text-white text-xl mb-1 
                                 group-hover:text-primary transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="font-body text-gray-400 text-sm mb-1">
                    {testimonial.role}
                  </p>
                  <p className="font-body text-primary text-xs font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-6 gap-1">
                {renderStars(testimonial.rating)}
              </div>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 
                              rounded-full px-4 py-2 mb-6">
                <ThumbsUp className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">{testimonial.highlight}</span>
              </div>
              
              <p className="font-body text-gray-300 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-orange-500 rounded-full 
                              group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>

        {/* Call to action with icon moved to front */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-title font-bold text-2xl lg:text-3xl text-white mb-4">
              Ready to join these happy clients?
            </h3>
            <p className="text-gray-400 mb-6">Let's create something amazing together</p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-orange-500 
                         text-white px-8 py-4 rounded-full font-semibold text-lg
                         hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30
                         hover:shadow-primary/50 group"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Let's Create Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
