import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import { createPopper } from '@popperjs/core';
// import Popper from 'popper.js';
// import 'bootstrap';

// import 'bootstrap/dist/js/bootstrap.js';


import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
