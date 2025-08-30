import { FiArrowRight } from "react-icons/fi";
import img1 from "../../../public/images/cardimg.jpg";


export default function Cards() {
  const cards = [
    {
      img: img1,
      title: "Project-Based Product Consultation",
      desc: "We help you choose the best paint according to your project needs with professional recommendations for maximum results.",
    },
    {
      img: img1,
      title: "Waterproofing Paint Solutions",
      desc: "We provide high-quality waterproof paint to protect walls from leaks, seepage, and moisture damage.",
    },
    {
      img: img1,
      title: "Custom Products & Large-Scale Procurement",
      desc: "Custom product services for your project needs, and large-scale procurement for construction and development, with guaranteed availability and timely delivery.",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group h-80 sm:h-96 cursor-pointer"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-5 text-white">
              <h3 className="text-lg sm:text-xl font-semibold">{card.title}</h3>
              <p className="text-sm sm:text-base mt-2">{card.desc}</p>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium">
                <span>Learn More</span>
                <FiArrowRight className="text-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
