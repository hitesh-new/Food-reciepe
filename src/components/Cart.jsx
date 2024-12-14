import React, { useState, useEffect, useContext } from 'react';
import '../Styles/Cart.css';
import { cartContext } from '../App';

const Cart = () => {
  const { cart, setCart } = useContext(cartContext); 
  const [total, setTotal] = useState(0);
  const [tank,setTank] = useState(false);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.price), 0));
  }, [cart]);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };
  const orderplace = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Order placed successfully!!');
    setCart([]);
    setTank(true);
  }

  return (
    <>
      <h1 className="heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>Price: Rs. {parseInt(product.price).toFixed(2)}</p>
              <button 
                className="remove-btn" 
                onClick={() => handleRemove(product.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="amt">Total Amount: Rs. {total}</h2>
      <div className="thank">
      {tank && <h4>Thanks for your purchase!!</h4>}
      </div>
      <div className='order-place'>
        
        <button className='order' onClick={orderplace}>Order</button>
      </div>
      
    </>
  );
};

export default Cart;
