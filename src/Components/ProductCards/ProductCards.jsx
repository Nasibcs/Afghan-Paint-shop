// import React from "react";
// import silverImg from "./images/silver.png"; // replace with your image paths
// import goldImg from "./images/gold.png";
// import diamondImg from "./images/diamond.png";
// import sealerImg from "./images/sealer.png";
// import waterglossImg from "./images/watergloss.png";

const products = [
  {
    name: "SILVER",
    image: "#",
    features: [
      "Daya Tahan Min. 2 Tahun",
      "Cocok Untuk Permukaan Subsidi",
      "Daya Tutup yang Lulus",
      "Daya Tahan yang Optimal",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
  },
  {
    name: "GOLD",
    image: "#",
    features: [
      "Daya Tahan Min. 5 Tahun",
      "Warna Cerah",
      "Daya Tutup Sangat Baik",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
    waterproof: "20 Kg",
  },
  {
    name: "DIAMOND",
    image: "#",
    features: [
      "Daya Tahan Min. 7 Tahun",
      "Caya Tutup dan Daya Serap Sangat Baik",
      "Ketahanan Warna yang Kuat",
      "Kuat Terhadap Cuaca",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
    waterproof: "20 Kg",
  },
  {
    name: "SEALER",
    image: "##",
    features: [
      "Cat dasar untuk hasil cat yang lebih optimal dan tahan lama",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
  },
  {
    name: "WATERGLOSS",
    image: "#",
    features: [
      "Bahan Dasar Terbuat dari Air",
      "Dapat digunakan untuk berbagai permukaan",
      "Tidak Berbau & Aman untuk pemakaian",
      "Waktu pengeringan yang cepat",
    ],
    interior: "25 Kg",
    exterior: "25 Kg",
  },
];

export default function ProductCards() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Produk Kami</h2>
        <p className="text-center text-gray-600 mb-10">
          Pilihan tepat untuk menciptakan ruang yang sempurna dan fungsional.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <ul className="text-gray-600 text-sm mb-4 space-y-1">
                {product.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
                <li>Interior: {product.interior}</li>
                <li>Exterior: {product.exterior}</li>
                {product.waterproof && <li>Waterproof: {product.waterproof}</li>}
              </ul>
              <button className="mt-auto bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                Beli Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
