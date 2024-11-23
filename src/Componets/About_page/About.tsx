import React from 'react';

const About = () => {
 
  return (
    <div className="about py-20 px-4 bg-gray-100 text-center">
      <h2
        className="text-3xl font-semibold mb-6 text-gray-900"
        data-aos="fade-up" 
      >
        About Me
      </h2>

    
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
        
        <div
          className="w-full md:w-1/2"
          data-aos="zoom-in" 
          data-aos-delay="200" 
        >
          <img
            src="assets/about.jpg"
            alt="About "
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Text with animation */}
        <div
          className="w-full md:w-1/2 text-left md:ml-8"
          data-aos="fade-left" // Fade-left animation for the text
          data-aos-delay="300" // Delay for the text animation
        >
          <p className="text-lg text-gray-700">
            I'm a passionate software developer with experience in various technologies. I enjoy solving complex problems and continuously learning to improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
