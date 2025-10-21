import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Appointment from './components/appointment';
import Confirmation from './components/confirmation';
import MyBookings from './components/my-bookings';
import AboutUs from './components/pages/about-us';
import Contact from './components/pages/contact';
import Help from './components/pages/help';
import FAQ from './components/pages/faq';
import Privacy from './components/pages/privacy';
import Terms from './components/pages/terms';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment/:day/:date/:time" element={<Appointment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App
