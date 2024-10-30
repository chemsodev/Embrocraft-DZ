"use client"
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const [twitch, setTwitch] = useState(false);

    const handleContactClick = () => {
      setTwitch(true);
      setTimeout(() => setTwitch(false), 1000); 
    };

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center flex-col space-x-2">
          <Image
            src="/images/Logo.jpg"
            alt="Logo"
            width={3464}
            height={3464}
            className="rounded-full w-12 h-12 md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
          <span className="text-lg font-bold">Embroidery DZ</span>
        </div>

        <nav className="flex space-x-4 text-md font-semibold">
          <Link href="/" className="hover:text-[#8C2F39]">Home</Link>
          <Link href="/design" className="hover:text-[#8C2F39]">Design</Link>
          <Link href="#clothing-styles" className="hover:text-[#8C2F39]" onClick={() => scrollToSection("#clothing-styles")}>Styles</Link>
          <Link href="#footer" className="hover:text-[#8C2F39]" onClick={handleContactClick}>
            Contact
          </Link>
        </nav>

        <div className="flex space-x-4" id="footer">
          <Link href="#" aria-label="Facebook">
            <FaFacebookF className={`fill-blue-600 hover:fill-gray-400 h-6 w-6 ${twitch ? 'icon-twitch' : ''}`} />
          </Link>
          <Link href="#" aria-label="Instagram">
            <FaInstagram className={`fill-orange-500 hover:fill-gray-400 h-6 w-6 ${twitch ? 'icon-twitch' : ''}`} />
          </Link>
          <Link href="#" aria-label="Twitter">
            <FaTwitter className={`fill-blue-500 hover:fill-gray-400 h-6 w-6 ${twitch ? 'icon-twitch' : ''}`} />
          </Link>
          <Link href="#" aria-label="YouTube">
            <FaYoutube className={`fill-red-500 hover:fill-gray-400 h-6 w-6 ${twitch ? 'icon-twitch' : ''}`} />
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-700 my-4"></div>
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Embroidery DZ for Embroidery Clothing. All rights reserved.
      </p>
    </footer>
  );
};

