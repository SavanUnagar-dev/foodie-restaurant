import "react";
import Logo from "../../assets/web imgs/food-logo.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <section className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3">
          <div className="py-4 px-2">
            <h1 className="sm:text-3xl text-xl font-bold flex text-justify mb-2 items-center gap-2">
              <img
                src={Logo}
                alt="Foodie Zone"
                className="w-10"
              />
              Foodie
            </h1>
            <p className="text-sm md:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, dolore aliquam! .</p><br/>
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Ahmedabad, Gujarat</p>
            </div>
            <div className="flex items-center gap-3">
            <FaMobileAlt />
            <p>+91 9313780379</p>
            </div>
             {/* Social Handle */}
             <div className="flex items-center gap-3 mt-3">
              <a href="#">
                <FaInstagram className="md:text-3xl text-xl text-red-600" />
              </a>
              <a href="#">
                <FaFacebook className="md:text-3xl text-xl text-blue-600" />
              </a>
              <a href="#">
                <FaLinkedin className="md:text-3xl text-xl text-blue-800" />
              </a>
            </div>
          </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:ml-5">
            <div className="py-4 px-2">
                <h1 className="sm:tex-xl md:text-xl text-sm font-bold sm:text-left text-justify">
                    Importan Links
                </h1>
                <ul className="text-sm md:text-xl">
                    <li className="hover:text-yellow-500 duration-300 hover:ml-1 cursor-pointer hover:font-bold">Home</li>
                    <li className="hover:text-yellow-500 duration-300 hover:ml-1 cursor-pointer hover:font-bold">Services</li>
                    <li className="hover:text-yellow-500 duration-300 hover:ml-1 cursor-pointer hover:font-bold">Contact</li>
                    <li className="hover:text-yellow-500 duration-300 hover:ml-1 cursor-pointer hover:font-bold">Login</li>
                </ul>
            </div>
            <div className="py-4 px-2">
                <h1 className="sm:tex-2xl md:text-xl text-sm font-bold sm:text-left text-justify">
                    Menu
                </h1>
                <ul  className="text-sm md:text-xl">
                    <li className="hover:text-green-500 duration-300 hover:ml-1 cursor-pointer hover:font-bold">Vegitarian</li>
                    <li className="hover:text-red-500 duration-300 hover:ml-1 cursor-pointer hover:font-bold">Non-vegiterian</li>
                    <li className="hover:text-blue-800 duration-300 hover:ml-1 cursor-pointer hover:font-bold">Cold Drinks</li>
                </ul>
            </div> 
           </div>
        </div>

        <div>
          <div className="text-center py-5 border-t-2 border-gray-300/50 text-sm md:text-xl">
            @copyright 2025 All rights reserved || Made with ❤️ by Savan
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
