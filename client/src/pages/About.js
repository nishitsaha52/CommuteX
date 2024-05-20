import React from 'react';
import './About.css'; // Make sure to import your CSS file
import Header from '../components/Header'
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header/>
      <br/><br/><br/>
      <section className="about-content">
        <p className="about-text">
          <b>CommuteX</b> is not just a web application; it's a journey towards a smarter, more enjoyable commuting experience. By seamlessly integrating cutting-edge technologies, we've crafted a platform that goes beyond navigation.
        </p>
        <div className="key-features">
          <h2 className="feature-title"><b>Key Features:</b></h2>

          <div className="feature">
            <h3 className="feature-heading">Direction Search</h3>
            <p className="feature-description">Explore your route with our dynamic Mapbox-powered navigation, offering detailed insights for an optimized commute.</p>
          </div>

          <div className="feature">
            <h3 className="feature-heading">Weather and AQI Integration</h3>
            <p className="feature-description">Stay informed about real-time weather conditions and Air Quality Index (AQI) data at your destination.</p>
          </div>

          <div className="feature">
            <h3 className="feature-heading">Points of Interest</h3>
            <p className="feature-description">Discover nearby attractions and amenities with our Google API-powered Points of Interest page.</p>
          </div>

          <div className="feature">
            <h3 className="feature-heading">Traffic Updates</h3>
            <p className="feature-description">Contribute to and stay updated on real-time traffic data through our collaborative Traffic Updates page.</p>
          </div>

          <div className="feature">
            <h3 className="feature-heading">Community Forum</h3>
            <p className="feature-description">Engage in discussions, share tips, and stay connected with the commuting community on our interactive forum.</p>
          </div>

          <div className="feature">
            <h3 className="feature-heading">User Profile</h3>
            <p className="feature-description">Customize your experience, save favorite routes, and track your contributions in your personalized User Profile.</p>
          </div>
        </div>

        <h2 className="developer-title"><b>Developers:</b></h2>
        <div className="developers">
          <div className="developer-card">
            <img className="developer-avatar" src="/Ni.jpg" alt="Developer 1" />
            <h3 className="developer-name">Nishit Ranjan Saha</h3>
            <p className="developer-ed">Master's of Computer Applications</p>
            <p className="developer-role">Full-stack Developer</p>
          </div>

          <div className="developer-card">
            <img className="developer-avatar" src="/Sh.jpg" alt="Developer 2" />
            <h3 className="developer-name">Shreyashi Chattopadhyay</h3>
            <p className="developer-ed">Master's of Computer Applications</p>
            <p className="developer-role">Full-stack Developer</p>
          </div>

          <div className="developer-card">
            <img className="developer-avatar" src="/Pr.jpg" alt="Developer 3" />
            <h3 className="developer-name">Preetam Dhua</h3>
            <p className="developer-ed">Master's of Computer Applications</p>
            <p className="developer-role">Full-stack Developer</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
