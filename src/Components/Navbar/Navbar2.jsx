import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdRestaurantMenu, MdClose } from "react-icons/md";
import Veg from "../../assets/Navbar2-img/veg.webp";
import nonVeg from "../../assets/Navbar2-img/non-veg.png";
import menuLogo from "../../assets/Navbar2-img/menu-logo.jpg";
import { RiDrinks2Fill } from "react-icons/ri";

const Navbar = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear user data
    setUserName(""); // Reset state
    navigate("/login"); // Redirect to login page
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-1 bg-white shadow-md">
      <div className="flex justify-start items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <motion.img
            src={menuLogo}
            alt="Logo"
            className="w-12 md:w-16 cursor-pointer"
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 p-1 text-[10px] md:px-4 md:py-2 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white font-semibold rounded-lg md:text-lg shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <MdClose className="text-sm md:text-lg text-red-500" />
          ) : (
            <MdRestaurantMenu className="text-sm md:text-lg text-green-500" />
          )}
          {isOpen ? "Close" : "Menu"}
        </motion.button>

        <div className="flex ml-9 items-center">
        {userName && (
          <span className="text-[15px] flex flex-col md:text-2xl text-yellow-600 font-semibold">Welcome, {userName}!</span>
        )}
        {userName && (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-[11px] text-white p-1 md:px-2 md:py-1 rounded-lg shadow-md transition-all"
          >
            Logout
          </button>
        )}
      </div>
      </div>

      {/* Animated Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden md:px-4"
      >
        <div className="flex flex-col items-start mt-3 space-y-3 md:flex-row md:space-x-6 md:space-y-0">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/vegetarian"
              className="text-green-500 flex items-center text-xl"
            >
              <img src={Veg} alt="" className="w-5 mr-2" />
              Vegetarian
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/non-vegetarian"
              className="text-red-500 flex items-center text-xl"
            >
              <img src={nonVeg} alt="" className="w-5 mr-2" />
              Non-Vegetarian
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="/cold-drinks"
              className="text-blue-900 flex items-center text-lg"
            >
              <RiDrinks2Fill className="text-2xl mr-2" />
              Cold Drinks
            </Link>
          </motion.div>
        </div>
      </motion.div>
    
    </nav>
  );
};

export default Navbar;
