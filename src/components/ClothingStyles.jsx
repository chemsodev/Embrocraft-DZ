import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

export default function ClothingStyles() {
  return (
    <div className="py-16 bg-gray-100 text-center" id="clothing-styles">
      <h2 className="text-4xl font-bold mb-12">Browse Clothing Styles</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 px-4">
        <div className="border rounded-lg p-8 shadow-lg flex-1 transition-transform transform hover:scale-105">
          <Link href="/design/t-shirts" className="relative block w-full h-72 bg-[#8C2F39] rounded-lg overflow-hidden"> 
              <Image
                src="/images/t-shirtcat.png"
                alt="T-Shirts"
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-200 ease-in-out transform hover:scale-110"
              />
          </Link>
          <h3 className="text-2xl font-semibold my-4">T-Shirts</h3>
          <p className="text-gray-600">
            Choose from a range of classic and contemporary t-shirt styles to showcase your custom embroidery.
          </p>
        </div>
        <div className="border rounded-lg p-8 shadow-lg flex-1 transition-transform transform hover:scale-105">
          <Link href="/design/hoodies" className="relative block w-full h-72 bg-[#8C2F39] rounded-lg overflow-hidden">
              <Image
                src="/images/hoodiecat.png"
                alt="Hoodies"
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-200 ease-in-out transform hover:scale-110"
              />
          </Link>
          <h3 className="text-2xl font-semibold my-4">Hoodies</h3>
          <p className="text-gray-600">
            Cozy up in a high-quality hoodie and make it your own with personalized embroidery.
          </p>
        </div>
        <div className="border rounded-lg p-8 shadow-lg flex-1 transition-transform transform hover:scale-105">
          <Link href="/design/sweatshirts"  className="relative block w-full h-72 bg-[#8C2F39] rounded-lg overflow-hidden">
              <Image
                src="/images/sweet-shirtcat.png"
                alt="Sweatshirts"
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-200 ease-in-out transform hover:scale-110"
              />
          </Link>
          <h3 className="text-2xl font-semibold my-4">Sweatshirts</h3>
          <p className="text-gray-600">
            Stay warm and stylish with our range of sweatshirts, perfect for any casual occasion.
          </p>
        </div>
      </div>
    </div>
  );
}
