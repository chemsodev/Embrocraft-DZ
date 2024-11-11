"use client";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import ClothingStyles from "../components/ClothingCategories";
import StepsToOrder from "../components/StepsToOrder";
import ComingSoon from "../components/ComingSoon";

export default function Home() {


  return (
    <div className="bg-gray-100">
      <HeroSection /> 
      <ClothingStyles />
      <StepsToOrder />
      <ComingSoon />
    </div>
  );
}
