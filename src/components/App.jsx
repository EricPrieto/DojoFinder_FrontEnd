import react, { Component } from 'react';
import React from 'react';
import ReactDom from "react-dom"
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import jwt_decode from 'jwt-decode';
// import axios from 'axios';
import './App.css'

import Header from './Header/Header';
import HomeGuest from './HomeGuest/HomeGuest';
import Footer from './Footer/Footer';
import About from './About/About';


// import logo from './logo.svg';
// import './App.css';


function App(){
  return (
    
    <BrowserRouter>
         <Header />
        <Routes>
            <Route path='/about-us' element={<About />} />
         </Routes>
         <Footer />
    </BrowserRouter>
  );
}




export default App;
