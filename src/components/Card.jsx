/**
 * Card Component - Displays a single product with image, title, price, and description
 * Features: Hover effects, responsive design, truncated description
 */

import React from 'react';
import '../styles/Card.css';

/**
 * ProductCard - Displays product information in a card format
 * @param {Object} props - Component props
 * @param {number} props.id - Product ID
 * @param {string} props.title - Product title
 * @param {string} props.image - Product image URL
 * @param {number} props.price - Product price
 * @param {string} props.description - Product description
 * @param {string} props.category - Product category
 */
const Card = ({ id, title, image, price, description, category }) => {
  return (
    <div className="product-card">
      {/* Product category badge */}
      {category && (
        <div className="card-badge">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      )}

      {/* Product image container */}
      <div className="card-image-container">
        <img
          src={image}
          alt={title}
          className="card-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200?text=No+Image';
          }}
        />
      </div>

      {/* Product details */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        {/* Product price */}
        <div className="card-price">
          <span className="price-currency">$</span>
          <span className="price-amount">{price.toFixed(2)}</span>
        </div>

        {/* Product description - truncated to 2 lines */}
        <p className="card-description">{description}</p>

        {/* Action button */}
        <button className="card-button" onClick={() => alert(`Added ${title} to cart!`)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
