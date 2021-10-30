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

/*ULTIMO CLIP VERDE CONFIRMACION*/
$("#cuotas").on("click",() =>{
        $("#btnConfirmarprestamo").addClass('bg-success');     
})
$("#dias_pf").on("click",() =>{
        $("#btnConfirmarpf").addClass('bg-success');     
})
$("#deposito_cahorro").on("click",() =>{
        $("#btnConfirmarcahorro").addClass('bg-success');     
})

/*MUESTRA CONDICIONES*/
$("#btncondiciones").on("click",() =>{
        $("#condiciones").slideDown(500);
        $("#condiciones").addClass('apagar_elemento mx-auto text-center mt-5 bg-warning py-5');
        $("#btncondiciones").hide();
        $("#btncondiciones2").show();
})

$("#btncondiciones2").on("click",() =>{
        $("#condiciones").fadeOut(500);
        $("#btncondiciones").show();
        $("#btncondiciones2").hide();
})





                 