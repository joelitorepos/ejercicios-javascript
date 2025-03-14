// click es para un click

// dblclick es para un doble click seguido, en windows es de 500 milisegundos para que se aplique el doble click

// mouseover es para cuanto el mouse esta encima del elemento

// mouseout este no es cuando el mouse esta encima si no cuando sale del elemento

// contextmenu este es para cuando se le da click derecho

// -------- CONTEXTUAL --------

// mouseenter cuando el puntero se mueve adentro de un elemento

// mousemove cuando el puntero se mueve mientras esta adentro de un elemento

// mouseleave no dejera de ejecutarse mientras se mueva el mouse y es cuando sale del elemento

// mousedown se ejecuta solamente con dar click, no hace falta que lo suelte 

// mouseup ocurre cuando el usuario suelta un boton del mouse sobre el elemento

// -------- EVENTOS DE TECLADO --------

const contenedor = document.querySelector(".contenedor");
const input = document.querySelector(".input-prueba");

input.addEventListener("keydown",
    (e)=>{
        console.log("una tecla fue presionada");
        }
);

input.addEventListener("keypress",
    (e)=>{
        console.log("un usuario presiono una tecla y la solto");
        }
);

input.addEventListener("keyup",
    (e)=>{
        console.log("una tecla fue soltada");
        }
);


