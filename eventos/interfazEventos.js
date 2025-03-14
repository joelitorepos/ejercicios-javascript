// ES CUANDO SURGE UN ERROR EN LA CARGA DE ARCHIVOS MULTIMEDIA
// const img = document.querySelector(".imagen");

// img.addEventListener("error",
//     (e)=>{
//         console.log("ha suscedido un error");
//         }
// );

// PARA ACCEDER AL BODY hay que poner document.body
// // el elemento window nisiquiera es necesario ser llamado, window.addEventListener();
// addEventListener("load", 
//     (e)=>{
//     console.log("ha cargado el sitio");
//     }
// );

// beforeunload y unload son cuando te vas a ir del sitio y cuando ya te has ido del sitio
addEventListener("beforeunload", 
    (a)=>{
    console.log("te estas por ir del sitio");
    }
);

// rezise ocurre cuando cambia la resolucion de vista del documento

addEventListener("resize", 
    (b)=>{
    console.log("se ha actualizado la resolucion");
    }
);

// scroll ocurre cuando se scrollea el elemento

addEventListener("scrolll", 
    (c)=>{
    console.log("se ha scrolleado la pagina");
    }
);

// select es para los input y los textareas

const input = document.querySelector(".input-prueba");

const contenedor = document.querySelector(".seleccionado");

input.addEventListener("select", 
    (d)=>{
        let start = input.selectionStart;
        let end = input.selectionEnd;
        let textoCompleto = input.value;
        contenedor.textContent = textoCompleto.substring(start,end);
    }
);

input.addEventListener("keyup", 
    (d)=>{
        let tecla = d.key;
        contenedor.textContent = `la ultima tecla presionada fue: ${tecla}`;
    }
);














