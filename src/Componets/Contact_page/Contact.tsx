import React from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaLanguage,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-4 sm:px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-yellow-400 text-center mb-12"
          data-aos="fade-down"
        >
          Contact Me
        </h2>

        <div
          className="backdrop-blur-md bg-white/5 border border-yellow-400/10 rounded-2xl p-6 sm:p-10 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10"
          data-aos="zoom-in-up"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="100">
              <FaEnvelope className="text-yellow-400 text-xl mt-1" />
              <a
                href="mailto:saravanansekar434@gmail.com"
                className="hover:text-yellow-400 transition"
              >
                saravanansekar434@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="200">
              <FaPhoneAlt className="text-yellow-400 text-xl mt-1" />
              <a href="tel:6380190949" className="hover:text-yellow-400 transition">
                +91 6380190949
              </a>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="300">
              <FaMapMarkerAlt className="text-yellow-400 text-xl mt-1" />
              <span>Thanjavur, Tamil Nadu, India</span>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="400">
              <FaLanguage className="text-yellow-400 text-xl mt-1" />
              <span>Languages: English, Tamil</span>
            </div>

            <div className="flex items-start gap-4" data-aos="fade-right" data-aos-delay="500">
              <span className="text-yellow-400 text-xl mt-1">🟢</span>
              <span>Open for full-time roles</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6" data-aos="fade-left">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Connect with me</h3>

            <div className="flex items-start gap-4">
              <FaLinkedin className="text-yellow-400 text-xl mt-1" />
              <a
                href="https://www.linkedin.com/in/saravanansekar2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-start gap-4">
              <FaGithub className="text-yellow-400 text-xl mt-1" />
              <a
                href="https://github.com/saravananCodeExplorer?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-start gap-4">
              <FaInstagram className="text-yellow-400 text-xl mt-1" />
              <a
                href="https://www.instagram.com/___s__a__r__o___/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
