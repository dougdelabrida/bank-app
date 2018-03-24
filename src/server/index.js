const webpack = require('webpack');
const path = require('path');
const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('dist'));

app.get('/api', function (req, res) {
  res.json({message: 'worked'})
});

app.listen(port, function (error) {
  if(error) {
    console.log(error);
  }
});
