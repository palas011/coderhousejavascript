/*DESAFIO 1
let nombreAlumno = prompt("Ingrese el nombre del alumno");
let edadAlumno   = prompt("Ingrese la edad del alumno");
let ciudadAlumno = prompt("Ingrese la ciudad nombre del alumno");

let datosAlumno = "el almumno" + " " + nombreAlumno + " " +  "tiene" + " " + edadAlumno  + " " + "y vive en" + " "  + ciudadAlumno;

alert(datosAlumno);*/


//-----------------------------------------------------------------------------------------------------------------------------------
/*DESAFIO 2
let opcion1 = "TERROR";
let opcion2 = "COMEDIA";
let opcion3 = "ACCION";
let opcion4 = "XXX"

let nombre = prompt('Ingrese su nombre');
let edad   = prompt('Ingrese su edad')
let genero = prompt('Que genero le gusta mas?');
genero = genero.toUpperCase();
nombre = nombre.toUpperCase();

if (genero == opcion1) {
    let peli1 = "IT"
    let peli2 = "EL CONJURO"
    peli1 =  peli1.toUpperCase();
    peli2 =  peli2.toUpperCase();
    let pelicula = prompt('Que pelicula desea ver?')
        pelicula = pelicula.toUpperCase();
        if ( (pelicula == peli1) || (pelicula == peli2) ){
            alert('EXCELENTE ELECCION ' + nombre + ' no tengas miedo');}
            else{
                alert('No tenemos esa pelicula lamentablemente ' +  nombre)
        }
}
    else if (genero == opcion2) {
        let peli1 = "ZOOLANDER"
        let peli2 = "TONTO Y RETONTO"
        peli1 =  peli1.toUpperCase();
        peli2 =  peli2.toUpperCase();
        let pelicula = prompt('Que pelicula desea ver?')
            pelicula = pelicula.toUpperCase();
            if ( (pelicula == peli1) || (pelicula == peli2) ){
                alert('EXCELENTE ELECCION ' + nombre + ' a reir a carjadas!');}
                else{
                    alert('No tenemos esa pelicula lamentablemente ' +  nombre)
                }
    }
    
    else if (genero == opcion3) {
        let peli1 = "TERMINATOR"
        let peli2 = "MISION IMPOSIBLE"
        peli1 =  peli1.toUpperCase();
        peli2 =  peli2.toUpperCase();
        let pelicula = prompt('Que pelicula desea ver?')
            pelicula = pelicula.toUpperCase();
            if ( (pelicula == peli1) || (pelicula == peli2) ){
                alert('EXCELENTE ELECCION ' + nombre + ' se vienen todas las aventuras!');}
                else{
                    alert('No tenemos esa pelicula lamentablemente ' +  nombre)
                }
    }

    else if (genero == opcion4 && edad > 18) {
            let peli1 = "PELI XXX"
            let peli2 = "PELI SUPER XXX"
            peli1 =  peli1.toUpperCase();
            peli2 =  peli2.toUpperCase();
            let pelicula = prompt('Que pelicula desea ver?')
                pelicula = pelicula.toUpperCase();
                if ( (pelicula == peli1) || (pelicula == peli2) ){
                    alert('EXCELENTE ELECCION ' + nombre + ' a disfrutar!');}
                    else{
                        alert('No tenemos esa pelicula lamentablemente ' +  nombre)
                    }
    }

    else if (genero == opcion4 && edad < 18) {
        alert(nombre + " no tenes la edad indicada para ver esas peliculas.")
    }

else{
    alert(nombre + " no hay peliculas de ese genero. PERDON :( ")
}
*/

/* DESAFIO 3 sistema de turnos
for (var contador = 1; contador <= 3; contador+=1) {
    var nombre = prompt('INGRESE NOMBRE DEL PACIENTE')
    var dia = prompt('INGRESE QUE DIA REQUIERE EL TURNO')
    document.write('nombre : ' + nombre + ' turno: ' + dia + '<br>');
    if(contador==3){
        alert('Demasiados turnos por hoy')
    }
}/*

/*DESAFIO 4 COMPLEMENTARIO
function validaedad(edad,altura,peso){
        if (edad < 20 || edad > 40){
            alert("Rango de edad no permitido");
        }
        else{
            calcularsobrepeso(altura,peso);
        }
}

function calcularsobrepeso(altura,peso){
        if (altura < 181 && peso >= 80 && peso < 90){
            console.log("Tienes sobrepeso nivel 1")
            nivel = 1;
            tratamiento(nivel)
        }   
            else if(altura < 181 && peso >= 90 && peso < 100 ){                
                console.log("Tienes sobrepeso nivel 2")
                nivel = 2;
                tratamiento(nivel);
            }
                else if(altura < 181 && peso >= 100){
                    console.log("Tienes sobrepeso nivel 3")
                    nivel = 3;
                    tratamiento(nivel);
                }
        else{
            console.log("Estas en buena forma")
        }        
}

function tratamiento(nivel){
        if(nivel==1){
            console.log("Corre dos veces por semana y consume 800 calorias diarias por dia para obtener tu peso.")
        }
        if(nivel==2){
            console.log("Corre tres veces por semana y consume 400 calorias diarias por dia para obtener tu peso.")
        }
        if(nivel==3){
            console.log("Acude a tu medico de cabecera o a tu nutricionista amigo.")
        }
}


let edad    =  prompt("INGRESE SU EDAD (si tiene entre 20 a 40 años)");
let altura  =  prompt("INGRESE SU ALTURA EN CM");
let peso    =  prompt("INGRESE SU PESO ACTUAL"); 

validaedad(edad,altura,peso);
