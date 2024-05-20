import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LoginContext } from './ContextProvider/Context';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import './Dashboard.css'
import Footer from './Footer';

const Dashboard = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const [data, setData] = useState(false);
  const history = useNavigate();

  return (
    <div className="dashboard-header">
    <Header />
      <br/><br/>
      <br/><br/>
      <div className="d-container">
              {/* Solution Cards */}
              <div className="card">
                <Link to="/Map">
                  <SolutionCard
                    title="Let's Start"
                    description="Let's plan and start your commute."
                    iconSrc="/commute.png"
                  />
                </Link></div>
                <div className="card">
                <Link to="/PointofInterest">
                  <SolutionCard
                    title="Point of Interest"
                    description="Click-a-Bit"
                    iconSrc="/map.png"
                  />
                </Link></div>
                <div className="card">
                <Link to="/AQI">
                  <SolutionCard
                    title="Air Quality Index"
                    description="Check the air, Breath safe."
                    iconSrc="/aqi1.png"
                  />
                </Link></div>
                <div className="card">
                <Link to="/UserP">
                  <SolutionCard
                    title="Community Forum"
                    description="Share your reviews"
                    iconSrc="/community.png"
                  />
                </Link></div>
                <div className="card">
                <Link to="/Weather">
                  <SolutionCard
                    title="Weather"
                    description="Check weather before travel."
                    iconSrc="/weather.png"
                  />
                </Link></div>
                <div className="card">
                <Link to="/Traffic">
                  <SolutionCard
                    title="Traffic Update"
                    description="Know about us"
                    iconSrc="/traffic.png"
                  />
                </Link></div>
      </div>
      <Footer/>
    </div>
  );
}

function SolutionCard({ title, description, iconSrc }) {
  return (
    <div className="solution_card">
      {/* Top Icon */}
      <div className="so_top_icon">
        <img src={iconSrc} alt={`${title} Icon`} />
      </div>
      {/* Title */}
      <div className="solu_title">
        <h3>{title}</h3>
      </div>
      {/* Description and Read More Button */}
      <div className="solu_description">
        <p>{description}</p>
        <button type="button" className="read_more_btn">Read More</button>
      </div>
    </div>
  );
}


export default Dashboard;