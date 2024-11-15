import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ClothingCategoriesCard = ({ title, href, imageSrc, description }) => {
  return (
    <div className="border rounded-lg p-8 shadow-lg flex-1 transition-transform transform hover:scale-105">
      <Link href={href} className="relative block w-full h-72 bg-[#8C2F39] rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            objectFit="contain"
            className="transition-transform duration-200 ease-in-out transform hover:scale-110"
          />
      </Link>
      <h3 className="text-2xl font-semibold my-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ClothingCategoriesCard;
