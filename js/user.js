class User{
    constructor(nombre,pass){
        this.nombre = nombre;
        this.pass = pass
    }
}

class SolicitudPrestamo{
    constructor(tipooperacion,nombre,sueldo,credito,cuotas){
        this.tipooperacion = tipooperacion;
        this.nombre =   nombre;
        this.sueldo =   sueldo;
        this.credito =  credito;
        this.cuotas  =  cuotas;
    }
}

class SolicitudPfijo{
    constructor(tipooperacion,nombrepf,depositopf,diaspf){
        this.tipooperacion =    tipooperacion;
        this.nombrepf =         nombrepf;
        this.depositopf =       depositopf;
        this.diaspf =           diaspf;
    }
}

class SolicitudCahorro{
    constructor(tipooperacion,nombreahorro,deposito_cahorro){
        this.tipooperacion =     tipooperacion;
        this.nombrecahorro =     nombreahorro;
        this.deposito_cahorro =  deposito_cahorro;
        
    }
}


//CREADOR DE SOLICITUDES
const crearSolicitud=(tipooperacion,nombre,sueldo,credito,cuotas)=>{
    const solicitud = new SolicitudPrestamo(tipooperacion,nombre,sueldo,credito,cuotas)
    return solicitud
}

const crearSolicitudPf=(tipooperacion,nombrepf,depositopf,diaspf)=>{
    const solicitud = new SolicitudPfijo(tipooperacion,nombrepf,depositopf,diaspf)
    return solicitud
}

const crearSolicitudCahorro=(tipooperacion,nombre_cahorro,deposito_cahorro)=>{
    const solicitud = new SolicitudCahorro(tipooperacion,nombre_cahorro,deposito_cahorro)
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



//****CREDITO */
const crearOperacionPrestamo =()=>{

    //let bucle = true
    //while(bucle){
         //   let ciclo = true
           // while(ciclo){
                       
                let tipo = "Prestamo Personal";               
                let nombre  = document.getElementById("nombre").value;
                let sueldo  = document.getElementById("sueldo").value;
                let dinero  = document.getElementById("credito").value;
                let cuotas  = document.getElementById("cuotas").value; ; 
                               
                listaDeSolicitudes.push(crearSolicitud(tipo,nombre,sueldo,dinero,cuotas)) //LLAMA AL CREADOR DE SOLICITUDES//
                localStorage.setItem("lista",JSON.stringify(listaDeSolicitudes))//LO GUARDO EN EL LOCAL STORE COMO UN JSON//
                //ciclo = confirm("Desea agregar uno mas?")
      //      }
            //let ciclo = false;
            //let bucle = false;
        //    break;

    //}
}
    //**accion del boton en form */
    let ConfirmarPrestamo = document.getElementById("btnConfirmarprestamo");
        ConfirmarPrestamo.onclick =() => {
            if (window.confirm("¿Desea grabar esta operación?")) {
            crearOperacionPrestamo()
            limpiarFormularios ()
            }            
    }




//****PLAZO FIJO */
const crearOperacionPFijo =()=>{
                let tipo = "Plazo Fijo";               
                let nombrepf  = document.getElementById("nombre_pf").value;
                let capitalpf  = document.getElementById("capital_pf").value;
                let diaspf  = document.getElementById("dias_pf").value;
                               
                listaDeSolicitudes.push(crearSolicitudPf(tipo,nombrepf,capitalpf,diaspf)) //LLAMA AL CREADOR DE SOLICITUDES//
                localStorage.setItem("lista",JSON.stringify(listaDeSolicitudes))//LO GUARDO EN EL LOCAL STORE COMO UN JSON//

}
        //**accion del boton en form */
        let ConfirmarPfijo = document.getElementById("btnConfirmarpf");
            ConfirmarPfijo.onclick =() => { 
            if (window.confirm("¿Desea grabar esta operación?")) {              
            crearOperacionPFijo()
            limpiarFormularios ()
            }
        }
//****fin operacion pf */



//****CAJA AHORRO */
const crearOperacionCahorro =()=>{
                let tipo = "Caja de Ahorro";               
                let nombrecahorro  = document.getElementById("nombre_cahorro").value;
                let depositocahorro  = document.getElementById("deposito_cahorro").value;
                                              
                listaDeSolicitudes.push(crearSolicitudCahorro(tipo,nombrecahorro,depositocahorro)) //LLAMA AL CREADOR DE SOLICITUDES//
                localStorage.setItem("lista",JSON.stringify(listaDeSolicitudes))//LO GUARDO EN EL LOCAL STORE COMO UN JSON//
}
    //**accion del boton en form */
    let ConfirmarCahorro = document.getElementById("btnConfirmarcahorro");
        ConfirmarCahorro.onclick =() => {
        if (window.confirm("¿Desea grabar esta operación?")) {           
        crearOperacionCahorro()
        limpiarFormularios ()
        }
    }
//****fin operacion caja ahorro */



//**limpiar formularios */
limpiarFormularios =()=>{  
    document.getElementById("formNuevaSolicitudCredito").reset()
    document.getElementById("formNuevaSolicitudPf").reset()
    document.getElementById("formNuevaSolicitudCahorro").reset()
}