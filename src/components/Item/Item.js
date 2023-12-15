import React from 'react';

const Item = ({id, name, img, price, stock}) => {
  return (
    <article className="CardItem">
      <header className="header">
        <h2 className="ItemHeader">{name}</h2>
      </header>

      <picture className="ItemImg">
        <img src={img} alt={name} />
      </picture>

      <section>
        <p className="info">
        {price}
        </p>
        <p className="info">
        {stock}
        </p>
      </section>
        <footer className='ItemFooter'>
            <button className='Option'>Ver Detalle</button>
        </footer>  

    </article>
  );
};

export default Item;
