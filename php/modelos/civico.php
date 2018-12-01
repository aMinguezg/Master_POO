<?php

include 'lugar.php';

class Civico extends Lugar{

    
   
    private $openingHours,$json;
    

    function __construct1($identifier,$name,$address,$review,$openingHours){
        parent::__cosntruct($identifier,$name,$address,$review);
        $this->openingHours = $openingHours;
    }

    function __construct(){
        $file= file_get_contents('datos/civico.json');
        $this->json = json_decode($file, true);
    }

    public function getAll (){
        return json_encode($this->json,JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }

    function getId($id){
        $datos = $this->json;
        if ($id > 0 && $id<=sizeof($datos)){
            $posicion = $id -1;
            $jsonId = $datos[$posicion];
            return $jsonId;
        }
        else{echo 'id incorrecto';}
    }

    function deleteId($id){
        $datos = $this->json;
        if ($id > 0 && $id<=sizeof($datos)){
            $posicion = $id -1;
            unset($datos[$posicion]) ;
            return $datos;
        }
        else{echo 'id incorrecto';}
    }

    function post($name,$address,$review,$openingHours){
        $datos = $this->json;
        $posicion = sizeof($datos); 
        $id =sizeof($datos) + 1;
        $ff=[$posicion =>["@context" => "http://schema.org","@type" => " Accommodation","identifier" => $id, "name" => $name, "address" => $address, "review" => $review, "openingHours" => $openingHours ]];
        $result = array_merge($datos, $ff);
        return json_encode($result,JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }
    
    function putId($id,$name,$address,$review,$openingHours){
        $datos = $this->json;
        if ($id > 0 && $id<=sizeof($datos)){
            $posicion = $id -1;
            $datos[$posicion]["name"] = $name;
            $datos[$posicion]["address"] = $address;
            $datos[$posicion]["review"] = $review;
            $datos[$posicion]["openingHours"] = $openingHours;
            return json_encode($datos[$posicion],JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        }
        else{echo 'id incorrecto';}
    }

}

?>