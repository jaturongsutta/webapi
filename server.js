process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var mongoose = require('./config/mongoose');
var express = require('./config/express')
var EJS  = require('ejs');
var passport = require('./config/passport')
var path = require('path');
var express_graphql = require('express-graphql');
const schemaClass = require('./app/graphql/schema.js')

var db = mongoose()
var app = express()
var passport = passport()

app.set('views', path.join(__dirname, "app/views"));



// set the view engine to ejs
app.set('view engine', 'ejs');

//app.set('views', './AdminLTE-2.4.3');


app.use('/graphql', express_graphql({
  schema: schemaClass.schema,
  // rootValue: schemaClass.root,
  graphiql: true
}));


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {

  console.log(`App listening on port localhost:${PORT}/graphql `);
  console.log('Press Ctrl+C to quit.');
});

//module.express = app

