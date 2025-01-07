"use client"; // Add this line
import { CardsDescription } from '@/Constants';
import React from 'react';

const Vision = () => {
  return (
    <div
      className="w-full h-1/3 justify-center items-center flex flex-col gap-6 p-4 relative top-[-150px]"
      data-aos="fade-up"
    >
      <h1 className="text-4xl font-bold text-primary">Notre Vision</h1>
      <div className="w-5/6 h-1/2 p-3 rounded-md gap-2 flex md:flex-row flex-col justify-center items-center bg-base-200 shadow-lg">
        {CardsDescription.map((card, index) => (
          <div key={index} className="card bg-base-100 shadow-md rounded-lg p-4">
            <div className="text-5xl text-primary">{card.icon}</div>
            <p className="text-[#1a1a2e]">{card.description}</p> {/* Dark blue text color */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;