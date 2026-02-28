import React from "react";
import { ShoppingCart, TrendingUp } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative max-w-sm rounded-2xl overflow-hidden p-[2px] bg-gradient-to-br from-purple-400 via-indigo-400 to-purple-600 hover:scale-105 transition-all duration-300">

      {/* Inner Card */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-5 shadow-xl relative">

        {/* Floating Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full shadow-md transition-all duration-300 group-hover:scale-110 ${
              product.category === "subscription"
                ? "bg-green-200 text-green-800"
                : "bg-yellow-200 text-yellow-800"
            }`}
          >
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition">
          {product.name}
        </h2>

        {/* Price */}
        <p className="text-2xl font-extrabold text-indigo-600 mb-2">
          ${product.price.toFixed(2)}
        </p>

        {/* Sales with Icon */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <TrendingUp size={18} />
          <span>{product.sales} Sales</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-indigo-600 text-white py-2 rounded-xl font-medium hover:bg-indigo-700 transition">
            Buy Now
          </button>

          <button className="p-2 bg-gray-100 rounded-xl hover:bg-indigo-100 transition">
            <ShoppingCart size={20} />
          </button>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-indigo-400 blur-xl transition duration-500"></div>
      </div>
    </div>
  );
};

export default ProductCard;