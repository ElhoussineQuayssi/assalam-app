// components/HomeComponents/GoalSection.js
import { useEffect, useRef } from 'react';

export default function Screen({ description }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const mouseX = e.clientX - rect.left; // Mouse X position relative to the section
      const mouseY = e.clientY - rect.top; // Mouse Y position relative to the section

      // Calculate skew values based on mouse position
      const skewX = (mouseX - rect.width / 2) / 20; // Adjust the divisor for more/less skew
      const skewY = (mouseY - rect.height / 2) / 20;

      // Apply skew transform
      section.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
    };

    const handleMouseLeave = () => {
      // Reset skew when mouse leaves the section
      section.style.transform = 'skew(0deg, 0deg)';
    };

    // Add event listeners
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-gradient-to-r from-blue-50 to-green-50 py-12 transition-transform duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">        
        <p className="text-lg text-slate-700 text-center mb-8">
          {description}
        </p>
      </div>
    </div>
  );
}