import React from "react";

const articles = [
  {
    id: 1,
    date: "August 29, 2024",
    title: "Tips for Choosing High-Quality Paint for Your Home",
    image:
      "https://images.unsplash.com/photo-1581091870622-6c6a2b80f3f5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    date: "August 29, 2024",
    title: "Benefits of Water-Based Paint for a Modern Home",
    image:
      "https://images.unsplash.com/photo-1608571429261-b57a6e8617a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    date: "August 29, 2024",
    title: "Guide: How to Use Colors to Beautify Your Rooms",
    image:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Article() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Article Cards */}
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
