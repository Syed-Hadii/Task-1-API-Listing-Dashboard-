/**
 * ProductContext - Context API for managing product listing state
 * Handles: products, loading state, errors, search, sorting, and pagination
 */

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { fetchProducts } from '../services/api';

// Create the context
const ProductContext = createContext();

/**
 * ProductProvider component - Wraps the application to provide product state
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const ProductProvider = ({ children }) => {
  // State management
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); // 'name', 'price-asc', 'price-desc'
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  /**
   * Fetch products on component mount
   */
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  /**
   * Debounced search - Filter and sort products based on search and sort criteria
   */
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Apply search filter
    if (searchTerm.trim()) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerSearchTerm) ||
          product.description.toLowerCase().includes(lowerSearchTerm)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [products, searchTerm, sortBy]);

  /**
   * Paginated products
   */
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [filteredAndSortedProducts, currentPage]);

  /**
   * Calculate total pages
   */
  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);

  /**
   * Handle search - Reset pagination when searching
   */
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  /**
   * Handle sort change
   */
  const handleSort = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1);
  };

  /**
   * Handle page change
   */
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to top of products
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Context value
  const value = {
    products,
    loading,
    error,
    searchTerm,
    sortBy,
    currentPage,
    paginatedProducts,
    filteredAndSortedProducts,
    totalPages,
    handleSearch,
    handleSort,
    handlePageChange,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

/**
 * Custom hook to use ProductContext
 * @returns {Object} ProductContext value
 * @throws {Error} If used outside of ProductProvider
 */
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
