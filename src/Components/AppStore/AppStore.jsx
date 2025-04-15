import { motion } from "framer-motion";
import AppStoreing from "../../assets/web imgs/app_store.png";
import PlayStore from "../../assets/web imgs/play_store.png";
import Gif from "../../assets/web imgs/mobile_bike.gif";

const AppStore = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-10 text-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 max-w-6xl mx-auto"
      >
        {/* Left Section */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-700 drop-shadow-lg">
            Foodly is available for <span className="text-yellow-400">Android</span> & <span className="text-blue-400">iOS</span>
          </h1>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.a 
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={PlayStore} 
                alt="playstore"
                className="w-[140px] md:w-[180px] drop-shadow-lg"
              />
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={AppStoreing} 
                alt="appstore"
                className="w-[140px] md:w-[180px] drop-shadow-lg"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          initial={{ scale: 0.8, rotateY: 30 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <motion.img 
            src={Gif} 
            alt="mobile animation" 
            className="w-[250px] sm:w-[300px] md:w-[400px] drop-shadow-xl"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppStore;
