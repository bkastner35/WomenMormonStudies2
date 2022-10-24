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
      .get('http://localhost:8080/api/Experts')
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
            <h3>{product.first_name}</h3>
            <p>{product.last_name}</p>
            <Link to={`/product/${product._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;