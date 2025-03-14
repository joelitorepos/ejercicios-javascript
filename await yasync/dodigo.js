const obtenerInformacion = (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200)
    })
}

// obtenerInformacion("1: cara").then(resultado => console,log(resultado))

// obtenerInformacion("2: salida").then(resultado => console,log(resultado))

// obtenerInformacion("3: comida").then(resultado => console,log(resultado))

const mostrarData = async (){
    
    data1 = await obtenerInformacion("1: cara");
    data2 = await obtenerInformacion("2: salida");
    data3 = await obtenerInformacion("3: comida");
    console.log(data1);
    console.log(data2);
    console.log(data3);
}

mostrarData()