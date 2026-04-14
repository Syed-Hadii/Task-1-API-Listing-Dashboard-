import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { fetchProducts } from '../services/api';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

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

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    if (searchTerm.trim()) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerSearchTerm) ||
          product.description.toLowerCase().includes(lowerSearchTerm)
      );
    }

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

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [filteredAndSortedProducts, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }
  return context;
};
