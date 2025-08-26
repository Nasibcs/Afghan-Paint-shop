import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/images/bgimg.jpg')" }}
    >
      {/* Overlay with gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Hero Content */}
      <div className="relative w-full h-full flex flex-col justify-center items-center px-4">
        
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-100 text-center tracking-tight drop-shadow-lg"
        >
          <span className="text-red-500">Afghan</span> Paint Shop
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 text-center max-w-2xl leading-relaxed"
        >
          Bringing colors to life with premium paints and finishes.  
          Quality you can trust for every wall, every home, every project.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 rounded-md bg-white/20 border border-white/30 
                     backdrop-blur-sm 
                     text-white text-sm sm:text-base font-medium 
                     shadow-md hover:shadow-xl transition-all"
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
}
