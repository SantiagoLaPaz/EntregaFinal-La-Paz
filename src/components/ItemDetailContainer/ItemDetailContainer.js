import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams} from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../firebase/client.js';




const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        const productsCollection = collection(db, 'products');  
        const productQuery = query(productsCollection, where('id', '==', id));
  
        try {
          const querySnapshot = await getDocs(productQuery);
          const productData = querySnapshot.docs.map((doc) => doc.data())[0];
  
          setProduct(productData);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    if (!product) {
      return <p>Cargando...</p>;
    }
  
    return (
      <div>
        <h2>Detalles del Producto</h2>
        <ItemDetail
          id={product.id}
          name={product.name}
          img={product.img}
          category={product.category}
          description={product.description}
          price={product.price}
          stock={product.stock}
        />
      </div>
    );
  };
  
  export default ItemDetailContainer;
