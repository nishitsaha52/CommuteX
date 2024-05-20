import axios from 'axios';
export const SET_INDEX_LEVEL = "SET_INDEX_LEVEL";
export const KEEP_INDEX_LEVEL = "KEEP_INDEX_LEVEL";
const aqiApiKey = process.env.REACT_APP_AQI_API_KEY;

export const getNewAirData =  (location) => {
  // console.log('getting the location', location);
  const lat = location.latitude;
  const lng = location.longitude;
  const airData =  axios.get(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=${aqiApiKey}`);
  
  return {
    type: 'NEW_AIR_DATA',
    payload: airData,
  };
};

export const setIndexLevel = (indexData) => {
  switch (indexData) {
    case 1:
      return {
        type: SET_INDEX_LEVEL,
        payload: {
          condition: "Healthy",
          background: "bg-healthy",
          color: "#70F1CE"
        }
      };
    case 51:
      return {
        type: SET_INDEX_LEVEL,
        payload: {
          condition: "Moderate",
          background: "bg-moderate",
          color: "#EDC77A"
        }
      };
    
    case 101:
      return {
        type: SET_INDEX_LEVEL,
        payload: {
          condition: "Unhealthy for Sensitive Groups",
          background: "bg-sensitive",
          color: "#EFA556"
        }
      };
    case 151:
      return {
        type: SET_INDEX_LEVEL,
        payload: {
          condition: "Unhealthy",
          background: "bg-unhealthy",
          color: "#FE7148"
        }
      };
    case 201:
      return {
        type: SET_INDEX_LEVEL,
        payload: {
          condition: "Very Unhealthy",
          background: "bg-danger",
          color: "#B093EF"
        }
      };
    case 301:
      return {
        type: SET_INDEX_LEVEL,
        payload: {
          condition: "Hazardous",
          background: "bg-hazardous",
          color: "#000000"
        }
      };
  
    default:
      return {
        type: KEEP_INDEX_LEVEL
      };
  }
 
}
