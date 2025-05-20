import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
// Page components
import Home from './Pages/Home';
import Flights from './Pages/Flights';
import Cars from './Pages/Cars';
import Blogs from './Pages/Blogs';
import MyBooking from './Pages/MyBooking';

function App() {
  return (
    <>
      <Header />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-booking" element={<MyBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
