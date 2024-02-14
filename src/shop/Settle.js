import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settle = () => {
  const { setCart } = useContext(UserContext);
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('Cart');
    const loadedCart = savedCart ? JSON.parse(savedCart) : [];
    setLocalCart(loadedCart);
    setCart(loadedCart);
  }, [setCart]);

  const removeOneFromCart = (productId) => {
    const updatedCart = localCart.map(item => {
      if (item.id === productId && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    }).filter(item => item.amount > 0);

    setLocalCart(updatedCart);
    localStorage.setItem('Cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = localCart.filter(item => item.id !== productId);
    setLocalCart(updatedCart);
    localStorage.setItem('Cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };


  const totalPrice = localCart.reduce((total, item) => total + item.price * item.amount, 0, 0);
  const totalItems = localCart.reduce((total, item) => total + item.amount, 0, 0);
  const Checkout = () => {
    toast('Thanks for shopping with us!');
    setLocalCart([]);
    localStorage.setItem('Cart', JSON.stringify([]));
    setCart([]);

  };
  return (
    <div>
      <h3>Cart Items:</h3>
      {localCart && localCart.length > 0 ? (
        localCart.map((product) => (
          <div key={product.id}>
            {product.desc}, ${product.price} - Amount: {product.amount}
            <br></br>
            <button onClick={() => removeOneFromCart(product.id)}>Remove One</button>
            <button onClick={() => removeFromCart(product.id)}>Remove All</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <hr></hr>
      <div>Total Price: ${totalPrice.toFixed(2)}</div>
      <hr></hr>
      <div>Total Items: {totalItems}</div>
      <button onClick={() => Checkout()} >Checkout</button>
      <ToastContainer />
    </div>
  );
};

export default Settle;
