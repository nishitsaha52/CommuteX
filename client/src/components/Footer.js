import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaXing, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com" className="icon" target="_blank" rel="noopener noreferrer"><FaFacebook size={40} /></a>
          <a href="https://www.twitter.com" className="icon" target="_blank" rel="noopener noreferrer"><FaTwitter size={40} /></a>
          <a href="https://www.instagram.com" className="icon" target="_blank" rel="noopener noreferrer"><FaInstagram size={40} /></a>
          <a href="https://www.x.com" className="icon" target="_blank" rel="noopener noreferrer"><FaXing size={40} /></a>
          <a href="https://www.linkedin.com" className="icon" target="_blank" rel="noopener noreferrer"><FaLinkedin size={40} /></a>
        </div>
        <p>&copy; 2023 <b>CommuteX</b>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
