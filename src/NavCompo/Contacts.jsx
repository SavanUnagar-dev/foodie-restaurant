import "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar/Navbar";

const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-red-200 py-10 px-5 text-center">
        <motion.h1
          className="md:text-5xl text-2xl font-extrabold text-gray-800 mb-5 uppercase tracking-wide drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-2xl transform transition-all hover:shadow-lg hover:scale-105">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="md:text-2xl text-xl font-bold text-gray-700 mb-5">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full md:px-4 px-2 md:py-3 py-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full md:px-4 px-2 md:py-3 py-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full md:px-4 px-2 md:py-3 py-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-400"
                ></textarea>
                <motion.button
                  className="w-full bg-gradient-to-r from-red-500 to-yellow-500 hover:from-yellow-500 hover:to-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="text-left flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="md:text-2xl text-xl font-bold text-gray-700">Get In Touch</h2>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-red-500 md:text-2xl text-xl" />
                <a
                  href="tel:+1234567890"
                  className="md:text-lg text-sm text-gray-700 hover:text-red-500"
                >
                  +91 9313780389
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-red-500 md:text-2xl text-xl" />
                <a
                  href="mailto:contact@restaurant.com"
                  className="md:text-lg text-sm text-gray-700 hover:text-red-500"
                >
                  foodie@restaurant.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-500 md:text-2xl text-xl" />
                <p className="md:text-lg text-sm text-gray-700">
                  123 Food Street, ahmedabad
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
