let listaObjetos;

if(localStorage.getItem("lista") == 0){
    alert("No tenes ese tipo de operaciones")
}else{
    listaObjetos=JSON.parse(localStorage.getItem("lista"))
}

//let dato = prompt("Ingresar monto que desea filtrar")
listaFiltrada = listaObjetos.filter(e=> e.tipooperacion === "Plazo Fijo")
if (listaFiltrada.length != 0){
     //saco el numero de indidce de esa lista//    
    listaFiltrada.forEach(element => {
        let index = listaObjetos.indexOf(element);
        imprimirSolicitudes.innerHTML +=  
        `
        <div class="card mb-3 row ">   
                <div class="card-body text-dark text-center">
                        <h5 class="card-title">Solicitud de Plazo Fijo</h5>
                        <p class="card-text text-center "><b>Titular :</b>${element.nombrepf}</p>
                        <p class="card-text text-center"><b>Deposito Inicial : </b>$${element.depositopf}</p>
                        <p class="card-text text-center"><b>Dias :</b>${element.diaspf}</p>
                        <p class="card-text text-center"><b>T.N.A :</b>37%</p>
                        <p class="card-text text-center"><b>Intereses a obtener :</b>$ ${element.depositopf*0.37}</p>
                        <a href="#" class="btn btn-primary" onclick="comprar(${index})">CONFIRMAR SOLICITUD</a>   
                </div>
        </div>`  
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

