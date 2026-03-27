import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white py-16 border-t-4 border-pink-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold mb-3 flex items-center gap-1 justify-center md:justify-start">
              <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">TEXTILE</span>
              <span className="text-pink-300">HUB</span>
            </div>
            <p className="text-white/70 leading-relaxed">Premium quality fabrics delivered to your doorstep with style and elegance.</p>
          </div>
          
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4 text-pink-300">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-white/70 hover:text-pink-300 hover:translate-x-2 transition duration-300">Home</a>
              <a href="#" className="text-white/70 hover:text-pink-300 hover:translate-x-2 transition duration-300">Products</a>
              <a href="#Contect" className="text-white/70 hover:text-pink-300 hover:translate-x-2 transition duration-300">Contact</a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg mb-4 text-pink-300">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-pink-500 flex items-center justify-center transition duration-300 hover:scale-110">f</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-pink-500 flex items-center justify-center transition duration-300 hover:scale-110">in</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/20 hover:bg-pink-500 flex items-center justify-center transition duration-300 hover:scale-110">tw</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} TextileHub Shop. All rights reserved. | Crafted with ❤️ for textile lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;