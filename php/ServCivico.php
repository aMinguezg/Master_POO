<?php

include 'modelos/civico.php';
header('content-type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Requested-With,Content-Type");

//RewriteEngine On # Turn on the rewriting engine
//RewriteRule ^employees/?$ employees.php [NC,L]
//RewriteRule ^employees/([0-9]+)/?$ employees.php?id=$1 [NC,L]

$civic = new Civico;

if ($_SERVER['REQUEST_METHOD']=='GET') {
   
    
    if(!empty($_GET["id"])){
        $id=intval($_GET["id"]);
        echo json_encode($civic->getId($id), JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    }
    else{
        echo $civic->getAll();
    }
}

if ($_SERVER['REQUEST_METHOD']=='DELETE') {
    
        $id=intval($_GET["id"]);
        $resultado = $civic->deleteId($id);
        echo json_encode($resultado, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    
}

if ($_SERVER['REQUEST_METHOD']=='POST') {
   
        $name = $_POST["name"];
        $address = $_POST["address"];
        $review = $_POST["review"];
        $openingHours = $_POST["openingHours"];
        $resultado=$civic->post($name,$address,$review,$openingHours);
        echo $resultado;    
}


if ($_SERVER['REQUEST_METHOD']=='PUT') {
   
    parse_str(file_get_contents("php://input"),$post_vars);
    $id=intval($_GET["id"]);
    $name = $post_vars["name"];
    $address = $post_vars["address"];
    $review = $post_vars["review"];
    $openingHours = $post_vars["openingHours"];
    $resultado=$civic->putId($id,$name,$address,$review,$openingHours);
    echo $resultado;    
}


?>
