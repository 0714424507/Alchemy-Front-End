import React from "react";

function Cart({ cartItems, removeFromCart, clearCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt="cloth" className="item-image" />
              <h3 className="item-name">{item.name}</h3>
              <div className="item-info">
                <div className="item-price">{item.price}$</div>
                <div className="item-size">size: {item.size}</div>
                <div className="item-description">{item.description}</div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <div className="total-price">Total: {totalPrice}$</div>
            <button onClick={clearCart} className="clear-cart-button">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
