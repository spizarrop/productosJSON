"use strict";

const producto = {
    id: 101,
    nombre: "Teclado mecánico",
    precio: 59.99,
    disponible: true,
    categorias: ["Perifericos", "Oficina"],
    detalles:{
        marca: "LogiTech",
        garantia: "2 años"
    }
}

// Ejercicio 2
let jsonProducto = JSON.stringify(producto);

console.log(jsonProducto);

// Ejercicio 3
localStorage.setItem("jsonProducto", jsonProducto);

// Ejercicio 4
let datosJSON = localStorage.getItem("jsonProducto");
let objetoJSON = JSON.parse(datosJSON);

console.log(`Nombre del producto: ${objetoJSON.nombre}\n Precio: ${objetoJSON.precio}\n Marca: ${objetoJSON.detalles.marca}`);

// Ejercicio 5
console.log(typeof(producto));
console.log(typeof(datosJSON));
