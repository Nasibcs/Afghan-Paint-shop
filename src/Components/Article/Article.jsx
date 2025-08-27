import one from "./image/one.jpg"
import tow from "./image/tow.jpg"
import three from "./image/three.jpg"
const articles = [
  {
    id: 1,
    date: "August 29, 2024",
    title: "Tips for Choosing High-Quality Paint for Your Home",
    image:one,
  },
  {
    id: 2,
    date: "August 29, 2024",
    title: "Benefits of Water-Based Paint for a Modern Home",
    image:
      tow,
  },
  {
    id: 3,
    date: "August 29, 2024",
    title: "Guide: How to Use Colors to Beautify Your Rooms",
    image:three
  },
];

export default function Article() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-sm font-semibold text-red-500 uppercase tracking-wide">
            Articles
          </h4>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            Explore Our Latest Articles
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Afghan Paint brings you the best tips and insights from the world of
            painting. Discover how to choose the right paint, maintain your
            walls, and bring inspiration to beautify your home.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800 hover:text-red-500 cursor-pointer">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
