import React from "react";


const Hero = ({ title, imageURL }) => {
  return (
    <>
    <div className=" min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          At Tata Motors Hospital, we provide a comprehensive range of medical
          services designed to meet your needs with compassion and
          professionalism. From advanced diagnostics to personalized treatment
          plans, we are dedicated to your health and well-being.
        </p>
      </div>

      {/* <div className="flex justify-center">
        <img
          src={imageURL}
          alt="Hero"
          className="w-1/3 h-auto rounded-full shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div> */}
    </div>
    
    </>
    
  );
};

export default Hero;
