/**
 * SearchBar Component - Implements debounced search functionality
 * Debounces search input to reduce unnecessary filtering operations
 */

import React, { useState, useEffect } from 'react';
import { useProduct } from '../context/ProductContext';
import '../styles/SearchBar.css';

/**
 * SearchBar - Allows users to search products by title and description
 * Uses debouncing to optimize search performance
 */
const SearchBar = () => {
  const { handleSearch, searchTerm } = useProduct();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  /**
   * Debounce effect - Updates context with search term after 300ms of inactivity
   */
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch(localSearchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [localSearchTerm, handleSearch]);

  /**
   * Handle input change
   */
  const handleInputChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

  /**
   * Clear search
   */
  const handleClear = () => {
    setLocalSearchTerm('');
  };

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search products by name or description..."
          value={localSearchTerm}
          onChange={handleInputChange}
          className="search-input"
          aria-label="Search products"
        />
        {localSearchTerm && (
          <button
            className="search-clear-button"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
