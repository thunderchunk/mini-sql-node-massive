var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = "postgres://localhost/sandbox";
var massiveInstance = massive.connectSync({connectionString : connectionString})

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance);
var db = app.get('db');

var controller = require('./controller.js');

controller.getPlanes();
// controller.gnewPlanes();

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")	
})



