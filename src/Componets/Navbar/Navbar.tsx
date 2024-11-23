import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-gray-800 text-white shadow-md p-4 z-50">
      <div className="container mx-auto flex justify-around items-center">
        {/* Logo */}
        <p className="text-3xl font-bold hover:text-yellow-400 transition-transform transform hover:scale-90 cursor-pointer">
          My Website
        </p>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 font-normal text-base">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="relative py-2 text-white after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full hover:text-yellow-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform transform hover:rotate-180"
          >
            {/* Animated Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 bg-black py-4 font-normal text-base">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`/${item.toLowerCase()}`}
                className="relative pb-2 hover:text-yellow-400 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
