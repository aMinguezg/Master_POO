
from modelos.acomodacion import Acomodacion
from modelos.civico import Civico
from flask import Flask, request
from flask_cors import CORS
import json

acomoda = Acomodacion("","","","","","")
civic = Civico("","","","","") 
app = Flask(__name__)
CORS(app)

@app.route('/acomodacion', methods=['GET', 'POST', 'PUT', 'DELETE'])
def serverAcomodacion():
    if request.method == 'GET':
        iden = request.args.get('id')
        if(iden is None):
                return json.dumps(acomoda.datos,indent=4 ,ensure_ascii=False).encode('utf8')
        else:
                resultado = acomoda.getId(int(iden)) 
                return json.dumps(resultado,indent=4 ,ensure_ascii=False).encode('utf8')

    if request.method == 'DELETE':
        iden = request.args.get('id')
        if(iden is None):
                return "Elige un id"
        else:
                resultado = acomoda.deleteId(int(iden)) 
                return json.dumps(resultado,indent=4 ,ensure_ascii=False).encode('utf8')

    if request.method == 'POST':
        name = request.form['name']
        address = request.form['address']
        review = request.form['review']
        numberOfRooms = request.form['numberOfRooms']
        petsAllowed = request.form['petsAllowed']
        resultado=acomoda.post(name,address,review,numberOfRooms,petsAllowed)
        return json.dumps(resultado,indent=4 ,ensure_ascii=False).encode('utf8')
    
    if request.method == 'PUT':
        iden = int(request.args.get('id'))
        name = request.form['name']
        address = request.form['address']
        review = request.form['review']
        numberOfRooms = request.form['numberOfRooms']
        petsAllowed = request.form['petsAllowed']
        resultado=acomoda.putId(iden,name,address,review,numberOfRooms,petsAllowed)
        return json.dumps(resultado,indent=4 ,ensure_ascii=False).encode('utf8')

@app.route('/civico', methods=['GET', 'POST', 'PUT', 'DELETE'])
def serverCivico():
    if request.method == 'GET':
        iden = request.args.get('id')
        if(iden is None):
                return json.dumps(civic.datos,indent=4 ,ensure_ascii=False).encode('utf8')
        else:
                resultado = civic.getId(int(iden)) 
                return json.dumps(resultado,indent=4 ,ensure_ascii=False).encode('utf8')

    if request.method == 'DELETE':
        iden = request.args.get('id')
        if(iden is None):
                return "Elige un id"
        else:
                resultado = civic.deleteId(int(iden)) 
                return json.dumps(resultado,indent=4 ,ensure_ascii=False).encode('utf8')

    if request.method == 'POST':
        name = request.form['name']
        address = request.form['address']
        review = request.form['review']
        openingHours = request.form['openingHours']
        resultado=civic.post(name,address,review,openingHours)
        return json.dumps(resultado,indent=4 ,ensure_ascii=False).encode('utf8')
    
    if request.method == 'PUT':
        iden = int(request.args.get('id'))
        name = request.form['name']
        address = request.form['address']
        review = request.form['review']
        openingHours = request.form['openingHours']
        resultado=civic.putId(iden,name,address,review,openingHours)
        return json.dumps(resultado,indent=4 ,ensure_ascii=False).encode('utf8')