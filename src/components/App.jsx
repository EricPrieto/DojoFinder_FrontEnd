import react, { Component } from 'react';
import React, { useState} from 'react';
import ReactDom from "react-dom";
import {

  Routes,
  Route,
  Link,
} from "react-router-dom";
// import jwt_decode from 'jwt-decode';
// import axios from 'axios';
import './App.css'
import Header from './Header/Header';
import HomeGuest from './HomeGuest/HomeGuest';
import Footer from './Footer/Footer';
import About from './About/About';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000'
// import logo from './logo.svg';
// import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('token')))
  return (

    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <React.Fragment>
        {loggedIn ? <Home /> : <HomeGuest />}
      </React.Fragment>
      <Routes>
        <Route path='/about-us' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>

  );
}




export default App;
