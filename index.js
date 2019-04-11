var http = require('http'),
path = require('path'),
methods = require('methods'),
express = require('express'),
bodyParser = require('body-parser'),
session = require('express-session'),
cors = require('cors'),
passport = require('passport'),
errorhandler = require('errorhandler'),
mongoose = require('mongoose');    
var isProduction = process.env.NODE_ENV === 'production';
var app = express()    
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./models/User');
require('./config/passport');
app.use(require('./routes'));

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));
  //first let's start server
  var server = app.listen( process.env.PORT || 3001, function(){
    console.log('Listening on port ' + server.address().port);
  });


  if(isProduction){
    mongoose.connect(process.env.MONGODB_URI);
  } else {
    mongoose.connect('<SET CONNECTION STRING>');
    mongoose.set('debug', true);
  }

//This will help in handling stacktrace to json error
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      error: {}
    }});
  });
 //Now creating sample start service
 app.get('/start', (req, res) => {
    res.send('started')
 }); 