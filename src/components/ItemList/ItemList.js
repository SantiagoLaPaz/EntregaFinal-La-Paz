import React, { useState, useEffect, useContext } from 'react';
import './ItemList.css'
import { useParams} from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase/client.js'
import Item from "../Item/Item";
import { CartContext } from '../CartContext/CartContext.js'

const ItemList = ({ products }) => {
    const { addItem } = useContext(CartContext);
    const { categoryId } = useParams();
  
    return (
      <div className="ListGroup">
        {products.map((prod) => (
          <div key={prod.id} className="ListItem">
            <h3>{prod.title}</h3>
            <p>Precio: ${prod.price}</p>
            <p>Descripción: {prod.description}</p>
            <p>Stock: {prod.stock}</p>
            <button onClick={() => addItem(prod, 1)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
    );
  };
  
  const getProducts = async () => {
    const productsCollection = collection(db, 'products');
  
    try {
      const querySnapshot = await getDocs(productsCollection);
      const products = querySnapshot.docs.map((doc) => doc.data());
      return products;
    } catch (error) {
      console.error('Error al obtener productos:', error);
      return [];
    }
  };
  
  export { ItemList, getProducts };