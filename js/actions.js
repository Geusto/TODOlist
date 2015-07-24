$(document).ready(function(){
    $('#añadir').submit(function(event){
		event.preventDefault();
        var agregar = $('input[name=inputTask]').val();
        var btndel = "<button id='delete' class='btn btn-warning'>Borrar</button>";
        var checkbox = "<div class='checkbox'><label><input type='checkbox' class='completo'></label></div>";
        
    $('#pendiente').append('<div id="cont">' + '<ol>' + agregar + btndel + checkbox + '</ol>' + '</div>'); 
        $('#text').val("");
        
    });
    $(document).on('click', '#delete',function(){
		$(this).closest('#cont').remove();
    
        });
    $("#pendiente").on('click', ':checkbox', function (){
		$(this).closest('ol').toggleClass('completo');   
        });
});

