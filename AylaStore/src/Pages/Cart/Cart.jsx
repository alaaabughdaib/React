import React, { useState, useEffect } from 'react';
import './Cart.css'; 
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../../Components/Common/Header/Header';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
    calculateTotalAmount(storedCart);
  }, []);

  const calculateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => acc + item.price, 0);
    setTotalAmount(total);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotalAmount(updatedCart);
  };

  return (
    <div>
      <Header />
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <Button variant="contained" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </div>
            </div>
          ))
        )}
        <div> 
        <h1> Check Out :</h1>
        </div>
 
            <PayPalScriptProvider options={{ 'client-id': 'ASIHrXGYVUe73Nj1L9sHIiIHLM7C9IraV7CvsYzTYIyTREFTrVMAi3UbHcaJuyL5XURIxR3QMLmWlJeC' }}>
              <PayPalButtons
                fundingSource="paypal"
                style={{ layout: 'horizontal', color: 'white', shape: 'rect', label: 'pay', tagline: false, height: 50, width: 50 }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                      currency_code: "USD",
                      value: totalAmount.toFixed(2), 
                    },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  console.log('Payment approved:', data);
       

                }}
              />
            </PayPalScriptProvider>
          
    
      </div>
    </div>
  );
};

export default Cart;
