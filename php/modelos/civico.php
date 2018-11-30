<?php


class Civico extends Lugar{




    
    function __construct($identifier,$name,$address,$review,$openingHours){
        parent::__cosntruct($identifier,$name,$address,$review);
        $this->openingHours = $openingHours;
    }


}



?>