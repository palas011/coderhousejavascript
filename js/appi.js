class Alta{
    constructor(nombre,sueldo,dinero,cuotas){
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.dinero = dinero;
        this.cuotas = cuotas;
    }
}

let solicitudes = [];

const nuevasolicitud =()=>{
        for(let i=0; i<1; i++){
            let nombre= document.getElementById("nombre").value;
            let sueldo= document.getElementById("sueldo").value;
            let dinero= document.getElementById("credito").value;
            let cuotas= document.getElementById("cuotas").value;

            let solicitud = new Alta(nombre,sueldo,dinero,cuotas)
            solicitudes.push(solicitud)
        }

        const aviso = document.createElement("p")
        aviso.setAttribute("id","elementoAgregado")
        aviso.textContent = " ✓ Se agrego solicitud"  
        document.getElementById("avisoDeSolicitud").appendChild(aviso)
        document.getElementById("avisoDeSolicitud").setAttribute("class","tituloPrincipal ")       
       //console.log(document.querySelector("#cantSolicitudes"));
       

}

const versolicitudes =()=>{
    //Funcion para ordenar, usa dos parametros, solicitudes mayores//
    solicitudes.sort((a,b) => {
        if(a.dinero < b.dinero){
            return 1
        }
        if(a.dinero > b.dinero){
            return -1
        }
    }
    )
    console.log(solicitudes)
} 


let btnlimpiar = document.getElementById("btnLimpiar");
    btnLimpiar.onclick  = () =>  {document.getElementById("formNuevaSolicitud").reset()}
    
let cuotas  = document.getElementById("cuotas");
    cuotas.onclick = () => {window.alert("Solo 12,15 o 18 cuotas disponibles")}

let confirmar = document.getElementById("btnConfirmar");
    confirmar.onclick =() => {
        nuevasolicitud()
    }