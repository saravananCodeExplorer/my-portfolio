import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        {/* Footer Logo */}
        <p className="text-2xl font-bold text-yellow-400 mb-4">My Website</p>

        {/* Links Section */}
        <div className="flex justify-center space-x-6 mb-4">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-yellow-400 transition duration-300"
            >
              {item}
            </a>
          ))}
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

        {/* Copyright Section */}
        <p className="text-sm">
          © {new Date().getFullYear()} Saravanan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
