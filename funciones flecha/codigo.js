const saludar = () => nombre = "pedro";

resultado = saludar();

console.log(resultado);

// cuando solo es una linea de codigo las funciones flechas nos retornaran una expresion, si creamos el cuerpo con llaves la funcion devolvera undefined

// sin parametros se requiere parentesis, si solo es un parametro no se requiere parentesis

const objeto = {
    nombre: "pedro",
    saludar : function(){HTMLFormControlsCollection.log(`hola ${this.nombre}`)}
}

objeto.saludar();

// no se recomienda usar funciones flechas en metodos de objetos, ya que no se puede acceder al objeto con this

// como constructor tampoco se recomienda usar funciones flechas