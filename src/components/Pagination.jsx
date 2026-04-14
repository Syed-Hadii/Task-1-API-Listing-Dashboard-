import React from 'react';
import { useProduct } from '../context/ProductContext';
import '../styles/Pagination.css';

const Pagination = () => {
  const { currentPage, totalPages, handlePageChange } = useProduct();

  if (totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const half = Math.floor(maxVisible / 2);
      let start = Math.max(1, currentPage - half);
      let end = Math.min(totalPages, start + maxVisible - 1);

      if (end - start < maxVisible - 1) {
        start = Math.max(1, end - maxVisible + 1);
      }

      if (start > 1) pages.push(1);
      if (start > 2) pages.push('...');

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) pages.push('...');
      if (end < totalPages) pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ← Previous
      </button>

      <div className="pagination-numbers">
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            className={`pagination-number ${page === currentPage ? 'active' : ''} ${
              page === '...' ? 'dots' : ''
            }`}
            onClick={() => typeof page === 'number' && handlePageChange(page)}
            disabled={page === '...'}
            aria-current={page === currentPage ? 'page' : undefined}
            aria-label={page === '...' ? '' : `Page ${page}`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
