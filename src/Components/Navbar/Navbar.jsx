import { useState,useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = ["Home", "Products", "About", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled , setIsScrolled ] = useState(false);

    useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 ${
          isScrolled ? "bg-[#0f252a]" : "bg-navOverlay"
        }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center gap-2">
            <div className="text-red-500 font-extrabold text-2xl">
              FIERY
            </div>
            <div className="text-gray-300 font-semibold text-xl">
              PAINT
            </div>
          </div>

     <div className="hidden md:flex items-center gap-8">
  {menuItems.map((item) => (
    <h1
      key={item}
      className={`text-lg cursor-pointer transition text-white
        ${item === "Contact" 
          ? "bg-[#f14747] text-white px-4 py-2 rounded shadow-md hover:bg-red-700 md:py-1" 
          : "hover:text-red-500"}`}
    >
      {item}
    </h1>
  ))}
  <CiSearch className="text-3xl cursor-pointer hover:text-red-500 transition" />
</div>


          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes className="text-white"/> : <FaBars className="text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col">
          {menuItems.map((item) => (
            <h1
              key={item}
              className="px-4 py-3 border-b cursor-pointer hover:text-red-500 transition"
            >
              {item}
            </h1>
          ))}
          <div className="px-4 py-3 border-b cursor-pointer hover:text-red-500 transition flex items-center gap-2">
            <CiSearch />Search
          </div>
        </div>
      )}
    </nav>
  );
}
