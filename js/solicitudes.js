let listaObjetos;
let imprimirDatos = document.getElementById("imprimirSolicitudes")

if (localStorage.getItem("lista") == null){
    alert("No hay solicitudes")
}else{
     listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {

        let index = listaObjetos.indexOf(element);

        if ((element.tipooperacion) === "Prestamo Personal"){
        imprimirDatos.innerHTML +=  `
        <div class="card mb-3 row ">   
                <div class="card-body text-dark text-center">
                        <h5 class="card-title">Solicitud de Prestamo</h5>
                        <p class="card-text text-center "><b>Titular :</b>${element.nombre}</p>
                        <p class="card-text text-center"><b>Sueldo Neto :</b>${element.sueldo}</p>
                        <p class="card-text text-center"><b>Monto Solicitado :</b>${element.credito}</p>
                        <p class="card-text text-center"><b>Cantidad de cuotas :</b>${element.cuotas} cuotas</p>
                        <p class="card-text text-center"><b>Valor de cuotas :</b>$ ${element.credito * 2 / element.cuotas}</p>
                        <a href="#" class="btn btn-primary" onclick="comprar(${index})">CONFIRMAR SOLICITUD</a>   
                </div>
        </div>` }

        if ((element.tipooperacion) === "Plazo Fijo"){
            imprimirDatos.innerHTML +=  `
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
            </div>` }

            if ((element.tipooperacion) === "Caja de Ahorro"){
                imprimirDatos.innerHTML +=  `
                <div class="card mb-3 row ">   
                        <div class="card-body text-dark text-center">
                                <h5 class="card-title">Solicitud de Caja de Ahorro</h5>
                                <p class="card-text text-center "><b>Titular :</b>${element.nombrecahorro}</p>
                                <p class="card-text text-center"><b>Deposito Inicial : </b>$${element.deposito_cahorro}</p>
                                <a href="#" class="btn btn-primary" onclick="comprar(${index})">CONFIRMAR SOLICITUD</a>   
                        </div>
                </div>` }

    //console.log(element.nombre + " gana $" + element.sueldo + " y necesita $" + element.credito + " en " + element.cuotas + " cuotas" )
})


const comprar = (index)=>{
    //let dato = prompt("De que cliente desea confirmar solicitud")
    let contenedor;

    if(localStorage.getItem("contenedor") == null){
        contenedor = []
    }else{
        contenedor = JSON.parse(localStorage.getItem("contenedor"))
    }
    contenedor.push(listaObjetos[index])
    localStorage.setItem("contenedor",JSON.stringify(contenedor))
    
    vistoconfirmado()
}

const vistoconfirmado = ()=>{
    const aviso = document.createElement("p")
    aviso.setAttribute("id","visto")
    aviso.textContent = " ✓ Se confirmo solicitud"  
    document.getElementById("cajaconfirmar").appendChild(aviso)
    document.getElementById("cajaconfirmar").setAttribute("class","text-light py-2 text-center")       
    //console.log(document.querySelector("#cantSolicitudes"));
}