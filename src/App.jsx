import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Appointment from './components/appointment';
import Confirmation from './components/confirmation';
import MyBookings from './components/my-bookings';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment/:day/:date/:time" element={<Appointment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </Router>
  );
}

export default App
