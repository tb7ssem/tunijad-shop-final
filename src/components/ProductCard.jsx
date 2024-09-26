import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
        <div className="product-actions">
          <button className="view-details">View Details</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;