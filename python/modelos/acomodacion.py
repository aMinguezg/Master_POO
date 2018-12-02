from .lugar import Lugar
import json

class Acomodacion(Lugar):


    def __init__(self,identifier,name,address,review,numberOfRooms,petsAllowed):
        Lugar.__init__(self, identifier, name, address,review)
        self.numberOfRooms = numberOfRooms
        self.petsAllowed = petsAllowed
        with open('datos/acomodacion.json') as data_file:
            self.datos = json.load(data_file)
    
    def getId(self,iden):
        if (iden > 0 and iden<=len(self.datos)):
            posicion = iden -1
            jsonId = self.datos[posicion]
            return jsonId
        
        else:
            return 'id incorrecto'

    def deleteId(self,iden):
        if (iden > 0 and iden<=len(self.datos)):
            posicion = iden -1
            self.datos[posicion] = "Eliminado"
            return self.datos
        
        else:
            return 'id incorrecto'

    def post(self,name,address,review,numberOfRooms,petsAllowed):
        posicion = len(self.datos) 
        iden = posicion + 1
        entrada=["@context: http://schema.org","@type: Accommodation","identifier:" + str(iden), "name:" + name, "address:" + address, "review:" + review, "numberOfRooms:" + numberOfRooms, "petsAllowed:" + petsAllowed ]
        self.datos.append(entrada)
        return self.datos

    def putId(self,iden,name,address,review,numberOfRooms,petsAllowed):
        if (iden > 0 and iden<=len(self.datos)):
            posicion = iden -1
            self.datos[posicion]["name"] = name
            self.datos[posicion]["address"] = address
            self.datos[posicion]["review"] = review
            self.datos[posicion]["numberOfRooms"] = numberOfRooms
            self.datos[posicion]["petsAllowed"] = petsAllowed
            return self.datos[posicion]
        
        else:
            return 'id incorrecto'


    

  