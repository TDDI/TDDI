var express = require('express');
var app = express();
console.log('inserver.js')
require('./config/middleware.js')(app, express);

module.exports = app;