import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl sm:text-3xl font-bold hover:text-yellow-400 transition-transform transform hover:scale-90"
        >
          Saravanan Sekar
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 font-normal text-base">
            {['/', '/about', '/resume', '/services', '/projects', '/contact'].map((path, idx) => {
              const labels = ['Home', 'About', 'Resume', 'Services', 'Projects', 'Contact'];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `relative py-2 text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full hover:text-yellow-400 after:transition-all after:duration-300 ${
                        isActive ? 'text-yellow-400' : ''
                      }`
                    }
                  >
                    {labels[idx]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 animate-fadeIn">
          <ul className="flex flex-col space-y-4 text-base">
            {['/', '/about', '/resume', '/services', '/projects', '/contact'].map((path, idx) => {
              const labels = ['Home', 'About', 'Resume', 'Services', 'Projects', 'Contact'];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block relative pb-2 hover:text-yellow-400 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300 ${
                        isActive ? 'text-yellow-400' : ''
                      }`
                    }
                  >
                    {labels[idx]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
