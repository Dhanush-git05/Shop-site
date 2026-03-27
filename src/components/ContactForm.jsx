import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_xxxxxxx";
    const TEMPLATE_ID = "template_xxxxxxx";
    const PUBLIC_KEY = "your_public_key";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      }, (error) => {
        toast.error("Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-3">Get In Touch</h2>
          <p className="text-gray-600 mt-2 text-lg">Have questions? Send us a message and we'll get back to you quickly.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-200 backdrop-blur-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-3">👤 Full Name</label>
              <input type="text" name="from_name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition bg-gray-50 hover:bg-white" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-800 mb-3">📧 Email Address</label>
              <input type="email" name="from_email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition bg-gray-50 hover:bg-white" placeholder="john@example.com" />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-800 mb-3">💬 Message</label>
            <textarea name="message" rows="5" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition bg-gray-50 hover:bg-white resize-none" placeholder="Tell us about your inquiry..."></textarea>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {loading ? <Loader2 className="animate-spin" size={22} /> : <Send size={22} />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;