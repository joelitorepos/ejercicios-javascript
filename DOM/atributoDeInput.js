const input = document.querySelector(".input-normal");

document.write(input.className + "<br>");

document.write(input.value + "<br>");

input.type = "text";

// accept se le puede dar a los input type file
// input.accept = "image/png"; 

input.minLength = 5;

input.placeholder = "todo bien?";

// para que este input deba completarse para que se pueda enviar toda la informacion o campo requerido
input.required = "true";

