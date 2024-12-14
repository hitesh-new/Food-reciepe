import React, { useState } from 'react';
import data from '../assets/Products.json';
import Product from './Product';
import "../Styles/Home.css";

const Home = () => {
  const [product] = useState(data);

  return (
    <div className="product-container">
      {product.map((products) => (
        <Product key={products.id} products = {products}/>
      ))}
    </div>
  );
};

export default Home;
