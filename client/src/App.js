import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Map from "./pages/Map"
import AQI from './pages/AQI';
import PointofInterest from './pages/PointofInterest';
import airApp from './components/AQI/reducers/index';
import Weather from './pages/Weather';
import About from './pages/About';
import Services from './pages/Services'
import UserP from './pages/UserP';
import Traffic from './pages/Traffic'
import Error from "./components/Error";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import React from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReactGA from 'react-ga';
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/ContextProvider/Context";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(airApp);

ReactGA.initialize('UA-128591856-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);


  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("user not valid");
    } else {
      console.log("user verify");
      setLoginData(data)
      history("/Dashboard");
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      DashboardValid();
      setData(true)
    },2000)

  }, [])

  return (
    <>
      {
        data ? (
          <>
          <Provider store={store}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/map" element={<Map />} />
              <Route path="/UserP" element={<UserP />} />
              <Route path="/Services" element={<Services />} /> 
              <Route path="/About" element={<About />} />  
              <Route path="/Weather" element={<Weather />} />
              <Route path="/AQI" element={<AQI />} />
              <Route path="/Traffic" element={<Traffic />} />
              <Route path="/PointofInterest" element={<PointofInterest />} />
              <Route path="*" element={<Error />} />
            </Routes>
            </Provider>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
}

export default App;
