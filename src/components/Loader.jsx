/**
 * Loader Component - Displays a loading spinner while data is being fetched
 */

import React from 'react';
import '../styles/Loader.css';

/**
 * Loader - Shows animated loading spinner
 */
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p className="loader-text">Loading products...</p>
    </div>
  );
};

export default Loader;
