import React from "react";
import img from "./image/image.jpg";

export default function Desc() {
  return (
    <div className="w-full px-6 py-10 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <h3 className="text-sm text-red-600 font-semibold uppercase">
            Afghan Paint
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-3">
            Quality Paints for Homes & Spaces that Inspire
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-base">
            Afghan Paint is dedicated to producing high-quality wall paints 
            for interior, exterior, and waterproofing needs. Using the best raw 
            materials and modern technology, we deliver durable, eco-friendly, 
            and easy-to-apply products.
          </p>
          <p className="mt-3 text-gray-600 leading-relaxed text-base">
            We are committed to providing the best solutions for our customers, 
            from private homes to commercial projects. With a wide range of color 
            options and outstanding results, Afghan Paint is your trusted partner 
            in creating beautiful and inspiring spaces.
          </p>
          <button className="mt-6 inline-block px-6 py-3 bg-red-600 text-white text-base font-medium rounded-lg shadow-md hover:bg-red-700 transition">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="Afghan Paint Interior"
            className="w-full h-64 sm:h-80 md:h-96 rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
