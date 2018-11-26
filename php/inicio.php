<html>
<head>
    <title>Hola</title>
</head>
<body>
<h1>Prueba</h1>
<p>Fecha: <?= date("d.m.y")?></p>
<?php
if (date ("d") % 2 == 0) {
    echo "Hoy es un día par";
} else {
    echo "Hoy es un día impar";
}


$str = file_get_contents('ejemplo.json');
$json = json_decode($str, true); // decode the JSON into an associative array
//echo '<pre>' . print_r($json, true) . '</pre>';

//$ciudadNorte = $json['ciudades'][0]['provincias']['norte'];
//echo $ciudadNorte;


foreach ($json['ciudades'] as $field => $value) {
    // Use $field and $value here
    echo $value['city'];
}
?>


</body>
</html>