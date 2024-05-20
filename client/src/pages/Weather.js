import React, { useState } from "react";
import CurrentLocation from "../components/Weather/CurrentLocation";
import "./Weather.css";
import Header from '../components/Header'
import Footer from "../components/Footer";

function Weather() {
  return (
    <React.Fragment>
      <div>
        <Header/>
        <br/><br/>
      <div className="w-body">
      <div className="weather-container">
        <CurrentLocation />
      </div>
      </div>
      <Footer/>
      </div>
    </React.Fragment>
  );
}

export default Weather;