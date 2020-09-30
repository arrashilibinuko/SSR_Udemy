// common JS importation
// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
// const app = express();

//ES6 / ES2015 import statements
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
// import React from 'react';
// import { renderToString } from 'react-dom/server'; //is a named exports
// import Home from './client/components/Home';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(
    '/api',
    proxy('http://react-ssr-api-herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

//Tells express to treat ./public as static/available to outside
app.use(express.static('public'));

app.get('*', (req,res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        });

    Promise.all(promises).then(() => {
        res.send(renderer(req,store));
    })
});

app.listen(3000, () => {
    console.log('listening on port 3000')
});