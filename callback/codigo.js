
function prueba(callback){
    callback("pedro");
}

// function decirNombre(nombre){
//     console.log(nombre)
// }

// prueba(decirNombre);

// OTRA FORMA DE HACER EL CALLBACK
// prueba(function decirNombre(nombre){
//     console.log(nombre);
// }
// )

// // se puede incluso sacar el nombre
// prueba(function (nombre){
//     console.log(nombre);
// }
// )

// // como funcion flecha
// prueba((nombre)=>{
//     console.log(nombre);
// }
// )

// como funcion flecha mas resumida
prueba(nombre => console.log(nombre))

// CODIGO EJEMPLO

class Persona {
    constructor(nombre,instagram){
        this.nombre = nombre
        this.instagram = instagram
    }
};

const data = [
    ["joelito","@joelito"],
    ["maria","@maria"],
    ["jose","@jose"],
    ["julian","@julian"],
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id,cb)=>{
    if (personas[id] == undefined){
        cb("no se ha encontrado la persona");
    } else{
        cb(null,personas[id])
    }
}

const obtenerInstagram = (id,cb)=>{
    if (personas[id] == undefined){
        cb("no se ha encontrado el instagram");
    } else{
        cb(null,personas[id].instagram)
    }
}

obtenerPersona(3,(err,persona,id)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(persona.nombre);
        obtenerInstagram(id,(err,persona)=>{
            if (err) {
                console.log(err);
            }else {console.log(instagram);
        }
        })
    }
})


