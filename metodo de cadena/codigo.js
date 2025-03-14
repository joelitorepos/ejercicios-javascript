// -------- METODOS DE CADENA PARA BUSQUEDA Y DEVUELVA UN DATO --------
let cadena = "cadena de prueba cadena ";
let cadena2 = "cadena"

// CONCAT

let resultado = cadena.concat(cadena2 + `<br>`);

document.write(resultado);

// STARTSWHITH
// SI CADENA COMIENZA CON EL VALOR DE CADENA 2 ENTONCES EL RESULTADO ES TRUE, Y FALSE SI NO EMPIEZA

let starts = cadena.startsWith(cadena2);

document.write(starts + `<br>`);

// INCLUDES

let includes = cadena.includes(cadena2);

document.write(includes + `<br>`);

// INDEXOF
// EL FUNCIONAMIENTO ES EL MISMO QUE STARTWITH PERO DEVOLVOLVERA EL NUMERO EN DONDE SE ENCUENTRA LA CADENA (LA PRIMER LETRA)
// SI NO SE ENCUENTRA EN LA CADENA DEVOLVERA -1

includes = cadena.indexOf(cadena2);

document.write(includes + `<br>`);

// document.write(cadena[1] + `<br>`); ME MOSTRARA EL SEGUNDO CARACTER DEL STRING (EL QUE ESTA EN EL INDICE 1 COMO EN ARRAYS)

// SI EL CONTENIDO DE LA CADENA DOS SE ENCUENTRA REPETIDO EN LA VARIABLE CADENA NOS MOSTRARA DONDE ESTA EL PRIMER CARACTER DE LA ULTIMA REPETICION DE LA CADENA

includes = cadena.lastIndexOf(cadena2);

document.write(includes + `<br>`);

// -------- METODOS DE CADENA PARA RELLENAR Y REPETIR CADENA --------

// PADSTART
// SI LA CADENA TIENE 3 CARACTERES Y LE DECIMOS QUE RELLENE 6 CARACTERES CON J RELLENARA 3 CASILLAS CON J Y LAS OTRAS 3 QUE FALTAN SERAN LA CADENA
// RELLENARA LA CADENA AL PRINCIPIO
cadena = "a";

cadena2 = "";

resultado = cadena.padStart(6,"l");

document.write(resultado + `<br>`);
// PADEND ES LO MISMO PERO AL FINAL

// REPEAT
// REPETIRA LA CADENA DE TEXTO LAS VECES QUE LE DIGAMOS 
// SI LE PONEMOS UN NUMERO NEGATIVO SALDRA UN ERROR DE RANGO
cadena = "repeticion ";

resultado = cadena.repeat(3);

document.write(resultado + `<br>`);

// -------- METODOS DE CADENA PARA MODIFICAR LA CADENA --------

// SPLIT
// SEPARA LA CADENA COMO LE PIDAMOS Y LO CONVIERTE EN UN ARREGLO

cadena = "hola,como,estas";

resultado = cadena.split(",");

document.write(resultado[1] + `<br>`);

// SUBSTRING
// substring va con minusculas ya que es un solo nombre
// CREA UN NUEVO STRING A PARTIE DE LA CADENA, EMPEZARA Y FINALIZARA DESDE DONDE LE DIGAMOS
// QUERO QUE LA CADENA EMPIEZE EN TAL NUMERO Y EL CARACTER ESTA INCLUIDO
// QUIERO QUE TERMINE EN TAL CARACTER, PERO ESE CARACTER NO ESTA INCLUIDO
cadena = "hola,como,estas";

resultado = cadena.substring(0,10);

document.write(resultado + `<br>`);

// TOLOOWERCASE
// CONVERTIR A MINUSCULAS 

cadena = "HOLA COMO ESTAS";
resultado = cadena.toLocaleLowerCase();

document.write(resultado + `<br>`);

// TOUPPERCASE
// CONVERTIR A MAYUSCULAS

cadena = "hola como estas";
resultado = cadena.toUpperCase();

document.write(resultado + `<br>`);

// TOSTRING
// CONVERTIR A STRING ALGUN VALOR

cadena = 4321;
resultado = cadena.toString();

document.write(resultado + `<br>`);

// TRIM
// PARA SACAR LOS ESPACIOS " " A UNA CADENA
// TRIM START PARA ELIMINAR LOS ESPACIOS DEL PRINCIPIO 
// TRIM END PARA ELIMINAR LOS ESPACIOS DEL FINAL

cadena = "     hola     ";

resultado = cadena.trim();

document.write(resultado[0] + `<br>`);



