import React from 'react';
import Typewriter from 'typewriter-effect';



const HeroSection = () => {
  return (
    <div className="hero">
      <section
        id="hero"
        className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center"
      >
   <img
  src="/assets/hero.jpg"
  alt="Hero"
  className="absolute top-0 left-0 w-full h-full object-cover opacity-50 "
/>


  {/* Hero Content */}
<div className="relative z-10 flex flex-col items-center bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent p-6 rounded-lg shadow-lg ">
  <h2 className="text-4xl md:text-6xl font-extrabold mb-4">I am Saravanan</h2>
  <p className="text-xl md:text-2xl font-medium text-yellow-400">
    <Typewriter
      options={{
        strings: ['Designer', 'Developer', 'Freelancer'],
        autoStart: true,
        loop: true,
        delay: 75,
      }}
    />
  </p>
</div>

      </section>
    </div>
  );
};

export default HeroSection;
