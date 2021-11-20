let listaObjetos;

if(localStorage.getItem("lista") == 0){
    alert("No tenes ese tipo de operaciones")
}else{
    listaObjetos=JSON.parse(localStorage.getItem("lista"))
}

//let dato = prompt("Ingresar monto que desea filtrar")
listaFiltrada = listaObjetos.filter(e=> e.tipooperacion === "Caja de Ahorro")
if (listaFiltrada.length != 0){
     //saco el numero de indidce de esa lista//    
    listaFiltrada.forEach(element => {
        let index = listaObjetos.indexOf(element);
        imprimirSolicitudes.innerHTML +=  
        `
        <div class="card col-lg-4 py-5 mb-3 bg-success ">
                <div class="card-body text-dark text-center">
                        <h5 class="card-title">Solicitud de Caja de Ahorro</h5>
                        <p class="card-text text-center "><b>Titular :</b>${element.nombrecahorro}</p>
                        <p class="card-text text-center"><b>Deposito Inicial : </b>$${element.deposito_cahorro}</p>
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

