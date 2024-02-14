import React, {  useContext, useEffect, useState  } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MyCart from './shop/MyCart';
import Home from './components/Home'; 
import Contact from './components/Contact'; 
import { UserContext } from './UserContext';
import Settle from './shop/Settle';

function App() {
  const { Cart } = useContext(UserContext);
  const [totalItems, setTotalItems] = useState(0);
  console.log(Cart);
  useEffect(() => {
    // Initialize totalItems count
    let itemsCount = 0;
    // Ensure Cart is not undefined before attempting to iterate
    if (Cart && Cart.length > 0) {
      Cart.forEach(item => {
        itemsCount += item.quantity;
      });
    }
  
    setTotalItems(itemsCount);
    // Update local storage with the Cart data
    localStorage.setItem('Cart', JSON.stringify(Cart));
    
  }, [Cart]);
  return (
    <div>
      
      <Nav />
      {/* <h1>Items in Cart: {totalItems}</h1> */}
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

