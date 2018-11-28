
var acom = require('./modelos/acomodacion.js');
var civ = require('./modelos/civico.js');
var acomoda = new acom('1','hotel', 'parque buja','Muy chula esa calle',3,false);
var civico = new civ('1','hotel', 'parque buja','Muy chula esa calle','10:00-12:00');
console.log(acomoda.name); 
console.log(civico.openingHours); 
console.log(acomoda.getId(2));