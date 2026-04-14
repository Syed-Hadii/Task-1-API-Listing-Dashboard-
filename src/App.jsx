/**
 * App Component - Root component that wraps the entire application
 * Provides ProductContext to all child components
 */

import React from 'react';
import { ProductProvider } from './context/ProductContext';
import Dashboard from './components/Dashboard';
import './App.css';

/**
 * App - Main application component
 */
function App() {
  return (
    <ProductProvider>
      <div className="app">
        <Dashboard />
      </div>
    </ProductProvider>
  );
}

export default App;
