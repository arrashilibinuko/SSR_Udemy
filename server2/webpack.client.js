// const path = require('path');
// const merge = require('webpack-merge');
// const baseConfig = require('./webpack.base');

// const config = {

//     mode: 'none',

//     //Tell webpack the root file of our 
//     //server application
//     entry:'./src/client/client.js', //client.js is usually called index.js


//     //Tell webpack where to put the output file 
//     //that is generated
//     output: {
//         filename: 'bundleclient.js',
//         path: path.resolve(__dirname, 'build')
//     }

// }

// module.exports = merge(baseConfig, config);

const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Tell webpack the root file of our
  // server application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);