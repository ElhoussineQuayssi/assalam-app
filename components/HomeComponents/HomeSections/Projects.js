"use client"; // Add this line
import { ProjectsEx } from '@/Constants';
import React from 'react';
import { Tilt } from 'react-tilt'; // Tilt effect remains here

const Projects = () => {
  return (
    <div
      className="w-full h-fit justify-center items-center flex flex-col gap-4 p-4 md:p-28 relative top-[-150px]"
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-bold text-primary">Nos Projets</h3>
      <h1 className="text-4xl font-bold text-center text-[#1a1a2e]"> {/* Dark blue text color */}
        Les Grands projets de notre fondation
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 w-full">
        {ProjectsEx.map((projet, index) => (
          <Tilt key={index} options={{ max: 10, scale: 1.02, speed: 1000 }}>
            <div className="card bg-base-200 shadow-lg rounded-lg">
              <figure>
                <img src={projet.image} alt={projet.description} className="w-full h-48 object-cover rounded-t-lg" />
              </figure>
              <div className="card-body">
                <p className="text-[#1a1a2e]">{projet.description}</p> {/* Dark blue text color */}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;