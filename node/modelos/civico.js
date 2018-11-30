let lugar = require('./lugar.js');
let datos = require('../datos/civico.json');
class Civico extends lugar{

    constructor(identifier,name,address,review,openingHours){
        super(identifier,name,address,review);
        this.openingHours = openingHours;
        
    }
    getAll(){
        return datos;
    }

    
    getId(id){
        if (id > 0 && id<=datos.length){
            let posicion = id -1;
            let jsonId = datos[posicion];
            return jsonId;
        }
        else{console.log('id incorrecto');}
    }
    
    putId(id,name,address,review,openingHours){
        if (id > 0 && id<=datos.length){
            let posicion = id -1;
            datos[posicion].name = name;
            datos[posicion].address = address;
            datos[posicion].review = review;
            datos[posicion].openingHours = openingHours;
        }
        else{console.log('id incorrecto');}
    }
    
    post(name,address,review,openingHours){
        let id = datos.length + 1;
        let newCiv={'@context': "http://schema.org",'@type': "Accommodation",'identifier': id,'name': name, 'address': address, 'review':review, 'openingHours':openingHours};
        datos.push(newCiv);
    }
    
    deleteId(id){
        if (id > 0 && id<=datos.length){
            let posicion = id -1;
            delete datos[posicion];    
        }
        else{console.log('id incorrecto');}
    }
}

module.exports = Civico;