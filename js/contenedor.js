let listaObjetos;
let imprimirDatos = document.getElementById("imprimirSolicitudes")
let btnprocesar = document.getElementById("btnprocesar")

if (localStorage.getItem("contenedor") == null){ //pregunto si tengo solicitudes
    alert("No hay solicitudes")
}else{
     listaObjetos = JSON.parse(localStorage.getItem("contenedor"))
}

listaObjetos.forEach(element => {

    let index = listaObjetos.indexOf(element)

    imprimirContenedor.innerHTML +=  `
    <div class="card mb-3 row ">   
            <div class="card-body text-dark text-center">
                    <h5 class="card-title">Solicitud de Prestamo</h5>
                    <p class="card-text text-center "><b>Titular :</b>${element.nombre}</p>
                    <p class="card-text text-center"><b>Sueldo Neto :</b>${element.sueldo}</p>
                    <p class="card-text text-center"><b>Monto Solicitado :</b>${element.credito}</p>
                    <p class="card-text text-center"><b>En :</b>${element.cuotas} cuotas</p>
                    <div id="confirma"></div> 
            </div>
    </div>` 
//console.log(element.nombre + " gana $" + element.sueldo + " y necesita $" + element.credito + " en " + element.cuotas + " cuotas" )
})



const confirmarOperaciones = ()=>{

    let credito = 0
    listaObjetos.forEach(e =>{
        credito += e.credito
    })
    
    console.log("TU SOLICITUD DEL PRESTAMO POR $" + credito + " FUE APROBADO")
    localStorage.clear("contenedor")
}

btnprocesar.addEventListener("click",()=>{
    confirmarOperaciones()
})
