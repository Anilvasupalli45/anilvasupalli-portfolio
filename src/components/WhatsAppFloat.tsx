
export const WhatsAppFloat = () => {
  return (
    <a 
      href="https://wa.me/919550502688?text=Hello%2C%20I%20visited%20your%20website" 
      className="whatsapp-float" 
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" 
        alt="Chat on WhatsApp"
        className="w-12 h-12 hover:scale-110 transition-transform duration-300 rounded-full shadow-lg"
      />
    </a>
  );
};
