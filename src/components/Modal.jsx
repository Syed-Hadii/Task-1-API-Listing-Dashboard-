import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, product, onAddToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-body">
          <div className="modal-image-container">
            <img
              src={product.image}
              alt={product.title}
              className="modal-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400?text=No+Image';
              }}
            />
          </div>

          <div className="modal-details">
            <div className="modal-badge">
              {product.category && product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </div>

            <h2 className="modal-title">{product.title}</h2>

            <p className="modal-description">{product.description}</p>

            <div className="modal-price">
              <span className="price-label">Price:</span>
              <span className="price-value">${product.price.toFixed(2)}</span>
            </div>

            <div className="modal-actions">
              <button className="btn-view-details" onClick={onClose}>
                Continue Shopping
              </button>
              <button className="btn-add-cart" onClick={onAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
