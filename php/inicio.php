<html>
<head>
    <title>Inicio</title>
</head>
<body>
<h1>Inicio</h1>
<p>Fecha: <?= date("d.m.y")?></p>
<?php
if ($_SERVER['REQUEST_METHOD']=='POST') {

    $str = file_get_contents('ejemplo.json');
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
    
}


?>


</body>
</html>