import React, { useEffect, useState } from 'react';
import { getAll, getSingleByid } from '../data';

const MyCart = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setProducts(getAll());
    }, []);
    useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, amount: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(product => product.id !== productId));
    };

    const removeOneFromCart = (productId) => {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            const updatedCart = cart.map(item => {
                if (item.id === productId && item.amount > 1) {
                    return { ...item, amount: item.amount - 1 };
                }
                return item;
            });
            setCart(updatedCart);
        }
    };

    return (
        <div className="App">
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        {product.desc}, {product.price}
                        <br></br>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>  
                        <hr></hr>
                    </div>
                ))}
            </div>
            <div>
                <h3>Cart Items:</h3>
                {cart.map(product => (
                    <div key={product.id}>
                        {product.desc}, {product.price} - Amount: {product.amount}<br></br>
                        <button onClick={() => removeOneFromCart(product.id)}>Remove One</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCart;
