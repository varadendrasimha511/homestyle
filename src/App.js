import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add routes for About Us, Contact Us, Products, and Gallery */}
      </Routes>
    </Router>
  );
}

export default App;