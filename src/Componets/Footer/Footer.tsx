import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto text-center">
        {/* Footer Logo */}
        <p className="text-2xl font-bold text-yellow-400 mb-4">Saro:)</p>

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
            to="/resume"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
            Resume
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
            to="/projects"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
            Projects
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

     

       
      </div>
    </footer>
  );
};

export default Footer;
