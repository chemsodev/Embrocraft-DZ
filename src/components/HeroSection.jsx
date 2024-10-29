import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-left bg-cover bg-center text-white" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-left md:text-left pl-[10%] ">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6">
         Rital for Embroidery Clothing:<br /> Design Your Own
        </h1>
        <p className="text-xl md:text-3xl my-6">
          Elevate your style with our custom embroidery clothing! Unleash your creativity and design your unique piece.
        </p>
        
        <div className="flex justify-left  space-x-4">
          <Link href="/design" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-7 text-2xl rounded-md">
              Start Designing
          </Link>
          <Link href="/styles" className="bg-black border-2 border-green-600 hover:bg-green-600 text-green-600 hover:text-black font-semibold py-4 px-7 text-2xl  rounded-md">
              Browse Styles
          </Link>
        </div>
      </div>
    </div>
  );
}
