"use strict";

let valor1 = "valor1";
let valor2 = "valor2";
let valor3 = "valor3";

let arr = ["valor1","valor2","valor3"];

console.log(valor1,valor2,valor3);
console.log(...arr);

// el operador spread se usa para expandir un array en varios elementos

let arr1 = ["kiwi","pera","manzana"];
let arr2 = ["banana","naranja","sandia"];

// arr1.push(...arr2);
let arr3 = [...arr1,...arr2];

console.log(arr3);

// se pueden unir varios arrays en uno solo con el operador spread

const sumar = (num1,num2) => {
    console.log(num1+num2);
}

let array = [2,5];

sumar(...array);