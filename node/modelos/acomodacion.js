let lugar = require('./lugar.js');
let datos = require('../datos/acomodacion.json');


class Acomodacion extends lugar{

    constructor(identifier,name,address,review,numberOfRooms,petsAllowed){
        super(identifier,name,address,review);
        this.numberOfRooms = numberOfRooms;
        this.petsAllowed = petsAllowed;
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
    
    putId(id,name,address,review,numberOfRooms,petsAllowed){
        if (id > 0 && id<=datos.length){
            let posicion = id -1;
            datos[posicion].name = name;
            datos[posicion].address = address;
            datos[posicion].review = review;
            datos[posicion].numberOfRooms = numberOfRooms;
            datos[posicion].petsAllowed = petsAllowed;
        }
        else{console.log('id incorrecto');}
    }
    
    post(name,address,review,numberOfRooms,petsAllowed){
        let id = datos.length + 1;
        let newAcom={'@context': "http://schema.org",'@type': "Accommodation",'identifier': id,'name': name, 'address': address, 'review':review, 'numberOfRooms': numberOfRooms, 'petsAllowed':petsAllowed};
        datos.push(newAcom);
        
    }
    
    deleteId(id){
        if (id > 0 && id<=datos.length){
            let posicion = id -1;
            delete datos[posicion];
            
        }
        else{console.log('id incorrecto');}
    }
    
}

module.exports = Acomodacion;