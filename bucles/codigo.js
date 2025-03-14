let numero = prompt("ingresa un numero menor a 100");

// WHILE

while (numero < 100) {
    if (numero < 18){document.write(`el numero ${numero} es menor a 18<br>`);}
    else if (numero == 18){document.write(`el numero ${numero} es igual a 18<br>`);}
    else {document.write(` el numero ${numero} es mayor a 18<br>`);}
    
    numero = prompt("ingresa un numero menor a 100");
}

// DO WHILE

numero = prompt("ingresa otro numero menor a 100");

do {
    if (numero < 100){
        document.write(`${numero}, `);
        numero++;
    }
    else if (numero > 100){document.write(`el numero ${numero} es mayor a 100<br><br>`);}
} while (numero < 100);

// BREAK

numero = prompt("ingresa otro numero, se le sumara 1 10 veces");

let numero2 = 1;

do {
    document.write(`${numero} `);
    numero++;
    
    if (numero2 == 10){
        break;
    }
    numero2 = numero2 + 1;
} while (numero < 1000);

// FOR

for(let i = 0; i <= 20; i++){
    // CONTINUE PARA QUE SE SALTE EL CICLO QUE LE DIJIMOS
    if (i == 17){continue;}
    document.write(i + `<br>`);
}

// FOR IN

let animales = ["gato","elefante","pez"];

// AMBOS RECORREN EL ARRAY
// FOR IN ACCEDE AL INDICE
for (animal in animales) {
    document.write(animal + "<br>");
}

// FOR OF ACCEDE AL CONTENIDO
for (animal of animales) {
    document.write(animal + "<br>");
}

arreglo1 = ["pato","conejo","perro","jirafa"];
arreglo2 = ["sandia","papa",arreglo1,"zanahoria"];

estoEsUnLabel:
for (let arreglo in arreglo2){
    if(arreglo == 2) {
        for (let arreglo of arreglo1){
            document.write(arreglo + `<br>`);
            break estoEsUnLabel;
        }
    }
    else{
        document.write(arreglo2[arreglo] + `<br>`);
    }
}
