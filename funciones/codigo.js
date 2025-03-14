// FUNCIONES
// TAMBIEN SE PUEDE GUARDAR EN UNA VARIABLE
// las funciones se llaman con el nombre function de funcion y se le asigna un nombre
// LO LLAMAMOS CON EL NOMBRE Y PARENTESIS ADELANTE

function saludar(){
    let respuesta = prompt("como ha ido tu dia?");

    if(respuesta == "bien") {alert("me alegro mucho");}
    else{alert("animo amigo, todo saldra bien");}
}

saludar();
saludar();

// SALUDAR ES IGUAL A UNA FUNCION Y SE LLAMA CON EL NOMBRE SALUDO
let saludo = function(){
    let saludo = prompt("saluda");
    // LA FUNCION NO NOS DEVUELVE NINGUN TIPO DE DOMMatrixReadOnly, POR DEFECTO ES UNDEFINED
    return "hola que tal, como anda todo";
}

document.write(saludo());

// FUNCION FLECHA
// si solo hay un parametro se puede usar sin parentesiskd
// y enves de function, se agrega una fleca con =>{}
// y si solo hay una linea de codigo se puede poner en la misma linea sin las llaves
// y automaticamente ya se esta retornando
// const saludar = () => {
    // }
const saludoFlecha = saludo => document.write("espero tengas un dia hermoso");

saludoFlecha();
