import React from 'react';
import './Services.css'; // Import your CSS file
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="service-body">
      <Header/>
      <br/><br/>
      <br/><br/>
    <div className="service-container">
      <div className="service-row justify-content-center">
        {/* Service 1 */}
        <div className="service-col-md-4">
          <div className="service-card">
            <img src="/map1.png" alt="Service 1 Image" height="170px"/>
            <h3>Map</h3>
            <p>You can search route between two locations.</p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-col-md-4">
          <div className="service-card">
            <img src="/poi.png" alt="Service 3 Image" height="170px"/>
            <h3>Point of Interest</h3>
            <p>Find nearby places of the your favourite location.</p>
          </div>
        </div>

        {/* Service 4 */}
        <div className="service-col-md-4">
          <div className="service-card">
            <img src="/traffic1.png" alt="Service 4 Image" height="170px"/>
            <h3>Traffic Update</h3>
            <p>Get latest traffic update for your journey.</p>
          </div>
        </div>
      </div>

      <div className="service-row mt-3 justify-content-center">
        {/* Service 5 */}
        <div className="service-col-md-4">
          <div className="service-card">
            <img src="/weather1.png" alt="Service 5 Image" height="170px"/>
            <h3>Weather</h3>
            <p>Get weather update of your location.</p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-col-md-4">
          <div className="service-card">
            <img src="/AQI.png" alt="Service 2 Image" height="170px" />
            <h3>Air Quality Index</h3>
            <p>Get AQI update of your current location.</p>
          </div>
        </div>
      </div>

      <p className="service-mb-4">
        In this MERN Stack web application, we use different APIs to fetch real-time data:
      </p>

      <div className="service-row justify-content-center">
        {/* Google Map API */}
        <div className="service-col-md-4">
          <div className="service-card">
            <img src="/gapi.png" alt="Google Map API" height="160px"/>
            <h3>Google Map API</h3>
            <p>API for integrating Google Maps into the application for finding places and AQI.</p>
          </div>
        </div>

        {/* Mapbox API */}
        <div className="service-col-md-4">
          <div className="service-card">
            <img src="/mapi.png" alt="Mapbox API" height="160px"/>
            <h3>Mapbox API</h3>
            <p>API for custom online maps, including location search and navigation.</p>
          </div>
        </div>

        {/* Open Weather API */}
        <div className="service-col-md-4">
          <div className="service-card">
            <img src="/oapi.png" alt="Open Weather API" height="150px" width="250px"/>
            <h3>Open Weather API</h3>
            <p>API for accessing current weather data for any location.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Services;
