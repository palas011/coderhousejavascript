class Alta{
    constructor(nombre,precio,dinero,cuotas){
        this.nombre = nombre;
        this.precio = precio;
        this.dinero = dinero;
        this.cuotas = cuotas;
    }
}

let solicitudes = [];

const nuevasolicitud =()=>{
        for(let i=0; i<=2; i++){
            let nombre= prompt("Ingrese el nombre del cliente");
            let precio=Number(prompt("Ingrese sueldo neto del cliente"));
            let dinero=Number(prompt("Ingrese dinero que solicita"));
            let cuotas=Number(prompt("Ingrese la cantidad de cuotas"));

            let solicitud = new Alta(nombre,precio,dinero,cuotas)
            solicitudes.push(solicitud)
        }
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
        //console.log(solicitudes)
}


