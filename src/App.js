import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import Home from './components/Home';
import Items from './components/Items';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes> {/* Wrap Routes around your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Items" element={<Items />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
