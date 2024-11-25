import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";



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
            <IoHomeOutline size={30} />

          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
            <IoPersonOutline size={30} />

          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
            <IoNewspaperOutline  size={30}/>
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
          <RiComputerLine  size={30}/>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
        <GrProjects  size={30}/>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-300 hover:text-yellow-400 transition duration-300 ${
                isActive ? 'text-yellow-400' : ''
              }`
            }
          >
          <MdOutlineContactPhone size={30} />
          </NavLink>
        </div>

     

       
      </div>
    </footer>
  );
};

export default Footer;
