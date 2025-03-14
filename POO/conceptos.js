// CLASE

class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `soy un ${especie}, tengo ${edad} años de edad, mi color es ${color}`;
    }
    verInfo(){
        document.write(this.informacion + `<br>`);
    }
    ladrar(){
        if(this.especie == "perro") {
            document.write("wow! <br>");
        }
        else{
            document.write("no puede ya que es un " + this.especie + "<br>");
        }
    }
}

// NO PUEDO TENER UN OBJETO CON EL MISMO NOMBRE QUE LA CLASE POR LO QUE 'perro' HARA QUE SALTE UN ERROR
class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    // EL METODO ESTATICO NO NECESITA DE QUE UNA CLASE ESTE DEFINIDA PARA PODER FUNCIONAR
    static ladrido(){
        alert("WAW!");
    }
    // SETTER
    // ESTE SE COMPORTA COMO SI FUERA UNA PROPIEDAD
    set setRaza(newName){
        this.raza = newName;
    }
    // GETTER
    // UN GETTER ES PARA OBTENEER INFORMACIION
    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro("perro","4","amarillo","husky");
const gato = new Animal("gato","2","verde");
const pajaro = new Animal("pajaro","1","azul");

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

perro.ladrar();
gato.ladrar();
pajaro.ladrar();

perro.setRaza = "doberman";
document.write(perro.raza);

document.write(perro.getRaza);