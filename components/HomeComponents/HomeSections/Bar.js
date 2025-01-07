"use client"; // Add this line
import { BarData } from '@/Constants';
import React from 'react';

const Bar = () => {
  return (
    <div
      className="w-full bg-[url('/bg2.jpg')] bg-cover bg-center gap-y-3 h-fit md:h-48 flex justify-center items-center rounded-lg shadow-lg"
      data-aos="fade-up"
    >
      <div className="w-3/4 h-2/3 grid grid-cols-2 md:grid-cols-4">
        {BarData.map((item, index) => (
          <div key={index} className="flex p-2 flex-col justify-center items-center">
            <div className="flex-1 flex justify-center items-center text-5xl text-primary">
              {item.icon}
            </div>
            <div className="flex-1 flex justify-center items-center flex-col text-2xl text-[#1a1a2e]"> {/* Dark blue text color */}
              <p>{item.label}</p>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;