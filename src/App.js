import React, {  useContext, useEffect, useState  } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MyCart from './shop/MyCart';
import Home from './components/Home'; 
import Contact from './components/Contact'; 
import { UserContext } from './UserContext';
import Settle from './shop/Settle';

function App() {
  const { cart } = useContext(UserContext);
  const [totalItems, setTotalItems] = useState(0);
  console.log(cart);
  useEffect(() => {
    // Initialize totalItems count
    let itemsCount = 0;
    // Ensure cart is not undefined before attempting to iterate
    if (cart && cart.length > 0) {
      cart.forEach(item => {
        itemsCount += item.quantity;
      });
    }
  
    setTotalItems(itemsCount);
    // Update local storage with the cart data
    localStorage.setItem('cart', JSON.stringify(cart));
    
  }, [cart]);
  return (
    <div>
      
      <Nav />
      <h1>Items in Cart: {totalItems}</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settle" element={<Settle />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

