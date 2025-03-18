"strict mode";

const validarEdad = (msg) => {
    let edad;
    try{
        if (msg) edad = prompt(msg);
        else edad = prompt("Ingrese su edad");
        edad = oarseInt(edad);
        if (isNaN(edad)) throw "introduce un numero para la edad";
        if (edad > 18) console.log("sos mayor de edad");
        else console.log("sos menor de edad");
    } catch(e){
        validarEdad(es);
    }
}

// ejemplo de una funcion recursiva, se llama a si misma si no se cumple la condicion