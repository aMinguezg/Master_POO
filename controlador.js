
    let eleccion;
    let servidor;
    let entidad;
    $('#divContenido').hide();

    $('#servidor').change(function(){
        eleccion = $('#servidor').val();
        switch(eleccion){
            case "php":
                servidor = "http://localhost:4000/";
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
        
      });

    $( "#getAll" ).click(function() {
          
             
          $.ajax({
            url:`${servidor}${entidad}`,
            type: 'GET',
            contentType: "application/json",
            success: function(data) {
                $('#area').val(JSON.stringify(data));
            }
          });
      });

      $( "#getId" ).submit(function() {
        let id = $("#idGet").val();
        $.ajax({
            url:`${servidor}${entidad}/${id}`,
            type: 'GET',
            contentType: "application/json",
            success: function(data) {
                $('#area').val(JSON.stringify(data));
            }
          });
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
              url:`${servidor}${entidad}`,
              type: 'POST',
              contentType: "application/json",
              data:datos,
              
              success: function(data) {
                $('#area').val(JSON.stringify(data));
              }
        });
      });

      $( "#put" ).submit(function() {
        let id = $("#idPut").val();
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
            url:`${servidor}${entidad}/${id}`,
            type: 'PUT',
            contentType: "application/json",
            data:datos,
            success: function(data) {
                $('#area').val(JSON.stringify(data));
            }
          });
      });

      $( "#delId" ).submit(function() {
          let id = $("#idDel").val();
          $.ajax({
              url:`${servidor}${entidad}/${id}`,
              type: 'DELETE',
              contentType: "application/json",
              success: function(data) {
                  $('#area').val(JSON.stringify(data));
              }
            });
      });
    
