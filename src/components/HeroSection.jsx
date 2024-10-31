"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "../components/Loading";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";

export default function HeroSection() {
  const handleContactClick = () => {
    toggleMenu();
    scrollToSection("#footer");
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); 
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="relative h-[80vh] lg:h-screen flex items-center justify-center text-gray-100 overflow-hidden">
      
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute top-2 left-1 flex-shrink-0">
        <Image
          src="/images/Logo.jpg"
          alt="Logo"
          width={3464}
          height={3464}
          className="rounded-full w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
          priority
        />
      </div>

      {isSmallScreen ? (
        <button
          onClick={toggleMenu}
          className="absolute top-2 right-1 p-2 bg-black/20 backdrop-blur-lg rounded-lg text-gray-100"
        >
          <FiMenu size={24} />
        </button>
      ) : (
        <div className="absolute top-2 inset-x-0 flex justify-center">
          <div className="bg-black/20 backdrop-blur-lg px-6 py-2 rounded-lg">
            <nav className="flex space-x-8 text-lg font-semibold text-gray-200">
              <Link href="/" className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4">
                Home
              </Link>
              <Link href="/design" className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4">
                Design
              </Link>
              <button
                onClick={() => scrollToSection("#clothing-styles")}
                className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4"
              >
                Styles
              </button>
              <button
                onClick={handleContactClick}
                className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}

      {isSmallScreen && isMenuOpen && (
        <div className="absolute top-14 right-1 bg-black/20 backdrop-blur-lg p-4 rounded-lg z-10">
          <nav className="flex flex-col space-y-4 text-lg font-semibold text-gray-200">
            <Link href="/" className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/design" className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4" onClick={toggleMenu}>
              Design
            </Link>
            <button
              onClick={() => scrollToSection("#clothing-styles")}
              className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4"
            >
              Styles
            </button>
            <button
              onClick={handleContactClick} 
              className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4"
            >
              Contact
            </button>
          </nav>
        </div>
      )}

      <div className="relative text-center md:text-left px-2 md:px-10 w-[100%] md:w-[70%]  mx-auto">
        <div className="bg-black/5 p-6 rounded-lg relative z-0 w-[100%] flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Embroidery DZ:
            <br className="hidden md:block" /> Design Your Own
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Elevate your style with our custom embroidery clothing! Unleash your creativity and design your unique piece.
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
            <button
              onClick={() => scrollToSection("#clothing-styles")}
              className={`bg-[#F1C232] border-2 border-[#8C2F39] text-[#8C2F39] font-semibold py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl rounded-md text-center transform transition-transform duration-200 ${
                isSmallScreen
                  ? "active:scale-105"
                  : "lg:hover:scale-105 lg:hover:bg-[#8C2F39] lg:hover:text-white"
              }`}
            >
              Browse Styles
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 w-full justify-center hidden lg:flex">
        <span className="animate-bounce text-white text-3xl">↓</span>
      </div>
    </div>
  );
}
