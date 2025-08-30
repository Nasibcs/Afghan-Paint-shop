import { useState } from "react";
import sealer from "./image/sealer.png";
import gold from "./image/gold.png";
import watergloss from "./image/watergloss.webp";
import diamond from "./image/diamond.png";
import platinum from "./image/platinum.jpg";
import silver from "./image/silver1.jpg"

const products = [
  {
    name: "SILVER",
    price: 400, 
    image: silver,
    features: [
      "Durability up to 2 years",
      "Perfect for basic wall surfaces",
      "Good coverage performance",
      "Optimal resistance for daily use",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
  },
  {
    name: "GOLD",
    price: 580,
    image: gold,
    features: [
      "Durability up to 5 years",
      "Bright and vibrant colors",
      "Excellent coverage quality",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
    waterproof: "20 Kg",
  },
  {
    name: "DIAMOND",
    price: 420,
    image: diamond,
    features: [
      "Durability up to 7 years",
      "Outstanding coverage and absorption",
      "Superior color retention",
      "Strong resistance to weather conditions",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
    waterproof: "20 Kg",
  },
  {
    name: "SEALER",
    price: 640,
    image: sealer,
    features: ["Base coat for stronger, longer-lasting paint results"],
    interior: "25 Kg",
    exterior: "25 Kg",
  },
  {
    name: "WATERGLOSS",
    price: 560,
    image: watergloss,
    features: [
      "Water-based formula",
      "Suitable for multiple surfaces",
      "Odor-free & safe for indoor use",
      "Quick drying time",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
  },
  {
    name: "PLATINUM",
    price: 200,
    image: platinum,
    features: [
      "Durability up to 10 years",
      "Ultra-premium smooth finish",
      "Advanced weather resistance",
      "Eco-friendly & low VOC formula",
      "Superior stain and dirt resistance",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
    waterproof: "20 Kg",
  },
];

export default function ProductStore() {
  const [cart, setCart] = useState([]);

  const handleBuyNow = (product) => {
    setCart([...cart, product]);
  };


  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Products */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
          Our Products
        </h2>
        <p className="text-center text-gray-600 mb-14 max-w-3xl mx-auto">
          Afghan Paint is your trusted choice for creating beautiful, functional, 
          and lasting spaces...
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 flex items-center justify-center rounded-full mb-6 shadow-inner">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-red-600 font-semibold mb-4 text-lg">{product.price} AF</p>
              <ul className="text-gray-600 text-sm mb-6 space-y-2 text-left w-full max-w-xs">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-600 mr-2">✔</span> {feature}
                  </li>
                ))}
                <li><span className="font-semibold">Interior:</span> {product.interior}</li>
                <li><span className="font-semibold">Exterior:</span> {product.exterior}</li>
                {product.waterproof && (
                  <li><span className="font-semibold">Waterproof:</span> {product.waterproof}</li>
                )}
              </ul>
              <button
                
                className="mt-auto bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 shadow-md hover:shadow-lg w-full"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
