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
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Main content */}
      <div className="relative text-center md:text-right px-2 md:px-10 w-[100%] md:w-[70%] mx-auto">
        <div className="bg-black/5 p-6 rounded-lg relative z-0 w-[100%] flex flex-col gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            تطريز DZ: <br className="hidden md:block" /> صمم ملابسك الخاصة
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            ارتقِ بأسلوبك مع ملابسنا المطرزة حسب الطلب! أطلق إبداعك وصمم قطعة فريدة من نوعها.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 gap-4">
            <Link href="/design" className="bg-[#8C2F39] text-gray-100 font-semibold py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl rounded-md">
              ابدأ التصميم
            </Link>
            <button
              onClick={() => document.querySelector("#clothing-styles")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#F1C232] border-2 border-[#8C2F39] text-[#8C2F39] font-semibold py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl rounded-md"
            >
              تصفح الأنماط
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
