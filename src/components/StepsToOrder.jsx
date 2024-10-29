"use client";
import React from "react";

export default function StepsToOrder() {
  return (
    <div className="py-16 bg-gray-100" id="steps">
      <h2 className="text-4xl font-bold text-center mb-10">How to Order Custom Embroidered Clothes?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-[#8C2F39] text-white pb-1 rounded-br-full w-8 h-8 flex absolute left-0 top-0 items-center justify-center font-bold select-none">1</span>
            <svg
              className="h-10 w-10 text-[#8C2F39] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 select-none">Choose Your Style</h3>
          <p className="text-gray-600 select-none">Select your preferred clothing item and style to get started.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-[#8C2F39] text-white pb-1 rounded-br-full w-8 h-8 flex absolute left-0 top-0 items-center justify-center font-bold select-none">2</span>
            <svg
              className="h-10 w-10 text-[#8C2F39] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 select-none">Customize Colors</h3>
          <p className="text-gray-600 select-none">Personalize your design with various colors and elements.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-[#8C2F39] text-white pb-1 rounded-br-full w-8 h-8 flex absolute left-0 top-0 items-center justify-center font-bold select-none">3</span>
            <svg
              className="h-10 w-10 text-[#8C2F39] ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8v11a2 2 0 002 2h14a2 2 0 002-2V8M9 12h6m-3-3v6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2 select-none">Place Your Order</h3>
          <p className="text-gray-600 select-none">Complete your order and look forward to your unique piece!</p>
        </div>
      </div>
    </div>
  );
}
