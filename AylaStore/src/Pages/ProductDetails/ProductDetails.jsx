import React, { useState, useEffect } from 'react';
import './ProductDetails.css'; 
import { useParams, Link } from 'react-router-dom'; 
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Header from '../../Components/Common/Header/Header';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = { id: productId, title: product.title, price: product.price , image:product.thumbnail };
    const updatedCart = [...cartItems, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Product added to cart!');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="product-details-container">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-details-content">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Brand: {product.brand}</p>
          <p className='price'>Price: ${product.price}</p>
          <div className="product-actions">
            <Button
              className="btn"
              startIcon={<AddShoppingCartIcon />}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

