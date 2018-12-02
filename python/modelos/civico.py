from .lugar import Lugar
import json

class Civico:


    def __init__(self,identifier,name,address,review,openingHours):
        Lugar.__init__(self, identifier,name,address,review)
        self.openingHours = openingHours
        with open('datos/civico.json') as data_file:
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

    def post(self,name,address,review,openingHours):
        posicion = len(self.datos) 
        iden = posicion + 1
        entrada=["@context: http://schema.org","@type: Accommodation","identifier:" + str(iden), "name:" + name, "address:" + address, "review:" + review, "openingHours:" + openingHours ]
        self.datos.append(entrada)
        return self.datos

    def putId(self,iden,name,address,review,openingHours):
        if (iden > 0 and iden<=len(self.datos)):
            posicion = iden -1
            self.datos[posicion]["name"] = name
            self.datos[posicion]["address"] = address
            self.datos[posicion]["review"] = review
            self.datos[posicion]["openingHours"] = openingHours
            return self.datos[posicion]
        
        else:
            return 'id incorrecto'       
    