
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

const persona = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id] == undefined) reject("no se ha encontrado a la persona");
        else (resolve(personas[id]))
    })
}

const obtenerInstagram = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id].instagram == undefined) reject("no se ha encontrado el instagram");
        else (resolve(personas[id].instagram))
    })
}

obtenerPersona(id).then((persona)=>{
    console.log(persona,nombre);
    return obtenerInstagram(id);
}).then((instagram)=>{
    console.log(instagram)
}).catch((e)=>{
    console.log(e)
})