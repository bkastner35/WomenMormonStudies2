import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Product = ({ match }) => {
  const [data, setData] = useState([]);
useEffect(() => {
    fetchProduct();
  }, []);
const fetchProduct = () => {
    axios
      .get(
        `http://localhost:8080/api/Experts/?id=${match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
return (
    <div>
      {data.map((item) => {
        return (
          <div className='product-container' key={item.id}>
            <div>
              <h1 className='brand'>{item.first_name}</h1>
              <h2>{item.last_name}</h2>
              <p>{item.email}</p>
              <p>
                <strong>Title</strong> {item.title}
              </p>
              <p>
                <strong>Biography:</strong> {item.biographical_sketch}
              </p>
            </div>
          </div>
        );
      })}
      <div className='back'>
        <Link to='/'>FEATURED EXPERTS</Link>
      </div>
    </div>
  );
};
export default Product;