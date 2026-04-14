/**
 * Dashboard Component - Main page displaying all products
 * Combines search, sort, loading, and error handling
 */

import React from 'react';
import { useProduct } from '../context/ProductContext';
import Card from './Card';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';
import '../styles/Dashboard.css';

/**
 * Dashboard - Main product listing page
 * Features: Loading state, error handling, search, sorting, and pagination
 */
const Dashboard = () => {
  const { loading, error, paginatedProducts, filteredAndSortedProducts } = useProduct();

  /**
   * Handle retry on error
   */
  const handleRetry = () => {
    window.location.reload();
  };

  // Show loader while fetching
  if (loading) {
    return <Loader />;
  }

  // Show error message if API fails
  if (error) {
    return <ErrorMessage message={error} onRetry={handleRetry} />;
  }

  // Show message if no products found
  if (filteredAndSortedProducts.length === 0) {
    return (
      <div className="dashboard-empty">
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <h2>No products found</h2>
          <p>Try adjusting your search criteria or filters</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="dashboard-title">Product Catalog</h1>
        <p className="dashboard-subtitle">Browse our collection of quality products</p>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Sort Bar */}
      <SortBar />

      {/* Product Grid */}
      <div className="dashboard-grid">
        {paginatedProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            description={product.description}
            category={product.category}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default Dashboard;
