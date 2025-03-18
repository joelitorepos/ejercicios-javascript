"strict mode";

// esta es una forma de darle valores por defecto a los parametros de una funcion
// const suma = (a, b) => {
//     b = b || 0;
//     console-log(a+b);
// }

// esta es la forma antigua o clasica de poner parametros por defecto
const suma = (a, b) => {
    b = typeof b !== 'undefined' ? b : 0;
    console-log(a+b);
}

suma(10);

// al no darle segundo parametro a la funcion, el valor de b es undefined, por lo que la suma da NaN

// lo que se suele hacer es darle un valor por defecto a los parametros de la funcion
// const suma = (a = 0, b = 0) => {
//     console-log(a+b);
// }