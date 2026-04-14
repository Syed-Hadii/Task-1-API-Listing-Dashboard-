import React from 'react';
import '../styles/Error.css';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-message">
        <span className="error-icon">⚠️</span>
        <div className="error-content">
          <h2 className="error-title">Oops! Something went wrong</h2>
          <p className="error-text">{message}</p>
          {onRetry && (
            <button className="error-retry-button" onClick={onRetry}>
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
