import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-white min-h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;