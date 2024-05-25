import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateTotalAmount } from '../../Redux/Actions/cartActions';
import './Cart.css';
import Button from '@mui/material/Button';
import Header from '../../Components/Common/Header/Header';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Cart = ({ cartItems, totalAmount, removeFromCart, updateTotalAmount }) => {
  useEffect(() => {
    // Calculate total amount when cartItems change
    calculateTotalAmount(cartItems);
  }, [cartItems]);

  const calculateTotalAmount = (items) => {
    const total = items.reduce((acc, item) => acc + item.price, 0);
    updateTotalAmount(total);
  };

  const removeFromCartHandler = (itemId) => {
    removeFromCart(itemId);
    // Other logic if needed...
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

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
  totalAmount: state.cart.totalAmount,
});

const mapDispatchToProps = {
  removeFromCart,
  updateTotalAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
