import React, { useContext } from 'react';
import '../Styles/product.css';
import { cartContext } from '../App';

const Product = ({ products }) => {
  const {cart,setCart}=useContext(cartContext);
  const addcart = () =>{
    setCart([...cart,products])
  };
  const removecart = () =>{
    setCart(cart.filter((c)=>c.id !== products.id))
  };
    const name =
        products.name.length > 21
        ? products.name.substring(0, 20) + "..."
        : products.name;
    const price = Math.round(products.price).toFixed(2);

  return (
    <div className="product">
      <div className="img">
        <img src={products.image} alt={products.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p>Price: Rs: {price}</p>
        {
          cart.includes(products)?<button onClick={removecart} className='btnrem'>Remove</button>:<button onClick={addcart}>Add to Cart</button>
        }
      </div>
    </div>
  );
};

export default Product;
