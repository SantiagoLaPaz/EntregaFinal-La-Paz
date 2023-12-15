import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  return (
    <div>
      <h2>Resumen de la compra</h2>
      {/* Muestra la lista de productos en el carrito */}
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title} - Cantidad: {product.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>

      {/* Renderiza el formulario de pago */}
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
