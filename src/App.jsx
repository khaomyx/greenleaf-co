import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import './index.css';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Set tab title based on current route
    switch (location.pathname) {
      case '/':
        document.title = 'GreenLeaf Co.';
        break;
      case '/products':
        document.title = 'GreenLeaf Co.';
        break;
      case '/cart':
        document.title = 'GreenLeaf Co.';
        break;
      default:
        document.title = 'GreenLeaf Co.';
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default App;
