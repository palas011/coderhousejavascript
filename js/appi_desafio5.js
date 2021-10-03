class Credito {
    constructor(nombre, sueldo, credito, cuotas) {
              
        if (sueldo < 12000){
            alert(nombre + " Tu sueldo es insuficiente para realizar la  operacion.")
            this.nombre  = nombre.toUpperCase();
            this.sueldo  = parseFloat(sueldo);
            this.credito = parseFloat(credito);
            this.cuotas  = parseFloat(cuotas);
            this.califica = false
        }else{
            this.nombre  = nombre.toUpperCase();
            this.sueldo  = parseFloat(sueldo);
            this.credito = parseFloat(credito);
            this.cuotas  = parseFloat(cuotas);
            this.valorcuotas = parseFloat((credito*2)/cuotas);
            this.califica = true
        }}

}

const nuevaSolicitud = () => {
    let sucursal = prompt("Ingresar Sucursal")
    let nombre =  prompt("Ingrese su nombre")
    let sueldo =  prompt("Ingrese su sueldo neto")
    let credito = prompt("Cuanto dinero necesita?")
    let cuotas = prompt("En cuantas cuotas? (12-15-18)")
    const pedido = new Credito(nombre,sueldo,credito,cuotas)
    console.log(pedido);

    //CREO ARRAY SOLO CON LA FECHA
    const fecha = new Date();
    const solicitudes = [fecha];

    //AGREGO DATOS TECNICOS//
    const datostecnicos ={sucursal,nombre,sueldo,fecha}
    solicitudes.push([datostecnicos]);

    //AGREGO DATOS DEL VENDEDOR
    nombrevendedor = "Juan 01";
    comision = credito * 0.02;
    const datosvendedor ={nombrevendedor,comision}
    solicitudes.push([datosvendedor]);
    console.log(solicitudes);
    
}

