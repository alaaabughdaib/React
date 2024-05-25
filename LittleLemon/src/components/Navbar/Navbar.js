
import React from 'react';
import { NavLink } from 'react-router-dom';
import LLLogo from '../../Assets/images/logos/nav-logo.png';
import './Navbar.css'; 

const Navbar = () => (
  <nav className="navbar navbar-expand-md pd mb-3">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        <img className="logo-height img-fluid" src={LLLogo} alt="Little Lemon Logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav mx-auto">
          {['/', '/about', '/menu', '/booking'].map((path) => (
            <NavLink
              key={path}
              className="nav-link"
              activeClassName="active"
              to={path}
            >
              {path === '/' ? 'HOME' : path.slice(1).toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
