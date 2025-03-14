const contenedor = document.querySelector(".contenedor");

let parrafo = document.createElement("P");
let h2_nuevo = document.createElement("H2");

h2_nuevo.innerHTML = "TITULO";
parrafo.innerHTML = "PARRAFO";

h2_antiguo = document.querySelector("h2");

// REEMPLAZAMOS
// contenedor.replaceChild(h2_nuevo, h2_antiguo);

// REMOVEMOS 
// contenedor.removeChild(h2_nuevo);

let respuesta = contenedor.hasChildNodes() ? "el elemento tiene hijos" : "el elemento no tiene hijos";

document.write(respuesta);

// PARENT ELEMENT BUSCA UNA ETIQUETA HTML PADRE

// PARENT NODE BUSCARA UN NODO PADRRE

console.log(h2_antiguo.parentElement);