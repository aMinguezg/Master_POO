
    let eleccion;
    let servidor;
    let entidad;
    $('#divContenido').hide();

    $('#servidor').change(function(){
        eleccion = $('#servidor').val();
        switch(eleccion){
            case "php":
                servidor = "http://localhost/poo/php/";
                break;
            case "python":
                servidor = "http://localhost:5000/";
                break;
            case "node":
                servidor = "http://localhost:3000/";
                break;
            default:
                servidor = "http://localhost:3000/";
        } 
        $('#divServidor').hide();
        $('#divContenido').show();
        $('#getId').hide();
        $('#delId').hide();
        $('#post').hide();
        $('#postCiv').hide();
        $('#put').hide();
        $('#putCiv').hide();
    });
    
    //let entidad = $('#entidad').change().val();
    $('#entidad').change(function(){
        if( $('#entidad').val()=="acomodacion"){
            entidad = "acomodacion";
        }
        else{
            entidad = "civico";
        }
    });
    
    $( "#servidorBut" ).click(function() {
          
        $('#divContenido').hide();
        $('#divServidor').show();
        $('#area').val("");
        
      });

    $( "#getAllBut" ).click(function() {
        if(entidad == 'acomodacion' || entidad == 'civico'){
            $.ajax({
                url:`${servidor}${entidad}`,
                type: 'GET',
                contentType: "application/json",
                success: function(data) {
                    $('#area').val(JSON.stringify(data));
                }
              });
        }
        else{
          alert("¡Hola! Debes seleccionar primero una entidad");
        }
          
      });

      $( "#getIdBut" ).click(function() {
          if(entidad == 'acomodacion' || entidad == 'civico'){
            $('#getId').show(); 
          }
          else{
            alert("¡Hola! Debes seleccionar primero una entidad");
          }
              
      });
      $( "#deleteBut" ).click(function() {
        if(entidad == 'acomodacion' || entidad == 'civico'){
            $('#delId').show();
        }
        else{
          alert("¡Hola! Debes seleccionar primero una entidad");
        }
        
      });
      $( "#postBut" ).click(function() {
        if(entidad == 'acomodacion' || entidad == 'civico'){
            if(entidad=='acomodacion'){
                $('#post').show();
            }
            else{
                $('#postCiv').show();
            }
        }
        else{
          alert("¡Hola! Debes seleccionar primero una entidad");
        }
        
      });
      $( "#putBut" ).click(function() {
        if(entidad == 'acomodacion' || entidad == 'civico'){
            if(entidad=='acomodacion'){
                $('#put').show();
            }
            else{
                $('#putCiv').show();
            }
        }
        else{
          alert("¡Hola! Debes seleccionar primero una entidad");
        }
        
      });

      $( "#getId" ).submit(function() {
        let id;
        if(eleccion== "python"){
            numero = $("#idGet").val();
            id = `?id=${numero}`;
        }
        else{
            numero = $("#idGet").val();
            id = `/${numero}`;
        }
        $.ajax({
            url:`${servidor}${entidad}${id}`,
            type: 'GET',
            contentType: "application/json",
            success: function(data) {
                $('#area').val(JSON.stringify(data));
            }
          });
        $('#getId').hide();
        $('#idGet').val("");
      });


      $( "#post" ).submit(function() {
      
        let name = $("#namePost").val();
        let add = $("#addressPost").val();
        let review = $("#reviewPost").val();
        let rooms = $("#roomsPost").val();
        let pet = $('#truePost').prop('checked');
       
        let dat ={
            "name": name,
            "address": add,
            "review": review,
            "numberOfRooms": rooms,
            "petsAllowed": pet
        };
        let datos = JSON.stringify(dat);
        $.ajax({
              url:`${servidor}acomodacion`,
              type: 'POST',
              contentType: "application/json",
              data:datos,
              
              success: function(data) {
                $('#area').val(JSON.stringify(data));
              }
        });
        $('#post').hide();
        $("#namePost").val("");
        $("#addressPost").val("");
        $("#reviewPost").val("");
        $("#roomsPost").val("");
      });

      $( "#postCiv" ).submit(function() {
      
        let name = $("#namePostCiv").val();
        let add = $("#addressPostCiv").val();
        let review = $("#reviewPostCiv").val();
        let time = $("#timePostCiv").val();
       
        let dat ={
            "name": name,
            "address": add,
            "review": review,
            "openingHours": time
        };
        let datos = JSON.stringify(dat);
        $.ajax({
              url:`${servidor}civico`,
              type: 'POST',
              contentType: "application/json",
              data:datos,
              
              success: function(data) {
                $('#area').val(JSON.stringify(data));
              }
        });
        $('#postCiv').hide();
        $("#namePostCiv").val("");
        $("#addressPostCiv").val("");
        $("#reviewPostCiv").val("");
        $("#timePostCiv").val("");
      });

      $( "#put" ).submit(function() {
        let id;
        if(eleccion== "python"){
            numero = $("#idPut").val();
            id = `?id=${numero}`;
        }
        else{
            numero = $("#idPut").val();
            id = `/${numero}`;
        }
        let name = $("#namePut").val();
        let add = $("#addressPut").val();
        let review = $("#reviewPut").val();
        let rooms = $("#roomsPut").val();
        let pet = $('#truePut').prop('checked');
        let dat ={
            "name": name,
            "address": add,
            "review": review,
            "numberOfRooms": rooms,
            "petsAllowed": pet
        };
        let datos = JSON.stringify(dat);
        $.ajax({
            url:`${servidor}acomodacion${id}`,
            type: 'PUT',
            contentType: "application/json",
            data:datos,
            success: function(data) {
                $('#area').val(JSON.stringify(data));
            }
          });
          $('#put').hide();
          $("#idPut").val("");
          $("#namePut").val("");
          $("#addressPut").val("");
          $("#reviewPut").val("");
          $("#roomsPut").val("");
      });

      $( "#putCiv" ).submit(function() {
        let id;
        if(eleccion== "python"){
            numero = $("#idPutCiv").val();
            id = `?id=${numero}`;
        }
        else{
            numero = $("#idPutCiv").val();
            id = `/${numero}`;
        }
        let name = $("#namePutCiv").val();
        let add = $("#addressPutCiv").val();
        let review = $("#reviewPutCiv").val();
        let time = $("#timePutCiv").val();
        let dat ={
            "name": name,
            "address": add,
            "review": review,
            "openingHours": time
        };
        let datos = JSON.stringify(dat);
        $.ajax({
            url:`${servidor}civico${id}`,
            type: 'PUT',
            contentType: "application/json",
            data:datos,
            success: function(data) {
                $('#area').val(JSON.stringify(data));
            }
          });
          $('#putCiv').hide();
          $("#idPutCiv").val("");
          $("#namePutCiv").val("");
          $("#addressPutCiv").val("");
          $("#reviewPutCiv").val("");
          $("#timePutCiv").val("");
      });

      $( "#delId" ).submit(function() {
        let id;
        if(eleccion== "python"){
            numero = $("#idDel").val();
            id = `?id=${numero}`;
        }
        else{
            numero = $("#idDel").val();
            id = `/${numero}`;
        }
          $.ajax({
              url:`${servidor}${entidad}${id}`,
              type: 'DELETE',
              contentType: "application/json",
              success: function(data) {
                  $('#area').val(JSON.stringify(data));
              }
            });
        $('#delId').hide();
        $('#idDel').val("");
      });
    
