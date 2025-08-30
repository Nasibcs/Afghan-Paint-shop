import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "#" },
  { name: "About", path: "#" },
  { name: "Contact", path: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  if (location.pathname === "/addtocard") {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#0f252a]" : "bg-navOverlay"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="text-red-500 font-extrabold text-2xl">FIERY</div>
              <div className="text-gray-300 font-semibold text-xl">PAINT</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg cursor-pointer transition text-white ${
                  item.name === "Contact"
                    ? "bg-[#f14747] text-white px-4 py-2 rounded shadow-md hover:bg-red-700"
                    : "hover:text-red-500"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <CiSearch className="text-3xl cursor-pointer text-white transition" />
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-3xl text-white cursor-pointer hover:text-red-500 transition" />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">
                  0
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <FaShoppingCart
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="text-2xl text-white cursor-pointer hover:text-red-500 transition"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 border-b cursor-pointer hover:text-red-500 transition"
            >
              {item.name}
            </Link>
          ))}
          <div className="px-4 py-3 border-b cursor-pointer hover:text-red-500 transition flex items-center gap-2">
            <CiSearch /> Search
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed top-16 right-0 w-80 md:w-96 h-[calc(100%-4rem)] bg-white shadow-lg p-4 z-50 overflow-y-auto transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <p className="text-gray-600">Cart is empty.</p>
        </div>
      )}
    </nav>
  );
}
