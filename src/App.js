import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import Signup from './components/Signup';
import Cart from './components/Cart';
import Login from './components/Login'; // Fixed component import
import Wishlist from './components/Wishlist';

function App() {
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
          <Route path="/Login" element={<Login />} /> {/* Added route for Login component */}
          <Route path="/Wishlist" element={<Wishlist />} /> {/* Added route for Wishlist component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
