import React, { useEffect, useState } from 'react';
import { getAll, getSingleByid } from '../data';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [products, setProducts] = useState([]);
    const [Cart, setCart] = useState([]);

    useEffect(() => {
        setProducts(getAll());
    }, []);
    useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(Cart));
}, [Cart]);

    const addToCart = (product) => {
        const existingProduct = Cart.find(item => item.id === product.id);
        if (existingProduct) {
            const updatedCart = Cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            setCart([...Cart, { ...product, amount: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(Cart.filter(product => product.id !== productId));
    };

    const removeOneFromCart = (productId) => {
        const existingProduct = Cart.find(item => item.id === productId);
        if (existingProduct) {
            const updatedCart = Cart.map(item => {
                if (item.id === productId && item.amount > 1) {
                    return { ...item, amount: item.amount - 1 };
                }
                return item;
            });
            setCart(updatedCart);
        }
    };
    const totalItems = Cart.reduce((total, item) => total + item.amount, 0);
    return (
        <div className="App">
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        {product.desc}, {product.price}
                        <br></br>
                        <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                        <button type="button" class="btn btn-danger" onClick={() => removeFromCart(product.id)}>Remove</button>  
                        </div>
                        <hr></hr>
                    </div>
                ))}
            </div>
            <div>
                <h3>Cart Items:</h3>
                {Cart.map(product => (
                    <div key={product.id}>
                        {product.desc}, {product.price} - Amount: {product.amount}<br></br>
                        <button type="button" class="btn btn-warning" onClick={() => removeOneFromCart(product.id)}>Remove One</button>
                    </div>
                ))}
                <hr></hr>
                <div>Total Items: {totalItems}</div>
            </div>
            <div><Link to="/settle" className="btn btn-outline-light">Settle</Link></div>
        </div>
    );
};

export default MyCart;
