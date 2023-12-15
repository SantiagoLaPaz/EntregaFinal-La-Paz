// ItemListContainer.js
import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';  
import NavBar from '../NavBar/NavBar';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = selectedCategory
      ? query(collection(db, 'products'), where('category', '==', selectedCategory))
      : collection(db, 'products');
    
    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        
        const sortedProducts = productsAdapted.sort((a, b) => a.category.localeCompare(b.category));
        setProducts(sortedProducts);
        setLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);  
      });
  }, [selectedCategory]); 

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <ItemList products={products} />
        </div>
      )}
    </div>
  )
}

export default ItemListContainer;


  
  