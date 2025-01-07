"use client"; // Add this line
import { ListAboutUs } from '@/Constants';
import React from 'react';
import ListItem from '../ListItem';

const AboutUs = () => {
  return (
    <div
      className="bg-[url('/bg1.jpg')] bg-cover bg-center w-full h-fit flex flex-col-reverse md:flex-row gap-8 p-5 md:p-28 relative top-[-150px] rounded-lg shadow-lg"
      data-aos="fade-up"
    >
      <div className="flex-1 gap-4 flex flex-col">
        <div className="text-4xl font-bold text-primary">ABOUT US</div>
        <div className="text-[#1a1a2e]"> {/* Dark blue text color */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quia. Quaerat, voluptas, doloremque, quos, temporibus, doloribus. Quidem, consequuntur, velit, fugiat, voluptatem, molestiae, labore, quibusdam, ipsa, error, asperiores, quod, odit, et, accusantium, eaque, delectus, nihil, fugit, sint, rerum, omnis, molestias, sed, quis, aspernatur, beatae, magnam, quam, cupiditate, veniam, repellat, sunt, aut, in, harum, corporis, nemo, excepturi, sint, ratione, quae, voluptate, laboriosam, deleniti, ea, minus, itaque, aliquid, dolores, molestias.
        </div>
        <div className="flex flex-col gap-2">
          {ListAboutUs.map((item, index) => (
            <ListItem text={item} key={index} />
          ))}
        </div>
      </div>
      <div className="flex-1 w-full h-80 flex justify-center items-center">
        <iframe
          className="aspect-square w-full h-full rounded-tl-3xl rounded-br-3xl shadow-lg"
          src="https://www.youtube.com/embed/KrWPaJ-VjFo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;