const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

$.get(url,(data,est) => {

   if(est == "success"){
        console.log(data)
    
        data.forEach(element => {
            $("#cotizacion").append(       
                `

                    <div class="card bg-dark col-lg-3 offset-md-1 mb-2">
                        <div class="card-body">
                            <p class="text-success  text-center"><b>${element.casa.nombre}</b></p>
                            <p class="text-light text-center">$<b>${element.casa.compra}</b></p>
                            <p class="text-light text-center">$<b>${element.casa.venta}</b></p> 
                        </div>
                    </div>


                `
            )    
        });
	
    }
    
})

$("#btndolar").on("click",() =>{
    $("#dolar").show();
    $("#condiciones").fadeOut(500);
    $("#btncondiciones").show();
    $("#btncondiciones2").hide();
})