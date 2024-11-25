import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about py-20 px-6 bg-black text-white">
      {/* Section Title */}
      <h2
        className="text-4xl font-bold text-yellow-400 text-center mb-12"
        data-aos="fade-up"
      >
        About Me
      </h2>

      {/* Content Wrapper */}
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        data-aos="fade-up"
      >
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="zoom-in"
        >
          <img
            src="./assets/aboutMee.jpg"
            alt="Portrait of Saravanan"
            className="w-3/4 md:w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <p className="text-lg text-gray-300 leading-relaxed mb-6 text-justify">
            Hi, I'm <span className="text-yellow-400 font-bold">Saravanan</span>
            — a passionate software trainer and full-stack developer. With expertise in C, C++, Python, React, and full-stack development, I thrive on mentoring aspiring developers and helping businesses excel through cutting-edge digital strategies.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed text-justify">
            My mission is to bridge the gap between ideas and technology by
            crafting responsive designs, functional web applications, and delivering impactful training sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
