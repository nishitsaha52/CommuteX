import React, { useEffect } from 'react';
import Header from '../components/Header';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import Footer from '../components/Footer';
const mapboxApiKey = process.env.REACT_APP_MAPBOX_API_KEY;

mapboxgl.accessToken = mapboxApiKey;

const Map = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });
  }, []);

  const successLocation = (position) => {
    settingMap([position.coords.longitude, position.coords.latitude]);
  };

  const errorLocation = () => {
    settingMap([77.22, 28.72]);
  };

  const settingMap = (center) => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: 9,
    });

    map.addControl(new mapboxgl.NavigationControl());

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
    });
    map.addControl(directions, 'top-left');
  };

  return (
      <div className='map-header'>
      <Header />
      <br /><br />  
      <br /><br />
      <center>
      <div id="map" style={{ width: '200vh', height: '100vh', display:'flex',}}>
      </div>
      </center>
      <br /><br />
      <Footer/>
    </div>
  );
};

export default Map;