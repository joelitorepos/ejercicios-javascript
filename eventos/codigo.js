const button = document.querySelector(".button");

// ESTO NO SE PUEDE TRABAJAR CON FUNCIONES FLECHA
// TAMPOCO ACEPTA PARAMETRORS ADENTRO DE LA FUNCION
button.addEventListener("click", saludar);

function saludar() {
    alert("hola");
    button.removeEventListener("click", saludar);
}

// FUNCIONES FLECHA CON EVENTOS
button.addEventListener("click",
    (e)=>{
        console.log(e.target);
    }
);
