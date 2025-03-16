let string = "cadena de texto";
let Number = 10, variable = null;
// null es decir que el valor de la variable es vacio, nulo, nada
let Boolean = true;

// poner let antes de cada variable para que no sea global y solo sea en el bloque asignado
// const para variables constantes que no se pueden cambiar el valor, const antes del nombre de la variable: const nombre = "joel, declarar el valor de const en la misma linea que se inicia y el alcance es de bloque igual que let";
// undefined es que una variable no esta definida, se declaro el alcannce: let numero; pero no el valor

// OPERADORES DE ASIGNACION
// += suma; -= resta: *= multiplica, /= divide;
// %= residuo de la division de un numero por otro, let x = 10, x %= 3, eso significa que x = 1
// **= eleva a la potencia del numero que le asignemos, let x = 2, x **=3, x = 8
// <<= para desplazar el umero pero en binario, let x = 5, en binario es 0101, x <<= 1, en binario es 1010 por lo que el valor de x ahora es 10, >>= lo mismo pero para la derecha


alert("hola");
alert(variable);

nombre = prompt("escirbe tu nombre");
apellido = prompt("escribe tu apellido");
let nombrecompleto = nombre + " " + apellido;

alert("tu nombre completo es " + nombrecompleto);

document.write(nombrecompleto)

// let numero1 = 2, numero2 = 3;
// numero3 = numero1 + numero2; esto dara como resultado la suma osea numero3 = 5
// numero3 = " " + numero1 + numero2; el " " hace que los valores se conviertan a string o texto por lo que numero = 23
// nombre.concat(apellido) para usar concat debe haber minimo uno que sea tipo string
// una buena forma de concatenar una frase es con ${}
let completo = `tu nombre completo es ${nombre} ${apellido}`;
// para usar este tipo de concatenacion hay que usar estas comillas que estan en diagonal
// es recomendable usar `` y acostumbrarse a usarlo, backtic o algo asi
document.write(completo);
let frase = "esto es un texto con 'comillas' simples";
// para usar comillas dobles en un texto el texto debe ir adentro de comillas simples y vicebersa

// los operadores de comparadico como igualdad entre valores == o != diferencia tambien funciona con texto
// === tiene que comparar que sean iguales y que ademas sean el mismo tipo de dato y tambien con el !==
// los operadores logicos con booleano son && AND, || OR, | NOT
// let texto = valor1 && valor2
// let texto = valor1 || valor2
// let texto = |valor1

// cammellse la primera letra va en minuscula y las nuevas palabras en mayuscula al principio, asi se trabaja en javascript
// estoEsUnaNuevaVariable

// if (condicion) {bloque}
// else if (otra condicion) {otro boque de instrucciones}
// else {bloque}