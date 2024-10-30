"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "../components/Loading";
import Image from "next/image"; 

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/videos/hero.mp4";
    video.onloadeddata = () => setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="relative h-[60vh] md:h-[75vh] lg:h-screen flex items-center justify-center text-gray-100 overflow-hidden">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black opacity-50">
        <div className="flex-shrink-0 absolute top-2 left-2">
          <Image
            src="/images/Logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="h-auto rounded-full md:w-28 md:h-28 lg:w-32 lg:h-32"
          />
        </div>
      </div>

      <div className="relative text-center md:text-left px-4 md:px-10 space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Embroidery DZ:
          <br className="hidden md:block" /> Design Your Own
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Elevate your style with our custom embroidery clothing! Unleash your
          creativity and design your unique piece.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="/design"
            className={`bg-[#8C2F39] text-gray-100 font-semibold py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl rounded-md text-center transform transition-transform duration-200 ${
              isSmallScreen
                ? "active:scale-105"
                : "lg:hover:scale-105 lg:hover:bg-[#B23A48]" 
            }`}
          >
            Start Designing
          </Link>
          <Link
            href="#clothing-styles"
            className={`bg-[#F1C232] border-2 border-[#8C2F39] text-[#8C2F39] font-semibold py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl rounded-md text-center transform transition-transform duration-200 ${
              isSmallScreen
                ? "active:scale-105"
                : "lg:hover:scale-105 lg:hover:bg-[#8C2F39] lg:hover:text-white"
            }`}
          >
            Browse Styles
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 w-full justify-center hidden lg:flex">
        <span className="animate-bounce text-white text-3xl">↓</span>
      </div>
    </div>
  );
}
