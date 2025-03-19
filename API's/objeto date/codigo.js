// const fecha = new Date();

// este nos devuelve el dia del mes
// le podemos pasar parametros en milisegundos y nos devolvera la fecha desde 1970 sumando los milisegundos
// tambien recibe parametros de año, mes y dia
// console.log(fecha.getDate());

// este nos devuelve el dia de la semana
// nos devuelve un arreglo asi que trabaja con los indices
// console.log(fecha.getDay());

// este nos devuelve el mes
// este tambien trabaja con indices por lo que el primer mes sera 0
// console.log(fecha.getMonth());

// este nos devuelve el año
// pero devuelve el año menos 1900
// console.log(fecha.getYear()+1900);

// este nos devuelve la hora
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
// console.log(fecha.getMilliseconds());


// date es un constructor

"use strict";

const addZeros = n => {
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}


const actualizarHora = () => {
    const time = new Date();
    let hora = addZeros(time.getHours());;
    let minutos = addZeros(time.getMinutes());;
    let segundos = addZeros(time.getSeconds());;
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".minutos").textContent = minutos;
    document.querySelector(".segundos").textContent = segundos;
}

actualizarHora();

// set interval no se usa ya porque consume muchos recursos, se usan librerias pero es una posibilidad
setInterval(actualizarHora,1000);