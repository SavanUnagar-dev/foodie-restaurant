import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Vegitarian = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const kathiyawadiItems = [
    {
      id: 1,
      name: "Ringan Bharta",
      description: "Mashed brinjal with spices.",
      price: 9,
      image: "assets/VegImg/kathiyawadi/Baingan-Bharta.jpg",
    },
    {
      id: 2,
      name: "Sev Tameta",
      description: "Tomato curry topped with sev.",
      price: 8,
      image: "assets/VegImg/kathiyawadi/Sev_Tamatar_Nu_Shaak.jpg",
    },
    {
      id: 3,
      name: "Lasaniya Bataka",
      description: "Garlic-infused potato dish.",
      price: 7,
      image: "assets/VegImg/kathiyawadi/lasaniya-bataka.jpg",
    },
    {
      id: 4,
      name: "Mag bhat",
      description: "Traditional millet bread.",
      price: 5,
      image: "assets/VegImg/kathiyawadi/mag-bhat.jpg",
    },
    {
      id: 5,
      name: "Gujarati Khichdi",
      description: "Lentil and rice dish.",
      price: 10,
      image: "assets/VegImg/kathiyawadi/vaghareli-khichdi.jpg",
    },
    {
      id: 6,
      name: "Kadhi",
      description: "Yogurt-based curry.",
      price: 8,
      image: "assets/VegImg/kathiyawadi/kadhi.webp",
    },
    {
      id: 7,
      name: "Dhokli Nu Shaak",
      description: "Wheat dumplings in curry.",
      price: 12,
      image: "assets/VegImg/kathiyawadi/Dhokli.jpg",
    },
    {
      id: 8,
      name: "Undhiyu",
      description: "Mixed vegetable dish.",
      price: 15,
      image: "assets/VegImg/kathiyawadi/undhyu.jpeg",
    },
  ];
  const punjabiItems = [
    {
      id: 11,
      name: "Paneer Butter Masala",
      description: "Creamy tomato-based curry with paneer.",
      price: 12,
      image: "assets/VegImg/punjabi/paneer-butter-masala.jpg",
    },
    {
      id: 15,
      name: "Rajma Masala",
      description: "Red kidney beans cooked in tomato gravy.",
      price: 10,
      image: "assets/VegImg/punjabi/rajma-masala.jpg",
    },
    {
      id: 16,
      name: "Sarson Da Saag",
      description: "Mustard leaves curry served with makki roti.",
      price: 14,
      image: "assets/VegImg/punjabi/sarson-saag.jpg",
    },
    {
      id: 17,
      name: "Matar Paneer",
      description: "Green peas and paneer in tomato gravy.",
      price: 11,
      image: "assets/VegImg/punjabi/matar-paneer.jpg",
    },
    {
      id: 19,
      name: "Tandoori Roti",
      description: "Traditional clay oven-baked bread.",
      price: 5,
      image: "assets/VegImg/punjabi/tanduri-roti.jpg",
    },
    {
      id: 20,
      name: "Lassi",
      description: "Refreshing yogurt-based drink.",
      price: 6,
      image: "assets/VegImg/punjabi/lassi.jpg",
    },
  ];
  const chineseItems = [
    {
      id: 21,
      name: "Veg Manchurian",
      description: "Fried vegetable balls in spicy sauce.",
      price: 10,
      image: "assets/VegImg/chaines/mansuriyam.jpg",
    },
    {
      id: 22,
      name: "Hakka Noodles",
      description: "Stir-fried noodles with vegetables.",
      price: 9,
      image: "assets/VegImg/chaines/noodles-hakka.webp",
    },
    {
      id: 23,
      name: "Spring Rolls",
      description: "Crispy rolls filled with veggies.",
      price: 8,
      image: "assets/VegImg/chaines/Spring-roll.jpg",
    },
    {
      id: 25,
      name: "Schezwan Rice",
      description: "Spicy Schezwan fried rice.",
      price: 10,
      image: "assets/VegImg/chaines/schezwan-rice.jpg",
    },
    {
      id: 26,
      name: "Hot and Sour Soup",
      description: "Spicy and tangy soup.",
      price: 7,
      image: "assets/VegImg/chaines/hot-sour-soup.jpg",
    },
    {
      id: 27,
      name: "Dim Sum",
      description: "Steamed dumplings with veggie filling.",
      price: 12,
      image: "assets/VegImg/chaines/dim sum.jpg",
    },
    {
      id: 28,
      name: "Chow Mein",
      description: "Stir-fried noodles with soy sauce.",
      price: 9,
      image: "assets/VegImg/chaines/chow-mein.jpg",
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  };
  const handleOrderClick = (item) => {
    setCurrentItem(item);
    setShowModal(true);
    setQuantity(1);
    setOrderConfirmed(false);
  };

  const handleConfirmOrder = () => {
    setOrderConfirmed(true);
    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  const renderCarousel = (items, sliderRef, title) => (
    <div className="mb-10">
      <h2 className="md:text-4xl text-2xl font-bold text-green-700 text-center md:mb-8 mb-2">
        {title}
      </h2>
      <div className="max-w-full mx-auto relative">
        <button
          className="absolute left-[-25px] md:left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-400 text-white p-2 md:p-3 rounded-full shadow-lg z-10 hidden md:block"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          className="absolute right-[-25px] md:right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-400 text-white p-2 md:p-3 rounded-full shadow-lg z-10 hidden md:block"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaArrowRight size={20} />
        </button>
        <Slider ref={sliderRef} {...settings}>
          {items.map((item) => (
            <div key={item.id} className="p-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-auto h-auto md:h-80 flex flex-col">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:h-40 h-35 object-cover"
                />
                <div className="p-4 flex-grow">
                  <h3 className="md:text-xl text-sm font-semibold text-green-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-1 text-xs md:text-base">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-green-700 font-bold text-sm md:text-lg">
                      ${item.price}
                    </span>
                    <button
                      className="bg-gradient-to-r from-green-300 to-green-500 hover:from-green-500 hover:to-green-300 text-white px-1 py-1 md:px-4 md:py-2 rounded-lg hover:bg-green-600 text-xs md:text-base"
                      onClick={() => handleOrderClick(item)}
                    >
                      Order now
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
    <div className="min-h-screen bg-green-50 py-10 px-5 relative">
      {renderCarousel(kathiyawadiItems, sliderRef1, "Kathiyawadi Menu🌶️🥵")}
      {renderCarousel(punjabiItems, sliderRef2, "Punjabi Menu🫓🧈")}
      {renderCarousel(chineseItems, sliderRef3, "Chinese Menu🥢🍜")}

      <button
        onClick={() => navigate("/")}
        className="absolute top-5 md:text-3xl left-5 flex items-center rounded-lg border border-gray-400 bg-white md:px-2 px-0 md:py-1 hover:bg-gray-100"
      >
        🔙
      </button>

      {/* Order Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <>
            {!orderConfirmed ? (
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {currentItem?.name}
                </h3>
                <img
                  src={currentItem?.image}
                  alt={currentItem?.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-2">{currentItem?.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-700 font-bold text-xl">
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
                    className="flex-1 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
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
                <p className="text-white">
                  Your {currentItem?.name} will be ready soon.
                </p>
                <p className="text-gray-200 font-semibold mt-2">
                  Total: ${(currentItem?.price * quantity).toFixed(2)}
                </p>
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default Vegitarian;
