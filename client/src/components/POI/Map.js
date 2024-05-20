import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker, InfoWindow } from '@react-google-maps/api';
import debounce from 'lodash.debounce';
import './POI.css'

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const containerStyle = {
  width: '200vh',
  height: '750px',
  position: 'relative',
};

const searchStyle = {
  boxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `500px`,
  height: `50px`,
  padding: `0 12px`,
  borderRadius: `3px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
  position: "absolute",
  left: "50%",
  right: "50%",
  marginLeft: "-120px"
};

const infoWindowStyle = {
  background: 'white',
  border: '1px solid black',
  padding: '10px',
  fontSize: '16px',
  textAlign: 'center'
};

const libraries = ["places"];

class LoadScriptOnlyIfNeeded extends LoadScript {
  componentDidMount() {
    const cleaningUp = true
    const isBrowser = typeof document !== "undefined" // require('@react-google-maps/api/src/utils/isbrowser')
    const isAlreadyLoaded = window.google && window.google.maps && document.querySelector('body.first-hit-completed') // AJAX page loading system is adding this class the first time the app is loaded
    if (!isAlreadyLoaded && isBrowser) {
      // @ts-ignore
      if (window.google && !cleaningUp) {
        console.error("google api is already presented")
        return
      }

      this.isCleaningUp().then(this.injectScript)
    }

    if (isAlreadyLoaded) {
      this.setState({ loaded: true })
    }
  }
}

function Map() {
  const [searchBox, setSearchBox] = useState(null);
  const [center, setCenter] = useState({ lat: 54.3781, lng: -2.2137 });
  const [zoom, setZoom] = useState(6);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [radius, setRadius] = useState(1000); // 1 kilometer

  const onLoad = (autocomplete) => {
    setSearchBox(autocomplete);
  }

  const onPlaceChanged = debounce(() => {
    if (searchBox !== null) {
      const place = searchBox.getPlace();
      if (place.geometry) {
        setCenter({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
        setZoom(15);

        const service = new window.google.maps.places.PlacesService(document.createElement('div'));

        service.nearbySearch({
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
          radius: radius, // 1 kilometer
          type: ['restaurant', 'lodging', 'tourist_attraction']
        }, (results, status) => {
          if (status === 'OK') {
            results.forEach((result) => {
              console.log('Place ID:', result.place_id);
              console.log('Name:', result.name);
              console.log('Latitude:', result.geometry.location.lat());
              console.log('Longitude:', result.geometry.location.lng());
              console.log('Address:', result.vicinity);
              console.log('');
            });
            setPlaces(results);
          }
        });
      }
    }
  }, 500);

  const handleMarkerClick = (marker) => {
    setSelectedPlace(marker);
  }

  const handleCloseClick = () => {
    setSelectedPlace(null);
  }

  const handleRadiusChange = (event) => {
    console.log(event.target.value);
    setRadius(parseInt(event.target.value, 10));
  };

  return (
    <LoadScriptOnlyIfNeeded
      googleMapsApiKey={googleMapsApiKey}
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        className='map-container'
      >
        <Autocomplete
          onLoad={onLoad}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Enter location..."
            style={searchStyle}
          />
        </Autocomplete>
        {places.map(place => (
          <Marker
            key={place.place_id}
            position={{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            }}
            onClick={() => handleMarkerClick(place)}
          />
        ))}
        {selectedPlace && (
          <InfoWindow
            position={{
              lat: selectedPlace.geometry.location.lat(),
              lng: selectedPlace.geometry.location.lng(),
            }}
            onCloseClick={handleCloseClick}
            options={{ maxWidth: 300 }}
          >
            <div style={infoWindowStyle}>
              <h2>{selectedPlace.name}</h2>
              <p>Rating: {selectedPlace.rating}/5</p>
              {selectedPlace.photos && (
                <img
                  src={selectedPlace.photos[0].getUrl()}
                  alt={selectedPlace.name}
                  style={{ maxWidth: '75%' }}
                />
              )}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScriptOnlyIfNeeded>
  );
}

export default React.memo(Map);