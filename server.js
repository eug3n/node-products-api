var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/productListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Productdb', {useNewUrlParser: true})
  .catch((error) => { console.log('mongodb connection failed:', error.message) });

app.use(bodyParser.urlencoded({ extended: true }));Number
app.use(bodyParser.json());

var routes = require('./api/routes/productListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('product list RESTful API server started on: ' + port);
