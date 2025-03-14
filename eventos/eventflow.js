const boton = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");

boton.addEventListener("click",
    (e)=>{
        alert("le di click al boton");
        e.stopPropagation();
        }
, true);

contenedor.addEventListener("click",
    (e)=>{
        alert("le di click al contenedor");
    }
);

// LOS HIJOS SON MAS ESPECIFICOS, LOS MAS ESPECIFICOS SE EJECUTARAN PRIMERO

// PARA CAMBIAR EL ORDEN SHAY QUE PONER COMO ULTIMO PARAMETRO TRUE