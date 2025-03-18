"strict mode";

const suma = (frase,...num) => {
    let resultado = 0;
    for (let i = 0; i < num.length; i++){
        resultado += num[i];
    }
    console.log(`${frase} ${resultado}`);
}

suma("pedro",12,25,62,98);

// el parametro rest creara un array con los parametros que se le pasen a la funcion y el parametro si o si se tiene que poner adelante

// al usar el operador rest, se pueden pasar varios parametros a la funcion sin tener que definirlos en la funcion