let listaObjetos;

if(localStorage.getItem("lista") == 0){
    alert("No tenes solicitudes realizadas por ese monto")
}else{
    listaObjetos=JSON.parse(localStorage.getItem("lista"))
}

let dato = prompt("Ingresar monto que desea filtrar")
listaFiltrada = listaObjetos.filter(e=> e.sueldo ===dato)

if (listaFiltrada.length != 0){
    
    listaFiltrada.forEach(element => {
         console.log(element.nombre + " " + element.sueldo)
    });

} else {
    console.log("NO TENES SOLICITUDES EN ESE RANGO DE DINERO")
}


const comprar = (dato)=>{
    //let dato = prompt("De que cliente desea confirmar solicitud")
    let contenedor;

    if(localStorage.getItem("contenedor") == null){
        contenedor = []
    }else{
        contenedor = JSON.parse(localStorage.getItem("contenedor"))
    }
    contenedor.push(dato)
    localStorage.setItem("contenedor",JSON.stringify(contenedor))
}

