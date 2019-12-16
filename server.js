"use strict";
const express = require('express');
const endpoints = require('./routes');
const mongoose = require('mongoose');
const config = require('./config');
// Set up port for server to listen on
let port = process.env.PORT || 8000;

/*express is using create a http server*/
const app = express();

// connect to mongodb
mongoose.connect(config.getDbConnctionString());

// //routes
endpoints(app);


//Listing port
// Fire up server
// Print friendly message to console
app.listen(port, () => {
    console.log('app started at port 8000');
});