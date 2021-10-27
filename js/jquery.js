$(() =>{
        console.log('EL DOM ESTA LISTO')
});

$('#btnConfirmarprestamo').on('click', function () {
        let contador = contador + 1
        $("#salida").prepend("<br>✓ SE CARGO OPERACION.<br>");
        $("#salida").addClass('text-dark');
        $("#contador").prepend(contador);
}); 

//MODO DARK
$('#oscurecer').on('click', function () {
        $("body").removeClass('wallpageBlanco');
        $("body").addClass('wallpageNegro');
        $("body").addClass('wallpageNegro');
        $("h1").addClass('text-white');
        $("h3").addClass('text-white');
        $("#salida").addClass('text-white');
        $('#oscurecer').hide();
        $('#aclarar').show();    
});

$('#aclarar').on('click', function () {
        $("body").removeClass('wallpageNegro');
        $("body").addClass('wallpageBlanco');
        $("h1").removeClass('text-white');
        $("h3").removeClass('text-white');
        $('#oscurecer').show(); //muestro mediante id
        $('#aclarar').hide();
}); 




