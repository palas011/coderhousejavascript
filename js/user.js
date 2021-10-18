class User{
    constructor(nombre,pass){
        this.nombre = nombre;
        this.pass = pass
    }
}

class Solicitud{
    constructor(tipooperacion,nombre,sueldo,credito,cuotas){
        this.tipooperacion = tipooperacion;
        this.nombre =   nombre;
        this.sueldo =   sueldo;
        this.credito =  credito;
        this.cuotas  =  cuotas;
    }
}

//CREADOR DE SOLICITUDES
const crearSolicitud=(tipooperacion,nombre,sueldo,credito,cuotas)=>{
    const solicitud = new Solicitud(tipooperacion,nombre,sueldo,credito,cuotas)
    return solicitud
}

const nico = new User("nico","123")
let listaDeSolicitudes;

if(localStorage.getItem("lista") == null){
    listaDeSolicitudes = []
}else{
    listaDeSolicitudes= JSON.parse(localStorage.getItem("lista"))
}


const confirmacionDeAcceso =()=>{
    
    let bucle = true
    
    while(bucle){   //PREGUNTA MIENTAS SEA TRUE
    
        const nombre = prompt("INGRESE SU USUARIO");
        const pass =   prompt("INGRESE SU CONTRASEÑA");

        if (nombre === nico.nombre && pass === nico.pass){
             bucle = false;
        }else{
            alert("USUARIO O PASS INCORRECTO")
        }
    }
}    
//confirmacionDeAcceso()

const crearOperacion =()=>{

    let bucle = true
    while(bucle){
            let ciclo = true
            while(ciclo){
                       
                let tipo = "Prestamo Personal";               
                let nombre  = document.getElementById("nombre").value;
                let sueldo  = document.getElementById("sueldo").value;
                let dinero  = document.getElementById("credito").value;
                let cuotas  = document.getElementById("cuotas").value; ; 
                               
                listaDeSolicitudes.push(crearSolicitud(tipo,nombre,sueldo,dinero,cuotas)) //LLAMA AL CREADOR DE SOLICITUDES//
                localStorage.setItem("lista",JSON.stringify(listaDeSolicitudes))//LO GUARDO EN EL LOCAL STORE COMO UN JSON//
                ciclo = confirm("Desea agregar uno mas?")
            }
            //let ciclo = false;
            //let bucle = false;
            break;

    }
}

    let ConfirmarPrestamo = document.getElementById("btnConfirmarprestamo");
        ConfirmarPrestamo.onclick =() => {           
        crearOperacion()
        limpiarFormularios ()
    }


limpiarFormularios =()=>{  
    document.getElementById("formNuevaSolicitudCredito").reset()

}