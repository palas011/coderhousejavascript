let listaObjetos;
let imprimirDatos = document.getElementById("imprimirSolicitudes")
let btnprocesar = document.getElementById("btnprocesar")

if (localStorage.getItem("contenedor") == null){ //pregunto si tengo solicitudes
    alert("No hay solicitudes confirmadas")
}else{
     listaObjetos = JSON.parse(localStorage.getItem("contenedor"))
}

listaObjetos.forEach(element => {

    let index = listaObjetos.indexOf(element)


    if ((element.tipooperacion) === "Prestamo Personal"){
        imprimirContenedor.innerHTML +=  `
        <div class="card mb-3 row ">   
                <div class="card-body text-dark text-center">
                        <h5 class="card-title">Solicitud de Prestamo</h5>
                        <p class="card-text text-center "><b>Titular :</b>${element.nombre}</p>
                        <p class="card-text text-center"><b>Sueldo Neto :</b>${element.sueldo}</p>
                        <p class="card-text text-center"><b>Monto Solicitado :</b>${element.credito}</p>
                        <p class="card-text text-center"><b>Cantidad de cuotas :</b>${element.cuotas} cuotas</p>
                        <p class="card-text text-center"><b>Valor de cuotas :</b>$ ${element.credito * 2 / element.cuotas}</p>
                </div>
        </div>` }

    if ((element.tipooperacion) === "Plazo Fijo"){
        imprimirContenedor.innerHTML +=  `
        <div class="card mb-3 row ">   
                <div class="card-body text-dark text-center">
                        <h5 class="card-title">Solicitud de Plazo Fijo</h5>
                        <p class="card-text text-center "><b>Titular :</b>${element.nombrepf}</p>
                        <p class="card-text text-center"><b>Deposito Inicial : </b>$${element.depositopf}</p>
                        <p class="card-text text-center"><b>Dias :</b>${element.diaspf}</p>
                        <p class="card-text text-center"><b>T.N.A :</b>37%</p>
                        <p class="card-text text-center"><b>Intereses a obtener :</b>$ ${element.depositopf*0.37}</p>
                </div>
        </div>` }

        if ((element.tipooperacion) === "Caja de Ahorro"){
            imprimirContenedor.innerHTML +=  `
            <div class="card mb-3 row ">   
                    <div class="card-body text-dark text-center">
                            <h5 class="card-title">Solicitud de Caja de Ahorro</h5>
                            <p class="card-text text-center "><b>Titular :</b>${element.nombrecahorro}</p>
                            <p class="card-text text-center"><b>Deposito Inicial : </b>$${element.deposito_cahorro}</p>
                    </div>
            </div>`
        }
    })       



const confirmarOperaciones = ()=>{
    let operaciones = 0
    listaObjetos.forEach(e =>{
        operaciones += 1
    })
    
    alert("FELICIDADES TU SUCURSAL REALIZO HOY " + operaciones + " OPERACIONES")
    localStorage.clear("contenedor")
}

btnprocesar.addEventListener("click",()=>{
    confirmarOperaciones()
})
