
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useHashNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when component mounts or location changes
    const handleHashNavigation = () => {
      const hash = location.hash.substring(1); // Remove the # symbol
      
      if (hash) {
        // Small delay to ensure DOM is rendered
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            try {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
              });
            } catch (error) {
              console.warn(`Failed to scroll to hash: ${hash}`, error);
              // Fallback scroll method
              window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
              });
            }
          }
        }, 100);
      }
    };

    handleHashNavigation();
  }, [location]);
};
