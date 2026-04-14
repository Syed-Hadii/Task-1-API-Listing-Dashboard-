import React from 'react';
import { useProduct } from '../context/ProductContext';
import '../styles/SortBar.css';

const SortBar = () => {
  const { sortBy, handleSort, filteredAndSortedProducts } = useProduct();

  return (
    <div className="sort-bar-container">
      <div className="sort-info">
        <span className="sort-label">Results: {filteredAndSortedProducts.length} products</span>
      </div>

      <div className="sort-controls">
        <label htmlFor="sort-select" className="sort-label">
          Sort by:
        </label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => handleSort(e.target.value)}
          className="sort-select"
          aria-label="Sort products by"
        >
          <option value="name">Name (A-Z)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
