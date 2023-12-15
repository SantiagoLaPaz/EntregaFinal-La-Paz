import React, { useState } from 'react';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from '../src/components/CartContext/CartContext';
import Cart from '../src/components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <CartProvider>
    <div>
      <Router>
        <NavBar onCategoryClick={setSelectedCategory} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
    </CartProvider>
  );
};

export default App;
