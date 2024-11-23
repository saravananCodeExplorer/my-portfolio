import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero">
      <section
        id="hero"
        className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center"
      >
        {/* Hero Image */}
        <img
          src="assets/img/hero-img.jpg"
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />

        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl font-bold mb-4">I am Saravanan</h2>
          <p className="text-lg">
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer"
            >
              Designer, Developer, Freelancer, 
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
