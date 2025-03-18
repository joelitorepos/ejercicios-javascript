let edad = 17;

// if (edad >= 18) console.log("es mayor de edad");
// else console.log("es menor de edad");


(edad >= 18)
    ?
    (
        console.log("es mayor de edad"),
        console.log("no puede ingresar")
    )
    : console.log("es menor de edad");


// el operador ternario es una forma mas corta de escribir un if else el bloque de codigo en caso de que devuelva true es con parantesis enves de llaves y cada linea de codigo se separa con una coma
// se puede poner un operador ternario dentro de otro operador ternario

// const edad = 25;

// // Operador ternario anidado
// const mensaje = edad < 18 
//     ? "Eres menor de edad" 
//     : (edad < 65 
//         ? "Eres adulto" 
//         : "Eres adulto mayor");

// console.log(mensaje);