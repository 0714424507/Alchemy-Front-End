import React, { useState, useEffect } from 'react';

function Items({ addToCart }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('/items');
      if (response.ok) {
        const data = await response.json();
        setItems(data);
      } else {
        console.error('Failed to fetch items');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="itemlist" id="itemlist">
      {items.map((item) => (
        <div key={item.id} className="itemlist">
          <img src={item.image} alt="cloth" className="item-image" />
          <h3 className="item-name">{item.name}</h3>
          <div className="item-info">
            <div className="item-price">{item.price}$</div>
            <div className="item-size">size: {item.size}</div>
            <div className="item-description">{item.description}</div>
            <button onClick={() => addToCart(item)} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
