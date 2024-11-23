import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with 1s animation
  }, []);

  return (
    <div className="services-section bg-gray-900 text-white py-20 px-6 text-center">
      {/* Section Title */}
      <h2
        className="text-3xl font-bold text-yellow-400 mb-8"
        data-aos="fade-up" // Title animation
      >
        Services
      </h2>
      <p
        className="text-lg text-gray-300 mb-12"
        data-aos="fade-up" // Paragraph animation
        data-aos-delay="200" // Delay for smoother entry
      >
        Hi, I’m <span className="text-yellow-500 font-bold">Saravanan</span> — a passionate Software Trainer, Digital Marketer, and Fullstack Developer. I specialize in teaching C, C++, Python, React, and fullstack development while helping businesses grow with modern digital marketing strategies.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
        {/* Responsive Design */}
        <div
          className="service-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          data-aos="fade-right"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Responsive Design
          </h3>
          <p className="text-gray-300">
            Creating visually appealing, mobile-friendly, and fully responsive websites to deliver a seamless user experience.
          </p>
        </div>

        {/* Digital Marketing */}
        <div
          className="service-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Digital Marketing
          </h3>
          <p className="text-gray-300">
            Helping brands grow through SEO, social media marketing, and effective digital strategies tailored to their audience.
          </p>
        </div>

        {/* Software Training */}
        <div
          className="service-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Software Training
          </h3>
          <p className="text-gray-300">
            Delivering in-depth training in C, C++, Python, React, and Fullstack development for aspiring developers.
          </p>
        </div>

     
      

        {/* React Development */}
        <div
          className="service-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          data-aos="zoom-in"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            React Development
          </h3>
          <p className="text-gray-300">
            Crafting dynamic and modern user interfaces with React for a seamless, interactive user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
