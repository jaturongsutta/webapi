process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var mongoose = require('./config/mongoose');
var express = require('./config/express')
var passport = require('./config/passport')
var path = require('path');

var db = mongoose()
var app = express()
var passport = passport()

app.set('views', path.join(__dirname, "app/views"));
app.set('view engine', 'jade');

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {

  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

//module.express = app

