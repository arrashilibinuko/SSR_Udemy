const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home')
const app = express();

app.get('*', (req,res) => {
    // const store = createStore();

    // //some logic to initalize and load data into store  
    // res.send(renderer(req,store));

    const content = renderToString(<Home/>)


    res.send(content);
})


app.listen(3000, () => {
    console.log('Listening on port 3000');
})