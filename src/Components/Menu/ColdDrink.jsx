import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColdDrinks = () => {
  const navigate = useNavigate();
  const [coldDrinks] = useState([
    { id: 1, name: "Coca Cola", description: "Refreshing cola drink.", price: 2, image: "src/assets/cold_img/cola.jpg" },
    { id: 2, name: "Sprite", description: "Cool and bubbly Sprite.", price: 2, image: "src/assets/cold_img/sprite.webp" },
    { id: 3, name: "Mango", description: "Fresh mango shake with ice cream.", price: 5, image: "src/assets/cold_img/mango.jpg" },
    { id: 4, name: "Lemon Soda", description: "Sparkling soda with lemon flavor.", price: 3, image: "src/assets/cold_img/lemon.webp"}
  ]);

  // State for modal and order
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

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

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-5">
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 text-xl md:text-3xl left-5 flex items-center rounded-lg border border-gray-400 bg-white md:px-2 px-0 md:py-1 hover:bg-gray-100"
      >
        🔙
      </button>
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-8 mt-2">Cold Drinks Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {coldDrinks.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-800">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-700 font-bold text-lg">${item.price}</span>
                <button 
                  onClick={() => handleOrderClick(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            {!orderConfirmed ? (
              <>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {currentItem?.name}
                </h3>
                <img
                  src={currentItem?.image}
                  alt={currentItem?.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600 mb-2">{currentItem?.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-blue-700 font-bold text-xl">
                    ${currentItem?.price}
                  </span>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-200 px-3 py-1 rounded-l-lg"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">
                      {quantity}
                    </span>
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
                    className="flex-1 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Confirm Order
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="text-green-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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

export default ColdDrinks;