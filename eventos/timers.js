// setTimeout() recibe como primer parametro una funcion, el segundo parametro es em cuanto tiempo quiere que se ejecute en milisegundos, para hacer que no se ejectute hay que primero asignarlo a una variable y usar clearTimeout
const temporizador = setTimeout(
    ()=>{
        document.write("hola");
    }
    ,2000
)

clearTimeout(temporizador); 

// para ejecutar una funcion constantemente se utiliza setInterval();
// para que se deje de ejecutar hay que asignarlo a una variable y usar clearInterval();
const intervalo = setInterval(
    ()=>{
        document.write("hola");
    }
    ,2000
)

// como segundo parametro recibe tiempo en milisegundos, que sera el tiempo en el que el intervalo ya no se ejecutara mas
clearInterval(intervalo);





