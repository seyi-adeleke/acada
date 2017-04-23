var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require ('cookie-parser');
var bodyParser   = require('body-parser');
var morgan       = require('morgan');
var flash =  require('connect-flash');


module.exports = function(app,config){
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(bodyParser());

    app.use('/public', express.static(path.join(config.rootPath +'public')));
    app.set('views','./src/views');
    app.set('view engine', 'ejs');

    app.listen(config.port, function (err) {
        if(err){
            console.log(err)
        }
        else{
            console.log('running server on port ' + config.port);
        }
    });

};