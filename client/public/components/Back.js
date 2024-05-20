// BackButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Back.css'

const Back = () => {
  return (
    <center>
      <Link to="/dashboard">
        <button className="back-button">Back</button>
      </Link>
    </center>
  );
};

export default Back;
