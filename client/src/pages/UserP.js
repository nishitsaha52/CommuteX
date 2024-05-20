import React from 'react';
import './UserP.css';
import Header from '../components/Header'
import Footer from '../components/Footer';

const UserP = () => {
  return (
    <div>
    <Header/>
    <br/><br/>
    <br/><br/>
    <br/><br/>
    <div className="feedback">
      <p>
        Dear Customer,<br /><br/>
        Thank you for CommuteX. We would like to know how we performed.<br /><br />
        Please spare some moments to give us your valuable feedback as it will help us in improving our service.<br /><br />
      </p>
      <h4>Please rate your service experience for the following parameters</h4>
      <br />
      <form method="post" action="#action-url">
        <label>1. Your overall experience with us?</label><br /><br/>
        <div style={{ color: 'grey' }}>
          <span style={{ float: 'left' }}>POOR</span>
          <span style={{ float: 'right' }}>BEST</span>
        </div>
        <span className="scale-rating">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <React.Fragment key={value}>
              <label value={value}>
                <input type="radio" name="rating" />
                <label style={{ width: '100%' }}></label>
              </label>
            </React.Fragment>
          ))}
        </span>

        <div className="clear"></div>
        <hr className="survey-hr" />

        <label>2. Seamless route finding and nearby places</label><br /><br/>
        <div style={{ color: 'grey' }}>
          <span style={{ float: 'left' }}>POOR</span>
          <span style={{ float: 'right' }}>BEST</span>
        </div>
        <span className="scale-rating">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <React.Fragment key={value}>
              <label value={value}>
                <input type="radio" name="rating" />
                <label style={{ width: '100%' }}></label>
              </label>
            </React.Fragment>
          ))}
        </span>

        <div className="clear"></div>
        <hr className="survey-hr" />

        <label>3. Real-time weather forecasts and AQI of current location</label><br /><br />
        <div style={{ color: 'grey' }}>
          <span style={{ float: 'left' }}>POOR</span>
          <span style={{ float: 'right' }}>BEST</span>
        </div>
        <span className="scale-rating">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <React.Fragment key={value}>
              <label value={value}>
                <input type="radio" name="rating" />
                <label style={{ width: '100%' }}></label>
              </label>
            </React.Fragment>
          ))}
        </span>

        <div className="clear"></div>
        <hr className="survey-hr" />

        <label htmlFor="m_3189847521540640526commentText">4. Any Other suggestions:</label><br /><br />
        <textarea cols="75" name="commentText" rows="5" style={{ width: '100%' }}></textarea><br /><br />

        <div className="clear"></div>
        <input
          style={{ background: '#43a7d5', color: '#fff', padding: '12px', border: '0' }}
          type="submit"
          value="Submit your review"
        />
      </form>
    </div>
    <br/><br/>
    <Footer/>
    </div>
  );
};

export default UserP;
