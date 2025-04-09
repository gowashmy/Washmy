const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

// Load .env file variables into process.env
const env = dotenv.config().parsed;

// Prepare the environment variables to be injected into the bundle
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: './script.js', // your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ]
};