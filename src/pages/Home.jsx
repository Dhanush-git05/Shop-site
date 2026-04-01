import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import shirtImg from "../assets/Shirts.avif";


import { motion } from 'framer-motion';

const products = [
    {
    id: 1,
    name: "Menswear",
    price: "₹4,500",
    category: "Shirts",
    image: shirtImg
  },

  { id: 2, name: "Ladies Dresses", price: "₹1,200", category: "Tops&Bottoms", image: "https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=800" },
  { id: 3, name: "Kids Wear", price: "₹2,800", category: "Kidlybooo", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800" },
  { id: 4, name: "Readymades", price: "₹800/m", category: "Fabrics", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800" },
  { id: 5, name: "Kanchipuram Silk sarees", price: "₹8,000", category: "Sarees", image: "https://images.unsplash.com/photo-1610030469668-935102a701e6?q=80&w=800" },
  { id: 6, name: "Shoes ", price: "₹1,500", category: "Leathers", image: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800" },
];

const Home = () => {
  return (
    <main>
      <Hero />
      
      <section id="products" className="py-20 max-w-7xl mx-auto px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3"
          >
            Our Latest Collection
          </motion.h2>
          <p className="text-gray-600 text-lg mb-6">Discover our handpicked selection of premium fabrics and textiles</p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      
      
    </main>
  );
};

export default Home;