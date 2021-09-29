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

//DESAFIO 4 */

function calculodisponible(sueldo){
        if (sueldo <= 20000){
            alert('SUELDO INSUFICIENTE PARA REALIZAR OPERACIONES CREDITICIAS')
        }
            else if (sueldo > 20000 && sueldo <= 40000 ){ 
                credito = sueldo * 1.5;
                calculodecuotas(credito);
                }
                else if(sueldo > 40000 && sueldo <= 60000 ){
                    credito = sueldo * 1.85;
                    calculodecuotas(credito);
                    }
                    else if(sueldo > 60000 && sueldo <= 80000 ){
                    credito = sueldo * 1.95;
                    calculodecuotas(credito);
                    }
}

function calculodecuotas(credito){
            let calculo12 = credito / 12;
            calculo12 = calculo12.toFixed(2); 
            let calculo18 = credito / 18;
            calculo18 = calculo18.toFixed(2); 
            let calculo24 = credito / 24;
            calculo24 = calculo24.toFixed(2); 

            console.log("Puede retirar $" + credito + " en" + "\n" 
            + "12 cuotas de $" + calculo12 + "\n"
            + "18 cuotas de $" + calculo18 + "\n"
            + "24 cuotas de $" + calculo24 + "\n"
            );
}


let sueldo  =  prompt("INGRESE SU SUELDO NETO (BOLSILLO");

calculodisponible(sueldo);
