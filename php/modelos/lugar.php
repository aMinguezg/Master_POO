<?php

class Lugar{

    private $identifier,$name,$address,$review;

    function __construct($identifier,$name,$address,$review){
        $this->identifier = $identifier;
        $this->name = $name;
        $this->address = $address;
        $this->review = $review;
    }

    

}


?>