let lugar = require('./lugar.js');
let datos = require('../datos/civico.json');
class Civico extends lugar{

    constructor(identifier,name,address,review,openingHours){
        super(identifier,name,address,review);
        this.openingHours = openingHours;
        
    }
}

module.exports = Civico;