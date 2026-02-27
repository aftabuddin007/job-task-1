import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 p-4 m-2 hover:scale-105 transform transition duration-300">
      
      {/* Product Name */}
      <h2 className="text-xl font-bold text-purple-800 mb-2">{product.name}</h2>
      
      {/* Price */}
      <p className="text-lg font-semibold text-gray-700 mb-1">Price: ${product.price.toFixed(2)}</p>
      
      {/* Sales */}
      <p className="text-gray-700 mb-2">Sales: <span className="font-bold">{product.sales}</span></p>
      
      {/* Category Badge */}
      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
        product.category === "subscription" 
          ? "bg-green-200 text-green-800" 
          : "bg-yellow-200 text-yellow-800"
      }`}>
        {product.category}
      </span>

    </div>
  );
};

export default ProductCard;