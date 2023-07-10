import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Login from './components/Login';
import Logout from './components/Logout'; // Added Logout component
import Wishlist from './components/Wishlist';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Added isLoggedIn state

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div>
        <NavBar cartItemsCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Items" element={<Items addToCart={addToCart} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} />} />
          {isLoggedIn ? (
            <Route path="/Logout" element={<Logout handleLogout={handleLogout} />} /> // Logout route
          ) : (
            <Route path="/Login" element={<Login handleLogin={handleLogin} />} /> // Login route
          )}
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
