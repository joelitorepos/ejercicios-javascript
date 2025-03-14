// VARIABLE QUE UTILIZAREMOS PARA LA CALCULADORA
let num1, num2, numeros;

// FUNCION PARA PEDIR NUMEROSS
const pedirNumeros = () => {
    num1 = parseFloat(prompt("porfavor ingrese un numero"));
    num2 = parseFloat(prompt("ingrese otro numero"));
    return [num1, num2];
}

// FUNCIONES DE OPERACIONES
const sumar = (num1, num2) => num1 + num2;

const restar = ([num1, num2]) => num1 - num2;

const multiplicar = ([num1, num2]) => num1 * num2;

const dividir = ([num1, num2]) => num2 !== 0 ? num1 / num2 : "error de sintaxis";

const potencia = (num1) => num1 ** 2;

const raizCuadrada = () => num1 => 0 ? Math.sqrt(num1) : "error de sintaxis";

const raizCubica = (num1) => Math.cbrt(num1);

respuesta = prompt("que operacion desea realizar? \nsuma \nresta \nmultiplicacion \n division \npotencia \nraiz cuadrada \nraiz cubica");

if (respuesta === "potencia" || respuesta === "raiz cuadrada" || respuesta === "raiz cubica"){
    num1 = parseFloat(prompt("porfavor ingrese un numero"));
}
else{numeros = pedirNumeros();}

switch(respuesta){
    case "suma":alert(sumar(numeros));break;
    case "resta":alert(restar(numeros));break;
    case "multiplicacion":alert(multiplicar(numeros));break;
    case "division":alert(dividir(numeros));break;
    case "potencia": alert(potencia(num1)); break;
    case "raiz cuadrada": alert(raizCuadrada(num1)); break;
    case "raiz cubica": alert(raizCubica(num1)); break;
    default:alert("operacion no valida");break;
}