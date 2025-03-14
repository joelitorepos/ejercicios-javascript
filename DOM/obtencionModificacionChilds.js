const contenedor = document.querySelector(".contenedor");

let primerHijo = contenedor.firstChild;

console.log(primerHijo);

let ultimoHijo = contenedor.lastChild;

console.log(ultimoHijo);

primerHijo = contenedor.firstElementChild;

console.log(primerHijo);

ultimoHijo = contenedor.lastElementChild;

console.log(ultimoHijo)

// Esto devuelve una node list, no es un array porque no se le puede hacer push para agregar otro elemento, pero si se puede recorrer
let hijos = contenedor.childNodes;

console.log(hijos);

// ESTO DEVUELVE LAS ETIWUETAS HTML O LOS ELEMENT NODE 
// NO SE PUEDE RECORRER CON UN FOREACH PERO SI CON UN FOR OF Y FOR IN
hijos = contenedor.children;

console.log(hijos);

