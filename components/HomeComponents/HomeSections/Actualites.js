"use client"; // Add this line
import React from 'react';
import { ActualitesData } from '@/Constants';

const Actualites = () => {
  return (
    <div className="relative flex gap-6 flex-col items-center justify-center h-fit top-[-100px] mt-3 w-5/6 mx-auto">
      <h1 className="text-2xl font-bold text-primary">Titre</h1>
      <h3 className="text-4xl font-bold text-[#1a1a2e]">Description</h3> {/* Dark blue text color */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ActualitesData.slice(0, 6).map((item, index) => (
          <div key={index} className="card bg-base-200 shadow-lg rounded-lg" data-aos="fade-up">
            <figure>
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-primary">{item.title}</h2>
              <p className="text-[#1a1a2e]">{item.description}</p> {/* Dark blue text color */}
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-5">Voir plus</button>
    </div>
  );
};

export default Actualites;