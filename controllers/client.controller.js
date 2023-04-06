import { productosServices } from "../service/client-service.js"

/*console.log(productosServices);*/

const crearNuevaLinea = (image, name, price) => {

    const linea = document.createElement("div");

    const contenido = `
                        <img src="${image}" alt="img">
                        <h1 class="product-name"> ${name} </h1>
                        <p class="precio">$ ${price}</p>
                      `;

    linea.innerHTML = contenido;
    
    return linea;
}

const contenedor = document.querySelector("[data-product]");

productosServices.listaProductos().then( data =>{

    data.forEach( producto => {
    const nuevaLinea = crearNuevaLinea(producto.image, producto.name, producto.price);
    contenedor.appendChild(nuevaLinea);
});
   
}).catch( err => alert("Hubo un error"));