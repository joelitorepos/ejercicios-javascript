let frutas = ["manzana","pera","mango","naranja"];

document.write(frutas[0]);

let computadora1 = {
    nombre: "joelito",
    procesador: "intel core 39",
    ram: "12GB",
    espacio: "1TB"
};

let nombre = computadora1["nombre"], procesador = computadora1["procesador"], ram = computadora1["ram"], espacio = computadora1["espacio"];

parrafo = `soy ${nombre}<br> y mi computador tiene un prpocesador ${procesador}<br> la memoria de mi ram es ${ram}<br> y el espacio que tengo en disco es de ${espacio}<br>`

parrafo2 = `soy ${computadora1["nombre"]}`;

document.write(parrafo);
document.write(parrafo2);