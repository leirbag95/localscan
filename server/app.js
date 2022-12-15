var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var accountRouter = require('./routes/account');
var transactionRouter = require('./routes/transaction');
var blockRouter = require('./routes/block');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/account', accountRouter);
app.use('/transaction', transactionRouter)
app.use('/block', blockRouter)

module.exports = app;
