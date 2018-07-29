const path = require('path');

const config = require('./webpack.base');

config.mode = 'development';
config.devServer = {
  contentBase: path.resolve('./public'),
  hot: true,
  port: 8081,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  }
};

module.exports = config;
