import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartMenu.css';

const CartMenu = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      )}

      <div className={`cart-menu ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3 className="cart-title">Shopping Cart</h3>
          <button
            className="cart-close"
            onClick={() => setIsCartOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <div className="cart-item-info">
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                    <span className="cart-item-quantity">x{item.quantity}</span>
                  </div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove item"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span className="total-label">Total:</span>
              <span className="total-price">${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="btn-checkout">Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartMenu;
