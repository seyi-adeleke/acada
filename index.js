var passport = require('passport');
var express = require('express');
var flash    = require('connect-flash');
var app = express();

var env = process.env.NODE_ENV =  process.env.NODE_ENV || "development";

var config = require("./server/config/config")[env];

require("./server/config/mongoose")(config);
require('./server/config/passport')(passport);
require("./server/config/express")(app,config,passport);
require("./server/config/routes")(app,passport);

