$(document).ready(function ( ) {
    $('#buttn').click(function(){
    var agregar = $('input[name=inputTask]').val();  
    $('#pendiente').append('<div class="item">' + agregar + '</div>'); 
        
    });
    
});