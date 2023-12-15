import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import './CartWidget.css'

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-icon" role="img" aria-label="Carrito">
      🛒 {cart.length > 0 && <span className="cart-counter">{cart.length}</span>}
    </Link>
  );
};

export default CartWidget;
