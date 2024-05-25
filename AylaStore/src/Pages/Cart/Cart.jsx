import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';
import './Cart.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../../Components/Common/Header/Header';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Cart = ({ cartItems, removeFromCart }) => {


  const removeFromCartHandler = (itemId) => {
    removeFromCart(itemId);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
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
                <Button variant="contained" onClick={() => removeFromCartHandler(item.id)}>Remove</Button>
              </div>
            </div>
          ))
        )}
        <div> 
          <h1>Total Amount: ${calculateTotalAmount().toFixed(2)}</h1>
  
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
                        value: calculateTotalAmount().toFixed(2), 
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems, 
});

const mapDispatchToProps = {
  removeFromCart: removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
