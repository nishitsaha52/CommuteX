import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header className="header">
        <Link to="/Dashboard" className="logo">CommuteX</Link>
        <nav className="navbar">
          <Link to="/About">About</Link>
          <Link to="/Services">Services</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/UserP">User Profile</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
