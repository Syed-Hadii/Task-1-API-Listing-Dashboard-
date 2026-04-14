import React from 'react';
import '../styles/Card.css';

const Card = ({
  id,
  title,
  image,
  price,
  description,
  category,
  onViewDetails,
  onAddToCart,
}) => {
  const product = {
    id,
    title,
    image,
    price,
    description,
    category,
  };

  return (
    <div className="product-card">
      {category && (
        <div className="card-badge">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      )}

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

      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        <div className="card-price">
          <span className="price-currency">$</span>
          <span className="price-amount">{price.toFixed(2)}</span>
        </div>

        <p className="card-description">{description}</p>

        <div className="card-actions">
          <button
            className="btn-view-details"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>
          <button
            className="btn-add-to-cart"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
