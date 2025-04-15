import "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const textData = [
    "🍽️ Welcome to our restaurant, where **passion** for food meets **excellence** in service. Our journey started with a simple goal: to bring 🍛 **delicious flavors** from around the world to your plate.",
    "🥗 We take pride in using **fresh ingredients**, unique recipes, and a warm ambiance to create an **unforgettable dining experience**. ✨",
    "🎉 Whether you are here for a **casual meal**, a special **celebration**, or a quick bite, we are committed to making every visit **exceptional**. 🍕",
    "🙏 Thank you for being part of our story. We look forward to **serving you soon**! 🍽️😊"
  ];
  

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="md:min-h-[400px] bg-gray-100 md:py-12 md:px-4 py-2 px-2 text-center z-10">
      <motion.h1
        className="md:text-5xl text-xl font-extrabold text-gray-800 mb-3 uppercase tracking-wide drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-200 to-purple-200 p-5 rounded-3xl shadow-2xl transform transition-all hover:shadow-lg hover:scale-105">
        {/* Mobile Carousel - Only visible on small screens */}
        <div className="block md:hidden">
          <Slider {...settings}>
            {textData.map((text, index) => (
              <motion.p
                key={index}
                className="text-gray-700 md:text-lg text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {text}
              </motion.p>
            ))}
          </Slider>
        </div>

        {/* Static Text - Only visible on medium & larger screens */}
        <div className="hidden md:block">
          {textData.map((text, index) => (
            <motion.p
              key={index}
              className={`text-gray-700 text-lg leading-relaxed ${index !== 0 ? "mt-6" : ""}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 + index * 0.2 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
