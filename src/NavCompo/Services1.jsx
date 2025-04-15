import "react";
import { motion } from "framer-motion";
import { FaLeaf, FaDrumstickBite, FaGlassCheers } from "react-icons/fa";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Veg Delights",
    description: "Fresh and healthy vegetarian dishes made with love.",
    icon: <FaLeaf className="text-green-500 text-5xl" />,
  },
  {
    title: "Non-Veg Specials",
    description: "Juicy and flavorful non-veg dishes for meat lovers.",
    icon: <FaDrumstickBite className="text-red-500 text-5xl" />,
  },
  {
    title: "Refreshing Cold Drinks",
    description: "Cool down with our refreshing beverages and mocktails.",
    icon: <FaGlassCheers className="text-blue-500 text-5xl" />,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Services1 = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-red-200 py-12 px-6 text-center">
        <motion.h1
          className="md:text-5xl text-2xl font-extrabold text-gray-800 md:mb-10 mb-2 mt-10  uppercase tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Special Services
        </motion.h1>

        {/* Mobile Carousel (Visible on small screens) */}
        <div className="block md:hidden">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="px-4"
              >
                <div className="bg-white p-8 rounded-3xl shadow-2xl transform transition-all hover:shadow-lg hover:scale-105">
                  <div className="flex flex-col items-center">
                    {service.icon}
                    <h2 className="text-2xl font-bold text-gray-700 mt-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-500 mt-3 leading-relaxed text-center">
                      {service.description}
                    </p>
                    <button className="mt-6 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all">
                      Explore
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* Grid Layout (Visible on medium & large screens) */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl transform transition-all hover:shadow-lg hover:scale-105">
                <div className="flex flex-col items-center">
                  {service.icon}
                  <h2 className="text-2xl font-bold text-gray-700 mt-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 mt-3 leading-relaxed text-center">
                    {service.description}
                  </p>
                  <button className="mt-6 bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all">
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services1;
