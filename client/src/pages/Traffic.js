import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Traffic.css'

function Traffic() {
  const [traffic, setTraffic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8009/traffic')
      .then(response => {
        setTraffic(response.data.data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch traffic data.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <br/><br/>
      <br/><br/>
      <div className="traffic-container">
      <h1>Traffic Updates</h1>
      <br/>
        <div className="card-container">
          {loading ? (
            <p>Loading traffic data...</p>
          ) : error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
            <div className="cards-wrapper">
              {traffic.map((trafficItem, index) => (
                <div key={trafficItem._id || index} className="card">
                  <div className="card-body">
                    <h5 className="card-title">From: {trafficItem.from}</h5>
                    <h5 className="card-title">Upto: {trafficItem.upto}</h5>
                    <p className="card-subtitle mb-2 text-muted">Reason: {trafficItem.reason}</p>
                    <p className="card-text">Time: {trafficItem.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  );
}

export default Traffic;
