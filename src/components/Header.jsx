"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const textColor = pathname === "/design" ? "text-black" : "text-gray-200";

  return (
    <header className="fixed top-0 inset-x-0 flex justify-between items-center px-4 lg:px-8 z-20 bg-transparent">
      <div className="flex items-center space-x-2">
        <Image
          src="/images/Logo.jpg"
          alt="شعار"
          width={50}
          height={50}
          className="rounded-full w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24"
          priority
        />
      </div>
      {isSmallScreen ? (
        <button onClick={toggleMenu} className={`p-2 bg-black/20 rounded-lg ${textColor}`}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      ) : (
        <nav className={`flex space-x-8 text-lg font-semibold ${textColor}`}>
          <Link href="/" className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4">
            الرئيسية
          </Link>
          <Link href="/design" className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4">
            التصميم
          </Link>
          <Link href="#" onClick={() => scrollToSection("#clothing-styles")} className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4">
            الأنماط
          </Link>
          <Link href="#" onClick={() => scrollToSection("#footer")} className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4">
            اتصل بنا
          </Link>
        </nav>
      )}
      {isSmallScreen && isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-3/4 bg-black/90 z-30 p-6 flex flex-col space-y-6 text-lg text-gray-100 font-semibold shadow-lg">
          <nav className="flex flex-col space-y-4 items-center">
            <Link href="/" onClick={toggleMenu} className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4 text-center">
              الرئيسية
            </Link>
            <Link href="/design" onClick={toggleMenu} className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4 text-center">
              التصميم
            </Link>
            <Link href="#" onClick={() => scrollToSection("#clothing-styles")} className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4 text-center">
              الأنماط
            </Link>
            <Link href="#" onClick={() => scrollToSection("#footer")} className="hover:bg-[#F1C232] transition-colors rounded-md py-2 px-4 text-center">
              اتصل بنا
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
