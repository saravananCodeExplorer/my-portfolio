import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline, IoPersonOutline, IoNewspaperOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 py-8 shadow-inner">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        
        {/* Footer Logo */}
        <p className="text-3xl font-bold text-yellow-400 tracking-wider">Saro :)</p>

        {/* Navigation Icons */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-300 ${
                isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
              }`
            }
          >
            <IoHomeOutline size={24} />
            <span className="mt-1">Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-300 ${
                isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
              }`
            }
          >
            <IoPersonOutline size={24} />
            <span className="mt-1">About</span>
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-300 ${
                isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
              }`
            }
          >
            <IoNewspaperOutline size={24} />
            <span className="mt-1">Resume</span>
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-300 ${
                isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
              }`
            }
          >
            <RiComputerLine size={24} />
            <span className="mt-1">Services</span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-300 ${
                isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
              }`
            }
          >
            <GrProjects size={24} />
            <span className="mt-1">Projects</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex flex-col items-center transition duration-300 ${
                isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
              }`
            }
          >
            <MdOutlineContactPhone size={24} />
            <span className="mt-1">Contact</span>
          </NavLink>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-4">&copy; 2025 Saravanan Sekar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
