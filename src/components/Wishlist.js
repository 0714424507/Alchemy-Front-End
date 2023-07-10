import React, { useState } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleAddToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => handleAddToWishlist('Product 1')}>Add Product 1</button>
      <button onClick={() => handleAddToWishlist('Product 2')}>Add Product 2</button>
    </div>
  );
};

export default Wishlist;
