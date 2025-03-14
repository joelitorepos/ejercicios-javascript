// -------- FUNCIONES DE REGISTRO --------

// console.assert(2 === 1); asert no devolvera nada en caso que sea cierta la condicion pero si es falsa lo indicara y no se suele usar este metodo

// CLEAR DE TODA LA VIDA PARA LIMPIAR LA CONSOLA
console.clear();

// console.error(); sirve para mostrar un mensaje de error en consola que definamos
console.error("error en la programacion");

// console.log(); sirve como mensaje de depuracion, este es de uso general
console.log("buen trabajo pero eso no se usa mas");

//console.info(); sirve para mostrar un mensaje de informacion, este es de uso informativo
console.info("este metodo se dejo de usar");

// los elementos que van dentro tienen que ser un array o un objeto o si no funcionara como un console.log();
// al darle un array creara una tabla, con la posicion del elemento y el value o valor
console.table();

// console.warn(); sirve para mostrar un mensaje de advertencia con in icono amarillo en la consola
console.warn("mensaje de advertencia"); 

// NO ESTANDAR, no lo podra soportar entornos antiguos pero el uso suele ser comun por se soportado en un navegador o node.js
// crea una lista desplegable de los elementos que le pasemos
console.dir();

// -------- FUNCIONES DE CONTEO --------

// sirve para contar las veces que se a usado una funcion
console.count();

// sireve para reiniciar el contador de console.count();
console.countReset();

// -------- FUNCIONES DE AGRUPACION --------

// crea una agrupacion de todo lo que escribamos en consola
// el nombre del grupo se coloca adentro de los parentesis
console.group("verduras");

// crea un grupo que por defecto estara cerrado
console.groupCollapsed("frutas");

// cierra el grupo en la consola
console.groupEnd();
console.groupEnd();

// -------- FUNCIONES DE TEMPORIZACION --------

// es un temporizador
console.time();

// es un temporizador que nos mostrara el tiempo que ha pasado desde que se inicio el temporizador
// si lo ponemos solo asi nos mostrara un error, hay que crear el temporizador con console.time();
console.timeLog();

// termina el temporizador
console.timeEnd();
