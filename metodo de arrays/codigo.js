// -------- TRANSFORMADORES --------

// POP
// ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO Y TE MUESTRA CUAL ELIMINO
let nombres = ["juan","maria","camilo"];

let resultado = nombres.pop();

document.write(nombres + `<br>`);

document.write(resultado + `<br>`);

// SHIFT
// HACE LO MISMO QUE POP SOLO QUE ESTE ELIMINA EL PRIMERO

nombres = ["juan","maria","camilo"];

resultado = nombres.shift();

document.write(nombres + `<br>`);

document.write(resultado + `<br>`);

// PUSH
// AGREGA UN ELEMENTO AL ARRAY AL FINAL DE LA LISTA
// EL VALOR QUE DEVUELVE ES LA CANTIDAD TOTAL DE ELEMENTOS QUE HAY EN EL NUEVO ARREGLO

nombres = ["juan","maria","camilo"];

document.write(nombres + `<br>`);

resultado = nombres.push("armando","sofia");

document.write(nombres + `<br>`);

document.write(resultado + `<br>`);

// REVERSE
// HACE QUE EL ARRAY SE INVIERTA, DEVUELVE EL ARRAY ALREVEZ

nombres = ["juan","maria","camilo"];

document.write(nombres + `<br>`);

// EL CAMBIO QUE SE HAGA EN LA VARIABLE ES IGUAL AL CAMBIO EN EL ARREGLO POR LO QUE AMBOS DEVOLVERAN EL MISMO VALOR
resultado = nombres.reverse("armando","sofia");

document.write(resultado + `<br>`);

// UNSHIFT
// ES LO MISMO QUE PUSH PERO ESTE AGREGA AL INICIO LOS NUEVOS VALORES DEL ARREGLO
// Y TAMBIEN DEVUELVE EL VALOR DEL TOTAL DE ELEMENTOS EN EL ARREGLO

nombres = ["juan","maria","camilo"];

document.write(nombres + `<br>`);

resultado = nombres.unshift("armando","sofia");

document.write(nombres + `<br>`);

document.write(resultado + `<br>`);

// PUSH ES LO OPUESTO A POP Y UNSHIFT ES LO OPUESTO A SHIFT

// SORT
// ORDENA EL ARREGLO Y DEVUELVE EL ARREGLO ORDENADO
// SI ES NUMEROS POR ORDEN DEL MAS PEQUEÑO AL MAS GRANDE
// Y SI ES TEXTO POR ORDEN ALFABETICO 


nombres = ["juan","maria","camilo"];

document.write(nombres + `<br>`);

nombres.sort();

document.write(nombres + `<br>`);

// SPLICE
// ELIMINA ELEMENTOS DEL ARREGLO
// LOS PÀRAMETROS SON, EN DONDE VA A ARRANCAR Y EL SEGUNDO PARAMETRO ES CUANTOS ELEMENTOS ELIMINARA
// SI LE DAS MAS PARAMETROS AGREGARA LOS NUEVOS ELEMENTOS QUE LE DES
// LA FORMA DE REFERIRSE AL FINAL DE UN ARRAY ES CON -1 POR LO QUE SI LE DAS -1 Y 0 PUEDES AGREGAR AL FINAL NUEVOS ELEMENTOS

nombres = ["juan","maria","camilo","pedro","fulano"];

document.write(nombres + `<br>`);

nombres.splice(2,2,"angel","pablo");

document.write(nombres + `<br>`);

// -------- ACCESORES --------

// JOIN
// ESTO CONVIERTE EL ARRAY A CADENA DE TEXTO EN LA VARIABLE QUE LA GUARDAMOS 
// EN EL AREA DE PARAMETROS PODEMOS PONER EL SEPARADOR ENTRE ELEMENTOS QUE QUERRAMOS

nombres = ["juan","maria","camilo","pedro","fulano"];

resultado = nombres.join("<br>elemento: ");

document.write("elemento: " + resultado + `<br>`);

// SLICE
// HAY QUE DARLE DOS PÀRAMETROS DESDE QUE ELEMENTO HASTA QUE ELEMENTO
// EL PRIMER ELEMENTO SI ESTA INCLUIDO PERO EL ULTIMO ELEMENTO NO ESTA INCLUIDO
// PARA SELECCIONAR LOS ELEMENTOS HASTA EL ULTIMO HAY QUE DEJAR EL SEGUNDO PARAMETRO VACIO 

nombres = ["juan","maria","camilo","pedro","fulano"];

resultado = nombres.slice(0,3);

document.write(resultado + `<br>`);

// INCLUDES
// PÀRA VER SI ESTA O NO UN VALOR Y RETORNARA VALOR BOOLEANO

nombres = ["juan","maria","camilo","pedro","fulano"];

resultado = nombres.includes("camilo");

document.write(resultado + `<br>`);

// INDEXOF indexOf()  VERA SI ESTA DEL ARREGLO LO QUE AGREGAMOS EN EL PARAMETRO Y MOSTRARA EN QUE INDICE ESTA -1 QUE NO ESTA

// LASTINDEXOF lastINDEXoF() VERA SI EL ELEMENTO ESTA SI ESTA REPETIDO MOSTRARA EL INDICE DEL ULTIMO ELEMENTO 

// -------- DE REPETICION --------

// FILTER ES UN BUCLE
// ESTE EJERCICIO RECORRERA EL PRIMER PARAMETRO Y LUEGO HARA LA ACCION QUE LE PIDAMOS CON ESE ELEMENTO, LUEGO LO HARA CON EL SEGUNDO ELEMENTO HASTA FINALIZAR EL ARRAY
// ES COMO UNA FUNCION FLECHA, PORQUE FILTER RECIBE COMO PARAMETRO UNA FUNCION
let numeros = ["juan","maria","camilo","pedro","fulano"];

resultado = numeros.filter(numeros => document.write(numeros + `<br>`));

// OTRA FUNCION
// FILTER CREA OTRO ARRAY CON LOS ELEMENTOS QUE CUMPLAN LA CONDICION
nombres = ["cien","tres","ocho","dos","siete"];

resultado = nombres.filter(nombres => nombres.length > 3);

document.write(resultado);

// FOREACH ES COMO FILTER PERO FILTER TE PERMITE CREAR UNA CONDICION PARA QUE AQUEL QUE LA CUMPLA SEA AGRAGADO AL ARRAY Y AQUEL ELEMENTO QUE NO, NO SERA AGREGADO AL NUEVO ARRAY