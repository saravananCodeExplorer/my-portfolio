import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto text-center">
        {/* Footer Logo */}
        <p className="text-2xl font-bold text-yellow-400 mb-4">My Website</p>

        {/* Links Section */}
        <div className="flex justify-center space-x-6 mb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/saravanan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/saravanan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/saravanan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Twitter
          </a>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
