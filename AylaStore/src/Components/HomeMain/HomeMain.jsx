import React, { useState, useEffect } from 'react';
import './HomeMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 


const HomeMain = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noMatch, setNoMatch] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      let url;
      if (searchQuery.trim() === '') {
        url = 'https://dummyjson.com/products/category/smartphones';
      } else {
        url = `https://dummyjson.com/products/search?q=${searchQuery}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setNoMatch(data.products.length === 0);
    };

    fetchProducts();
  }, [searchQuery]);

  const handleSearch = async () => {
    setSearchQuery('');
  };

  return (
    <div style={{margin:'0 auto'}}>

      <div className='search'>
        <input
          id='search-input'
          type='text'
          placeholder='Search ..'
          className='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='btn' onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className='courses'>
        {noMatch ? (
          <div className='no-match'>No match found.</div>
        ) : (
          products.map(product => (
            <div className='product-details' key={product.id}>
              <div className='img'>
                <img src={product.thumbnail} alt={product.title} width={300} height={250} />
              </div>
              <div className='title'>{product.title}</div>
              <div className='price'>${product.price}</div>
              <div className='button-view-product'>
                <Link to={`/product/${product.id}`} className='btn-link'> View Product</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomeMain;

