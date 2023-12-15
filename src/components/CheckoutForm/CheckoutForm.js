import React from 'react';

const CheckoutForm = () => {
  

  return (
    <form>
      <label>
        Nombre en la tarjeta:
        <input type="text" />
      </label>
      <label>
        Número de tarjeta:
        <input type="text" />
      </label>
      <label>
        Fecha de expiración:
        <input type="text" />
      </label>
      <label>
        CVC:
        <input type="text" />
      </label>

      
      <button type="submit">Pagar</button>
    </form>
  );
};

export default CheckoutForm;
