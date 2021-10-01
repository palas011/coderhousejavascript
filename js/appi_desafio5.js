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
    let nombre =  prompt("Ingrese su nombre")
    let sueldo =  prompt("Ingrese su sueldo neto")
    let credito = prompt("Cuanto dinero necesita?")
    let cuotas = prompt("En cuantas cuotas? (12-15-18)")
    const pedido = new Credito(nombre,sueldo,credito,cuotas)
    console.log(pedido);
}

