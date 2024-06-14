let productos = ["Tarta", "Tallarines", "Arroz", "Tortas"]

console.log("lista de productos inicial: ");
for( let i=0 ; i < productos.length; i++){
    console.log("Nombre: ${productos[i].nombre}, Precio: ${productos[i].precio}, Stock: ${productos[j].stock}");

}

for (let i = 0; i < 3; i++){
    if (productos.length >0){
     productos.pop();
     console.log("Stock actualizado despues de la venta: ")
     for (let j = 0; j < productos.length; j++){
        console.log("Nombre: ${productos[j].nombre}, Precio: ${productos[j].precio}, Stock: ${productos[J].stock");

     }  

    } else {
        console.log("No hay mas productos en stock.")
    }
}