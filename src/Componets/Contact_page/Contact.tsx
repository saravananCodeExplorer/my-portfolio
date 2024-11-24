import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8" data-aos="fade-up">
        Contact Me
      </h2>
      <p className="text-lg text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
        Feel free to reach out to me for any inquiries, collaborations, or just a friendly chat!
      </p>

      {/* Contact Details */}
      <div className="space-y-6 text-left text-lg max-w-lg mx-auto">
        <div className="flex items-center">
          <span className="text-yellow-400 font-semibold w-32">Email:</span>
          <a
            href="mailto:saravanansekar434@gmail.com"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            saravanansekar434@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-400 font-semibold w-32">Phone:</span>
          <a
            href="tel:6380190949"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            +91 6380190949
          </a>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-400 font-semibold w-32">Location:</span>
          <p className="text-gray-300">Thanjavur, Tamil Nadu, India</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/saravanansekar2003/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/saravananCodeExplorer?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/___s__a__r__o___/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Contact;
