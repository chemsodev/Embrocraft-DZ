// components/HeroSection.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Loading from "../components/Loading";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/videos/hero.mp4";
    video.onloadeddata = () => setIsLoading(false);
  }, []);

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
      {/* Updated overlay with a lighter opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative text-center md:text-right px-4 sm:px-6 md:px-10 w-full md:w-[70%] mx-auto">
        <div className="bg-black/20 p-4 sm:p-6 rounded-lg relative z-0 w-full flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Embrocraft DZ: <br className="hidden md:block" /> صمم ملابسك الخاصة
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            ارتقِ بأسلوبك مع ملابسنا المطرزة حسب الطلب! أطلق إبداعك وصمم قطعة فريدة من نوعها.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 gap-4">
            <Link
              href="/design"
              className="bg-[#8C2F39] text-gray-100 font-semibold py-3 px-6 sm:py-4 sm:px-8 text-base sm:text-lg rounded-md transition-all duration-300 ease-in-out transform hover:bg-[#9c3a44] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9c3a44]"
            >
              ابدأ التصميم
            </Link>
            <button
              onClick={() => document.querySelector("#clothing-styles")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#F1C232] border-2 border-[#8C2F39] text-[#8C2F39] font-semibold py-3 px-6 sm:py-4 sm:px-8 text-base sm:text-lg rounded-md transition-all duration-300 ease-in-out transform hover:bg-[#8C2F39] hover:text-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8C2F39]"
            >
              تصفح الأنماط
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 w-full flex justify-center hidden lg:flex">
        <span className="animate-bounce text-white text-3xl">↓</span>
      </div>
    </div>
  );
}
