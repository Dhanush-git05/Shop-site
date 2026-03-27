import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen mt-16 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2000" 
          alt="Textile background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-purple-900/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <div className="text-xl font-bold text-pink-300 bg-pink-600/20 px-6 py-2 rounded-full border border-pink-400/30 backdrop-blur-md">
            ✨ Premium Collection
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Exquisite <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Fabrics</span> for Every Occasion
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Discover premium quality silks, cottons, and designer wear crafted with tradition and modern elegance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a 
            href="#products"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transition-all duration-300 shadow-xl"
          >
            Shop Now 🛍️
          </motion.a>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/30 transition-all duration-300 border-2 border-white/50 backdrop-blur-md"
          >
            Contact Us 💬
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;