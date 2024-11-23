"use client"
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsBlurred(scrollY > 300); // Change 50 to your desired scrollY threshold
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
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center z-0">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
