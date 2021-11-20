let listaObjetos;

if(localStorage.getItem("lista") == 0){
    alert("No tenes ese tipo de operaciones")
}else{
    listaObjetos=JSON.parse(localStorage.getItem("lista"))
}

//let dato = prompt("Ingresar monto que desea filtrar")
listaFiltrada = listaObjetos.filter(e=> e.tipooperacion === "Prestamo Personal")
if (listaFiltrada.length != 0){
     //saco el numero de indidce de esa lista//    
    listaFiltrada.forEach(element => {
        let index = listaObjetos.indexOf(element);
        imprimirSolicitudes.innerHTML +=  
        `
            <div class="card col-lg-4 py-5 mb-3 bg-danger">
                <h5 class="card-title"><b>Solicitud de Prestamo</b></h5>
                <p class="card-text text-center "><b>Titular :</b>${element.nombre}</p>
                <p class="card-text text-center"><b>Sueldo Neto :</b>${element.sueldo}</p>
                <p class="card-text text-center"><b>Monto Solicitado :</b>${element.credito}</p>
                <p class="card-text text-center"><b>Cantidad de cuotas :</b>${element.cuotas} cuotas</p>
                <p class="card-text text-center"><b>Valor de cuotas :</b>$ ${element.credito * 2 / element.cuotas}</p>
                <a href="#" class="btn btn-primary" onclick="comprar(${index})">CONFIRMAR SOLICITUD</a>   
            </div>

        `  
    });
} else {
    alert("NO TENES SOLICITUDES DE ESE PRODUCTO")
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

