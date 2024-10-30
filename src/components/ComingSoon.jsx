import React from 'react';

const ComingSoon = () => {
  return (
    <div className=" mx-4 md:mx-auto  rounded-lg flex items-center justify-center">
      <div
        className="relative text-white text-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/costumise.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px", 
          width: "100%", 
          maxWidth: "800px", 
          borderRadius: '0.5rem',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
        <div className="relative z-10 p-6">
          <h2 className="text-4xl font-bold mb-4">Customize Your Order</h2>
          <p className="text-lg mb-6">We’re working on bringing you a fully customizable experience. Stay tuned for updates!</p>
          <button className="bg-[#8C2F39] text-white font-semibold py-2 px-4 rounded opacity-70 cursor-not-allowed">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
