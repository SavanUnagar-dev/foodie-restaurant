import { useState } from "react";
import { motion } from "framer-motion";
import bgImg from "../../assets/web imgs/vector3.png";
import Veg from "../../assets/Hero-img/hero-veg.png";
import nonVeg from "../../assets/Hero-img/biryani3.png";
import Cold from "../../assets/Hero-img/hero-cold.png";

const ImageList = [
  { id: 1, img: Veg, title: "Vegetarian Food" },
  { id: 2, img: nonVeg, title: "Non-Vegetarian Food" },
  { id: 3, img: Cold, title: "Cold Drink" },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = useState(Veg);

  return (
    <>
      <div
        style={bgImage}
        className="min-h-[300px] md:min-h-[570px] sm:min-h-[600px] bg-gray-100 justify-center items-center px-5"
      >
        <div className="pb-5 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center gap-4 pt-2 sm:p-0 text-center sm:text-left order-2 sm:order-1"
            >
              <motion.h1
                className="text-xl sm:text-6xl md:pt-9 text-gray-700 lg:text-7xl font-extrabold md:mb-2 drop-shadow-lg"
                initial={{ opacity: 0, x: -100 }} // 2D slide-in effect
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                whileHover={{ rotateY: 10, scale: 1.05 }} // 3D tilt effect on hover
              >
                Welcome to the{" "}
                <span className="md:text-yellow-400 border-b-2 border-amber-500">Foodie</span> Zone
              </motion.h1>
              <p className="text-[10px] md:text-[16px] md:font-medium px-1 md:mb-2">
                Foodie Restaurant offers a great variety of non-veg cold drinks
                and fresh, hot farm food. All dishes are flavorful and made with
                quality ingredients. Whether you are dining in or ordering
                delivery, the service is top-notch, ensuring a satisfying
                experience.
              </p>
              <div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-r from-yellow-300 to-orange-500 md:px-4 md:py-2 px-2 py-1 text-[13px] rounded-full text-white font-semibold hover:scale-105 duration-200"
                >
                  Learn More...
                </motion.button>
              </div>
            </motion.div>
            {/* Img section */}
            <div className="order-1 sm:order-2 min-h-[300px] sm:min-h-[450px] flex justify-center items-center relative">
              {/* Main img section */}
              <motion.div
                key={imageId}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center h-[300px] sm:h-[450px] overflow-hidden flex-col items-center"
              >
                <img
                  src={imageId}
                  alt="Main Dish"
                  className={`mx-auto animate-pulse duration-500 ${
                    imageId === Cold
                      ? "w-[130px] sm:w-[210px] h-[150px] sm:h-[300px]"
                      : "w-[160px] sm:w-[350px] h-[150px] sm:h-auto"
                  }`}
                />
                <p className="text-[15px] font-extrabold justify-center items-center flex md:text-xl md:text-amber-50 md:font-bold">
                  {ImageList.find((item) => item.img === imageId)?.title}
                </p>
              </motion.div>

              {/* Img List section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex h-[60px] sm:h-[300px] flex-row sm:flex-col bottom-0 sm:top-1/2 sm:-translate-y-1/2 py-0 sm:py-2 justify-center gap-4 absolute left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-[25px] bg-gradient-to-l to-yellow-500/50 from-white/50 sm:bg-white/50 rounded-full px-4 sm:px-0"
              >
                {ImageList.map((item) => (
                  <motion.img
                    key={item.id}
                    src={item.img}
                    onClick={() => setImageId(item.img)}
                    whileHover={{ scale: 1.1 }}
                    className="max-w-[70px] h-[60px] sm:h-[80px] mx-1 sm:mx-0 object-contain inline-block hover:scale-110 duration-200"
                    alt={`Image ${item.id}`}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
