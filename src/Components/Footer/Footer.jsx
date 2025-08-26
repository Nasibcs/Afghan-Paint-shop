import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left: Logo & About */}
        <div>
          <h2 className="text-2xl font-extrabold text-red-600">AFGHAN <span className="text-gray-900">PAINT</span></h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Afghan Paint is a company that produces high-quality paints for 
            interior, exterior, and waterproofing needs. Using the best raw 
            materials and modern technology, we provide durable, eco-friendly, 
            and easy-to-apply products.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle: Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-600">Home</a></li>
            <li><a href="#" className="hover:text-red-600">About</a></li>
            <li><a href="#" className="hover:text-red-600">Products</a></li>
            <li><a href="#" className="hover:text-red-600">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-2"><span className="font-semibold">Address:</span> Kabul, Afghanistan</p>
          <p className="text-sm mb-2"><span className="font-semibold">Phone:</span> +93 700 000 000</p>
          <p className="text-sm"><span className="font-semibold">Email:</span> afghanpaint@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-gray-300 mt-10 pt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Afghan Paint. All Rights Reserved.  
        <br /> Designed & Developed By <span className="text-blue-500">
            <a href="https://www.linkedin.com/in/nasib-burhan-ab446235b/">Nasibullah Burhan</a></span>
      </div>
    </footer>
  );
}
