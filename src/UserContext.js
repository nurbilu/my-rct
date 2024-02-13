import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const CartProvider = ({ children }) => {
    const [Cart, setCart] = useState([]);// Simplified example, manage user data as needed

  return (
    <UserContext.Provider value={{ Cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
