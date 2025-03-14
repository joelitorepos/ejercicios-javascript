// TRY Y CATCH
// PODEMOS HACER CUALQUIER COSA CON EL ERROR

// en caso de que no haya ocurrido ningun error ejecutara try, de lo contrario ejecutara lo que hay en catch
// los errores de sintaxis aun se mostraran como error
try{
    ahsodilsanc
    // throw es para hacer una excepcion y lanzar un error, funciona afuera y dentro de try
    // tambien le podemos poner un array y muchas cosas mas
    throw{
        error: "nombreDelError",
        info: "informacionDelError"
    }
}

catch(error){
    console.log("ocurrio un error de referencia");
}

// finally se ejecutara siempre aunque no haya un error, tiene prioridad, puede sobrescribir un return
finally{
    console.log("me mostrare pase lo que pase");
}
// try no hay que usarlo cuando sabes que habra un error, hay que intentar depurar el codigo, pero si el programa es muy grande y existe la probabilidad de que haya un error se puede usar try sin abusar de esta herramienta