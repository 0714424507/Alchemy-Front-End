import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Items from './components/Items';
import Signup from './components/Signup';
import Cart from './components/Cart';

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
          <Route
            path="/Cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
