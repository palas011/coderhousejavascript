/*DESAFIO 8*/
class Residente{
    constructor({
        nombre,
        piso,
        dpto
    }){
        this.nombre = nombre;
        this.piso = piso;
        this.dpto = dpto;
    }

}

const listaDeResidentes = [];

const archivarResidente = () => {
    const nombre = prompt("Ingrese nombre");   
    const piso = prompt("Ingrese piso");
    const dpto = prompt("Ingrese dpto");

    residente = new Residente({
        nombre : nombre,
        piso : piso,
        dpto : dpto ,
        }
    )

    if(localStorage.getItem("residentes") == null){
        listaDeResidentes.push(residente)
        localStorage.setItem("residentes",JSON.stringify(listaDeResidentes))
    }else{
        //tomo la info que tiene el local storage//
        const newLista = JSON.parse(localStorage.getItem("residentes"))
        //le agrego uno
        newLista.push(residente);
        //lo guardo
        localStorage.setItem("residentes",JSON.stringify(newLista)); 
    }

}

const mostrarResidentes =() => {
    if(localStorage.getItem("residentes") ==null){
        console.log("No hay residentes registrados")
    }else{
        const dato = JSON.parse(localStorage.getItem("residentes"))
        console.log(dato);
    }
}