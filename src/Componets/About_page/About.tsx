import React from 'react';

const About = () => {
  return (
    <div className="about py-20 px-4 bg-gray-800 text-white text-center">
      {/* Section Title */}
      <h2
        className="text-3xl font-bold mb-6 text-yellow-400"
        data-aos="fade-up"
      >
        About Me
      </h2>

      {/* About Content */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="./assets/about.jpg"
            alt="Portrait of Saravanan"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 text-left md:ml-8"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <p className="text-lg text-gray-300">
            Hi, I'm <span className="text-yellow-400 font-bold">Saravanan</span> — a passionate software trainer and full-stack developer. With expertise in C, C++, Python, React, and full-stack development, I love mentoring aspiring developers and helping businesses grow through effective digital strategies.
          </p>
          <p className="text-lg text-gray-300 mt-4">
            My goal is to bridge the gap between ideas and technology by creating responsive designs, functional web applications, and delivering impactful training sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
