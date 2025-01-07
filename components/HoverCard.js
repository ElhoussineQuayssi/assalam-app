// components/Card.js

import Image from "next/image";

const HoverCard = ({ image, name, job }) => {
  return (
    <div className="relative group w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image */}
      <div className="w-full h-3/4">
        <Image src={image} alt={name} layout="responsive" width={160} height={200} className="object-cover" />
      </div>

      {/* Hover effects */}
      <div className="absolute inset-0 flex justify-center items-center bg-green-600 bg-opacity-25 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
