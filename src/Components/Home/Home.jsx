import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center px-4 sm:px-8 md:px-12"
      style={{ backgroundImage: "url('/images/bgimg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-3xl space-y-6 px-4"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
          <span className="text-red-500">Afghan</span> Paint Shop
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Bringing colors to life with premium paints and finishes.  
          Quality you can trust for every wall, every home, every project.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-center"
        >
          <button className="relative px-8 py-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300">
            <span className="relative z-10">Shop Now</span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 blur-lg opacity-40 transition-all duration-300 group-hover:opacity-70"></span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
