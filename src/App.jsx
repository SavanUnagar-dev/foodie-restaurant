import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Navbar2 from "./Components/Navbar/Navbar2";
import Hero from "./Components/Hero/Hero";
import AppStore from "./Components/AppStore/AppStore";
import Footer from "./Components/Footer/Footer";
import Contacts from "./NavCompo/Contacts";
import Login from "./NavCompo/Login";
import Services1 from "./NavCompo/Services1";
import Vegiterian from "./Components/Menu/Vegiterian";
import NonVegiterian from "./Components/Menu/NonVegiterian";
import ColdDrink from "./Components/Menu/ColdDrink";
import About from "./Components/About/About";
import ProtectedRoute from "./Components/ProtectedRoute"; // Import Protected Route
import FeedBack from './Components/FeedBack/FeedBack';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Navbar2 />
                <Hero />
                <AppStore />
                <About />
                <FeedBack/>
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<Contacts />} />
          <Route path="/services" element={<Services1 />} />
          <Route path="/vegetarian" element={<Vegiterian />} />
          <Route path="/non-vegetarian" element={<NonVegiterian />} />
          <Route path="/cold-drinks" element={<ColdDrink />} />
        </Route>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

// const eggItems = [
//   {
//     id: 1,
//     name: "Egg Curry",
//     description: "Boiled eggs cooked in spicy tomato gravy.",
//     price: 10,
//     image: "assets/EggsImg/Egg_Fried_Rice.png",
//   },
//   {
//     id: 2,
//     name: "Masala Omelette",
//     description: "Perfectly boiled eggs served with salt and pepper",
//     price: 7,
//     image: "assets/EggsImg/A_Masala_Omelette_served_on_a_white_plate,_featuri.png",
//   },
//   {
//     id: 3,
//     name: "Egg Bhurji",
//     description: "Scrambled eggs with onions and spices.",
//     price: 8,
//     image: "assets/EggsImg/Egg_Bhurji.png",
//   },
//   {
//     id: 4,
//     name: "Egg Fried Rice",
//     description: "Stir-fried rice with scrambled eggs and vegetables.",
//     price: 12,
//     image: "assets/EggsImg/Egg_Fried_Rice.png",
//   },
//   {
//     id: 5,
//     name: "Boiled Egg",
//     description: "Perfectly boiled eggs served with salt and pepper.",
//     price: 5,
//     image: "assets/EggsImg/perfectly_boiled_eggs.png",
//   },
//   {
//     id: 6,
//     name: "Egg Manchurian",
//     description: "Deep-fried eggs tossed in spicy Manchurian sauce.",
//     price: 15,
//     image: "assets/EggsImg/Egg_Manchurian.png",
//   },
//   {
//     id: 7,
//     name: "Egg Paratha",
//     description: "Indian flatbread stuffed with spiced egg mixture.",
//     price: 9,
//     image: "assets/EggsImg/Egg_Paratha,_featuring.png",
//   },
//   {
//     id: 8,
//     name: "Egg Sandwich",
//     description: "Grilled sandwich stuffed with egg and veggies.",
//     price: 6,
//     image: "assets/EggsImg/Egg_Sandwich.png",
//   },
//   {
//     id: 9,
//     name: "Egg Pakora",
//     description: "Egg slices coated in gram flour batter and deep-fried.",
//     price: 10,
//     image: "assets/EggsImg/Egg_Pakora,.png",
//   },
//   {
//     id: 10,
//     name: "Egg Roll",
//     description: "Indian-style roll with egg and spicy fillings.",
//     price: 8,
//     image: "assets/EggsImg/Egg_Roll.png",
//   },
// ]; 

// const chickenItems = [
//   {
//     id: 1,
//     name: "Butter Chicken",
//     description: "Rich and creamy tomato-based chicken curry.",
//     price: 15,
//     image: "assets/nonVeg/chiken/Butter_Chicken.jpg",
//   },
//   {
//     id: 2,
//     name: "Chicken Biryani",
//     description: "Aromatic rice dish with marinated chicken.",
//     price: 14,
//     image: "assets/nonVeg/chiken/chiken-biryani.jpg",
//   },
//   {
//     id: 3,
//     name: "Tandoori Chicken",
//     description: "Char-grilled chicken marinated in spices.",
//     price: 12,
//     image: "assets/nonVeg/chiken/tandoori-chiken.jpg",
//   },
//   {
//     id: 4,
//     name: "Chicken Tikka Masala",
//     description: "Spicy and flavorful chicken in a thick tomato sauce.",
//     price: 16,
//     image: "assets/nonVeg/chiken/Chicken-Tikka-Masala.jpg",
//   },
//   {
//     id: 5,
//     name: "Chicken Korma",
//     description: "Mildly spiced, creamy chicken curry with nuts.",
//     price: 18,
//     image: "assets/nonVeg/chiken/chicken-korma.webp",
//   },
// ];  

// const fishItems = [
//   {
//     id: 7,
//     name: "Grilled Fish",
//     description: "Freshly grilled fish with lemon and herbs.",
//     price: 16,
//     image: "assets/nonVeg/fish/grilled fish.webp",
//   },
//   {
//     id: 8,
//     name: "Fish Curry",
//     description: "Spicy and tangy fish curry with coconut milk.",
//     price: 14,
//     image: "assets/nonVeg/fish/fish curry.jpg",
//   },
//   {
//     id: 9,
//     name: "Fried Fish",
//     description: "Crispy deep-fried fish with spices.",
//     price: 13,
//     image: "assets/nonVeg/fish/friy fish.jpg",
//   },
// ];