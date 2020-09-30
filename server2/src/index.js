// common JS importation
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
// const app = express();

//ES6 / ES2015 import statements
import express from 'express';
// import React from 'react';
// import { renderToString } from 'react-dom/server'; //is a named exports
// import Home from './client/components/Home';
import renderer from './helpers/renderer';

const app = express();

//Tells express to treat ./public as static/available to outside
app.use(express.static('public'));

app.get('*', (req,res) => {
    res.send(renderer(req));
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});