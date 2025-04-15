import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const NonVegetarian = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const eggItems = [
    {
      id: 1,
      name: "Egg Curry",
      description: "Boiled eggs cooked in spicy tomato gravy.",
      price: 10,
      image: "assets/EggsImg/Egg_Fried_Rice.png",
    },
    {
      id: 2,
      name: "Masala Omelette",
      description: "Perfectly boiled eggs served with salt and pepper",
      price: 7,
      image:
        "assets/EggsImg/A_Masala_Omelette_served_on_a_white_plate,_featuri.png",
    },
    {
      id: 3,
      name: "Egg Bhurji",
      description: "Scrambled eggs with onions and spices.",
      price: 8,
      image: "assets/EggsImg/Egg_Bhurji.png",
    },
    {
      id: 4,
      name: "Egg Fried Rice",
      description: "Stir-fried rice with scrambled eggs and vegetables.",
      price: 12,
      image: "assets/EggsImg/Egg_Fried_Rice.png",
    },
    {
      id: 5,
      name: "Boiled Egg",
      description: "Perfectly boiled eggs served with salt and pepper.",
      price: 5,
      image: "assets/EggsImg/perfectly_boiled_eggs.png",
    },
    {
      id: 6,
      name: "Egg Manchurian",
      description: "Deep-fried eggs tossed in spicy Manchurian sauce.",
      price: 15,
      image: "assets/EggsImg/Egg_Manchurian.png",
    },
    {
      id: 7,
      name: "Egg Paratha",
      description: "Indian flatbread stuffed with spiced egg mixture.",
      price: 9,
      image: "assets/EggsImg/Egg_Paratha,_featuring.png",
    },
    {
      id: 8,
      name: "Egg Sandwich",
      description: "Grilled sandwich stuffed with egg and veggies.",
      price: 6,
      image: "assets/EggsImg/Egg_Sandwich.png",
    },
    {
      id: 9,
      name: "Egg Pakora",
      description: "Egg slices coated in gram flour batter and deep-fried.",
      price: 10,
      image: "assets/EggsImg/Egg_Pakora,.png",
    },
    {
      id: 10,
      name: "Egg Roll",
      description: "Indian-style roll with egg and spicy fillings.",
      price: 8,
      image: "assets/EggsImg/Egg_Roll.png",
    },
  ];

  const chickenItems = [
    {
      id: 1,
      name: "Butter Chicken",
      description: "Rich and creamy tomato-based chicken curry.",
      price: 15,
      image: "assets/nonVeg/chiken/Butter_Chicken.jpg",
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description: "Aromatic rice dish with marinated chicken.",
      price: 14,
      image: "assets/nonVeg/chiken/chiken-biryani.jpg",
    },
    {
      id: 3,
      name: "Tandoori Chicken",
      description: "Char-grilled chicken marinated in spices.",
      price: 12,
      image: "assets/nonVeg/chiken/tandoori-chiken.jpg",
    },
    {
      id: 4,
      name: "Chicken Tikka Masala",
      description: "Spicy and flavorful chicken in a thick tomato sauce.",
      price: 16,
      image: "assets/nonVeg/chiken/Chicken-Tikka-Masala.jpg",
    },
    {
      id: 5,
      name: "Chicken Korma",
      description: "Mildly spiced, creamy chicken curry with nuts.",
      price: 18,
      image: "assets/nonVeg/chiken/chicken-korma.webp",
    },
  ];

  const fishItems = [
    {
      id: 7,
      name: "Grilled Fish",
      description: "Freshly grilled fish with lemon and herbs.",
      price: 16,
      image: "assets/nonVeg/fish/grilled fish.webp",
    },
    {
      id: 8,
      name: "Fish Curry",
      description: "Spicy and tangy fish curry with coconut milk.",
      price: 14,
      image: "assets/nonVeg/fish/fish curry.jpg",
    },
    {
      id: 9,
      name: "Fried Fish",
      description: "Crispy deep-fried fish with spices.",
      price: 13,
      image: "assets/nonVeg/fish/friy fish.jpg",
    },
  ];

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 2 } }],
  };

  const handleOrder = (item) => {
    setCurrentItem(item);
    setShowModal(true);
    setQuantity(1);
  };

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const renderCarousel = (items, sliderRef, title) => (
    <div className="mb-10">
      <h2 className="md:text-4xl text-2xl font-bold text-red-700 text-center md:mb-8 mb-4">
        {title}
      </h2>
      <div className="max-w-full mx-auto relative">
        <button
          className="absolute left-[-25px] md:left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-400 text-white p-2 md:p-3 rounded-full shadow-lg z-10 md:block hidden"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          className="absolute right-[-25px] md:right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-400 text-white p-2 md:p-3 rounded-full shadow-lg z-10 md:block hidden"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaArrowRight size={20} />
        </button>
        <Slider ref={sliderRef} {...settings}>
          {items.map((item) => (
            <div key={item.id} className="p-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-auto h-auto md:h-auto flex flex-col">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:h-50 h-30 object-fill"
                />
                <div className="p-4 flex-grow">
                  <h3 className="md:text-xl text-sm font-semibold text-red-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-xs md:text-base">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-red-700 font-bold text-sm md:text-lg">
                      ${item.price}
                    </span>
                    <button
                      className="bg-gradient-to-r from-red-300 to-red-500 hover:from-red-500 hover:to-red-300 text-white px-1 py-1 md:px-4 md:py-2 rounded-lg hover:bg-red-600 text-xs md:text-base"
                      onClick={() => handleOrder(item)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-red-50 py-10 px-5 relative">
      {renderCarousel(eggItems, sliderRef1, "Egg Dishes🥚🍳")}
      {renderCarousel(chickenItems, sliderRef2, "Chicken Dishes🍗🔥")}
      {renderCarousel(fishItems, sliderRef3, "Fish Dishes🐟🍽")}

      <button
        onClick={() => navigate("/")}
        className="absolute top-5 text-xl md:text-3xl left-5 flex items-center rounded-lg border border-gray-400 bg-white md:px-2 px-0 md:py-1 hover:bg-gray-100"
      >
        🔙
      </button>

      {/* Order Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            {!orderConfirmed ? (
              <>
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  {currentItem?.name}
                </h3>
                <img
                  src={currentItem?.image}
                  alt={currentItem?.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-2">{currentItem?.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-red-700 font-bold text-xl">
                    ${currentItem?.price}
                  </span>
                  <div className="flex items-center">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-200 px-3 py-1 rounded-l-lg"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                   onClick={handleConfirmOrder}
                    className="flex-1 bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Confirm Order
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="text-green-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  Order Confirmed!
                </h3>
                <p className="text-gray-600">
                  Your {currentItem?.name} will be ready soon.
                </p>
                <p className="text-gray-800 font-semibold mt-2">
                  Total: ${(currentItem?.price * quantity).toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NonVegetarian;
