import React from 'react';
import { useProduct } from '../context/ProductContext';
import Card from './Card';
import SearchBar from './SearchBar';
import SortBar from './SortBar';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import Pagination from './Pagination';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { loading, error, paginatedProducts, filteredAndSortedProducts } = useProduct();

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={handleRetry} />;
  }

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
      <div className="dashboard-header">
        <h1 className="dashboard-title">Product Catalog</h1>
        <p className="dashboard-subtitle">Browse our collection of quality products</p>
      </div>

      <SearchBar />
      <SortBar />

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

      <Pagination />
    </div>
  );
};

export default Dashboard;
