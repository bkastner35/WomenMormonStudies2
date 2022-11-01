import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
    fetchProducts();
  }, []);
const fetchProducts = () => {
    axios
      .get('https://shoppingapiacme.herokuapp.com/shopping')
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
return (
    <div>
      <h1>Featured Products</h1>
      <div className='item-container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt='' />
            <h3>{product.brand}</h3>
            <p>{product.item}</p>
            <Link to={`/product/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;