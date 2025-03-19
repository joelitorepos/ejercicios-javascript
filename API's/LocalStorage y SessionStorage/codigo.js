"use strict";

// con localStorage se pueden guardar datos en el navegador y estos se mantendran aunque se cierre la ventana
console.log(localStorage);

// setItem es un metodo que se usa para guardar datos en el navegador
localStorage.setItem("nombre","pedro"); 

// getItem es un metodo que se usa para obtener datos del navegador
console.log(localStorage.getItem("nombre"));

// removeItem es un metodo que se usa para borrar datos del navegador
localStorage.removeItem("nombre");

// clear es un metodo que se usa para borrar todos los datos del localStorage
setTimeout(() => {
    localStorage.clear();
},3000);


// con sessionStorage se pueden guardar datos en el navegador pero estos se borraran cuando se cierre la ventana
sessionStorage.setItem("nombre","juan");

let nombre = sessionStorage.getItem("nombre");

console.log(nombre);
