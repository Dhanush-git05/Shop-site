import React from 'react';
import { Link } from "react-router-dom";
import { MessageCircle } from 'lucide-react';

const ProductCard = ({ product }) => {
  const whatsappNumber = "91XXXXXXXXXX"; // Replace with actual number
  const message = encodeURIComponent(`Hi, I want to order ${product.name} (Price: ${product.price})`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100 hover:border-pink-200 hover:-translate-y-2">
      <div className="relative overflow-hidden h-72">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-125 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          ✨ New Arrival
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 font-medium">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">{product.price}</span>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={18} />
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;