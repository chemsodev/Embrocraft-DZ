"use client";
import React, { useState, useEffect } from "react";

export default function StepsToOrder() {
  const [activeStep, setActiveStep] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const steps = [
    {
      title: "اختر أسلوبك",
      description: "اختر القطعة وأسلوب الملابس المفضل لبدء التصميم.",
    },
    {
      title: "تخصيص الألوان",
      description: "خصص التصميم بالألوان والعناصر المختلفة.",
    },
    {
      title: "أكمل طلبك",
      description: "أكمل عملية الطلب واستعد لاستقبال القطعة المميزة!",
    },
  ];

  return (
    <div className="py-16 bg-gray-100" id="steps">
      <h2 className="text-4xl font-bold text-center mb-10">
        كيف تطلب ملابس مطرزة حسب الطلب؟
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform ${
              activeStep === index ? "scale-105" : ""
            } group relative cursor-pointer`}
            onClick={() => isSmallScreen && setActiveStep(activeStep === index ? null : index)}
            onMouseEnter={() => !isSmallScreen && setActiveStep(index)}
            onMouseLeave={() => !isSmallScreen && setActiveStep(null)}
          >
            <div className="flex items-center justify-center mb-4">
              <span className="bg-[#8C2F39] text-white pb-1 rounded-br-full w-8 h-8 flex absolute left-0 top-0 items-center justify-center font-bold select-none">
                {index + 1}
              </span>
              <svg
                className="h-10 w-10 text-[#8C2F39] ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />}
                {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />}
                {index === 2 && (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8v11a2 2 0 002 2h14a2 2 0 002-2V8M9 12h6m-3-3v6" />
                )}
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 select-none">{step.title}</h3>
            <p
              className={`text-gray-600 select-none transition-opacity duration-300 ${
                activeStep === index ? "opacity-100" : "opacity-0"
              } ${isSmallScreen ? "" : "lg:group-hover:opacity-100 pointer-events-none"} lg:pointer-events-auto`}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
