<?php

include 'modelos/acomodacion.php';
include 'modelos/civico.php';

//RewriteEngine On # Turn on the rewriting engine
//RewriteRule ^employees/?$ employees.php [NC,L]
//RewriteRule ^employees/([0-9]+)/?$ employees.php?id=$1 [NC,L]


if ($_SERVER['REQUEST_METHOD']=='GET') {
   
    $acomoda = new Acomodacion;
    if(!empty($_GET["id"])){
        $id=intval($_GET["id"]);
        echo json_encode($acomoda->getId($id), JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    }
    else{
        echo json_encode($acomoda->darJson(), JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    }
}

if ($_SERVER['REQUEST_METHOD']=='DELETE') {
   
    $acomoda = new Acomodacion;
    
        $id=intval($_GET["id"]);
        $resultado = $acomoda->deleteId($id);
        echo json_encode($resultado, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);
    
}
    
    /*
    
     $str = file_get_contents('datos/acomodacion.json');
    $json = json_decode($str, true);
    
    
    foreach ($json['ciudades'] as $field => $value) {
        // Use $field and $value here
        If($value['city'] == $_POST['norte']){
            echo "Correcto";
            break;
        }
        else{
            continue;
        }
    }
    
    } else {
    
    die("Invocación incorrecta");
    */



?>
