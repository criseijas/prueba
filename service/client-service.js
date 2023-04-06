


const listaProductos = () => fetch("http://localhost:3000/producto").then( (respuesta) => respuesta.json());



export const productosServices = {
    listaProductos
}


    /*const promise = new Promise( (resolve, reject) => {

        const http = new XMLHttpRequest();

        http.open("GET", "http://localhost:3000/producto");

        http.send();

        http.onload = () => {
            const response = JSON.parse(http.response);

            if(http.status >= 400){
                reject(response);
            }else{
                resolve(response);
            }
        }
    });

    return promise;*/






