// NavBar.js
import React, { useContext } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = ({ onCategoryClick }) => {
  const { cart } = useContext(CartContext);

  const handleCategoryClick = (category) => {
    // Llama a la función proporcionada desde las props
    onCategoryClick(category);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-title">
        <h1>AluminioAAA</h1>
      </Link>

      <div className="left-buttons">
        <Link to="/category/perfiles" className="nav-button" onClick={() => handleCategoryClick('perfiles')}>Perfiles</Link>
        <Link to="/category/ventanas" className="nav-button" onClick={() => handleCategoryClick('ventanas')}>Ventanas</Link>
        <Link to="/category/otros" className="nav-button" onClick={() => handleCategoryClick('otros')}>Otros</Link>
      </div>

      <CartWidget />
    </div>
  );
};

export default NavBar;


