import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Store'; 
import ProductDetails from '../src/Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import Signin from './Pages/Signin/Signin';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Home from '../src/Pages/Home/Home';

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
        </AuthProvider>
      </Router>
    </Provider>
  );
};

export default App;
