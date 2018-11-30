// Cargar modulos y crear nueva aplicacion
let express = require("express"); 
let app = express();
let methodOverride = require("method-override");
let acom = require('./modelos/acomodacion.js');
let civic = require('./modelos/civico.js');
let acomoda = new acom();
let civico = new civic();
let bodyParser = require('body-parser');
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: false })); // soporte para bodies codificados
app.use(methodOverride());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

  //Parte: GET civico
  app.get('/civico', function(req, res, next) {
    if(req.query.filter) {
    next();
    return;
    }
    res.json(civico.getAll());
  });
  
  
  //Parte: GET civico + id
  app.get('/civico/:id', function(req, res) {
    var itemId = req.params.id;
    res.send(civico.getId(itemId));
  });
  

  //Parte: POST civico
  app.post('/civico', function(req, res) {
    civico.post(req.body.name,req.body.address,req.body.review,req.body.openingHours);
    res.send(civico.getAll());
  });
  

  //PArte: PUT civico + id
  app.put('/civico/:id', function(req, res) {
    var itemId = req.params.id;
    var name = req.body.name;
    var address = req.body.address;
    var review = req.body.review;
    var openingHours = req.body.openingHours;
    civico.putId(itemId,name,address,review,openingHours)
    res.send(civico.getId(itemId));
  });
  

  //PArte: DELETE civico + id
  app.delete('/civico/:id', function(req, res) {
    var itemId = req.params.id;
    civico.deleteId(itemId)
    res.send(civico.getAll());
  });

 

  //Parte: GET acomodacion
  app.get('/acomodacion', function(req, res, next) {
    if(req.query.filter) {
    next();
    return;
    }
    res.json(acomoda.getAll());
  });
  
  
  //Parte: GET acomodacion + id
  app.get('/acomodacion/:id', function(req, res) {
    var itemId = req.params.id;
    res.send(acomoda.getId(itemId));
  });
  

  //Parte: POST acomodacion
  app.post('/acomodacion', function(req, res) {
    acomoda.post(req.body.name,req.body.address,req.body.review,req.body.numberOfRooms,req.body.petsAllowed);
    res.send(acomoda.getAll());
    
  });
  

  //PArte: PUT acomodacion + id
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
  

  //PArte: DELETE acomodacion + id
  app.delete('/acomodacion/:id', function(req, res) {
    var itemId = req.params.id;
    acomoda.deleteId(itemId)
    res.send(acomoda.getAll());
  });

  //Lanzar servidor
  var server = app.listen(3000, function () {
    console.log('Server is running..'); 
  });