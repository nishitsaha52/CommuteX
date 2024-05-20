import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DisplayBoard from '../components/AQI/component/displayBoard';
import { getNewAirData } from '../components/AQI/actions/index';
import Loader from '../components/AQI/component/loader';
import './AQI.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AQI extends Component {
  constructor(props) {
    super(props);

    this.state = { location: null, counting: true };
    this._isMounted = false;

    this.checkNowOnClick = this.checkNowOnClick.bind(this);
    this.getCountingFinished = this.getCountingFinished.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.getLocation();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (this._isMounted) {
            this.setState({ location: position });
            this.props.ge(position.coords);
          }
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    }
  }

  checkNowOnClick(e) {
    this.setState({ location: null, counting: true });
    this.getLocation();
  }

  getCountingFinished(flag) {
    if (flag) {
      this.setState({ counting: false });
    }
  }

  render() {
    if (this.state.location && this.state.location.coords) {
      const location = this.state.location.coords;

      return (
        <div>
          <Header/>
          <DisplayBoard getCountingFinished={this.getCountingFinished} />
          {this.state.counting ? (
            <button onClick={this.checkNowOnClick} className="check-button diable" disabled>
              Checking
            </button>
          ) :
           (
            <button onClick={this.checkNowOnClick} className="check-button">
              Update
            </button>
          )}
          <div className={`global-bg ${this.props.background}`}></div>
        </div>
      );
    }

    return (
      <div className="a-header">
      <div className="vertical-center">
        <div className="loader-container">
          <Loader />
          <p className="text-center">
            The app will fetch the air quality index based on your location.
          </p>
          <p className="text-center">
            <strong>Make sure your Location Service is turned on.</strong>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ge: getNewAirData }, dispatch);

const mapStateToProps = (state) => {
  return {
    background: state.indexLevel.background,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AQI);
