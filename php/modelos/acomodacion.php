<?php

include 'lugar.php';


class Acomodacion extends Lugar{

    private $numberOfRooms,$petsAllowed,$file,$json;
    

    
    function darJson(){
        $file= file_get_contents('datos/acomodacion.json');
        $json = json_decode($file, true);
        return $json;
    }

    

    function __construct1($identifier,$name,$address,$review,$numberOfRooms,$petsAllowed){
        parent::__cosntruct($identifier,$name,$address,$review);
        $this->numberOfRooms = $numberOfRooms;
        $this->petsAllowed = $petsAllowed;
    }
    function __construct(){}

    function getId($id){
        $acom = new Acomodacion;
        $datos = $acom->darJson();
        if ($id > 0 && $id<=sizeof($datos)){
            $posicion = $id -1;
            $jsonId = $datos[$posicion];
            return $jsonId;
        }
        else{echo 'id incorrecto';}
    }

    function deleteId($id){
        $acom = new Acomodacion;
        $datos = $acom->darJson();
        if ($id > 0 && $id<=sizeof($datos)){
            $posicion = $id -1;
            unset($datos[$posicion]) ;
            return $datos;
        }
        else{echo 'id incorrecto';}
    }
    
    /*function getAll(){
        
        return $json;
    }

    
    function getId(id){
        if (id > 0 && id<=datos.length){
            let posicion = id -1;
            let jsonId = datos[posicion];
            return jsonId;
        }
        else{console.log('id incorrecto');}
    }
    
    function putId(id,name,address,review,numberOfRooms,petsAllowed){
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
    
    function post(name,address,review,numberOfRooms,petsAllowed){
        let id = datos.length + 1;
        let newAcom={'@context': "http://schema.org",'@type': "Accommodation",'identifier': id,'name': name, 'address': address, 'review':review, 'numberOfRooms': numberOfRooms, 'petsAllowed':petsAllowed};
        datos.push(newAcom);
        
    }
    
    function deleteId(id){
        if (id > 0 && id<=datos.length){
            let posicion = id -1;
            delete datos[posicion];
            
        }
        else{console.log('id incorrecto');}
    }*/
    
}



?>