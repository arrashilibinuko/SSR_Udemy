//Startup point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './componen;ts/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes'

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    , document.querySelector('#root')
);