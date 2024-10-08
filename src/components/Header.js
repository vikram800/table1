import React from 'react';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="fixed w-full z-10 bg-blue-400 text-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-3xl font-bold text-white">Vikram's Portfolio</div>
        <nav className="flex space-x-6">
          <Link to="home" smooth={true} className=" hover:text-blue-500 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} className=" hover:text-blue-500 cursor-pointer">About</Link>
          <Link to="education" smooth={true} className=" hover:text-blue-500 cursor-pointer">Education</Link>
          <Link to="skills" smooth={true} className=" hover:text-blue-500 cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} className=" hover:text-blue-500 cursor-pointer">Projects</Link>
          <Link to="certificates" smooth={true} className=" hover:text-blue-500 cursor-pointer">Certificates</Link>
          <Link to="contact" smooth={true} className=" hover:text-blue-500 cursor-pointer">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
