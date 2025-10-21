import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md shadow-lg z-50 text-white">
      <ul className="flex justify-center space-x-8 py-4 font-semibold">
        <li><a href="#hero" className="hover:text-yellow-300">Home</a></li>
        <li><a href="#about" className="hover:text-yellow-300">About</a></li>
        <li><a href="#skills" className="hover:text-yellow-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
