import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-red-600 mb-4" style={{ marginTop: '20px' }}>
          About Ganesh Textiles
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-center mb-6">
          Your trusted destination for quality fabrics and stylish clothing.
        </p>

        {/* Content */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold">Ganesh Textiles</span> is a leading
            textile shop located in Chennai, Tamil Nadu. We specialize in
            providing high-quality fabrics, traditional wear, and modern
            clothing materials for all occasions.
          </p>

          <p>
            With years of experience in the textile industry, we ensure that our
            customers receive the best products at affordable prices. From
            cotton and silk to designer collections, we offer a wide range of
            materials to meet every need.
          </p>

          <p>
            Our mission is to deliver quality, comfort, and style to our
            customers. We believe in building long-term relationships by
            providing excellent service and premium products.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
          <div className="bg-red-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-red-600">10+ Years</h2>
            <p className="text-gray-600 text-sm">Experience</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-red-600">5000+</h2>
            <p className="text-gray-600 text-sm">Happy Customers</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-red-600">100%</h2>
            <p className="text-gray-600 text-sm">Quality Assurance</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>📍 Kancheepuram, Tamil Nadu</p>
          <p>📞 +91 9003511447</p>
          <p>📧 sgtkpm@gmail.com</p>
        </div>

      </div>
    </div>
  );
}