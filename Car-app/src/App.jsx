import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
// Page components
import Home from './Pages/Home';
import Flights from './Pages/Flights';
import Cars from './Pages/Cars';
import Blogs from './Pages/Blogs';
import MyBooking from './Pages/MyBooking';
import CarResult from './Pages/CarResult';

function App() {
  // const location = useLocation();
  // //hide the header for specific pages
  // const hideHeaderRoutes = ['/result-car'];
  // const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);
  return (
    <>
      {/* {shouldShowHeader && <Header />} */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/my-booking" element={<MyBooking />} />
        <Route path="/result-car" element={<CarResult />} />
      </Routes>

      <Footer />
      {/* {shouldShowHeader && <Footer />} */}
    </>
  );
}

export default App;
