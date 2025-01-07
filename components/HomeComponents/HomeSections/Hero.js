"use client";
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsBlurred(scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`hero min-h-screen ${
        isBlurred ? "blur-xl transition-all duration-700" : "blur-0 transition-all duration-500"
      }`}
      style={{
        backgroundImage: "url(/bg.jpg)",
        backgroundAttachment: "fixed",
      }}
      data-aos="fade-up"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center z-0">
        <div className="max-w-2xl">
          {/* Big and Bold Title */}
          <h1 className="mb-8 text-6xl md:text-7xl font-extrabold text-primary">
            Bienvenue à la Fondation Assalam
          </h1>

          {/* Big and Clear Description */}
          <p className="mb-10 text-xl md:text-2xl text-[#1a1a2e] font-medium"> {/* Dark blue text color */}
            Nous œuvrons pour un avenir meilleur en soutenant les communautés défavorisées, en promouvant l'éducation et en favorisant le développement durable. Rejoignez-nous dans notre mission pour créer un impact positif et durable.
          </p>

          {/* Elegant Button */}
          <button className="btn btn-primary btn-lg rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Découvrir nos projets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;