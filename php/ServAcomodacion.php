<?php

include 'modelos/acomodacion.php';
header('content-type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Requested-With,Content-Type");

//RewriteEngine On # Turn on the rewriting engine
//RewriteRule ^employees/?$ employees.php [NC,L]
//RewriteRule ^employees/([0-9]+)/?$ employees.php?id=$1 [NC,L]

$acomoda = new Acomodacion;

function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
    echo '</script>';
  }
  

if ($_SERVER['REQUEST_METHOD']=='GET') {
   
    
    if(!empty($_GET["id"])){
        $id=intval($_GET["id"]);
        echo json_encode($acomoda->getId($id), JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    }
    else{
        echo $acomoda->getAll();
    }
}

if ($_SERVER['REQUEST_METHOD']=='DELETE') {
    
        $id=intval($_GET["id"]);
        $resultado = $acomoda->deleteId($id);
        echo json_encode($resultado, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    
}

if ($_SERVER['REQUEST_METHOD']=='POST') {
   
        $name = $_POST["name"];
        $address = $_POST["address"];
        $review = $_POST["review"];
        $numberOfRooms = $_POST["numberOfRooms"];
        $petsAllowed = $_POST["petsAllowed"];
        $resultado=$acomoda->post($name,$address,$review,$numberOfRooms,$petsAllowed);
        console_log( "hola" );
        echo $resultado;    
}


if ($_SERVER['REQUEST_METHOD']=='PUT') {
   
    parse_str(file_get_contents("php://input"),$post_vars);
    $id=intval($_GET["id"]);
    $name = $post_vars["name"];
    $address = $post_vars["address"];
    $review = $post_vars["review"];
    $numberOfRooms = $post_vars["numberOfRooms"];
    $petsAllowed = $post_vars["petsAllowed"];
    $resultado=$acomoda->putId($id,$name,$address,$review,$numberOfRooms,$petsAllowed);
    echo $resultado;    
}


?>
