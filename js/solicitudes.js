let listaObjetos;
let imprimirDatos = document.getElementById("imprimirSolicitudes")

if (localStorage.getItem("lista") == null){
    alert("No hay solicitudes")
}else{
     listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {

        let index = listaObjetos.indexOf(element)

        imprimirDatos.innerHTML +=  `
        <div class="card mb-3 row ">   
                <div class="card-body text-dark text-center">
                        <h5 class="card-title">Solicitud de Prestamo</h5>
                        <p class="card-text text-center "><b>Titular :</b>${element.nombre}</p>
                        <p class="card-text text-center"><b>Sueldo Neto :</b>${element.sueldo}</p>
                        <p class="card-text text-center"><b>Monto Solicitado :</b>${element.credito}</p>
                        <p class="card-text text-center"><b>En :</b>${element.cuotas} cuotas</p>
                        <a href="#" class="btn btn-primary" onclick="comprar(${index})">CONFIRMAR SOLICITUD</a>   
                </div>
        </div>` 
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