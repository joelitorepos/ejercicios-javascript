const contenedor = document.querySelector(".flex-container");
let img, nombre, modelo, precio;

function crearLlave(nombre,modelo,precio) {
    img = `<img src="llave.png" alt="imagen de llave">`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h2>${modelo}</h2>`;
    precio = `<h2>${precio}</h2>`;
    return [img,nombre,modelo,precio];
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`, precioRandom);
    let div = document.createElement("DIV");
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);