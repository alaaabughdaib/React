import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'; 
import logo from '../../../Assets/logo.png'

const Header = () => {
  return (
    <div className='nav-bar'>
      <nav>
        <div className='logo'>
          <img src={logo} height={120} width={200} alt='Logo'></img>
        </div>
        <div className='buttons'>
   
          <Link to='/' className='button'>Home</Link>
          <Link to='/cart' className='button'>Cart</Link>
              <Link to='/signin' className='button' onClick={  localStorage.removeItem('token')}>SignOut</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
