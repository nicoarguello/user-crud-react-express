const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require("helmet");

const indexRouter = require('./routes/index');

const app = express();

// app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'../front', 'build')));


app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/api/v1/', indexRouter);

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname,'../front', 'build','index.html'));
});

module.exports = app;
