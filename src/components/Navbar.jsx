import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 backdrop-blur-md shadow-2xl border-b border-purple-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-white tracking-tight flex items-center gap-1">
            <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">SRI GANESH</span>
            <span className="text-pink-400">TEXTILES</span>
          </div>
          <div className="hidden md:flex space-x-1 font-semibold">
             <Link to="/"className="text-white/80 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition duration-300">Home</Link>
             <Link to="/ProductCard"className="text-white/80 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition duration-300">Products</Link>
             <Link to="/About" className="text-white/80 hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition duration-300">About Us</Link>
          </div>
          <button className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;