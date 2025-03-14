// CLASE

class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy un ${especie}, tengo ${edad} años de edad, mi color es ${color}`;
    }
    // NO SE PUEDE USAR CONST ADENTRO DE UNA CLASE POR LO QUE LAS FUNCIONES FLECHA TAMPOCO SE PUEDEN USAR COMO METODOS
    verInfo(){
        document.write(this.informacion + `<br>`);
    }
    // EL THIS FUNCIONA ADENTRO DEL BLOQUE
}

const perro = new animal("perro","4","amarillo");
const gato = new animal("gato","2","verde");
const pajaro = new animal("pajaro","1","azul");

// AFUERA DEL BLOQUE NO SE UTILIZA THIS SI NO EL NOMBRE DEL OBJETO
// document.write(perro.informacion + `<br>`);
// document.write(gato.informacion + `<br>`);
// document.write(pajaro.informacion + `<br>`);
perro.verInfo();
gato.verInfo();
pajaro.verInfo();