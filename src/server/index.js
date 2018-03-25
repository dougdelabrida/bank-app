const webpack = require('webpack');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const accounts = require('./mockData/accounts');
const profile = require('./mockData/profile');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const router = express.Router();

// Base Response
const baseResponse = {
  limit: 5,
  offset: 0,
  total: 0,
  status: 200
}

const limitResponse = ((data, limit, offset) => {
  return data.slice(offset, (parseInt(limit) + parseInt(offset)));
});

router.get('/accounts', function (req, res) {

  const { limit = 5, offset = 0 } = req.query;
  // copy the baseResponse object
  const response = Object.assign({}, baseResponse);
  
  response.limit = limit;
  response.offset = offset;
  response.total = accounts.length;
  response.results = limitResponse(accounts, limit, offset).map(({number, balance}) => ({number, balance}));
  
  res.json(response);
});

router.get('/accounts/:number/transactions', function (req, res) {
  
  const { limit = 5, offset = 0 } = req.query;
  const { number } = req.params;
  
  // copy the baseResponse object
  const response = Object.assign({}, baseResponse);
  const account = accounts.find(account => account.number == number);
  
  response.limit = limit;
  response.offset = offset;
  response.total = account.transactions.length;
  response.results = limitResponse(account.transactions, limit, offset);
  
  res.json(response);
});

router.get('/profile', function (req, res) {
  const response = {
    status: 200,
    data: profile
  };
  res.json(response);
});

app.use('/api', router);

app.listen(3000, function (error) {
  if(error) {
    console.log(error);
  } else {
    console.log('server started');
  }
});
