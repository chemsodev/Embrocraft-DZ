import Link from 'next/link';

export default function HeroSection() {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center md:text-left px-4 md:px-10 space-y-4 md:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Rital for Embroidery Clothing:<br className="hidden md:block" /> Design Your Own
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
          Elevate your style with our custom embroidery clothing! Unleash your creativity and design your unique piece.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/design" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl rounded-md text-center">
            Start Designing
          </Link>
          <Link href="#clothing-styles" className="bg-black border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-black font-semibold py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl rounded-md text-center">
            Browse Styles
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 md:bottom-6 w-full flex justify-center">
        <span className="animate-bounce text-white text-3xl">↓</span>
      </div>
    </div>
  );
}
