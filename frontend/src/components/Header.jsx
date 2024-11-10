




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/buysmartlogo.png"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-black shadow-lg py-3 fixed top-0 left-0 w-full z-50 transition-all duration-500">
     <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="BuySmart Logo" className="h-20 w-20 sm:h-20 sm:w-36" /> {/* Logo Image */}
        <div className="text-3xl font-extrabold tracking-wide">
         
        </div>
      </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="relative text-black hover:text-[#C99780] transition duration-300 group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#C99780] group-hover:w-full transition-all duration-300"></span>
          </Link>
          {/* <Link
            to="/about"
            className="relative text-white hover:text-[C99780] transition duration-300 group"
          >
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#3A98B9] group-hover:w-full transition-all duration-300"></span>
          </Link> */}
          <Link
            to="/women"
            className="relative text-black hover:text-[#C99780] transition duration-300 group"
          >
            Women
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#C99780] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/men"
            className="relative text-black hover:text-[#C99780] transition duration-300 group"
          >
            men
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#C99780] group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/signup"
            className="relative text-black hover:text-[#144272] transition duration-300 group bg-[#C99780] px-4 py-2 rounded-full"
          >
           Signup   </Link>
          {/* <Link
            to="/login"
            className="relative text-white hover:text-yellow-300 transition duration-300 group bg-green-500 px-4 py-2 rounded-full"
          >
        Login
          </Link> */}
        </nav>

        {/* Hamburger Icon (Shown on Small Screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-black transform transition-transform duration-300" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-black transform transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible on Small Screens) */}
      {isOpen && (
        <nav className="md:hidden bg-white rounded-xl shadow-xl mt-4 mx-4 p-6 space-y-6 text-gray-900">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Home
          </Link>
          {/* <Link
            to="/about"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            About Us
          </Link> */}
          <Link
            to="/women"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Women
          </Link>
          <Link
            to="/men"
            onClick={toggleMenu}
          
         className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Men
          </Link>
          
          

          <Link
            to="/signup"
            className="relative text-white hover:text-blue-500 transition duration-300 group bg-[#C99780] px-4 py-2 rounded-full "
          >
           Signup   </Link>
          {/* <Link
            to="/login"
            className="relative text-white hover:text-yellow-300 transition duration-300 group bg-green-500 px-4 py-2 rounded-full"
          >
        Login
          </Link> */}
        </nav>
      )}
    </header>
  );
};

export default Header;
