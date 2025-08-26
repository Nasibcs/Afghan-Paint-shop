import { motion } from "framer-motion";
import { FaPaintRoller, FaStar } from "react-icons/fa";
import { GiPaintBucket, GiEarthAsiaOceania } from "react-icons/gi";
import { MdOutlineHandshake } from "react-icons/md";

export default function PaintCards() {
  const features = [
    {
      icon: <FaPaintRoller className="text-red-600 text-4xl" />,
      title: "Active Self-Leveling",
    },
    {
      icon: <GiPaintBucket className="text-red-600 text-4xl" />,
      title: "Modified Acrylic",
    },
    {
      icon: <FaPaintRoller className="text-red-600 text-4xl" />,
      title: "Easy-Stir Mode",
    },
    {
      icon: <GiEarthAsiaOceania className="text-red-600 text-4xl" />,
      title: "Premium & Eco-Friendly",
    },
    {
      icon: <MdOutlineHandshake  className="text-red-600 text-4xl" />,
      title: "Trusted Reputation",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h3 className="text-red-600 font-semibold text-sm uppercase">Afghan Paint</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-gray-900">
          The Advantages That Make Our Products the Best Choice
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Afghan Paint provides high-quality painting solutions with products designed to meet
          interior, exterior, and waterproofing needs. We prioritize perfect, durable results
          with the latest technology for easy application and long-term protection.
        </p>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer"
            >
              {feature.icon}
              <p className="mt-3 text-gray-800 font-medium text-center text-sm sm:text-base">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
