const contenedor = document.querySelector(".contenedor");

// createElement es sensible a mayusculas, create element reconoce a los elementos en mayusculas
const item = document.createElement("LI");

const textoDelItem = document.createTextNode("texto del item");


// ESTE AGREGA UN NODO HIJO AL NODO QUE LE ASIGNEMOS
item.appendChild(textoDelItem);

contenedor.appendChild(item);

console.log(item);

// TAMBIEN PODEMOS HACER 

// item.innerHTML = "esto es un texto del item";
// contenedor.appendChild(item);

// pero esto no seria un objeto, por lo que no tendria las mismas propiedadesque tiene un text node

// PARA CREAR MUCHOS ELEMENTO, HAY QUE USAR createDocumentFragment();

const fragmento = document.createDocumentFragment();

for(let i = 1; i <= 20; i++){
    const item = document.createElement("LI");
    item.innerHTML = "esto es un elemento de la lista";
    fragmento.appendChild(item)
}

contenedor.appendChild(fragmento)