// Cargar modulos y crear nueva aplicacion
var express = require("express"); 
var app = express();
var acom = require('./modelos/acomodacion.js');
let acomoda = new acom();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
 
//Ejemplo: GET http://localhost:8080/items
app.get('/acomodacion', function(req, res, next) {
  if(req.query.filter) {
   next();
   return;
  }
  res.json(acomoda.getAll());
});
 
//Ejemplo: GET http://localhost:8080/items?filter=ABC
//app.get('/acomodacion', function(req, res) {
//  var filter = req.query.filter;
//  res.send('Get filter ' + filter);
//});
 
//Ejemplo: GET http://localhost:8080/items/10
app.get('/acomodacion/:id', function(req, res) {
  var itemId = req.params.id;
  res.send(acomoda.getId(itemId));
});
 
//Ejemplo: POST http://localhost:8080/items
app.post('/acomodacion', function(req, res) {
   //var nombre = req.body.casa;
   
   acomoda.post(req.body.name,req.body.address,req.body.review,req.body.numberOfRooms,req.body.petsAllowed);
   //console.log(nombre);
   res.send(acomoda.getAll());
});
 
//Ejemplo: PUT http://localhost:8080/items
app.put('/acomodacion/:id', function(req, res) {
   var itemId = req.params.id;
   var name = req.body.name;
   var address = req.body.address;
   var review = req.body.review;
   var numberOfRooms = req.body.numberOfRooms;
   var petsAllowed = req.body.petsAllowed;
   acomoda.putId(itemId,name,address,review,numberOfRooms,petsAllowed)
   res.send(acomoda.getId(itemId));
});
 
//Ejemplo: DELETE http://localhost:8080/items
app.delete('/acomodacion/:id', function(req, res) {
   var itemId = req.params.id;
   res.send(acomoda.deleteId(itemId));
});
  
var server = app.listen(3000, function () {
    
    console.log('Server is running..'); 
});