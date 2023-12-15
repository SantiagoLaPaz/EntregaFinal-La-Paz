import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <div className='cart-items'>
        {cart.map((item) => (
          <div key={item.id} className='cart-item'>
            <p>{item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <p>Total: ${total}</p>
      <button onClick={clearCart}>Limpiar Carrito</button>
      <Link to='/checkout' className='Option'>
        Ir a Pagar
      </Link>
    </div>
  );
};

export default Cart;
