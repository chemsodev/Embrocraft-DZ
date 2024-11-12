"use client";
import { useState } from 'react';
import { FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function Footer() {
    const [twitch, setTwitch] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

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

    const handleNavigateAndScroll = (sectionId) => {
        if (pathname === "/") {
            scrollToSection(sectionId);
        } else {
            router.push("/");
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 800); 
        }
    };

    return (
        <footer className="bg-transparent text-black py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 px-3 md:space-y-0">
                <div className="flex items-center flex-col space-x-2">
                    <Image
                        src="/images/Logo.jpg"
                        alt="الشعار"
                        width={3464}
                        height={3464}
                        className="rounded-full w-12 h-12 md:w-28 md:h-28 lg:w-32 lg:h-32"
                    />
                    <span className="text-lg font-bold">Embrocraft DZ</span>
                </div>

                <nav className="flex gap-4 text-md font-semibold">
                    <Link href="/" className="hover:text-[#8C2F39]">الرئيسية</Link>
                    <Link href="/design" className="hover:text-[#8C2F39]">التصميم</Link>
                    <button onClick={() => handleNavigateAndScroll("#clothing-categories")} className="hover:text-[#8C2F39]">
                        الأنماط
                    </button>
                    <Link href="#footer" className="hover:text-[#8C2F39]" onClick={handleContactClick}>
                        اتصل بنا
                    </Link>
                </nav>

                <div className="flex gap-4 items-center" id="footer">
                <Link href="https://www.instagram.com/brahim_mrz_store/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={`fill-orange-500 hover:fill-gray-400 h-6 w-6 ${twitch ? 'icon-twitch' : ''}`} />
                    </Link>
                    <Link href="mailto:meharzibr@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className={`fill-blue-500 hover:fill-gray-400 h-6 w-6 ${twitch ? 'icon-twitch' : ''}`} />
                    </Link>
                    <Link href="tel:0791084298" aria-label="Phone" target="_blank" rel="noopener noreferrer">
                        <FaPhone className={`fill-green-500 hover:fill-gray-400 h-6 w-6 ${twitch ? 'icon-twitch' : ''}`} />
                    </Link>
                    <Link href="https://wa.me/213540207506" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className={`fill-green-500 hover:fill-gray-400 h-6 w-6 ${twitch ? 'icon-twitch' : ''}`} />
                    </Link>
                </div>
            </div>

            <div className="border-t border-gray-700 my-4"></div>
            <p className="text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Embrocraft DZ لتطريز الملابس. جميع الحقوق محفوظة.
            </p>
        </footer>
    );
}