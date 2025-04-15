import { useState } from "react";
// import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import Logo from "../../assets/web imgs/food-logo.png";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="shadow-md bg-amber-50 dark:text-white duration-200 z-99">
      <div className="">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
            >
              <img
                src={Logo}
                alt="Foodie Zone"
                className="w-12 animate-[spin_10s_linear_infinite]"
              />
              <h1 className="md:text-4xl font-extrabold text-white relative uppercase">
                <span className="absolute top-1 left-1 text-gray-900 opacity-10">
                  Foodie
                </span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                  Foodie
                </span>
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-4 font-bold text-xl">
              <li>
                <Link
                  to="/"
                  className="inline-block py-4 px-4 hover:text-[#ffc001] duration-150 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="inline-block py-4 px-4 hover:text-[#ffc001] duration-150 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="inline-block py-4 px-4 hover:text-[#ffc001] duration-150 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl text-black dark:text-white mr-2"
          >
            <TiThMenu className="text-orange-700 font-bold text-3xl" />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-opacity-50 z-40 transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } duration-300`}
          onClick={closeMenu} // This will close menu when clicking on overlay
        >
          <div
            className={`fixed top-0 right-0 shadow shadow-amber-300 rounded-l-xl border-amber-500 w-45 bg-amber-50 p-4 h-full transition-transform transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } duration-300 z-50`}
            onClick={(e) => e.stopPropagation()} // This prevents clicks inside menu from closing it
          >
            {/* Close button */}
            <button
              onClick={closeMenu}
              className="text-3xl absolute p-1 text-orange-700 top-4 right-4"
            >
              <IoClose />
            </button>

            <ul className="flex flex-col gap-6 font-semibold mt-16">
              <li>
                <Link
                  to="/"
                  className="inline-block px-4 py-2 hover:text-[#ffc001] duration-150 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="inline-block px-4 py-2 hover:text-[#ffc001] duration-150 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="inline-block px-4 py-2 hover:text-[#ffc001] duration-150 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
