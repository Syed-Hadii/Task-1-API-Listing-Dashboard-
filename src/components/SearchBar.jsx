import React, { useState, useEffect } from 'react';
import { useProduct } from '../context/ProductContext';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const { handleSearch, searchTerm } = useProduct();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  // Debounce search after 300ms of inactivity
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch(localSearchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [localSearchTerm, handleSearch]);

  const handleInputChange = (e) => {
    setLocalSearchTerm(e.target.value);
  };

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
