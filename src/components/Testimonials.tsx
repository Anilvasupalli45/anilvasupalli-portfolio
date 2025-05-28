
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Anil's creative vision and attention to detail exceeded our expectations. The social media designs he created helped us increase engagement by 150%."
    },
    {
      name: "Michael Chen",
      role: "Content Creator",
      company: "Digital Media Co.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Working with Anil was a game-changer for our video content. His editing skills and creative input transformed our raw footage into compelling stories."
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Manager",
      company: "Lifestyle Brand",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Professional, reliable, and incredibly talented. Anil delivered our complete brand identity package on time and beyond our expectations."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-dark-lighter">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            <span className="text-white">What Clients</span>{" "}
            <span className="text-primary">Say</span>
          </h2>
          <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from satisfied clients about their experience working with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="card-hover bg-dark-card rounded-xl p-8 border border-gray-800"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-heading font-semibold text-white text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="font-body text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="font-body text-gray-500 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="font-body text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
