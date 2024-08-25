// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>MyFastX <span className="partner">Partner</span></h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Sign up</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
