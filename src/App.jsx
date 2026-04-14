import React from 'react';
import { ProductProvider } from './context/ProductContext';
import Dashboard from './components/Dashboard';
import './App.css';

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
