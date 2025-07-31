import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS

const Service = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with 1s animation
  }, []);

  return (
    <div className="services-section bg-black text-white py-20 px-6 text-center min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-yellow-400 mb-8" data-aos="fade-up">
        Services
      </h2>

      {/* Description */}
      <p
        className="text-lg text-gray-300 mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Hi, I’m <span className="text-yellow-500 font-bold">Saravanan Sekar</span> — a passionate Software Trainer, Digital Marketer, Freelancer, and Fullstack Developer. I specialize in teaching C, C++, Python, React, and fullstack development while helping businesses grow with modern digital strategies.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
        {/* Software Training */}
        <div
          className="service-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Software Training
          </h3>
          <p className="text-gray-300">
            Delivering practical, in-depth training in C, C++, Python, React, and Fullstack development. Focused on hands-on learning and real-world applications for students and professionals.
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
            Developing responsive, high-performance user interfaces using React and modern libraries. Emphasizing reusable components and clean architecture for scalable web applications.
          </p>
        </div>

        {/* Responsive Design */}
        <div
          className="service-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          data-aos="fade-right"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Responsive Design
          </h3>
          <p className="text-gray-300">
            Creating mobile-first, pixel-perfect responsive websites using Tailwind CSS and Bootstrap to ensure seamless experience across all devices.
          </p>
        </div>

        {/* Freelancing Services */}
        <div
          className="service-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Freelance Projects
          </h3>
          <p className="text-gray-300">
            Offering freelance services for startups, businesses, and individuals. I specialize in delivering clean, modern web solutions that meet client goals and deadlines.
          </p>
        </div>

        {/* Fullstack Web Development */}
        <div
          className="service-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          data-aos="zoom-in"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Fullstack Development
          </h3>
          <p className="text-gray-300">
            Building complete web solutions with frontend (React) and backend (Node.js, MySQL), including authentication, dashboards, and REST APIs for real-world functionality.
          </p>
        </div>

        {/* Digital Marketing */}
        <div
          className="service-card bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          data-aos="fade-right"
        >
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Digital Marketing
          </h3>
          <p className="text-gray-300">
            Promoting businesses online using SEO, social media marketing, and content strategy to generate leads and boost brand presence across digital platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
