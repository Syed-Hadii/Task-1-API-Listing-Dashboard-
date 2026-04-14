/**
 * ErrorMessage Component - Displays user-friendly error messages
 */

import React from 'react';
import '../styles/Error.css';

/**
 * ErrorMessage - Shows error notification with retry option
 * @param {Object} props - Component props
 * @param {string} props.message - Error message to display
 * @param {function} props.onRetry - Callback function for retry action
 */
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
